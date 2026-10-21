"use client";

import Link from "next/link";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { LanguageSelector } from "./LanguageSelector";
import { Menu, X, ArrowRight, GraduationCap, Presentation } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useI18n();
  const links = [
    { href: "/courses", label: t("nav.programs", "Programs") },
    { href: "/about", label: t("nav.about", "About") },
    { href: "/labs", label: t("nav.labs", "Labs & Tools") },
    { href: "/tools", label: t("nav.tools", "Tools") },
    { href: "/blog", label: t("nav.blog", "Insights") },
  ];
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#0d1210]/10 bg-[#fbf9f1]/95 text-[#0d1210] shadow-sm backdrop-blur">
      <div className="mx-auto flex min-h-[68px] max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 xl:px-8">
        <Link href="/" onClick={closeMenu} className="group flex shrink-0 items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ffcd00] text-[11px] font-black text-[#0d1210] shadow-sm transition-transform group-hover:scale-105">HCIL</span>
          <span className="leading-tight">
            <span className="block whitespace-nowrap text-sm font-black tracking-tight text-[#0d1210]">{t("nav.brand", "HCIL ACADEMY")}</span>
            <span className="mt-1 block whitespace-nowrap text-[9px] font-semibold uppercase tracking-wide text-[#4d5953]">{t("nav.tagline", "Learn. Contribute. Prove. Grow.")}</span>
          </span>
        </Link>

        <nav aria-label={t("nav.primary", "Main navigation")} className="hidden min-w-0 flex-1 items-center justify-center gap-3 xl:flex 2xl:gap-5">
          {links.map(link => <Link key={link.href} href={link.href} className="whitespace-nowrap rounded-md px-1 py-2 text-[12px] font-bold text-[#34403b] transition-colors hover:text-[#047857] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#059669]">{link.label}</Link>)}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <LanguageSelector />
          <Link href="/login" className="whitespace-nowrap rounded-full px-3 py-2 text-xs font-bold text-[#0d1210] hover:bg-white">{t("nav.signIn", "Sign in")}</Link>
          <Link href="/register" className="whitespace-nowrap rounded-full bg-[#ffcd00] px-4 py-2.5 text-xs font-extrabold text-[#0d1210] shadow-sm transition hover:bg-[#f0c000]">{t("nav.join", "Join HCIL Academy")}</Link>
          <Link href="/lms/dashboard" className="flex whitespace-nowrap items-center gap-1.5 rounded-full border border-[#0d1210]/15 px-3 py-2 text-xs font-bold text-[#0d1210] hover:bg-white"><GraduationCap className="h-3.5 w-3.5 text-[#059669]" />{t("nav.learnerStudio", "Learner Studio")}</Link>
          <Link href="/lms/instructor/dashboard" className="flex whitespace-nowrap items-center gap-1.5 rounded-full border border-[#0d1210]/15 px-3 py-2 text-xs font-bold text-[#0d1210] hover:bg-white"><Presentation className="h-3.5 w-3.5 text-[#059669]" />{t("nav.instructorStudio", "Instructor Studio")}</Link>
          <Link href="/courses" className="flex whitespace-nowrap items-center gap-1.5 rounded-full bg-[#0d1210] px-3.5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-[#26332d]"><span>{t("nav.apply", "Explore Programs")}</span><ArrowRight className="h-3.5 w-3.5" /></Link>
        </div>

        <div className="flex shrink-0 items-center gap-2 xl:hidden">
          <LanguageSelector />
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="rounded-lg border border-[#0d1210]/15 p-2 text-[#0d1210] hover:bg-white" aria-label={mobileMenuOpen ? t("nav.closeMenu", "Close menu") : t("nav.openMenu", "Open menu")} aria-expanded={mobileMenuOpen}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && <nav aria-label={t("nav.mobile", "Mobile navigation")} className="max-h-[calc(100vh-68px)] space-y-1 overflow-y-auto border-t border-[#0d1210]/10 bg-[#fbf9f1] px-4 py-4 shadow-lg xl:hidden">
        {links.map(link => <Link key={link.href} href={link.href} onClick={closeMenu} className="block rounded-lg px-3 py-3 text-sm font-bold text-[#0d1210] hover:bg-white">{link.label}</Link>)}
        <div className="my-3 border-t border-[#0d1210]/10" />
        <Link href="/login" onClick={closeMenu} className="block rounded-lg px-3 py-3 text-sm font-bold text-[#0d1210] hover:bg-white">{t("nav.signIn", "Sign in")}</Link>
        <Link href="/register" onClick={closeMenu} className="block rounded-full bg-[#ffcd00] px-4 py-3 text-center text-sm font-extrabold text-[#0d1210]">{t("nav.join", "Join HCIL Academy")}</Link>
        <Link href="/lms/dashboard" onClick={closeMenu} className="flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-bold text-[#0d1210] hover:bg-white"><GraduationCap className="h-4 w-4 text-[#059669]" />{t("nav.learnerStudio", "Learner Studio")}</Link>
        <Link href="/lms/instructor/dashboard" onClick={closeMenu} className="flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-bold text-[#0d1210] hover:bg-white"><Presentation className="h-4 w-4 text-[#059669]" />{t("nav.instructorStudio", "Instructor Studio")}</Link>
        <Link href="/courses" onClick={closeMenu} className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#0d1210] px-4 py-3 text-center text-sm font-bold text-white">{t("nav.apply", "Explore Programs")}<ArrowRight className="h-4 w-4" /></Link>
      </nav>}
    </header>
  );
}
