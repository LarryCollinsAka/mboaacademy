import Link from "next/link";
import { redirect } from "next/navigation";
import { PaymentStatus } from "@prisma/client";
import { requireUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { DashboardScaffold } from "@/components/lms/DashboardScaffold";
import { logoutAction } from "@/app/login/actions";

export const dynamic = "force-dynamic";

export default async function StudentDashboardPage({ searchParams }: { searchParams: Promise<{ paymentSubmitted?: string; paymentError?: string }> }) {
  const user = await requireUser();
  if (user.role === "ADMIN") redirect("/lms/admin/dashboard");
  if (user.role === "INSTRUCTOR" || user.role === "TRAINER") redirect("/lms/instructor/dashboard");
  const [payments, params] = await Promise.all([
    db.payment.findMany({ where: { userId: user.id }, include: { course: { select: { title: true } } }, orderBy: { createdAt: "desc" }, take: 10 }),
    searchParams,
  ]);
  const waNumber = (process.env.HCIL_WHATSAPP_NUMBER || "").replace(/\D/g, "");
  const statusStyle: Record<PaymentStatus, string> = {
    PENDING: "bg-neutral-100 text-neutral-800", UNDER_REVIEW: "bg-amber-100 text-amber-900", SUCCESS: "bg-emerald-100 text-emerald-900", REJECTED: "bg-red-100 text-red-900", FAILED: "bg-red-100 text-red-900", EXPIRED: "bg-neutral-100 text-neutral-800", REFUND_PENDING: "bg-amber-100 text-amber-900", REFUNDED: "bg-neutral-100 text-neutral-800",
  };
  return <><div className="mx-auto w-full max-w-5xl px-4 pt-5 text-right"><form action={logoutAction}><button className="rounded-full border border-black/15 px-4 py-2 text-xs font-bold hover:bg-white">Sign out</button></form></div><DashboardScaffold role="Student" />
    <main className="min-h-screen bg-[#fbf9f1] px-4 pb-12 text-[#0d1210]"><div className="mx-auto max-w-5xl space-y-5">
      {params.paymentSubmitted && <p role="status" className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">Payment evidence submitted. Your reference is <strong>{params.paymentSubmitted}</strong>. Enrollment will activate only after verification.</p>}
      {params.paymentError === "alreadyEnrolled" && <p role="status" className="rounded-xl bg-amber-50 p-4 text-sm text-amber-900">You are already enrolled in that course.</p>}
      <section className="rounded-2xl border border-black/10 bg-white p-5 sm:p-7"><div className="flex flex-wrap items-center justify-between gap-3"><div><p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">Learner finance</p><h2 className="mt-1 text-2xl font-black">My payments</h2><p className="mt-1 text-sm text-neutral-600">Submit mobile-money evidence and track the review. A screenshot alone does not confirm receipt.</p></div><Link href="/lms/payments/new" className="rounded-full bg-[#071f15] px-5 py-3 text-sm font-bold text-white hover:bg-emerald-900">Submit payment</Link></div>
        {payments.length === 0 ? <p className="mt-5 rounded-xl border border-dashed border-neutral-300 p-5 text-sm text-neutral-600">You have not submitted any payments.</p> : <div className="mt-5 divide-y divide-neutral-100">{payments.map((p) => <article key={p.id} className="flex flex-wrap items-center justify-between gap-3 py-4"><div><h3 className="font-bold">{p.course.title}</h3><p className="mt-1 text-xs text-neutral-500">Reference: {p.paymentReference || p.id} · {p.createdAt.toLocaleDateString()}</p><p className="mt-1 text-sm font-semibold">{p.amount.toLocaleString()} {p.currency}</p>{waNumber && <a className="mt-1 inline-block text-xs font-bold text-emerald-800 underline" href={`https://wa.me/${waNumber}?text=${encodeURIComponent(`Hello HCIL Academy, I need help with payment ${p.paymentReference || p.id}.`)}`} target="_blank" rel="noreferrer">Ask about this payment on WhatsApp</a>}{p.reviewNotes && <p className="mt-1 max-w-xl text-sm text-neutral-600">Review note: {p.reviewNotes}</p>}</div><span className={`rounded-full px-3 py-1.5 text-xs font-bold ${statusStyle[p.status]}`}>{p.status.replaceAll("_", " ")}</span></article>)}</div>}
      </section>
    </div></main>
  </>;
}
