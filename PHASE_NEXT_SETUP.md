# HCIL Academy — light UI and initial course catalog

## What changed
- Global custom dark section card and dark button variants were changed to light surfaces / green accent buttons.
- Site footer is now a compact, light `HCIL Academy` brand footer. Dashboard scaffold and instructor AI planner no longer render the marketing footer.
- Added nullable `Course.durationDays` as nominal course duration. Cohort `startsAt` / `endsAt` still represent the actual scheduled run.
- Added an additive Prisma migration and idempotent script for the four initial XAF courses. It does not create cohorts, enrollments, payments, users, or lessons.
- Course descriptions clarify that training does not guarantee a job and vendor certification exams are not included unless explicitly stated.

## Apply safely
1. Back up the database and deploy the additive migration to staging first: `npx prisma migrate deploy`.
2. Regenerate Prisma Client: `npx prisma generate`.
3. Seed only the four specified course slugs: `npm run seed:initial-courses`. This updates course metadata/pricing for those slugs, preserving related records; it does not delete other courses.
4. Run `npm run build`, test the public course pages and role dashboards, then deploy.

## Initial course data
- CV Building & Cover Letter Writing — XAF 3,000 — 3 days — 9 estimated learning hours.
- LinkedIn Profile Optimization — XAF 1,500 — 3 days — 6 estimated learning hours.
- Customer Support & Customer Representative — XAF 15,000 — 14 days — 40 estimated learning hours.
- Executive & Virtual Assistant — XAF 20,000 — 14 days — 40 estimated learning hours.

Hours are planning estimates and should be confirmed against the delivery schedule. No cohort dates or trainers are invented; those belong to separately managed cohorts.

## International exams / vendor credentials
The Academy may prepare learners for relevant vendor exams, but should not claim to issue Microsoft, IBM, Oracle, Salesforce, AWS, Zendesk, Zoho, or Atlassian/Jira certifications unless it has the applicable authorization. Exam registration, fees, official exam delivery, and credentials should be clearly distinguished from Academy course tuition.
