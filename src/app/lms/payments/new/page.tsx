import Link from "next/link";
import { redirect } from "next/navigation";
import { requireUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { submitMobileMoneyPayment } from "./actions";

export const dynamic = "force-dynamic";

export default async function NewPaymentPage({ searchParams }: { searchParams: Promise<{ error?: string; reference?: string }> }) {
  const user = await requireUser();
  if (user.role !== "STUDENT") redirect("/lms/dashboard");
  const [courses, params] = await Promise.all([
    db.course.findMany({ where: { published: true }, include: { coursePrices: { where: { isActive: true } } }, orderBy: { title: "asc" } }),
    searchParams,
  ]);
  const waNumber = (process.env.HCIL_WHATSAPP_NUMBER || "").replace(/\D/g, "");
  const whatsappUrl = waNumber ? `https://wa.me/${waNumber}?text=${encodeURIComponent("Hello HCIL Academy, I need help with a payment. My reference is: " + (params.reference || "not generated yet"))}` : null;
  const errors: Record<string, string> = {
    validation: "Check the provider, sender phone number, transaction reference, and screenshot.",
    course: "That course is not available for payment.",
    price: "This course has no valid price configured. Please contact HCIL Academy.",
    duplicateReference: "That provider transaction reference has already been submitted.",
    upload: "We created your payment reference, but could not securely store the screenshot. Contact support before submitting again.",
  };
  return <main className="min-h-screen bg-[#fbf9f1] px-4 py-10 text-[#0d1210] sm:px-6"><div className="mx-auto max-w-3xl space-y-6">
    <Link href="/lms/dashboard" className="text-sm font-bold text-emerald-800">← Learner dashboard</Link>
    <header><p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">HCIL Academy · Payments</p><h1 className="mt-2 text-3xl font-black">Submit a mobile-money payment</h1><p className="mt-2 text-sm leading-6 text-neutral-600">Pay using the official receiving instructions supplied by HCIL Academy, then submit the transaction details and screenshot. Your enrollment is not activated until an administrator verifies the payment.</p></header>
    {params.error && <p role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-900">{errors[params.error] || "Something went wrong. Please review the details and try again."}{params.reference && <span className="block mt-1 font-bold">Reference: {params.reference}</span>}</p>}
    <section className="rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm leading-6 text-amber-950"><strong>Before you pay:</strong> Confirm the recipient number and amount directly with HCIL Academy. This form does not initiate or automatically verify a transfer. Never send your PIN or OTP.</section>
    <form action={submitMobileMoneyPayment} className="grid gap-4 rounded-2xl border border-black/10 bg-white p-5 sm:p-7">
      <label className="grid gap-1 text-sm font-semibold">Course<select name="courseId" required defaultValue="" className="rounded-xl border border-neutral-300 px-3 py-3 font-normal"><option value="" disabled>Select a published course</option>{courses.map((c) => { const p = c.coursePrices.find((x) => x.currency === c.currency) ?? c.coursePrices[0]; const amount = p ? Number(p.amount) : c.price; const currency = p?.currency ?? c.currency; return <option key={c.id} value={c.id} disabled={!Number.isFinite(amount) || amount <= 0}>{c.title} — {amount.toLocaleString(undefined, { maximumFractionDigits: 2 })} {currency}{amount <= 0 ? " (price unavailable)" : ""}</option>; })}</select></label>
      <label className="grid gap-1 text-sm font-semibold">Payment provider<select name="provider" required defaultValue="MOMO" className="rounded-xl border border-neutral-300 px-3 py-3 font-normal"><option value="MOMO">MTN Mobile Money (MoMo)</option><option value="ORANGE_MONEY">Orange Money</option></select></label>
      <label className="grid gap-1 text-sm font-semibold">Sender phone number<input name="senderPhone" required autoComplete="tel" maxLength={24} placeholder="e.g. +237 6XX XXX XXX" className="rounded-xl border border-neutral-300 px-3 py-3 font-normal" /></label>
      <label className="grid gap-1 text-sm font-semibold">Provider transaction reference<input name="providerRef" required minLength={3} maxLength={120} placeholder="Reference shown in your transaction receipt" className="rounded-xl border border-neutral-300 px-3 py-3 font-normal" /></label>
      <label className="grid gap-1 text-sm font-semibold">Payment screenshot<input name="evidence" required type="file" accept="image/jpeg,image/png,image/webp" className="rounded-xl border border-neutral-300 px-3 py-3 font-normal" /><span className="text-xs font-normal text-neutral-500">JPG, PNG or WEBP · maximum 1 MB. Evidence is stored in a private bucket.</span></label>
      <button className="rounded-full bg-[#071f15] px-5 py-3 text-sm font-bold text-white hover:bg-emerald-900">Submit for verification</button>
    </form>
    {whatsappUrl ? <p className="text-sm text-neutral-600">Need help? <a className="font-bold text-emerald-800 underline" href={whatsappUrl} target="_blank" rel="noreferrer">Contact HCIL Academy on WhatsApp</a>. A reference is included when available.</p> : <p className="text-xs text-neutral-500">WhatsApp support link will appear after HCIL_WHATSAPP_NUMBER is configured.</p>}
  </div></main>;
}
