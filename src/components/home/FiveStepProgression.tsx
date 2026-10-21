"use client";

import { useI18n } from "@/lib/i18n";
import { ArrowRight } from "lucide-react";

export function FiveStepProgression() {
  const { t } = useI18n();

  const steps = [
    {
      num: "01",
      name: t("step.1.name", "Understand"),
      stage: "Core Concepts",
      desc: t(
        "step.1.desc",
        "Understand the problem, who it affects, the expected outcome, and the standards that define good work."
      ),
    },
    {
      num: "02",
      name: t("step.2.name", "Practise"),
      stage: "Simulated Scenarios",
      desc: t(
        "step.2.desc",
        "Practise realistic tasks, use relevant tools, and work through scenarios before taking on greater responsibility."
      ),
    },
    {
      num: "03",
      name: t("step.3.name", "Build"),
      stage: "Real Deliverables",
      desc: t(
        "step.3.desc",
        "Produce useful deliverables such as support responses, process documents, schedules, reports, or working prototypes."
      ),
    },
    {
      num: "04",
      name: t("step.4.name", "Prove"),
      stage: "Objective Assessment",
      desc: t(
        "step.4.desc",
        "Explain your decisions, compare your work with clear criteria, and keep evidence of strengths and gaps—not just course completion."
      ),
    },
    {
      num: "05",
      name: t("step.5.name", "Apply & Grow"),
      stage: "Apply & Adapt",
      desc: t(
        "step.5.desc",
        "Apply what you learned, reflect on outcomes, use feedback, and adjust your methods as tasks and contexts change."
      ),
    },
  ];

  return (
    <section id="progression" className="py-20 bg-[#fbf9f1] border-b border-[#0d1210]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#059669]">
            {t("progression.tag", "The Learner Journey")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0d1210] tracking-tight">
            {t("progression.title", "From problem to proof in five steps")}
          </h2>
          <p className="text-sm text-[#4d5953] leading-relaxed">
            {t(
              "progression.desc",
              "A practical cycle: understand context, practise, produce work, examine evidence, and adapt. The method can change; accountability for useful outcomes remains."
            )}
          </p>
        </div>

        {/* Responsive Stacking: 1 column on mobile, 2 on tablet, 5 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 pt-4 border-t border-[#0d1210]/10">
          {steps.map((st, i) => (
            <div
              key={i}
              className="cream-card p-5 rounded-2xl bg-white border border-[#0d1210]/10 space-y-3 flex flex-col justify-between shadow-sm"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-mono font-bold text-[#ffcd00] bg-[#071f15] w-7 h-7 rounded-lg flex items-center justify-center">
                    {st.num}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#fbf9f1] text-[#5f6c65] border border-[#0d1210]/10">
                    {st.stage}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-[#0d1210]">
                  {st.name}
                </h3>

                <p className="text-xs text-[#4d5953] leading-relaxed">
                  {st.desc}
                </p>
              </div>

              {i < steps.length - 1 && (
                <div className="hidden lg:flex items-center text-[11px] text-[#059669] font-bold pt-2">
                  <span>Next Step</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
