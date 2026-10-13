"use server";

import { redirect } from "next/navigation";
import { signInWithPassword, signOut } from "@/lib/auth";

export async function loginAction(formData: FormData) {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  const ok = await signInWithPassword(email, password);
  if (!ok) redirect("/login?error=invalid");
  redirect("/lms/dashboard");
}

export async function logoutAction() {
  await signOut();
  redirect("/login");
}
