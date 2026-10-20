# HCIL Academy content and course-translation refinement

## Product positioning

The public-facing message is now centered on helping people understand role expectations, build practical capabilities, demonstrate work, and contribute to teams and value chains. Employment, freelance work, further study, community projects, and entrepreneurship remain valid outcomes; business ownership is not presented as the only successful path.

## Course translations

- The course API accepts `?locale=en` or `?locale=fr`.
- `src/lib/courses-service.ts` returns translated title, headline, description, category, and skills, with the canonical `Course` fields as a fallback.
- The course catalogue and course detail pages refetch when the selected locale changes.
- `scripts/seed-initial-courses.mjs` upserts English and French translations for the four initial course slugs without deleting modules, cohorts, enrollments, payments, or users.
- The course page categories are derived from the published course data rather than a fixed list that could hide courses.

## Safe integration with the existing database

The uploaded ZIP was older than the database/migration state discussed in the working conversation. In particular, this snapshot does not include the `CoursePrice` model or `20261020124932_add_course_market_pricing` migration that exist in the newer working state. Merge the source changes into the current working repository; do **not** replace `prisma/schema.prisma` or the whole `prisma/migrations` directory with this archive. When merging the schema, preserve the newer pricing model and add only the `CourseTranslation` relation/model and its `skills` field.

1. Preserve the exact existing `20261020140000_add_course_translations/migration.sql` from your current repository if that migration is already applied. The same migration name is present here because it was missing from the uploaded snapshot; its SQL should not be substituted blindly for the already-applied migration.
2. Review `prisma/migrations/20261020150000_add_course_translation_skills/migration.sql`. It adds the `skills` array to `CourseTranslation` so translated course skill tags can be shown in French.
3. Check `npx prisma migrate status` first. Do not use `migrate reset`, and do not use `migrate dev` to repair the known migration-history/shadow-database issue. Only run `npx prisma migrate deploy` after confirming the new skills migration is pending and the existing applied migration files/checksums remain unchanged.
4. Run `npx prisma generate` after the schema change.
5. Run `npm run seed:initial-courses` to populate/update the EN/FR course translation rows for the four known slugs.
6. Verify `GET /api/courses?locale=en` and `GET /api/courses?locale=fr`; the course title, headline, description, category, and skills should differ by locale.

## Other content and trust fixes

- Reframed the home page, About page, and course descriptions around practical contribution across value chains.
- Replaced fabricated graduate testimonials with explicit learning outcomes rather than implying real people or employment results.
- Removed unsupported salary, hiring, campus, and guaranteed-outcome claims from the advisor and older marketing components.
- Replaced the simulated payment success screen with a transparent notice that checkout is not connected; it no longer claims to take payment, reserve a campus place, send messages, or activate LMS access.
- Updated site metadata to reflect the broader role-readiness/value-chain mission.

## Security note

The uploaded archive contained a `.env` file. It is intentionally excluded from this refined archive. Treat credentials in that upload as exposed and rotate the database and API credentials; keep secrets in your local `.env` and hosting environment variables, never in a shared source ZIP.

## Validation

- JavaScript syntax check passed for `scripts/seed-initial-courses.mjs`.
- TypeScript/TSX syntax transpilation passed across 70 source files.
- A full typecheck/build could not be completed in this environment because dependency installation did not finish; run the project's normal `npm ci`, `npx prisma generate`, and `npm run build` in your working environment after safely merging the changes.
