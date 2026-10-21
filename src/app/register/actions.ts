"use server";

import { Prisma } from "@prisma/client";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { hashPassword } from "@/lib/auth";

const isValidEmail = (value: string) =>
  value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const passwordMeetsRules = (password: string) =>
  password.length >= 12 &&
  password.length <= 1024 &&
  /[a-z]/.test(password) &&
  /[A-Z]/.test(password) &&
  /\d/.test(password) &&
  /[^A-Za-z0-9]/.test(password);

export async function registerAction(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  const confirmation = String(formData.get("confirmPassword") ?? "");

  if (name.length < 2 || name.length > 100 || !isValidEmail(email)) {
    redirect("/register?error=details");
  }
  if (!passwordMeetsRules(password)) {
    redirect("/register?error=password");
  }
  if (password !== confirmation) {
    redirect("/register?error=match");
  }

  try {
    // Public registration always creates a least-privileged learner account.
    // Never accept a role or permissions from client-submitted form data.
    await db.user.create({
      data: {
        name,
        email,
        passwordHash: await hashPassword(password),
        role: "STUDENT",
      },
      select: { id: true },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
      redirect("/register?error=exists");
    }
    throw error;
  }

  redirect("/login?registered=1");
}
