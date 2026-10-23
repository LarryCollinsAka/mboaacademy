-- Forward-only additive migration. Preserves existing payment and enrollment records.
ALTER TYPE "PaymentStatus" ADD VALUE IF NOT EXISTS 'UNDER_REVIEW';
ALTER TYPE "PaymentStatus" ADD VALUE IF NOT EXISTS 'REJECTED';
ALTER TYPE "PaymentStatus" ADD VALUE IF NOT EXISTS 'EXPIRED';
ALTER TYPE "PaymentStatus" ADD VALUE IF NOT EXISTS 'REFUND_PENDING';
ALTER TYPE "PaymentStatus" ADD VALUE IF NOT EXISTS 'REFUNDED';

ALTER TABLE "Payment"
  ADD COLUMN "paymentReference" TEXT,
  ADD COLUMN "senderPhone" TEXT,
  ADD COLUMN "evidencePath" TEXT,
  ADD COLUMN "submittedAt" TIMESTAMP(3),
  ADD COLUMN "reviewedAt" TIMESTAMP(3),
  ADD COLUMN "reviewedById" TEXT,
  ADD COLUMN "reviewNotes" TEXT;

CREATE UNIQUE INDEX "Payment_paymentReference_key" ON "Payment"("paymentReference");
CREATE INDEX "Payment_status_createdAt_idx" ON "Payment"("status", "createdAt");
CREATE INDEX "Payment_reviewedById_idx" ON "Payment"("reviewedById");
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_reviewedById_fkey"
  FOREIGN KEY ("reviewedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

CREATE TABLE "PaymentReview" (
  "id" TEXT NOT NULL,
  "paymentId" TEXT NOT NULL,
  "reviewerId" TEXT NOT NULL,
  "decision" TEXT NOT NULL,
  "notes" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "PaymentReview_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "PaymentReview_paymentId_createdAt_idx" ON "PaymentReview"("paymentId", "createdAt");
CREATE INDEX "PaymentReview_reviewerId_createdAt_idx" ON "PaymentReview"("reviewerId", "createdAt");
ALTER TABLE "PaymentReview" ADD CONSTRAINT "PaymentReview_paymentId_fkey"
  FOREIGN KEY ("paymentId") REFERENCES "Payment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "PaymentReview" ADD CONSTRAINT "PaymentReview_reviewerId_fkey"
  FOREIGN KEY ("reviewerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
