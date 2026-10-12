"use client";

import { useI18n } from "@/lib/i18n";

export function YellowPillarsBand() {
  const { t } = useI18n();

  const pillars = [
    {
      num: "01",
      title: t("pillar.1.title", "Financial Intelligence"),
      outcome: "Understand money mechanics",
      desc: t(
        "pillar.1.desc",
        "Master cash flow, net profit, operating overhead, and debt. Learn why money earned is not necessarily money retained, and distinguish productive assets from liabilities."
      ),
    },
    {
      num: "02",
      title: t("pillar.2.title", "Value-Creating Skills"),
      outcome: "Solve real business problems",
      desc: t(
        "pillar.2.desc",
        "Develop verified capabilities in Customer Support, Executive & Virtual Assistance (VA), and operational workflows that businesses urgently pay to resolve."
      ),
    },
    {
      num: "03",
      title: t("pillar.3.title", "Entrepreneurship & Business Basics"),
      outcome: "Validate customer demand",
      desc: t(
        "pillar.3.desc",
        "Identify real customer problems, price services by commercial value rather than hourly labor, and design service packages with clear unit margins."
      ),
    },
    {
      num: "04",
      title: t("pillar.4.title", "Ownership & Asset Building"),
      outcome: "Build systems that last",
      desc: t(
        "pillar.4.desc",
        "Document standard operating procedures (SOPs), delegate tasks, and explore how a solo service can grow into a resilient, scalable operation that you own."
      ),
    },
  ];

  return (
    <section id="pillars" className="bg-[#ffcd00] text-[#0d1210] py-12 border-y border-[#e6b800]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Responsive grid: 1 column on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#0d1210]/15">
          {pillars.map((p, idx) => (
            <div key={idx} className={`${idx !== 0 ? "sm:pl-6 pt-6 sm:pt-0" : ""} space-y-2.5`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-black opacity-60">
                  PILLAR {p.num}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#0d1210]/10 text-[#0d1210]">
                  {p.outcome}
                </span>
              </div>

              <h3 className="text-base font-black tracking-tight">
                {p.title}
              </h3>

              <p className="text-xs text-[#2b332f] leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
