"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { COURSES_DATA, CourseItem } from "@/data/courses";
import { useI18n } from "@/lib/i18n";
import Link from "next/link";
import { Search, Filter, BookOpen, Clock, Star, MapPin, ArrowRight, Sparkles } from "lucide-react";

export default function CoursesPage() {
  const { t } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedMode, setSelectedMode] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Full-Stack Web", "AI & Data", "Cloud & DevOps", "Product Design"];
  const modes = ["All", "HYBRID", "ONSITE", "ONLINE"];

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesMode = selectedMode === "All" || course.mode === selectedMode;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesMode && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#090a0f] text-slate-100 selection:bg-amber-400 selection:text-black">
      <Navbar />

      <main className="flex-1 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <BookOpen className="w-3.5 h-3.5" />
              Comprehensive Course Catalog
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Curated for <span className="gold-gradient-text">High-Earning Careers</span>
            </h1>
            <p className="text-zinc-400 text-base leading-relaxed">
              Explore our hybrid & onsite cohorts. Built on production stacks: Next.js, Postgres, Qdrant Vector DB, FalkorDB Graph DB, and Docker.
            </p>
          </div>

          {/* Search & Filters */}
          <div className="mercor-card p-6 rounded-2xl border border-white/10 space-y-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              
              {/* Search Bar */}
              <div className="relative w-full md:w-96">
                <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by role, framework, or skill (e.g. Next.js, Qdrant)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500/50"
                />
              </div>

              {/* Mode Switcher */}
              <div className="flex items-center gap-2 self-start md:self-auto overflow-x-auto w-full md:w-auto">
                <span className="text-xs text-zinc-400 font-medium">Mode:</span>
                {modes.map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setSelectedMode(mode)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      selectedMode === mode
                        ? "bg-amber-500 text-black shadow-md shadow-amber-500/20"
                        : "bg-white/5 text-zinc-400 hover:text-white border border-white/5"
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? "bg-amber-500/15 text-amber-400 border border-amber-500/40"
                      : "text-zinc-400 hover:text-white bg-white/[0.02] border border-white/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Courses Listing */}
          {filteredCourses.length === 0 ? (
            <div className="text-center py-20 mercor-card rounded-2xl">
              <p className="text-zinc-400 text-sm">No courses found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedMode("All");
                  setSearchQuery("");
                }}
                className="mt-4 text-xs font-semibold text-amber-400 hover:underline"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="mercor-card rounded-2xl flex flex-col justify-between overflow-hidden group hover:border-amber-500/50 transition-all duration-300"
                >
                  <div className="p-7 space-y-5">
                    
                    {/* Badge & Mode */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-amber-500/15 text-amber-400 border border-amber-500/30">
                        {course.badge || course.category}
                      </span>

                      <span
                        className={`text-[11px] font-semibold px-2.5 py-1 rounded-md flex items-center gap-1.5 ${
                          course.mode === "HYBRID"
                            ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                            : "bg-red-500/15 text-red-400 border border-red-500/30"
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                        {course.mode}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2">
                        {course.title}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-2 line-clamp-3 leading-relaxed">
                        {course.headline}
                      </p>
                    </div>

                    {/* Skills Covered */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {course.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-300 border border-white/5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Meta info */}
                    <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/5 text-xs text-zinc-400">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-amber-400" />
                        <span>{course.durationWeeks} Weeks</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        <span>{course.rating} Rating</span>
                      </div>
                    </div>

                    <div className="text-[11px] text-zinc-400 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{course.campusLocations.join(" • ")}</span>
                    </div>
                  </div>

                  {/* Pricing and Action */}
                  <div className="px-7 py-5 bg-white/[0.02] border-t border-white/5 flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold text-white flex items-baseline gap-1">
                        ${course.priceUSD}
                        <span className="text-xs text-zinc-400 font-normal">
                          / {course.priceXAF.toLocaleString()} XAF
                        </span>
                      </div>
                      <div className="text-[10px] text-emerald-400 font-medium">Installments OK</div>
                    </div>

                    <Link
                      href={`/courses/${course.slug}`}
                      className="px-4 py-2 rounded-lg text-xs font-semibold gold-btn flex items-center gap-1.5"
                    >
                      <span>Syllabus & Apply</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
