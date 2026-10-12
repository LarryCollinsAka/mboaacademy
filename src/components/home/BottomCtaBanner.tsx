"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { Star, ArrowRight } from "lucide-react";

export function BottomCtaBanner() {
  const { t } = useI18n();

  return (
    <section className="py-20 bg-[#fbf9f1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Golden Yellow Card with faint Star Watermark */}
        <div className="relative rounded-3xl bg-[#ffcd00] text-[#0d1210] p-10 sm:p-16 text-center overflow-hidden shadow-sm">
          
          {/* Faint Star watermark in corners */}
          <div className="absolute -top-12 -left-12 opacity-10 pointer-events-none">
            <Star className="w-56 h-56 fill-white text-white" />
          </div>
          <div className="absolute -bottom-12 -right-12 opacity-10 pointer-events-none">
            <Star className="w-56 h-56 fill-white text-white" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-block text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-[#0d1210] text-[#ffcd00]">
              Admissions Open &bull; Customer Support & Virtual Assistant Tracks
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              {t("cta.bottom.title", "Ready to build skills that create value?")}
            </h2>

            <p className="text-sm sm:text-base font-medium text-[#2b332f] max-w-2xl mx-auto leading-relaxed">
              {t(
                "cta.bottom.desc",
                "Begin with our initial launch programs in Customer Support & CX or Executive Assistance (VA), or apply for the From Skill to Enterprise flagship pilot."
              )}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <Link
                href="/courses"
                className="btn-dark w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-bold flex items-center justify-center gap-2 shadow-sm"
              >
                <span>{t("cta.bottom.btn1", "Explore Learning Paths")}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/about"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-bold bg-white text-[#0d1210] border border-[#0d1210]/15 hover:border-[#0d1210]/40 transition-colors shadow-sm"
              >
                {t("cta.bottom.btn2", "Review Assessment Standards")}
              </Link>
            </div>
          </div>

          {/* Cameroon Flag Tricolor Line along bottom edge (Green, Red, Yellow) */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#007a3d] via-[#ce1126] to-[#fcd116]" />

        </div>

      </div>
    </section>
  );
}
