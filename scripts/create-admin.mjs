import { PrismaClient } from '@prisma/client';
import { randomBytes, scryptSync } from 'node:crypto';

const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
const password = process.env.ADMIN_PASSWORD;
if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  console.error('Set ADMIN_EMAIL to a valid email address.');
  process.exit(1);
}
if (!password || password.length < 14 || password.length > 1024) {
  console.error('Set ADMIN_PASSWORD to a unique password of at least 14 characters (max 1024).');
  process.exit(1);
}
const salt = randomBytes(16).toString('hex');
const hash = scryptSync(password, salt, 64).toString('hex');
const passwordHash = `scrypt$${salt}$${hash}`;
const prisma = new PrismaClient();
try {
  const existing = await prisma.user.findUnique({ where: { email }, select: { id: true, role: true } });
  if (existing) {
    console.error(`A user with ${email} already exists. This script does not modify existing users or roles.`);
    process.exitCode = 2;
  } else {
    await prisma.user.create({ data: { email, name: 'HCIL Academy Administrator', passwordHash, role: 'ADMIN' } });
    console.log(`Created administrator account for ${email}. Remove ADMIN_EMAIL and ADMIN_PASSWORD from your shell after use.`);
  }
} finally {
  await prisma.$disconnect();
}
