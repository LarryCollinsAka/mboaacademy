# HCIL Academy: courses, cohorts, and role-based access

## Course scheduling model

- `Course` is the reusable curriculum and stores the estimated learning workload (`durationHours`).
- `Cohort` is a scheduled run of that course. It stores `startsAt`, `endsAt`, the IANA time zone, delivery mode, enrollment window, status, capacity, weekly learning hours, and schedule notes.
- A cohort can have multiple assigned trainers. Trainers are `User` records assigned through the `CohortTrainers` relation.
- `Enrollment` belongs to a student and course and can optionally reference a cohort. The optional relation supports existing/course-level enrollment records while cohort scheduling is rolled out.
- The public courses API returns real database records only. It does not fabricate fallback courses, ratings, learner counts, cohort dates, or trainer names.

The displayed calendar interval is calculated from `startsAt` and `endsAt`. Estimated learning hours are a separate field; do not infer hours from calendar duration or vice versa. Dates are stored as timestamps and displayed using the cohort's configured IANA time zone (default `Africa/Douala`).

## Database setup / Vercel

1. Set `DATABASE_URL` in Vercel to the intended PostgreSQL database. Keep credentials private.
2. Inspect the database before applying the initial migration. The migration in `prisma/migrations/20261013000000_initial_schema/` is intended for an empty database. Do not apply it over an existing schema without first taking a backup and reconciling the schema/data.
3. Run `npm run db:generate`.
4. For a confirmed empty database, run `npm run db:migrate:deploy` locally against that database or deploy the migration and use Vercel's build/deployment workflow. `prisma migrate deploy` applies committed migrations; it does not create seed data.
5. Seed curriculum using the existing seed routine after confirming it is safe to run. The seed currently creates courses/modules/lessons but intentionally does not invent cohort dates or trainer assignments. Create cohorts only when the real schedule is approved.
6. Confirm the course API returns records and verify the public pages show “dates to be announced” when a course has no scheduled cohort.

## Authentication and roles

The Prisma schema now includes the standard Auth.js adapter tables (`Account`, `Session`, `VerificationToken`), `User.emailVerified`, and a `Role` field with `STUDENT`, `INSTRUCTOR`, `TRAINER`, and `ADMIN`. These are persistence prerequisites, **not a complete authentication implementation**. Auth.js dependencies/providers, sign-in/sign-out flows, session callbacks, server-side route guards, and role-specific dashboards still need to be wired before this is production-secure. Do not rely on client-side navigation or role labels for authorization.

Recommended access boundaries:

- `STUDENT`: own enrollments, lessons, assignments, notes, submissions, and learning evidence only.
- `INSTRUCTOR` / `TRAINER`: only assigned cohorts, rosters, lessons, attendance, assignments, and grading workflows.
- `ADMIN`: course/cohort management, trainer assignment, user-role management, enrollment oversight, and operational reporting.

Every server action and API endpoint must independently verify the authenticated user's role and record ownership. Never accept a user ID or role supplied only by the browser as proof of access. Admin role assignment should be a server-only operation.

## Important next implementation step

Implement Auth.js and server-side role guards before exposing role-specific dashboard data. Then replace the current demonstration-only student dashboard with queries scoped to the authenticated student. Build instructor and administrator dashboards on the same authenticated session and enforce permissions in the server layer.

## First-party authentication implementation (current patch)

- `/login` uses server-side password verification with Node's built-in scrypt and a random, opaque, HttpOnly session cookie. Session tokens are persisted in the existing `Session` table; no new database migration is required for this implementation.
- `/lms/dashboard`, `/lms/instructor/dashboard`, `/lms/admin/dashboard`, and `/lms/admin/courses` check the current user and role on the server. The browser cannot grant itself a role.
- Public account registration is intentionally disabled. Provision the first admin explicitly from a trusted local shell after configuring `DATABASE_URL`:

  PowerShell example (do not commit these values):

  ```powershell
  $env:ADMIN_EMAIL = "admin@example.com"
  $env:ADMIN_PASSWORD = "use-a-unique-password-at-least-14-characters"
  npm run admin:create
  Remove-Item Env:ADMIN_EMAIL
  Remove-Item Env:ADMIN_PASSWORD
  ```

- The script refuses to modify an existing account. Do not expose these environment variables in Vercel build logs or commit them to source control.
- The course administration screen creates unpublished course drafts and allows an administrator to publish/unpublish them. It does not create cohorts automatically. Cohorts remain distinct scheduled runs with their own dates, time zone, learning mode, capacity, and trainer assignments. Cohort scheduling UI is the next implementation step.
- This patch has not been validated with a production build in this environment. Run `npm run build` locally and test with a non-production database before deploying. The sign-in system should receive security review and rate limiting before broad public exposure.
