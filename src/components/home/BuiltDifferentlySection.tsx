"use client";

import { useI18n } from "@/lib/i18n";
import { Star, CheckCircle, FileText, Compass, Award } from "lucide-react";

export function BuiltDifferentlySection() {
  const { t } = useI18n();

  const differences = [
    {
      num: "01",
      badge: "Assessment Standard",
      title: t("diff.1.title", "Practical evidence alongside recognized credentials"),
      desc: t(
        "diff.1.desc",
        "Credentials have value, but employers and clients hire for execution. Learners graduate with assessed project rubrics, verified work samples, and transparent capability records."
      ),
      example: "Sample: Verified Customer Support Knowledge Base & 7-Day Crisis Scheduling Playbook.",
    },
    {
      num: "02",
      badge: "Pedagogy",
      title: t("diff.2.title", "Active simulations over passive lecture listening"),
      desc: t(
        "diff.2.desc",
        "Learn money mechanics and client communication by actively resolving realistic scenarios: handling dissatisfied customers, balancing project budgets, and managing calendars across time zones."
      ),
      example: "Sample: Real-time SLA de-escalation drills & XAF cash flow balance sheet modeling.",
    },
    {
      num: "03",
      badge: "Planned Initiative",
      title: t("diff.3.title", "Hybrid learning + Planned physical innovation hubs"),
      desc: t(
        "diff.3.desc",
        "Delivery options are confirmed per published cohort. Physical learning spaces in Douala and Yaoundé remain planned initiatives until availability is explicitly announced."
      ),
      example: "Status: Confirmed delivery details are published per cohort &bull; Physical hubs remain planned.",
    },
    {
      num: "04",
      badge: "Long-term Goal",
      title: t("diff.4.title", "Ownership and agency as the ultimate objective"),
      desc: t(
        "diff.4.desc",
        "Employment is a valid path. Freelancing is a valid path. Entrepreneurship is a valid path. Our mission is to give you the financial intelligence to choose and build sustainable economic agency."
      ),
      example: "Focus: Understanding the transition from hourly compensation to repeatable assets.",
    },
  ];

  return (
    <section className="py-24 bg-[#071f15] text-white relative overflow-hidden">
      {/* Subtle giant Cameroon Star watermark in top-right corner */}
      <div className="absolute -top-10 -right-10 pointer-events-none opacity-5">
        <Star className="w-[500px] h-[500px] fill-white text-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#ffcd00]">
            The HCIL Standard
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            {t("diff.title", "Built differently, on purpose.")}
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            {t(
              "diff.desc",
              "We bridge the gap between academic theory, practical capability, and financial intelligence. Honest standards, objective rubrics, and demonstrable skills."
            )}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differences.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#0d2a1e] border border-white/10 space-y-4 hover:border-[#ffcd00]/40 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-full bg-[#ffcd00] text-[#071f15] font-black text-xs font-mono flex items-center justify-center">
                    {item.num}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/10 text-[#ffcd00] border border-[#ffcd00]/20">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 text-[11px] text-[#ffcd00]/90 font-mono">
                {item.example}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
