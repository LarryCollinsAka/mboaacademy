# HCIL Academy: manual mobile-money payment verification patch

This is an additive overlay for the current HCIL Academy source archive. It does not replace the project or its migration history.

## Included

- Prisma payment status/evidence/review fields and `PaymentReview` audit model.
- Forward-only SQL migration: `prisma/migrations/20261023160000_manual_mobile_money_payments/migration.sql`.
- Learner payment submission page: `/lms/payments/new`.
- Learner payment history on `/lms/dashboard`.
- Admin verification queue: `/lms/admin/payments` and dashboard shortcut.
- Private screenshot storage helper using Supabase Storage REST API.
- WhatsApp contact link with a prefilled reference message when configured.

## Important: preserve the existing database

Your recent project context has an unresolved non-empty database / Prisma migration-baseline mismatch. Do **not** run `prisma migrate reset`, do not delete `_prisma_migrations`, and do not blindly run `prisma migrate deploy` or `migrate dev`.

1. Back up the database first.
2. Inspect the live `PaymentStatus` enum, `Payment` table, and `_prisma_migrations` state. Confirm this migration's `Payment` columns and `PaymentReview` table do not already exist.
3. Reconcile the existing baseline/history with your existing migration plan. Apply this additive migration exactly once using the agreed deployment process; record it as applied only after verifying the SQL has actually completed successfully. Do not mark it applied just to silence Prisma.
4. Merge the updated `prisma/schema.prisma` and new migration into your source tree, then run `npx prisma validate` and `npx prisma generate`.

The migration is additive and has no DROP, TRUNCATE, DELETE, or database reset operations. PostgreSQL enum additions are included for the new statuses while retaining `SUCCESS` for legacy confirmed records.

## Screenshot storage setup

Screenshots must not be saved under `public/` or served from permanent public URLs.

1. In the Supabase project used by the app, create a **private** Storage bucket named `payment-evidence` (or set `SUPABASE_PAYMENT_EVIDENCE_BUCKET` to your bucket name).
2. Configure server-only environment variables:

```env
SUPABASE_URL=https://YOUR_PROJECT.supabase.co
SUPABASE_SERVICE_ROLE_KEY=YOUR_SERVER_ONLY_SERVICE_ROLE_KEY
SUPABASE_PAYMENT_EVIDENCE_BUCKET=payment-evidence
HCIL_WHATSAPP_NUMBER=2376XXXXXXXX
```

`HCIL_WHATSAPP_NUMBER` must be the official HCIL support number in international digits-only format. Never expose the Supabase service-role key with a `NEXT_PUBLIC_` prefix. Restrict access to production environment settings.

The app accepts JPG/PNG/WEBP screenshots up to 1 MB, matching Next.js Server Action's default body limit. The bucket should remain private; the admin screen generates a short-lived signed URL to view each screenshot.

## Workflow

- Learner submits course, provider, sender phone, provider transaction reference, and screenshot.
- The server obtains course price from the database; it does not trust a client-supplied amount.
- The payment is moved to `UNDER_REVIEW` after evidence storage succeeds.
- Admin must compare the evidence with provider/receiving-account records. A screenshot alone is not proof of settlement.
- Confirmation changes status to `SUCCESS`, writes an audit record, and creates an active enrollment transactionally. Rejection requires a reason and does not create enrollment.
- WhatsApp is only a support channel. A WhatsApp message never automatically confirms payment.

## Before production

- Set up the private bucket and secrets.
- Reconcile/apply migration and generate Prisma Client.
- Run `npm run build` and manually test learner submission, private screenshot access, duplicate transaction references, double-click review, reject reason, and enrollment activation.
- Verify payment instructions and receiving numbers through official channels. Add rate limiting/anti-abuse controls before public launch.
- For high-assurance duplicate prevention, reconcile historic duplicate provider references and then consider a database-level uniqueness rule scoped to provider + provider reference; this patch checks duplicates in application code but does not add a uniqueness constraint that could fail on existing data.
