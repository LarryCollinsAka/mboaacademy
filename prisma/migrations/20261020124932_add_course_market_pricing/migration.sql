-- AlterTable
ALTER TABLE "Course" ALTER COLUMN "currency" SET DEFAULT 'XAF';

-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "coursePriceId" TEXT,
ALTER COLUMN "currency" DROP DEFAULT;

-- CreateTable
CREATE TABLE "CoursePrice" (
    "id" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "marketCode" TEXT NOT NULL DEFAULT 'GLOBAL',
    "currency" VARCHAR(3) NOT NULL,
    "amount" DECIMAL(12,2) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CoursePrice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CoursePrice_marketCode_currency_isActive_idx" ON "CoursePrice"("marketCode", "currency", "isActive");

-- CreateIndex
CREATE INDEX "CoursePrice_courseId_isActive_idx" ON "CoursePrice"("courseId", "isActive");

-- CreateIndex
CREATE UNIQUE INDEX "CoursePrice_courseId_marketCode_currency_key" ON "CoursePrice"("courseId", "marketCode", "currency");

-- AddForeignKey
ALTER TABLE "CoursePrice" ADD CONSTRAINT "CoursePrice_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_coursePriceId_fkey" FOREIGN KEY ("coursePriceId") REFERENCES "CoursePrice"("id") ON DELETE SET NULL ON UPDATE CASCADE;
