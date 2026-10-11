"use client";

import { useState } from "react";
import { X, CreditCard, Smartphone, CheckCircle, ShieldCheck, Sparkles, AlertCircle } from "lucide-react";

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
  courseSlug,
  priceUSD,
  priceXAF,
}: PaymentModalProps) {
  const [method, setMethod] = useState<"card" | "momo" | "orange">("momo");
  const [learningMode, setLearningMode] = useState<"ONSITE" | "ONLINE">("ONSITE");
  const [campus, setCampus] = useState<"douala" | "yaounde">("douala");
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment webhook / verification
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="mercor-card w-full max-w-lg rounded-3xl border border-amber-500/40 p-7 sm:p-8 relative shadow-2xl bg-[#0d0f17]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-zinc-400 hover:text-white border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8 space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle className="w-9 h-9" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Enrollment Confirmed!</h3>
              <p className="text-sm text-zinc-300">
                Welcome to Mboa Academy, <strong className="text-amber-400">{fullName || "Student"}</strong>!
              </p>
              <p className="text-xs text-zinc-400 max-w-xs mx-auto">
                {learningMode === "ONSITE"
                  ? `Your on-site desk at our ${campus === "douala" ? "Douala (Akwa)" : "Yaounde (Bastos)"} campus has been reserved. A confirmation SMS & email have been sent.`
                  : "Your live LMS portal access and study materials have been activated."}
              </p>
            </div>

            <div className="pt-4">
              <a
                href={`/lms/learn/${courseSlug}/welcome-and-onboarding`}
                className="gold-btn w-full py-3.5 rounded-xl text-sm font-semibold inline-block"
              >
                Access Your LMS Portal Now
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
                <Sparkles className="w-3.5 h-3.5" />
                Mboa Academy Admissions
              </div>
              <h3 className="text-xl font-bold text-white mt-1">Enrollment & Tuition</h3>
              <p className="text-xs text-zinc-400 mt-1 line-clamp-1">{courseTitle}</p>
            </div>

            {/* Attendance Mode */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-zinc-300">Choose Attendance Mode:</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setLearningMode("ONSITE")}
                  className={`p-3 rounded-xl text-xs font-semibold border text-left transition-all ${
                    learningMode === "ONSITE"
                      ? "border-amber-500 bg-amber-500/15 text-amber-300"
                      : "border-white/10 text-zinc-400 bg-white/5"
                  }`}
                >
                  <div className="font-bold">On-Site Lab Immersion</div>
                  <div className="text-[10px] text-zinc-400 mt-0.5">Physical desk + solar + fiber</div>
                </button>

                <button
                  type="button"
                  onClick={() => setLearningMode("ONLINE")}
                  className={`p-3 rounded-xl text-xs font-semibold border text-left transition-all ${
                    learningMode === "ONLINE"
                      ? "border-amber-500 bg-amber-500/15 text-amber-300"
                      : "border-white/10 text-zinc-400 bg-white/5"
                  }`}
                >
                  <div className="font-bold">Hybrid / Online Live</div>
                  <div className="text-[10px] text-zinc-400 mt-0.5">Live video stream + LMS</div>
                </button>
              </div>
            </div>

            {/* If Onsite, Campus Selection */}
            {learningMode === "ONSITE" && (
              <div className="space-y-2">
                <label className="text-xs font-semibold text-zinc-300">Select Campus:</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setCampus("douala")}
                    className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all ${
                      campus === "douala"
                        ? "border-emerald-500 bg-emerald-500/20 text-emerald-300"
                        : "border-white/10 text-zinc-400 bg-white/5"
                    }`}
                  >
                    Douala (Akwa Hub)
                  </button>
                  <button
                    type="button"
                    onClick={() => setCampus("yaounde")}
                    className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all ${
                      campus === "yaounde"
                        ? "border-emerald-500 bg-emerald-500/20 text-emerald-300"
                        : "border-white/10 text-zinc-400 bg-white/5"
                    }`}
                  >
                    Yaounde (Bastos Hub)
                  </button>
                </div>
              </div>
            )}

            {/* Personal Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] text-zinc-400">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="Jean Dupont"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full mt-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500"
                />
              </div>
              <div>
                <label className="text-[11px] text-zinc-400">Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="student@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mt-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-zinc-300">Payment Gateway:</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setMethod("momo")}
                  className={`p-2.5 rounded-xl text-center border text-xs font-medium flex flex-col items-center gap-1 transition-all ${
                    method === "momo"
                      ? "border-amber-400 bg-amber-500/20 text-amber-300"
                      : "border-white/10 text-zinc-400 bg-white/5"
                  }`}
                >
                  <Smartphone className="w-4 h-4 text-amber-400" />
                  <span>MTN MoMo</span>
                </button>

                <button
                  type="button"
                  onClick={() => setMethod("orange")}
                  className={`p-2.5 rounded-xl text-center border text-xs font-medium flex flex-col items-center gap-1 transition-all ${
                    method === "orange"
                      ? "border-red-400 bg-red-500/20 text-red-300"
                      : "border-white/10 text-zinc-400 bg-white/5"
                  }`}
                >
                  <Smartphone className="w-4 h-4 text-red-400" />
                  <span>Orange Money</span>
                </button>

                <button
                  type="button"
                  onClick={() => setMethod("card")}
                  className={`p-2.5 rounded-xl text-center border text-xs font-medium flex flex-col items-center gap-1 transition-all ${
                    method === "card"
                      ? "border-emerald-400 bg-emerald-500/20 text-emerald-300"
                      : "border-white/10 text-zinc-400 bg-white/5"
                  }`}
                >
                  <CreditCard className="w-4 h-4 text-emerald-400" />
                  <span>Card / Stripe</span>
                </button>
              </div>
            </div>

            {/* Phone input for MoMo/OM */}
            {(method === "momo" || method === "orange") && (
              <div>
                <label className="text-[11px] text-zinc-400">
                  {method === "momo" ? "MTN Cameroon Phone (+237)" : "Orange Cameroon Phone (+237)"}
                </label>
                <input
                  required
                  type="tel"
                  placeholder="67X XX XX XX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full mt-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500"
                />
              </div>
            )}

            {/* Total and Submit Button */}
            <div className="pt-3 border-t border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-400">Total Tuition:</span>
                <span className="text-lg font-bold text-white">
                  ${priceUSD} <span className="text-xs text-zinc-400 font-normal">({priceXAF.toLocaleString()} XAF)</span>
                </span>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="gold-btn w-full py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isProcessing ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>Processing Secure Payment...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    <span>Pay {method === "card" ? `$${priceUSD}` : `${priceXAF.toLocaleString()} XAF`} & Confirm Seat</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
