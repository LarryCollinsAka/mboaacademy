"use client";

import { useI18n } from "@/lib/i18n";
import { CheckCircle2, Globe, Clock } from "lucide-react";

export function MultilingualSection() {
  const { locale, setLocale, t } = useI18n();

  return (
    <section className="py-20 bg-[#fefbe8] border-b border-[#0d1210]/10 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#0d1210]/10 text-[#0d1210]">
            <Globe className="w-3.5 h-3.5" />
            {t("lang.badge", "Language and regional scope")}
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0d1210] tracking-tight">
            {t("lang.title", "Bilingual foundation with pan-African ambition.")}
          </h2>
          <p className="text-sm sm:text-base text-[#4d5953] leading-relaxed max-w-2xl mx-auto">
            {t(
              "lang.desc",
              "HCIL Academy is built bilingual from day one. Every lesson, assessment rubric, and mentor consultation operates seamlessly in English and French."
            )}
          </p>
        </div>

        {/* Language Toggle Switchers */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setLocale("en")}
            className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
              locale === "en"
                ? "bg-[#ffcd00] text-[#0d1210] shadow-sm"
                : "bg-white text-[#4d5953] border border-[#0d1210]/15 hover:border-[#0d1210]/40"
            }`}
          >
            {t("lang.english", "ENGLISH")}
          </button>

          <button
            onClick={() => setLocale("fr")}
            className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
              locale === "fr"
                ? "bg-[#ffcd00] text-[#0d1210] shadow-sm"
                : "bg-white text-[#4d5953] border border-[#0d1210]/15 hover:border-[#0d1210]/40"
            }`}
          >
            {t("lang.french", "FRANÇAIS")}
          </button>
        </div>

        {/* Clear Truthful Breakdown of Current vs Planned Availability */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left pt-4">
          <div className="p-5 rounded-2xl bg-white border border-[#0d1210]/10 space-y-2 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold text-[#059669]">
              <CheckCircle2 className="w-4 h-4" />
              <span>{t("lang.currentTitle", "Current focus")}</span>
            </div>
            <p className="text-xs text-[#0d1210] font-semibold">
              {t("lang.currentCoverage", "Cameroon, with English and French course descriptions; online delivery where offered")}
            </p>
            <p className="text-[11px] text-[#5f6c65] leading-relaxed">
              {t("lang.currentDesc", "Course descriptions are available in English and French for the initial published programs. Confirm each cohort’s teaching language, format, and available payment methods before enrolling.")}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#0d1210]/10 space-y-2 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0d1210]">
              <Clock className="w-4 h-4 text-[#ffcd00]" />
              <span>{t("lang.futureTitle", "Future regional expansion")}</span>
            </div>
            <p className="text-xs text-[#0d1210] font-semibold">
              {t("lang.futureCoverage", "Additional African markets as partnerships and delivery capacity develop")}
            </p>
            <p className="text-[11px] text-[#5f6c65] leading-relaxed">
              {t("lang.futureDesc", "New regions, languages, employer partnerships, and payment options will be announced only when ready to support learners reliably.")}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
