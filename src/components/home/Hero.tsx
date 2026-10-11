"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { Sparkles, ArrowRight, ShieldCheck, Star, Users, MapPin, Zap } from "lucide-react";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background radial glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-amber-500/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[300px] h-[200px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[200px] bg-red-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Cameroon & Admissions announcement badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mercor-card text-xs text-zinc-300 mb-8 border border-amber-500/30">
          <span className="flex items-center justify-center w-4 h-4 rounded-full bg-amber-400 text-black">
            <Star className="w-2.5 h-2.5 fill-current" />
          </span>
          <span className="font-semibold text-amber-400">
            {t("hero.badge_campuses", "On-Site Campuses:")}
          </span>{" "}
          {t("hero.badge_location", "Douala & Yaounde Labs + Global Online Cohorts")}
          <span className="text-zinc-500">&bull;</span>
          <span className="text-emerald-400 flex items-center gap-1 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {t("hero.badge_admissions", "Admissions Active")}
          </span>
        </div>

        {/* Hero Main Headline (Mercor style high-impact font) */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.08]">
          {t("hero.headline_1", "The Career Academy for")}{" "}
          <span className="gold-gradient-text block sm:inline">
            {t("hero.headline_highlight", "On-Demand Job Skills")}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
          {t(
            "hero.subheadline",
            "Learn the highest-paying software, AI engineering, and cloud skills. Accelerated training combining on-site physical lab immersion with our intelligent AI-powered LMS."
          )}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/courses"
            className="gold-btn w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold flex items-center justify-center gap-2 group"
          >
            <span>{t("hero.btn_explore", "Explore Career Cohorts")}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/ai-advisor"
            className="mercor-card w-full sm:w-auto px-7 py-4 rounded-xl text-base font-semibold text-zinc-200 hover:text-white flex items-center justify-center gap-2.5 hover:border-amber-500/40"
          >
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>{t("hero.btn_ai_quiz", "AI Career Matcher (Free)")}</span>
          </Link>
        </div>

        {/* Social Proof & Trust Badges */}
        <div className="mt-14 pt-10 border-t border-white/5 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-bold text-white">94%</div>
              <div className="text-xs text-zinc-400">{t("hero.stat_placement", "Hiring Placement Rate")}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-bold text-white">2 Campuses</div>
              <div className="text-xs text-zinc-400">{t("hero.stat_campuses", "Douala & Yaounde Labs")}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-bold text-white">850+</div>
              <div className="text-xs text-zinc-400">{t("hero.stat_graduates", "Graduates & Alumni")}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-bold text-white">Top 1%</div>
              <div className="text-xs text-zinc-400">{t("hero.stat_curriculum", "Curriculum Standards")}</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
