"use server";

import { LearningMode } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireRole } from "@/lib/auth";
import { db } from "@/lib/db";

function field(formData: FormData, name: string, max = 5000) {
  return String(formData.get(name) ?? "").trim().slice(0, max);
}

export async function createCourseAction(formData: FormData) {
  await requireRole(["ADMIN"]);
  const title = field(formData, "title", 160);
  const headline = field(formData, "headline", 240);
  const description = field(formData, "description", 5000);
  const category = field(formData, "category", 100) || "Value-Creating Skills";
  const level = field(formData, "level", 40) || "Beginner";
  const currency = (field(formData, "currency", 3) || "USD").toUpperCase();
  const modeRaw = field(formData, "mode", 20);
  const price = Number(field(formData, "price", 20) || "0");
  const durationHours = Number(field(formData, "durationHours", 10) || "1");
  const skills = field(formData, "skills", 1000).split(",").map((item) => item.trim()).filter(Boolean).slice(0, 30);
  if (title.length < 3 || headline.length < 3 || description.length < 10) redirect("/lms/admin/courses?error=validation");
  if (!Number.isFinite(price) || price < 0 || price > 10000000 || !Number.isInteger(durationHours) || durationHours < 1 || durationHours > 10000) redirect("/lms/admin/courses?error=validation");
  if (!/^[A-Z]{3}$/.test(currency)) redirect("/lms/admin/courses?error=validation");
  if (!Object.values(LearningMode).includes(modeRaw as LearningMode)) redirect("/lms/admin/courses?error=validation");

  const baseSlug = title.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 100) || "course";
  let slug = baseSlug;
  for (let suffix = 2; await db.course.findUnique({ where: { slug }, select: { id: true } }); suffix++) {
    slug = `${baseSlug}-${suffix}`;
  }
  await db.course.create({
    data: {
      title, slug, headline, description, category, level, currency,
      price, durationHours, mode: modeRaw as LearningMode, skills, published: false,
    },
  });
  revalidatePath("/lms/admin/courses");
  revalidatePath("/courses");
  redirect("/lms/admin/courses?created=1");
}

export async function setCoursePublishedAction(formData: FormData) {
  await requireRole(["ADMIN"]);
  const id = field(formData, "courseId", 100);
  const published = field(formData, "published", 5) === "true";
  if (!id) redirect("/lms/admin/courses?error=validation");
  await db.course.update({ where: { id }, data: { published } });
  revalidatePath("/lms/admin/courses");
  revalidatePath("/courses");
  redirect("/lms/admin/courses?updated=1");
}
