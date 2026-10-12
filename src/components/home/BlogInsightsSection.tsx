"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { ArrowRight, Clock } from "lucide-react";

export function BlogInsightsSection() {
  const { t } = useI18n();

  const articles = [
    {
      slug: "cash-flow-vs-capital-gains",
      category: "Money Intelligence",
      readTime: "6 min read",
      title: "Cash Flow vs Capital Gains in Emerging Tech Markets",
      excerpt: "Why high-earning digital builders remain financially fragile without cash-generating asset allocation and operational balance sheets.",
    },
    {
      slug: "robert-kiyosaki-software-engineers",
      category: "Ownership & Assets",
      readTime: "8 min read",
      title: "Why Kiyosaki's Cashflow Principles Apply to Software Engineers",
      excerpt: "Moving from the 'E' (Employee) quadrant to the 'B' (Business Owner) quadrant by packaging software skills into repeatable systems.",
    },
    {
      slug: "inside-hcil-douala-yaounde-labs",
      category: "On-Site Labs",
      readTime: "5 min read",
      title: "Inside HCIL Douala & Yaounde Physical Innovation Labs",
      excerpt: "How uninterrupted solar power, 1Gbps fiber, and in-person peer accountability create an unfair advantage for African builders.",
    },
  ];

  return (
    <section className="py-20 bg-[#fbf9f1] border-b border-[#0d1210]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header split */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#059669]">
              {t("blog.tag", "From the HCIL Thought Leadership Desk")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0d1210] tracking-tight">
              {t("blog.title", "Ideas for a better way to work.")}
            </h2>
            <p className="text-sm text-[#4d5953] leading-relaxed">
              {t(
                "blog.desc",
                "Practical insights on financial intelligence, economic agency, software architecture, and building assets in emerging markets."
              )}
            </p>
          </div>

          <Link
            href="/blog"
            className="text-xs font-bold text-[#0d1210] hover:text-[#ffcd00] flex items-center gap-1.5 transition-colors self-start md:self-auto"
          >
            <span>Browse all articles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art, idx) => (
            <div
              key={idx}
              className="cream-card p-7 rounded-2xl flex flex-col justify-between space-y-6 bg-white"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded bg-[#ffcd00]/30 text-[#0d1210]">
                    {art.category}
                  </span>
                  <span className="text-[11px] text-[#5f6c65] flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {art.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0d1210] leading-snug hover:text-[#059669] transition-colors">
                  <Link href={`/blog/${art.slug}`}>{art.title}</Link>
                </h3>

                <p className="text-xs text-[#4d5953] leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#0d1210]/5">
                <Link
                  href={`/blog/${art.slug}`}
                  className="text-xs font-bold text-[#0d1210] flex items-center gap-1 hover:gap-2 transition-all"
                >
                  <span>Read insight</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#059669]" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
