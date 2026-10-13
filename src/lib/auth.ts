import "server-only";
import { cookies } from "next/headers";
import { createHash, randomBytes, scrypt as scryptCallback, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import type { Role, User } from "@prisma/client";

const scrypt = promisify(scryptCallback);
const SESSION_COOKIE = "hcil_session";
const SESSION_DAYS = 7;

export type SafeUser = Pick<User, "id" | "email" | "name" | "role">;

export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16).toString("hex");
  const derived = (await scrypt(password, salt, 64)) as Buffer;
  return `scrypt$${salt}$${derived.toString("hex")}`;
}

async function verifyPassword(password: string, stored: string): Promise<boolean> {
  const [scheme, salt, hash] = stored.split("$");
  if (scheme !== "scrypt" || !salt || !hash) return false;
  const expected = Buffer.from(hash, "hex");
  const actual = (await scrypt(password, salt, expected.length)) as Buffer;
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

export async function signInWithPassword(emailInput: string, password: string) {
  const email = emailInput.trim().toLowerCase();
  if (!email || !password || password.length > 1024) return false;
  const user = await db.user.findUnique({ where: { email } });
  if (!user?.passwordHash || !(await verifyPassword(password, user.passwordHash))) return false;

  const token = randomBytes(32).toString("base64url");
  const expires = new Date(Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000);
  await db.session.create({ data: { sessionToken: token, userId: user.id, expires } });
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires,
  });
  return true;
}

export async function getCurrentUser(): Promise<SafeUser | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token || token.length > 128) return null;
  const session = await db.session.findUnique({
    where: { sessionToken: token },
    include: { user: { select: { id: true, email: true, name: true, role: true } } },
  });
  if (!session) return null;
  if (session.expires <= new Date()) {
    await db.session.delete({ where: { sessionToken: token } }).catch(() => undefined);
    return null;
  }
  return session.user;
}

export async function requireUser(): Promise<SafeUser> {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  return user;
}

export async function requireRole(allowed: Role[]): Promise<SafeUser> {
  const user = await requireUser();
  if (!allowed.includes(user.role)) redirect("/lms/dashboard");
  return user;
}

export async function signOut() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (token) await db.session.deleteMany({ where: { sessionToken: token } });
  cookieStore.delete(SESSION_COOKIE);
}

// Constant-time comparison helper for any future one-time admin bootstrap token.
export function constantTimeTokenMatch(provided: string, expected: string) {
  const a = createHash("sha256").update(provided).digest();
  const b = createHash("sha256").update(expected).digest();
  return timingSafeEqual(a, b);
}
