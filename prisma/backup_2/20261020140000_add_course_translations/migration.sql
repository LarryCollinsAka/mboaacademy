-- CreateTable
CREATE TABLE "CourseTranslation" (
    "id" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "headline" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CourseTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CourseTranslation_courseId_locale_key"
ON "CourseTranslation"("courseId", "locale");

-- CreateIndex
CREATE INDEX "CourseTranslation_locale_idx"
ON "CourseTranslation"("locale");

-- AddForeignKey
ALTER TABLE "CourseTranslation"
ADD CONSTRAINT "CourseTranslation_courseId_fkey"
FOREIGN KEY ("courseId") REFERENCES "Course"("id")
ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseTranslation"
ADD CONSTRAINT "CourseTranslation_locale_fkey"
FOREIGN KEY ("locale") REFERENCES "Language"("code")
ON DELETE CASCADE ON UPDATE CASCADE;