"use client";

import { useState } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { Star, ArrowRight, DollarSign, Calculator, HelpCircle, CheckCircle2 } from "lucide-react";

export function Hero() {
  const { t } = useI18n();

  // Interactive Educational Cash-Flow Simulator state (Scenario: Virtual Assistant / CX Support Service in Cameroon)
  const [clientsCount, setClientsCount] = useState<number>(2);
  const [retainerPerClientXAF, setRetainerPerClientXAF] = useState<number>(150000); // 150,000 XAF (~$250/mo per client)
  const [operatingCostsXAF, setOperatingCostsXAF] = useState<number>(50000); // 50,000 XAF (Fiber internet, workspace, software)

  const grossRevenueXAF = clientsCount * retainerPerClientXAF;
  const netCashFlowXAF = grossRevenueXAF - operatingCostsXAF;
  const grossRevenueUSD = Math.round(grossRevenueXAF / 600);
  const netCashFlowUSD = Math.round(netCashFlowXAF / 600);

  return (
    <section className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-[#fbf9f1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Top Pilot Announcement Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffcd00]/20 border border-[#ffcd00] text-xs font-bold text-[#0d1210] shadow-sm">
          <Star className="w-3.5 h-3.5 fill-[#0d1210]" />
          <span>{t("hero.badge", "HCIL ACADEMY • INITIAL LAUNCH: CUSTOMER SUPPORT & EXECUTIVE ASSISTANT (VA)")}</span>
        </div>

        {/* Refined Headline matching user direction */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#0d1210] leading-[1.08]">
            {t("hero.headline_1", "Learn to create value.")}{" "}
            <span className="block sm:inline text-[#0d1210] underline decoration-[#ffcd00] decoration-wavy decoration-2">
              {t("hero.headline_2", "Understand money.")}
            </span>{" "}
            <span className="block sm:inline">
              {t("hero.headline_3", "Build what you own.")}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#3b4742] max-w-3xl mx-auto leading-relaxed">
            {t(
              "hero.subheadline",
              "HCIL Academy helps you develop practical skills, understand cash flow, prove what you can do, and turn useful ideas into real-world opportunities—from your first project to a viable enterprise."
            )}
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/courses"
            className="btn-dark w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-bold flex items-center justify-center gap-2 shadow-sm"
          >
            <span>{t("hero.btn_explore", "Explore Learning Paths")}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="#money-lab"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-bold text-[#0d1210] bg-white border border-[#0d1210]/20 hover:border-[#0d1210]/50 transition-colors shadow-sm flex items-center justify-center gap-2"
          >
            <Calculator className="w-4 h-4 text-[#059669]" />
            <span>{t("hero.btn_lab", "Explore the Money Lab (Preview)")}</span>
          </a>
        </div>

        {/* Launch Scope & Truthfulness Disclaimer */}
        <div className="text-xs text-[#5f6c65] space-y-1">
          <p className="font-semibold text-[#0d1210]">
            Initial Tracks: Customer Service & Support Representative &bull; Executive & Virtual Assistant (VA)
          </p>
          <p className="text-[11px]">
            Live Hybrid Streams &bull; Planned On-Site Innovation Hubs in Douala & Yaoundé (Pilot Phase)
          </p>
        </div>

        {/* Working Educational Simulator Mockup (Deterministic, Transparent, Cameroon XAF-first) */}
        <div id="money-lab" className="pt-8 max-w-3xl mx-auto text-left">
          <div className="cream-card p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#ffcd00]/80 shadow-xl space-y-6">
            
            {/* Simulator Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#0d1210]/10 gap-2">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#059669] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
                  Live Educational Simulator &bull; Deterministic Model
                </span>
                <h3 className="text-base font-black text-[#0d1210]">
                  Scenario: Virtual Assistant & Customer Support Client Retainers
                </h3>
              </div>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-[#fbf9f1] text-[#5f6c65] border border-[#0d1210]/10 self-start sm:self-auto">
                Cameroon XAF &bull; USD Reference
              </span>
            </div>

            {/* Interactive Sliders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs">
              <div className="space-y-2 p-3.5 rounded-2xl bg-[#fbf9f1] border border-[#0d1210]/5">
                <div className="flex justify-between font-bold text-[#0d1210]">
                  <span>Active Clients / Retainers:</span>
                  <span className="font-mono text-[#059669] text-sm">{clientsCount} Clients</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={clientsCount}
                  onChange={(e) => setClientsCount(parseInt(e.target.value, 10))}
                  className="w-full accent-[#071f15] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#5f6c65]">
                  <span>1 client (entry)</span>
                  <span>5 clients (cap)</span>
                </div>
              </div>

              <div className="space-y-2 p-3.5 rounded-2xl bg-[#fbf9f1] border border-[#0d1210]/5">
                <div className="flex justify-between font-bold text-[#0d1210]">
                  <span>Monthly Fee / Client:</span>
                  <span className="font-mono text-[#0d1210] text-xs">
                    {retainerPerClientXAF.toLocaleString()} XAF (~${Math.round(retainerPerClientXAF / 600)})
                  </span>
                </div>
                <input
                  type="range"
                  min="80000"
                  max="300000"
                  step="10000"
                  value={retainerPerClientXAF}
                  onChange={(e) => setRetainerPerClientXAF(parseInt(e.target.value, 10))}
                  className="w-full accent-[#071f15] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#5f6c65]">
                  <span>80,000 XAF</span>
                  <span>300,000 XAF</span>
                </div>
              </div>
            </div>

            {/* Calculated Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-[#fbf9f1] border border-[#0d1210]/5 space-y-1">
                <span className="text-[10px] text-[#5f6c65]">Gross Client Inflow:</span>
                <div className="text-base font-black text-[#0d1210]">
                  {grossRevenueXAF.toLocaleString()} XAF
                </div>
                <div className="text-[10px] text-[#5f6c65]">~${grossRevenueUSD} USD</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#fbf9f1] border border-[#0d1210]/5 space-y-1">
                <span className="text-[10px] text-[#5f6c65]">Operating Overhead (Internet, Tools):</span>
                <div className="text-base font-black text-[#dc2626]">
                  -{operatingCostsXAF.toLocaleString()} XAF
                </div>
                <div className="text-[10px] text-[#5f6c65]">~${Math.round(operatingCostsXAF / 600)} USD</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#071f15] text-white space-y-1">
                <span className="text-[10px] text-[#ffcd00] font-bold">Net Cash Flow Retained:</span>
                <div className="text-lg font-black text-[#ffcd00] font-mono">
                  +{netCashFlowXAF.toLocaleString()} XAF
                </div>
                <div className="text-[10px] text-zinc-300">~${netCashFlowUSD} USD / month</div>
              </div>
            </div>

            {/* Explicit Truthfulness Disclaimer requested by user */}
            <div className="p-3 rounded-xl bg-[#fbf9f1] border border-[#0d1210]/10 flex items-start gap-2.5 text-[11px] text-[#5f6c65] leading-relaxed">
              <HelpCircle className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
              <span>
                <strong>Illustrative educational scenario — not an earnings forecast or guarantee.</strong> In HCIL Academy, you learn how operating costs, pricing, and time allocation affect what you actually retain, moving from billable hours to sustainable systems.
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
