"use server";

import { randomBytes } from "node:crypto";
import { PaymentStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { storePaymentEvidence } from "@/lib/payment-evidence-storage";

export async function submitMobileMoneyPayment(formData: FormData) {
  const user = await requireUser();
  if (user.role !== "STUDENT") redirect("/lms/dashboard?paymentError=learnerOnly");

  const courseId = String(formData.get("courseId") ?? "").trim();
  const provider = String(formData.get("provider") ?? "").trim();
  const senderPhone = String(formData.get("senderPhone") ?? "").trim();
  const providerRef = String(formData.get("providerRef") ?? "").trim().slice(0, 120);
  const file = formData.get("evidence");
  if (!courseId || !["MOMO", "ORANGE_MONEY"].includes(provider) || !/^\+?[0-9 ()-]{7,24}$/.test(senderPhone) || !(file instanceof File)) {
    redirect("/lms/payments/new?error=validation");
  }
  if (!providerRef || providerRef.length < 3) redirect("/lms/payments/new?error=validation");

  const course = await db.course.findFirst({ where: { id: courseId, published: true }, include: { coursePrices: { where: { isActive: true }, orderBy: { updatedAt: "desc" } } } });
  if (!course) redirect("/lms/payments/new?error=course");
  const price = course.coursePrices.find((p) => p.currency === course.currency) ?? course.coursePrices[0];
  const amount = price ? Number(price.amount) : course.price;
  const currency = price?.currency ?? course.currency;
  if (!Number.isFinite(amount) || amount <= 0) redirect("/lms/payments/new?error=price");

  // Do not create duplicate payments for an already-enrolled learner/course.
  const alreadyEnrolled = await db.enrollment.findFirst({ where: { userId: user.id, courseId, status: { in: ["ACTIVE", "COMPLETED"] } }, select: { id: true } });
  if (alreadyEnrolled) redirect("/lms/dashboard?paymentError=alreadyEnrolled");
  const duplicateRef = await db.payment.findFirst({ where: { provider, providerRef }, select: { id: true } });
  if (duplicateRef) redirect("/lms/payments/new?error=duplicateReference");

  const paymentReference = `HCIL-${randomBytes(5).toString("hex").toUpperCase()}`;
  const payment = await db.payment.create({ data: {
    userId: user.id, courseId, amount, currency, provider, providerRef,
    coursePriceId: price?.id, status: PaymentStatus.PENDING, paymentReference,
    senderPhone, submittedAt: new Date(),
  } });

  try {
    const evidencePath = await storePaymentEvidence(file, payment.id);
    await db.payment.update({ where: { id: payment.id }, data: { evidencePath, status: PaymentStatus.UNDER_REVIEW } });
  } catch (error) {
    console.error("Payment evidence upload failed", error);
    redirect(`/lms/payments/new?error=upload&reference=${encodeURIComponent(paymentReference)}`);
  }
  revalidatePath("/lms/dashboard");
  revalidatePath("/lms/admin/payments");
  redirect(`/lms/dashboard?paymentSubmitted=${encodeURIComponent(paymentReference)}`);
}
