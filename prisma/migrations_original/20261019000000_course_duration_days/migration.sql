-- Additive migration: preserves existing course, cohort, enrollment, and payment records.
ALTER TABLE "Course" ADD COLUMN "durationDays" INTEGER;
