# Merge these schema changes into your newer active schema

The uploaded snapshot predates the newer CoursePrice work in your current project. Do not overwrite the active `prisma/schema.prisma` or `prisma/migrations` directory with the snapshot.

Merge the following additions into your current schema while preserving the existing CoursePrice relations/model and all other newer changes:

1. In `model Course`, add `translations CourseTranslation[]`.
2. In `model Language`, add `courseTranslations CourseTranslation[]` alongside the existing `translations Translation[]`.
3. Add this model (assuming your existing applied `20261020140000_add_course_translations` migration already created the table):

```prisma
model CourseTranslation {
  id          String   @id @default(cuid())
  courseId    String
  course      Course   @relation(fields: [courseId], references: [id], onDelete: Cascade)
  locale      String
  language    Language @relation(fields: [locale], references: [code], onDelete: Cascade)
  title       String
  headline    String
  description String   @db.Text
  category    String
  skills      String[] @default([])
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@unique([courseId, locale])
  @@index([locale])
}
```

The patch includes only the new `20261020150000_add_course_translation_skills` migration. Preserve the exact existing `20261020140000_add_course_translations/migration.sql` file and checksum from your active repo. Check `npx prisma migrate status` before deployment; never reset the database or use `migrate dev` to repair the known shadow-database migration-order issue.
