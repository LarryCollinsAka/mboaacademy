"use client";

import { useI18n } from "@/lib/i18n";

export function YellowPillarsBand() {
  const { t } = useI18n();

  const pillars = [
    {
      num: "01",
      title: t("pillar.1.title", "Practical Capability"),
      outcome: t("pillar.1.outcome", "Understand the work"),
      desc: t(
        "pillar.1.desc",
        "Build usable knowledge and repeatable skills by understanding the context, standards, tools, and outcomes of real tasks."
      ),
    },
    {
      num: "02",
      title: t("pillar.2.title", "Value-Chain Contribution"),
      outcome: t("pillar.2.outcome", "Solve meaningful problems"),
      desc: t(
        "pillar.2.desc",
        "Learn how individual tasks connect to customers, teams, operations, and outcomes—and where your contribution creates measurable value."
      ),
    },
    {
      num: "03",
      title: t("pillar.3.title", "Evidence & Reliability"),
      outcome: t("pillar.3.outcome", "Demonstrate capability"),
      desc: t(
        "pillar.3.desc",
        "Create work samples, explain your decisions, meet agreed standards, and build a trustworthy record of what you can do and what you are still learning."
      ),
    },
    {
      num: "04",
      title: t("pillar.4.title", "Adaptation & Growth"),
      outcome: t("pillar.4.outcome", "Improve with feedback"),
      desc: t(
        "pillar.4.desc",
        "Use feedback and changing evidence to improve your approach. Build toward employment, further study, freelance work, entrepreneurship, or other meaningful paths."
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
                  {t("pillar.label", "PILLAR")} {p.num}
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
