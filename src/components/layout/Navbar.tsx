"use client";

import Link from "next/link";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { LanguageSelector } from "./LanguageSelector";
import { Sparkles, BookOpen, MapPin, Newspaper, UserCheck, Menu, X, Star } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#090a0f]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo with Cameroon Star */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-600 flex items-center justify-center shadow-lg shadow-amber-500/25 group-hover:scale-105 transition-transform">
            <Star className="w-5 h-5 text-black fill-black" />
            <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-[#090a0f]"></span>
            </span>
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
              MBOA <span className="gold-gradient-text">ACADEMY</span>
            </span>
            <p className="text-[10px] text-zinc-400 tracking-wider uppercase font-semibold">
              {t("nav.tagline", "On-Demand Job Skills • On-site & Hybrid")}
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          <Link
            href="/courses"
            className="text-sm font-medium text-zinc-300 hover:text-amber-400 transition-colors flex items-center gap-1.5"
          >
            <BookOpen className="w-4 h-4 text-amber-500" />
            {t("nav.courses", "Courses & LMS")}
          </Link>

          <Link
            href="/ai-advisor"
            className="text-sm font-medium text-zinc-300 hover:text-amber-400 transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            {t("nav.ai_advisor", "AI Career Matcher")}
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-zinc-300 hover:text-amber-400 transition-colors flex items-center gap-1.5"
          >
            <MapPin className="w-4 h-4 text-emerald-400" />
            {t("nav.campuses", "Onsite Campuses")}
          </Link>

          <Link
            href="/blog"
            className="text-sm font-medium text-zinc-300 hover:text-amber-400 transition-colors flex items-center gap-1.5"
          >
            <Newspaper className="w-4 h-4 text-red-400" />
            {t("nav.blog", "Blog & Insights")}
          </Link>
        </nav>

        {/* Action CTAs & Language Switcher */}
        <div className="hidden md:flex items-center gap-3">
          {/* Dynamic Language Switcher */}
          <LanguageSelector />

          <Link
            href="/lms/dashboard"
            className="text-xs font-semibold text-zinc-300 hover:text-white px-3.5 py-2 rounded-lg border border-white/10 hover:border-amber-500/40 transition-all flex items-center gap-1.5"
          >
            <UserCheck className="w-3.5 h-3.5 text-amber-400" />
            {t("nav.portal", "Student Portal")}
          </Link>

          <Link
            href="/courses"
            className="gold-btn text-xs px-4 py-2 rounded-lg flex items-center gap-1.5"
          >
            {t("nav.apply", "Apply for Cohort")}
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSelector />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-zinc-400 hover:text-white border border-white/10"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0c0e14] px-6 py-6 space-y-4">
          <Link
            href="/courses"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-zinc-200 hover:text-amber-400"
          >
            {t("nav.courses", "Courses & LMS")}
          </Link>
          <Link
            href="/ai-advisor"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-zinc-200 hover:text-amber-400"
          >
            {t("nav.ai_advisor", "AI Career Matcher")}
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-zinc-200 hover:text-amber-400"
          >
            {t("nav.campuses", "Onsite Campuses & About")}
          </Link>
          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-zinc-200 hover:text-amber-400"
          >
            {t("nav.blog", "Blog")}
          </Link>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="/lms/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg border border-white/10 text-zinc-200 text-sm"
            >
              {t("nav.portal", "Student Portal")}
            </Link>
            <Link
              href="/courses"
              onClick={() => setMobileMenuOpen(false)}
              className="gold-btn w-full text-center py-2.5 rounded-lg font-semibold text-sm"
            >
              {t("nav.apply", "Apply for Cohort")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
