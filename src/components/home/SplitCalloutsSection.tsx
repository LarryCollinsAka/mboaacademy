"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { Check, ArrowRight, Headphones, Briefcase } from "lucide-react";

export function SplitCalloutsSection() {
  const { t } = useI18n();

  return (
    <section className="py-20 bg-[#fbf9f1] border-b border-[#0d1210]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Box: Golden Yellow Flagship Pilot */}
          <div className="bg-[#ffcd00] text-[#0d1210] p-8 sm:p-12 rounded-3xl flex flex-col justify-between space-y-8 shadow-sm">
            <div className="space-y-5">
              <span className="inline-block text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-[#0d1210] text-[#ffcd00]">
                {t("split.left.badge", "FLAGSHIP PILOT PROGRAMME")}
              </span>

              <h3 className="text-3xl sm:text-4xl font-black tracking-tight">
                {t("split.left.title", "From Skill to Enterprise")}
              </h3>

              <p className="text-sm font-medium text-[#2d332f] leading-relaxed">
                {t(
                  "split.left.subtitle",
                  "A practical 8–12 week pilot programme designed to turn verified capability into a viable client offer, with transparent unit economics."
                )}
              </p>

              <div className="space-y-3 pt-2">
                {[
                  t("split.left.bullet1", "Develop a baseline financial plan & cash flow statement"),
                  t("split.left.bullet2", "Deliver a real-world capstone project solving a business problem"),
                  t("split.left.bullet3", "Validate pricing, margins, and customer willingness to pay"),
                  t("split.left.bullet4", "Graduate with a verified HCIL capability record and viable offer"),
                ].map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold">
                    <div className="w-5 h-5 rounded-full bg-[#0d1210] text-[#ffcd00] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/courses/from-skill-to-enterprise"
                className="btn-dark px-8 py-4 rounded-full text-sm font-bold inline-flex items-center gap-2"
              >
                <span>{t("split.left.btn", "Apply for Flagship Cohort")}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Box: Initial Launch Tracks (Customer Service & Virtual Assistant) */}
          <div className="bg-[#071f15] text-white p-8 sm:p-12 rounded-3xl flex flex-col justify-between space-y-8 shadow-sm border border-white/5">
            <div className="space-y-5">
              <span className="inline-block text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-[#ffcd00] border border-[#ffcd00]/30">
                {t("split.right.badge", "INITIAL LAUNCH TRACKS")}
              </span>

              <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                {t("split.right.title", "Customer Support & Executive Assistant.")}
              </h3>

              <p className="text-sm font-medium text-zinc-300 leading-relaxed">
                {t(
                  "split.right.subtitle",
                  "We begin with foundational, high-demand operational skills that businesses urgently need to protect customer retention and buy back leadership time."
                )}
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#ffcd00]/20 text-[#ffcd00] flex items-center justify-center shrink-0 mt-0.5">
                    <Headphones className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Customer Service & CX Specialist</div>
                    <div className="text-[11px] text-zinc-400">Ticketing systems, omnichannel tone of voice & retention economics</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#ffcd00]/20 text-[#ffcd00] flex items-center justify-center shrink-0 mt-0.5">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Executive & Virtual Assistant (VA)</div>
                    <div className="text-[11px] text-zinc-400">Executive calendar management, travel logistics & async productivity</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/courses"
                className="btn-gold px-8 py-4 rounded-full text-sm font-bold inline-flex items-center gap-2"
              >
                <span>{t("split.right.btn", "Explore Launch Programs")}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
