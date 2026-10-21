"use server";

import { Prisma } from "@prisma/client";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { hashPassword } from "@/lib/auth";

export async function registerAction(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  const confirmation = String(formData.get("confirmPassword") ?? "");

  if (name.length < 2 || name.length > 100 || !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email) || email.length > 254) {
    redirect("/register?error=details");
  }
  if (password.length < 12 || password.length > 1024 || password !== confirmation) {
    redirect(password !== confirmation ? "/register?error=match" : "/register?error=password");
  }

  try {
    // Public signup always creates the least-privileged learner account.
    // Never accept role/permissions from client-submitted form data.
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
