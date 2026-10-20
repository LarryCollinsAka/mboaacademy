"use client";

import { X, ShieldCheck, AlertCircle } from "lucide-react";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
  courseSlug: string;
  priceUSD: number;
  priceXAF: number;
}

export function PaymentModal({
  isOpen,
  onClose,
  courseTitle,
  priceUSD,
  priceXAF,
}: PaymentModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-labelledby="enrollment-info-title">
      <div className="w-full max-w-lg rounded-3xl border border-amber-500/40 bg-[#0d0f17] p-7 text-white shadow-2xl sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">HCIL Academy</p>
              <h2 id="enrollment-info-title" className="mt-1 text-xl font-bold">Enrollment information</h2>
            </div>
          </div>
          <button onClick={onClose} className="rounded-lg border border-white/10 p-2 text-zinc-400 hover:text-white" aria-label="Close enrollment information">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-sm font-semibold">{courseTitle}</p>
          <p className="mt-2 text-lg font-bold text-amber-400">
            {priceXAF.toLocaleString()} XAF{priceUSD > 0 ? ` · $${priceUSD} USD` : ""}
          </p>
        </div>

        <div className="mt-5 flex gap-3 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm leading-relaxed text-zinc-200">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
          <p>
            Online payment and enrollment confirmation are not connected in this version. <strong>No payment will be taken, no place is reserved, and no account or course access is activated here.</strong> Before paying, confirm the cohort schedule, delivery format, assessment terms, and official payment instructions with HCIL Academy.
          </p>
        </div>

        <button onClick={onClose} className="mt-6 w-full rounded-full bg-[#ffcd00] px-5 py-3 text-sm font-bold text-[#0d1210] hover:bg-amber-300">
          Close and review course details
        </button>
      </div>
    </div>
  );
}
