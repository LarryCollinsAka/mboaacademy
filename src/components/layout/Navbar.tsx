"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useI18n } from "@/lib/i18n";
import { LanguageSelector } from "./LanguageSelector";
import {
  ChevronDown,
  Menu,
  X,
  GraduationCap,
  Sparkles,
  Headphones,
  Briefcase,
  TrendingUp,
  Compass,
  Building,
  Calculator,
  ArrowRight
} from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { t } = useI18n();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#fbf9f1]/95 backdrop-blur-md border-b border-[#0d1210]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between" ref={dropdownRef}>
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="w-10 h-10 rounded-full bg-[#ffcd00] flex items-center justify-center font-black text-[#0d1210] text-sm shadow-sm group-hover:scale-105 transition-transform">
            HCIL
          </div>
          <div>
            <span className="text-lg font-black tracking-tight text-[#0d1210] flex items-center gap-1.5">
              {t("nav.brand", "HCIL ACADEMY")}
            </span>
            <p className="text-[10px] text-[#4d5953] tracking-wider uppercase font-semibold">
              {t("nav.tagline", "Learn. Build. Earn. Own.")}
            </p>
          </div>
        </Link>

        {/* Desktop Navigation with Submenus to prevent any overlapping */}
        <nav className="hidden lg:flex items-center gap-6">
          
          {/* Submenu 1: Programs */}
          <div className="relative">
            <button
              onClick={() => setOpenDropdown(openDropdown === "programs" ? null : "programs")}
              className={`text-xs font-bold flex items-center gap-1 py-2 transition-colors ${
                openDropdown === "programs" ? "text-[#0d1210]" : "text-[#34403b] hover:text-[#0d1210]"
              }`}
            >
              <span>{t("nav.programs", "Programs")}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === "programs" ? "rotate-180" : ""}`} />
            </button>

            {openDropdown === "programs" && (
              <div className="absolute left-0 mt-2 w-80 rounded-2xl bg-white border border-[#0d1210]/10 shadow-xl p-3 z-50 animate-in fade-in duration-150 space-y-1">
                <div className="px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-[#059669]">
                  Initial Launch Tracks (Active Admissions)
                </div>

                <Link
                  href="/courses/customer-service-support-specialist"
                  onClick={() => setOpenDropdown(null)}
                  className="p-2.5 rounded-xl hover:bg-[#fbf9f1] flex items-start gap-3 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#ffcd00]/20 flex items-center justify-center text-[#0d1210] shrink-0 mt-0.5">
                    <Headphones className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0d1210] group-hover:text-[#059669]">
                      Customer Service & CX Specialist
                    </div>
                    <div className="text-[11px] text-[#5f6c65]">
                      Ticketing, communication & retention mechanics
                    </div>
                  </div>
                </Link>

                <Link
                  href="/courses/executive-virtual-assistant-mastery"
                  onClick={() => setOpenDropdown(null)}
                  className="p-2.5 rounded-xl hover:bg-[#fbf9f1] flex items-start gap-3 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#ffcd00]/20 flex items-center justify-center text-[#0d1210] shrink-0 mt-0.5">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0d1210] group-hover:text-[#059669]">
                      Executive & Virtual Assistant (VA)
                    </div>
                    <div className="text-[11px] text-[#5f6c65]">
                      Operations, multi-timezone calendars & workflow
                    </div>
                  </div>
                </Link>

                <div className="pt-2 border-t border-[#0d1210]/5 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#0d1210]">
                  Flagship Pathway
                </div>

                <Link
                  href="/courses/from-skill-to-enterprise"
                  onClick={() => setOpenDropdown(null)}
                  className="p-2.5 rounded-xl bg-[#fbf9f1] hover:bg-[#ffcd00]/20 flex items-start gap-3 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#071f15] text-[#ffcd00] flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0d1210]">
                      From Skill to Enterprise (Pilot)
                    </div>
                    <div className="text-[11px] text-[#5f6c65]">
                      8-12 weeks: Baseline &bull; Offer &bull; Unit Economics
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Submenu 2: Methodology */}
          <div className="relative">
            <button
              onClick={() => setOpenDropdown(openDropdown === "methodology" ? null : "methodology")}
              className={`text-xs font-bold flex items-center gap-1 py-2 transition-colors ${
                openDropdown === "methodology" ? "text-[#0d1210]" : "text-[#34403b] hover:text-[#0d1210]"
              }`}
            >
              <span>{t("nav.methodology", "Methodology")}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === "methodology" ? "rotate-180" : ""}`} />
            </button>

            {openDropdown === "methodology" && (
              <div className="absolute left-0 mt-2 w-72 rounded-2xl bg-white border border-[#0d1210]/10 shadow-xl p-3 z-50 animate-in fade-in duration-150 space-y-1">
                <Link
                  href="/#pillars"
                  onClick={() => setOpenDropdown(null)}
                  className="p-2.5 rounded-xl hover:bg-[#fbf9f1] block transition-colors"
                >
                  <div className="text-xs font-bold text-[#0d1210]">The 4 Learning Pillars</div>
                  <div className="text-[11px] text-[#5f6c65]">Money Intelligence &bull; Skills &bull; Sales &bull; Ownership</div>
                </Link>

                <Link
                  href="/#progression"
                  onClick={() => setOpenDropdown(null)}
                  className="p-2.5 rounded-xl hover:bg-[#fbf9f1] block transition-colors"
                >
                  <div className="text-xs font-bold text-[#0d1210]">5-Step Learning Journey</div>
                  <div className="text-[11px] text-[#5f6c65]">Understand &rarr; Practise &rarr; Build &rarr; Prove &rarr; Apply</div>
                </Link>

                <Link
                  href="/about"
                  onClick={() => setOpenDropdown(null)}
                  className="p-2.5 rounded-xl hover:bg-[#fbf9f1] block transition-colors"
                >
                  <div className="text-xs font-bold text-[#0d1210]">Assessment & Evidence Standards</div>
                  <div className="text-[11px] text-[#5f6c65]">Demonstrated capability alongside credentials</div>
                </Link>
              </div>
            )}
          </div>

          {/* Submenu 3: Labs & Tools */}
          <div className="relative">
            <button
              onClick={() => setOpenDropdown(openDropdown === "labs" ? null : "labs")}
              className={`text-xs font-bold flex items-center gap-1 py-2 transition-colors ${
                openDropdown === "labs" ? "text-[#0d1210]" : "text-[#34403b] hover:text-[#0d1210]"
              }`}
            >
              <span>{t("nav.labs", "Labs & Tools")}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === "labs" ? "rotate-180" : ""}`} />
            </button>

            {openDropdown === "labs" && (
              <div className="absolute left-0 mt-2 w-72 rounded-2xl bg-white border border-[#0d1210]/10 shadow-xl p-3 z-50 animate-in fade-in duration-150 space-y-1">
                <Link
                  href="/#money-lab"
                  onClick={() => setOpenDropdown(null)}
                  className="p-2.5 rounded-xl hover:bg-[#fbf9f1] flex items-start gap-2.5 transition-colors group"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#ffcd00]/20 flex items-center justify-center text-[#0d1210] shrink-0 mt-0.5">
                    <Calculator className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0d1210] group-hover:text-[#059669]">
                      Interactive Money Lab
                    </div>
                    <div className="text-[11px] text-[#5f6c65]">
                      Working cash flow & unit economics simulator
                    </div>
                  </div>
                </Link>

                <Link
                  href="/about"
                  onClick={() => setOpenDropdown(null)}
                  className="p-2.5 rounded-xl hover:bg-[#fbf9f1] flex items-start gap-2.5 transition-colors group"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#071f15] text-[#ffcd00] flex items-center justify-center shrink-0 mt-0.5">
                    <Building className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0d1210]">
                      Innovation Labs (Planned Hubs)
                    </div>
                    <div className="text-[11px] text-[#5f6c65]">
                      Douala (Akwa) & Yaoundé (Bastos) pilot spaces
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Insights (Blog) */}
          <Link
            href="/blog"
            className="text-xs font-bold text-[#34403b] hover:text-[#0d1210] transition-colors"
          >
            {t("nav.blog", "Insights")}
          </Link>
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <LanguageSelector />

          <Link
            href="/lms/dashboard"
            className="text-xs font-bold text-[#0d1210] hover:bg-[#0d1210]/5 px-3 py-2 rounded-full border border-[#0d1210]/15 transition-all flex items-center gap-1.5"
          >
            <GraduationCap className="w-3.5 h-3.5 text-[#059669]" />
            <span>{t("nav.portal", "Student Studio")}</span>
          </Link>

          <Link
            href="/courses"
            className="btn-dark text-xs font-bold px-4 py-2.5 rounded-full flex items-center gap-1.5 shadow-sm"
          >
            <span>{t("nav.apply", "Explore Cohorts")}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center gap-2">
          <LanguageSelector />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#0d1210] border border-[#0d1210]/15"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with Accordion Submenus */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#0d1210]/10 bg-[#fbf9f1] px-5 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
          
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-wider text-[#059669]">
              Initial Launch Programs
            </span>
            <Link
              href="/courses/customer-service-support-specialist"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold text-[#0d1210]"
            >
              &bull; Customer Service & CX Specialist
            </Link>
            <Link
              href="/courses/executive-virtual-assistant-mastery"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold text-[#0d1210]"
            >
              &bull; Executive & Virtual Assistant (VA)
            </Link>
            <Link
              href="/courses/from-skill-to-enterprise"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold text-[#059669]"
            >
              &bull; Flagship: From Skill to Enterprise (Pilot)
            </Link>
          </div>

          <div className="space-y-2 pt-3 border-t border-[#0d1210]/10">
            <span className="text-[10px] font-black uppercase tracking-wider text-[#4d5953]">
              Methodology & Tools
            </span>
            <Link
              href="/#pillars"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-semibold text-[#0d1210]"
            >
              The 4 Learning Pillars
            </Link>
            <Link
              href="/#progression"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-semibold text-[#0d1210]"
            >
              5-Step Progression (From Problem to Proof)
            </Link>
            <Link
              href="/#money-lab"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-semibold text-[#0d1210]"
            >
              Interactive Money Lab
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-semibold text-[#0d1210]"
            >
              Insights & Articles
            </Link>
          </div>

          <div className="pt-4 border-t border-[#0d1210]/10 flex flex-col gap-2.5">
            <Link
              href="/lms/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-full border border-[#0d1210]/20 text-[#0d1210] text-xs font-bold"
            >
              Student Studio
            </Link>
            <Link
              href="/courses"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-dark w-full text-center py-2.5 rounded-full text-xs font-bold"
            >
              Explore Cohorts
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
