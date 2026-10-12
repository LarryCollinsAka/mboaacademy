"use client";

import { useI18n } from "@/lib/i18n";
import Link from "next/link";
import { ArrowRight, Calculator, FileCheck, Target, BarChart3, CheckCircle2 } from "lucide-react";

export function AIFeaturesSection() {
  const { t } = useI18n();

  return (
    <section className="py-20 bg-[#fefbe8] border-b border-[#0d1210]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#059669]">
              {t("ai.tag", "Pragmatic EdTech Architecture")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0d1210] tracking-tight">
              {t("ai.title", "Tools that turn learning into practical decisions.")}
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-sm sm:text-base text-[#4d5953] leading-relaxed">
              {t(
                "ai.desc",
                "We don't teach passive theory. HCIL combines deterministic financial models with practical AI tools to help learners analyze customer needs, calculate unit economics, and test business decisions before spending money."
              )}
            </p>
          </div>
        </div>

        {/* 4 Cards Grid with Transparent Status Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Card 1: Cash Flow Simulator [Live Interactive] */}
          <div className="cream-card p-6 rounded-2xl space-y-3 bg-white flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#ffcd00]/20 flex items-center justify-center text-[#0d1210]">
                  <Calculator className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-[#059669]/15 text-[#059669]">
                  Live Interactive
                </span>
              </div>
              <h3 className="text-base font-bold text-[#0d1210]">
                {t("ai.card.1.title", "Cash Flow Simulator")}
              </h3>
              <p className="text-xs text-[#4d5953] leading-relaxed">
                {t(
                  "ai.card.1.desc",
                  "Test pricing, operating expenses, and retainer models with transparent arithmetic to understand net cash retention."
                )}
              </p>
            </div>
            <div className="pt-2 text-[11px] font-semibold text-[#059669]">
              Available right in the hero above &rarr;
            </div>
          </div>

          {/* Card 2: Lesson-to-Action Guides [Active in Courses] */}
          <div className="cream-card p-6 rounded-2xl space-y-3 bg-white flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#ffcd00]/20 flex items-center justify-center text-[#0d1210]">
                  <FileCheck className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-[#059669]/15 text-[#059669]">
                  Active in LMS
                </span>
              </div>
              <h3 className="text-base font-bold text-[#0d1210]">
                {t("ai.card.3.title", "Lesson-to-Action Guides")}
              </h3>
              <p className="text-xs text-[#4d5953] leading-relaxed">
                {t(
                  "ai.card.3.desc",
                  "Structured executive playbooks, support templates, and operational SOPs for every lesson to ensure actionable implementation."
                )}
              </p>
            </div>
            <div className="pt-2 text-[11px] font-semibold text-[#0d1210]">
              Integrated in student studio
            </div>
          </div>

          {/* Card 3: Capability & Task Matcher [In Pilot] */}
          <div className="cream-card p-6 rounded-2xl space-y-3 bg-white flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#ffcd00]/20 flex items-center justify-center text-[#0d1210]">
                  <Target className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-[#ffcd00]/30 text-[#0d1210]">
                  Pilot Feature
                </span>
              </div>
              <h3 className="text-base font-bold text-[#0d1210]">
                {t("ai.card.2.title", "Capability & Task Matcher")}
              </h3>
              <p className="text-xs text-[#4d5953] leading-relaxed">
                {t(
                  "ai.card.2.desc",
                  "Maps verified student project evidence against real employer and contract briefs. Does not guarantee jobs, but provides objective skill fit."
                )}
              </p>
            </div>
            <div className="pt-2 text-[11px] text-[#5f6c65]">
              Testing with partner employers
            </div>
          </div>

          {/* Card 4: Business Economics Simulator [In Pilot] */}
          <div className="dark-section-card p-6 rounded-2xl space-y-3 text-white bg-[#071f15] border border-white/10 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#ffcd00] flex items-center justify-center text-[#0d1210]">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-white/15 text-[#ffcd00]">
                  In Pilot
                </span>
              </div>
              <h3 className="text-base font-bold text-white">
                {t("ai.card.4.title", "Business Economics Simulator")}
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {t(
                  "ai.card.4.desc",
                  "Understand break-even points, customer acquisition costs, and margin sensitivity before taking on business overhead."
                )}
              </p>
            </div>
            <div className="pt-2 text-[11px] text-[#ffcd00] font-semibold">
              Part of flagship pilot
            </div>
          </div>

        </div>

        {/* Action Callout Box */}
        <div className="bg-[#071f15] text-white p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#ffcd00]">
              Transparent Assessment & Practical Learning
            </div>
            <p className="text-xs text-zinc-300 max-w-xl">
              We separate what is active today from what is being piloted. We evaluate demonstrated capability through real project deliverables, rubrics, and client feedback.
            </p>
          </div>

          <Link
            href="/courses"
            className="btn-gold px-6 py-3 rounded-full text-xs font-bold flex items-center gap-2 shrink-0 shadow-sm"
          >
            <span>Explore Initial Launch Programs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
