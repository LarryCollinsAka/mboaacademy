"use client";

import Link from "next/link";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { LanguageSelector } from "./LanguageSelector";
import { Menu, X, ArrowRight, GraduationCap, BookOpen, FlaskConical, Wrench, Info, Newspaper, Presentation } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useI18n();
  const links = [
    { href: "/courses", label: t("nav.programs", "Programs") },
    { href: "/about", label: t("nav.about", "About") },
    { href: "/labs", label: t("nav.labs", "Labs") },
    { href: "/tools", label: t("nav.tools", "Tools") },
    { href: "/blog", label: t("nav.blog", "Insights") },
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#0d1210]/10 bg-[#fbf9f1]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffcd00] text-sm font-black text-[#0d1210] shadow-sm transition-transform group-hover:scale-105">HCIL</div>
          <div><span className="flex items-center gap-1.5 text-lg font-black tracking-tight text-[#0d1210]">{t("nav.brand", "HCIL ACADEMY")}</span><p className="text-[10px] font-semibold uppercase tracking-wider text-[#4d5953]">{t("nav.tagline", "Learn. Build. Earn. Own.")}</p></div>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">{links.map(link => <Link key={link.href} href={link.href} className="text-xs font-bold text-[#34403b] transition-colors hover:text-[#059669]">{link.label}</Link>)}</nav>
        <div className="hidden shrink-0 items-center gap-3 lg:flex"><LanguageSelector />
          <Link href="/lms/dashboard" className="flex items-center gap-1.5 rounded-full border border-[#0d1210]/15 px-3 py-2 text-xs font-bold text-[#0d1210] hover:bg-white"><GraduationCap className="h-3.5 w-3.5 text-[#059669]" />Student Studio</Link>
          <Link href="/lms/instructor/dashboard" className="flex items-center gap-1.5 rounded-full border border-[#0d1210]/15 px-3 py-2 text-xs font-bold text-[#0d1210] hover:bg-white"><Presentation className="h-3.5 w-3.5 text-[#059669]" />Instructor Studio</Link>
          <Link href="/courses" className="btn-dark flex items-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-bold shadow-sm"><span>{t("nav.apply", "Explore Courses")}</span><ArrowRight className="h-3.5 w-3.5" /></Link>
        </div>
        <div className="flex items-center gap-2 lg:hidden"><LanguageSelector /><button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="rounded-lg border border-[#0d1210]/15 p-2 text-[#0d1210]" aria-label="Toggle Menu">{mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button></div>
      </div>
      {mobileMenuOpen && <nav className="max-h-[85vh] space-y-1 overflow-y-auto border-b border-[#0d1210]/10 bg-[#fbf9f1] px-5 py-5 lg:hidden">
        {links.map(link => <Link key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-3 text-sm font-bold text-[#0d1210] hover:bg-white">{link.label}</Link>)}
        <Link href="/lms/dashboard" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-bold text-[#0d1210] hover:bg-white"><GraduationCap className="h-4 w-4" />Student Studio</Link>
        <Link href="/lms/instructor/dashboard" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-bold text-[#0d1210] hover:bg-white"><Presentation className="h-4 w-4" />Instructor Studio</Link>
        <Link href="/courses" onClick={() => setMobileMenuOpen(false)} className="block rounded-full bg-[#059669] px-4 py-3 text-center text-sm font-bold text-white">Explore Courses</Link>
      </nav>}
    </header>
  );
}
