"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return <footer className="mt-auto border-t border-[#0d1210]/10 bg-white px-4 py-10 text-[#34403b]">
    <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 md:grid-cols-4">
      <div className="space-y-3"><Link href="/" className="font-black tracking-tight text-[#0d1210]">HCIL Academy</Link><p className="max-w-xs text-sm leading-relaxed">{t("footer.description", "Learn practical capabilities, demonstrate what you can do, and build pathways toward meaningful work.")}</p></div>
      <div><h2 className="mb-3 text-xs font-black uppercase tracking-wider text-[#0d1210]">{t("footer.explore", "Explore")}</h2><ul className="space-y-2 text-sm"><li><Link className="hover:text-[#059669]" href="/courses">{t("footer.courses", "Courses")}</Link></li><li><Link className="hover:text-[#059669]" href="/about">{t("footer.about", "About HCIL")}</Link></li><li><Link className="hover:text-[#059669]" href="/blog">{t("footer.insights", "Insights")}</Link></li></ul></div>
      <div><h2 className="mb-3 text-xs font-black uppercase tracking-wider text-[#0d1210]">{t("footer.practice", "Practice")}</h2><ul className="space-y-2 text-sm"><li><Link className="hover:text-[#059669]" href="/labs">{t("footer.labs", "Labs")}</Link></li><li><Link className="hover:text-[#059669]" href="/tools">{t("footer.tools", "Tools")}</Link></li><li><Link className="hover:text-[#059669]" href="/ai-advisor">{t("footer.advisor", "AI Career Advisor")}</Link></li></ul></div>
      <div><h2 className="mb-3 text-xs font-black uppercase tracking-wider text-[#0d1210]">{t("footer.spaces", "Learning spaces")}</h2><ul className="space-y-2 text-sm"><li><Link className="hover:text-[#059669]" href="/lms/dashboard">{t("nav.learnerStudio", "Learner Studio")}</Link></li><li><Link className="hover:text-[#059669]" href="/lms/instructor/dashboard">{t("nav.instructorStudio", "Instructor Studio")}</Link></li><li><Link className="hover:text-[#059669]" href="/login">{t("nav.signIn", "Sign in")}</Link></li></ul></div>
    </div><div className="mx-auto mt-8 max-w-7xl border-t border-[#0d1210]/10 pt-5 text-xs text-[#5f6c65]">© {new Date().getFullYear()} HCIL Academy. {t("footer.rights", "All rights reserved.")}</div>
  </footer>;
}
