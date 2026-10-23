"use server";

import { PaymentStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireRole } from "@/lib/auth";
import { db } from "@/lib/db";

function read(formData: FormData, key: string, max = 1000) {
  return String(formData.get(key) ?? "").trim().slice(0, max);
}

export async function reviewPaymentAction(formData: FormData) {
  const admin = await requireRole(["ADMIN"]);
  const paymentId = read(formData, "paymentId", 100);
  const decision = read(formData, "decision", 20);
  const notes = read(formData, "notes", 2000);
  if (!paymentId || !["CONFIRM", "REJECT"].includes(decision)) redirect("/lms/admin/payments?error=invalid");
  if (decision === "REJECT" && notes.length < 5) redirect("/lms/admin/payments?error=reasonRequired");

  try {
    await db.$transaction(async (tx) => {
      const payment = await tx.payment.findUnique({ where: { id: paymentId }, include: { course: { select: { mode: true } } } });
      if (!payment || payment.status !== PaymentStatus.UNDER_REVIEW || !payment.evidencePath) throw new Error("NOT_REVIEWABLE");
      if (decision === "CONFIRM") {
        // Provider references are not globally unique across providers, so compare provider + reference.
        const reused = await tx.payment.findFirst({ where: { id: { not: payment.id }, provider: payment.provider, providerRef: payment.providerRef, status: PaymentStatus.SUCCESS }, select: { id: true } });
        if (reused) throw new Error("DUPLICATE_CONFIRMED_REFERENCE");
        const existingEnrollment = await tx.enrollment.findFirst({ where: { userId: payment.userId, courseId: payment.courseId, status: { in: ["ACTIVE", "COMPLETED"] } }, select: { id: true } });
        if (!existingEnrollment) {
          await tx.enrollment.create({ data: { userId: payment.userId, courseId: payment.courseId, mode: payment.course.mode, status: "ACTIVE" } });
        }
      }
      const nextStatus = decision === "CONFIRM" ? PaymentStatus.SUCCESS : PaymentStatus.REJECTED;
      const changed = await tx.payment.updateMany({ where: { id: payment.id, status: PaymentStatus.UNDER_REVIEW }, data: { status: nextStatus, reviewedAt: new Date(), reviewedById: admin.id, reviewNotes: notes || null } });
      if (changed.count !== 1) throw new Error("ALREADY_REVIEWED");
      await tx.paymentReview.create({ data: { paymentId: payment.id, reviewerId: admin.id, decision: decision === "CONFIRM" ? "CONFIRMED" : "REJECTED", notes: notes || null } });
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "UNKNOWN";
    console.error("Payment review failed", message);
    redirect(`/lms/admin/payments?error=${encodeURIComponent(message === "NOT_REVIEWABLE" ? "notReviewable" : message === "DUPLICATE_CONFIRMED_REFERENCE" ? "duplicateConfirmed" : "reviewFailed")}`);
  }
  revalidatePath("/lms/admin/payments");
  revalidatePath("/lms/admin/dashboard");
  revalidatePath("/lms/dashboard");
  redirect("/lms/admin/payments?reviewed=1");
}
