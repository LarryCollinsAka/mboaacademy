
-- 1. Add missing enum values and types.
CREATE TYPE "CohortStatus" AS ENUM (
  'PLANNED',
  'ENROLLING',
  'IN_PROGRESS',
  'COMPLETED',
  'CANCELLED'
);

ALTER TYPE "Role" ADD VALUE 'TRAINER';

-- 2. Update Course.
ALTER TABLE "Course"
  ADD COLUMN "category" TEXT NOT NULL DEFAULT 'Value-Creating Skills',
  ADD COLUMN "durationDays" INTEGER;

-- 3. Add enrollment cohort and exception fields.
ALTER TABLE "Enrollment"
  ADD COLUMN "cohortId" TEXT,
  ADD COLUMN "exceptionApprovedAt" TIMESTAMP(3),
  ADD COLUMN "exceptionApprovedById" TEXT,
  ADD COLUMN "exceptionReason" TEXT,
  ADD COLUMN "isException" BOOLEAN NOT NULL DEFAULT false;

-- 4. Update User for authentication and nullable email.
ALTER TABLE "User"
  ADD COLUMN "emailVerified" TIMESTAMP(3),
  ADD COLUMN "image" TEXT,
  ADD COLUMN "passwordHash" TEXT,
  ALTER COLUMN "email" DROP NOT NULL;

-- 5. Create Cohort.
CREATE TABLE "Cohort" (
  "id" TEXT NOT NULL,
  "courseId" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "code" TEXT NOT NULL,
  "startsAt" TIMESTAMP(3) NOT NULL,
  "endsAt" TIMESTAMP(3) NOT NULL,
  "timezone" TEXT NOT NULL DEFAULT 'Africa/Douala',
  "mode" "LearningMode" NOT NULL,
  "status" "CohortStatus" NOT NULL DEFAULT 'PLANNED',
  "enrollmentOpensAt" TIMESTAMP(3),
  "enrollmentClosesAt" TIMESTAMP(3),
  "weeklyLearningHours" DOUBLE PRECISION,
  "scheduleNotes" TEXT,
  "capacity" INTEGER,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Cohort_pkey" PRIMARY KEY ("id")
);

-- 6. Create Auth.js tables.
CREATE TABLE "Account" (
  "userId" TEXT NOT NULL,
  "type" TEXT NOT NULL,
  "provider" TEXT NOT NULL,
  "providerAccountId" TEXT NOT NULL,
  "refresh_token" TEXT,
  "access_token" TEXT,
  "expires_at" INTEGER,
  "token_type" TEXT,
  "scope" TEXT,
  "id_token" TEXT,
  "session_state" TEXT,
  "oauth_token_secret" TEXT,
  "oauth_token" TEXT,
  CONSTRAINT "Account_pkey" PRIMARY KEY ("provider", "providerAccountId")
);

CREATE TABLE "Session" (
  "sessionToken" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "expires" TIMESTAMP(3) NOT NULL
);

CREATE TABLE "VerificationToken" (
  "identifier" TEXT NOT NULL,
  "token" TEXT NOT NULL,
  "expires" TIMESTAMP(3) NOT NULL
);

CREATE TABLE "_CohortTrainers" (
  "A" TEXT NOT NULL,
  "B" TEXT NOT NULL,
  CONSTRAINT "_CohortTrainers_AB_pkey" PRIMARY KEY ("A", "B")
);

-- 7. Remove the old enrollment uniqueness rule.
DROP INDEX IF EXISTS "Enrollment_userId_courseId_key";
DROP INDEX IF EXISTS "Enrollment_userId_courseId_cohortId_key";

-- 8. Add indexes.
CREATE UNIQUE INDEX "Cohort_code_key" ON "Cohort"("code");
CREATE INDEX "Cohort_courseId_startsAt_endsAt_idx"
  ON "Cohort"("courseId", "startsAt", "endsAt");
CREATE INDEX "Cohort_status_startsAt_idx"
  ON "Cohort"("status", "startsAt");

CREATE INDEX "Account_userId_idx" ON "Account"("userId");
CREATE UNIQUE INDEX "Session_sessionToken_key"
  ON "Session"("sessionToken");
CREATE INDEX "Session_userId_idx" ON "Session"("userId");
CREATE UNIQUE INDEX "VerificationToken_token_key"
  ON "VerificationToken"("token");
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key"
  ON "VerificationToken"("identifier", "token");

CREATE INDEX "_CohortTrainers_B_index" ON "_CohortTrainers"("B");

CREATE INDEX "Enrollment_cohortId_status_idx"
  ON "Enrollment"("cohortId", "status");
CREATE INDEX "Enrollment_userId_courseId_cohortId_idx"
  ON "Enrollment"("userId", "courseId", "cohortId");
CREATE INDEX "Enrollment_exceptionApprovedById_idx"
  ON "Enrollment"("exceptionApprovedById");

-- 9. Ordinary enrollments: one per student/course/cohort.
CREATE UNIQUE INDEX "Enrollment_one_normal_per_cohort"
  ON "Enrollment" ("userId", "courseId", "cohortId")
  WHERE "cohortId" IS NOT NULL AND "isException" = false;

-- Only one ordinary cohortless enrollment per student/course.
CREATE UNIQUE INDEX "Enrollment_one_normal_without_cohort"
  ON "Enrollment" ("userId", "courseId")
  WHERE "cohortId" IS NULL AND "isException" = false;

-- 10. Require complete metadata for exceptions.
ALTER TABLE "Enrollment"
  ADD CONSTRAINT "Enrollment_exception_metadata_check"
  CHECK (
    (
      "isException" = false
      AND "exceptionReason" IS NULL
      AND "exceptionApprovedAt" IS NULL
      AND "exceptionApprovedById" IS NULL
    )
    OR
    (
      "isException" = true
      AND "exceptionReason" IS NOT NULL
      AND length(trim("exceptionReason")) > 0
      AND "exceptionApprovedAt" IS NOT NULL
      AND "exceptionApprovedById" IS NOT NULL
    )
  );

-- 11. Add foreign keys.
ALTER TABLE "Cohort"
  ADD CONSTRAINT "Cohort_courseId_fkey"
  FOREIGN KEY ("courseId") REFERENCES "Course"("id")
  ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "Enrollment"
  ADD CONSTRAINT "Enrollment_cohortId_fkey"
  FOREIGN KEY ("cohortId") REFERENCES "Cohort"("id")
  ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "Enrollment"
  ADD CONSTRAINT "Enrollment_exceptionApprovedById_fkey"
  FOREIGN KEY ("exceptionApprovedById") REFERENCES "User"("id")
  ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "Account"
  ADD CONSTRAINT "Account_userId_fkey"
  FOREIGN KEY ("userId") REFERENCES "User"("id")
  ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "Session"
  ADD CONSTRAINT "Session_userId_fkey"
  FOREIGN KEY ("userId") REFERENCES "User"("id")
  ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "_CohortTrainers"
  ADD CONSTRAINT "_CohortTrainers_A_fkey"
  FOREIGN KEY ("A") REFERENCES "Cohort"("id")
  ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "_CohortTrainers"
  ADD CONSTRAINT "_CohortTrainers_B_fkey"
  FOREIGN KEY ("B") REFERENCES "User"("id")
  ON DELETE CASCADE ON UPDATE CASCADE;
