"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Plus, Minus } from "lucide-react";

export function FaqSection() {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: t("faq.q1", "Is HCIL Academy only for entrepreneurs?"),
      a: t(
        "faq.a1",
        "No. Employment is a valid path. Freelancing is a valid path. Entrepreneurship is a valid path. We teach you how money works, how value is created, and how to manage cash flow so you can make informed, resilient choices on whatever path you choose."
      ),
    },
    {
      q: "Why are you beginning with Customer Support and Executive Assistant (VA) tracks?",
      a: "Customer experience and administrative operations are high-leverage skills that businesses urgently need. They have low entry barriers, clear deliverables, and immediate commercial demand—making them the ideal foundation for learners to prove capability and practice cash-flow management.",
    },
    {
      q: t("faq.q2", "What makes this different from traditional online courses?"),
      a: t(
        "faq.a2",
        "Most courses offer passive video playlists and certificates of completion. At HCIL, you complete interactive simulations (like managing de-escalations or multi-timezone scheduling), build real operating procedures, and prove capability against transparent rubrics."
      ),
    },
    {
      q: t("faq.q3", "Are the physical innovation hubs in Douala and Yaoundé operating today?"),
      a: t(
        "faq.a3",
        "Our live hybrid online cohorts and student studio are active today. Dedicated physical innovation lab facilities in Douala (Akwa) and Yaoundé (Bastos) are currently in their pilot planning rollout to ensure 24/7 solar power, gigabit fiber, and in-person peer pods."
      ),
    },
    {
      q: t("faq.q4", "What is the 'From Skill to Enterprise' program?"),
      a: t(
        "faq.a4",
        "It is our 8–12 week flagship pilot accelerator. You establish a financial baseline, take a high-demand capability (like Customer Support or Virtual Assistance), calculate unit costs and margins, test an offer with potential clients, and leave with verifiable proof of capability."
      ),
    },
  ];

  return (
    <section className="py-20 bg-[#fbf9f1] border-b border-[#0d1210]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <h2 className="text-3xl sm:text-4xl font-black text-[#0d1210] tracking-tight">
          {t("faq.title", "Questions, answered.")}
        </h2>

        <div className="divide-y divide-[#0d1210]/10 border-y border-[#0d1210]/10">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-5">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left gap-4"
                >
                  <span className="text-base font-bold text-[#0d1210]">
                    {faq.q}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-[#ffcd00] flex items-center justify-center shrink-0 text-[#0d1210]">
                    {isOpen ? <Minus className="w-4 h-4 stroke-[2.5]" /> : <Plus className="w-4 h-4 stroke-[2.5]" />}
                  </span>
                </button>

                {isOpen && (
                  <p className="mt-3 text-sm text-[#4d5953] leading-relaxed pr-8 animate-in fade-in duration-150">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
