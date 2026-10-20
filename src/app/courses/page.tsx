"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CourseWithDetails } from "@/lib/courses-service";
import { useI18n } from "@/lib/i18n";
import Link from "next/link";
import {
  Search,
  BookOpen,
  Clock,
  MapPin,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export function CoursesPage() {
  const { t } = useI18n();
  const [courses, setCourses] = useState<CourseWithDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedMode, setSelectedMode] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadCourses() {
      try {
        setIsLoading(true);
        setLoadError(null);

        const res = await fetch("/api/courses", {
          signal: controller.signal,
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error(`Course API returned HTTP ${res.status}`);
        }

        const data = await res.json();

        if (!Array.isArray(data.courses)) {
          throw new Error("The course API returned an unexpected response.");
        }

        setCourses(data.courses);
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          return;
        }

        console.error("Failed to load courses:", error);
        setLoadError(
          "We couldn't load the courses right now. Please try again.",
        );
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadCourses();

    return () => controller.abort();
  }, []);

  const categories = [
    "All",
    ...Array.from(
      new Set(courses.map((course) => course.category).filter(Boolean)),
    ).sort(),
  ];
  const modes = ["All", "HYBRID", "ONSITE", "ONLINE"];

  const filteredCourses = courses.filter((course) => {
    const matchesCategory =
      selectedCategory === "All" ||
      course.category.includes(selectedCategory) ||
      course.skills.some((s) => s.includes(selectedCategory));
    const matchesMode = selectedMode === "All" || course.mode === selectedMode;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.skills.some((s) =>
        s.toLowerCase().includes(searchQuery.toLowerCase()),
      );

    return matchesCategory && matchesMode && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f1] text-[#0d1210] selection:bg-[#ffcd00] selection:text-black">
      <Navbar />

      <main className="flex-1 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffcd00]/20 border border-[#ffcd00] text-xs font-bold text-[#0d1210]">
              <Sparkles className="w-3.5 h-3.5" />
              HCIL Curriculum & Pillars
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-[#0d1210] tracking-tight">
              Programs Built for{" "}
              <span className="underline decoration-[#ffcd00] decoration-wavy">
                Real Economic Agency
              </span>
            </h1>
            <p className="text-[#4d5953] text-sm sm:text-base leading-relaxed">
              Every course at HCIL Academy connects technical skill with cash
              flow literacy, verified evidence, and sustainable ownership.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="cream-card p-6 rounded-2xl bg-white border border-[#0d1210]/10 space-y-4 shadow-sm">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-96">
                <Search className="w-4 h-4 text-[#5f6c65] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by skill, cash flow, or pillar..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#fbf9f1] border border-[#0d1210]/15 text-xs text-[#0d1210] placeholder-[#5f6c65] focus:outline-none focus:border-[#ffcd00]"
                />
              </div>

              <div className="flex items-center gap-2 self-start md:self-auto overflow-x-auto w-full md:w-auto">
                <span className="text-xs text-[#5f6c65] font-semibold">
                  Mode:
                </span>
                {modes.map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setSelectedMode(mode)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                      selectedMode === mode
                        ? "bg-[#ffcd00] text-[#0d1210] shadow-sm"
                        : "bg-[#fbf9f1] text-[#4d5953] hover:text-[#0d1210] border border-[#0d1210]/10"
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-[#0d1210]/5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? "bg-[#071f15] text-[#ffcd00]"
                      : "text-[#4d5953] hover:text-[#0d1210] bg-[#fbf9f1] border border-[#0d1210]/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Loading or Courses Grid */}
          {loadError ? (
            <div
              role="alert"
              className="text-center py-20 rounded-2xl bg-white border border-red-200"
            >
              <p className="text-sm text-red-700">{loadError}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-3 text-xs font-bold text-emerald-700 hover:underline"
              >
                Try again
              </button>
            </div>
          ) : isLoading ? (
            <div className="text-center py-24 space-y-3">
              <div className="w-10 h-10 border-3 border-[#071f15] border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-xs text-[#5f6c65] font-medium">
                Fetching programs from HCIL database...
              </p>
            </div>
          ) : filteredCourses.length === 0 ? (
            <div className="text-center py-20 cream-card rounded-2xl bg-white">
              <p className="text-[#5f6c65] text-sm">
                No programs found matching criteria.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedMode("All");
                  setSearchQuery("");
                }}
                className="mt-3 text-xs font-bold text-[#059669] hover:underline"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="cream-card rounded-3xl flex flex-col justify-between overflow-hidden bg-white hover:border-[#ffcd00] transition-all duration-200 shadow-sm"
                >
                  <div className="p-7 space-y-5">
                    {/* Badges */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#ffcd00]/30 text-[#0d1210]">
                        {course.badge || course.category}
                      </span>

                      <span
                        className={`text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 ${
                          course.mode === "HYBRID"
                            ? "bg-[#059669]/10 text-[#059669] border border-[#059669]/30"
                            : "bg-[#071f15]/10 text-[#071f15] border border-[#071f15]/30"
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                        {course.mode}
                      </span>
                    </div>

                    {/* Title & Headline */}
                    <div>
                      <h3 className="text-xl font-black text-[#0d1210] hover:text-[#059669] transition-colors line-clamp-2">
                        {course.title}
                      </h3>
                      <p className="text-xs text-[#4d5953] mt-2 line-clamp-3 leading-relaxed">
                        {course.headline}
                      </p>
                    </div>

                    {/* Skills Covered */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {course.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-md bg-[#fbf9f1] text-[#2b332f] border border-[#0d1210]/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Meta */}
                    <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#0d1210]/10 text-xs text-[#5f6c65]">
                      <div className="flex items-center gap-1.5 font-medium">
                        <Clock className="w-3.5 h-3.5 text-[#059669]" />
                        <span>{course.durationLabel}</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-medium">
                        <BookOpen className="w-3.5 h-3.5 text-[#059669]" />
                        <span>{course.studentsCount} enrolled</span>
                      </div>
                    </div>

                    <div className="text-[11px] text-[#5f6c65] flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                      {course.cohorts.length > 0 ? (
                        <div className="space-y-1">
                          <p className="font-semibold text-[#0d1210]">
                            Next cohort:{" "}
                            {new Date(
                              course.cohorts[0].startsAt,
                            ).toLocaleDateString(undefined, {
                              dateStyle: "medium",
                              timeZone: course.cohorts[0].timezone,
                            })}{" "}
                            –{" "}
                            {new Date(
                              course.cohorts[0].endsAt,
                            ).toLocaleDateString(undefined, {
                              dateStyle: "medium",
                              timeZone: course.cohorts[0].timezone,
                            })}
                          </p>
                          <p>
                            {course.cohorts[0].name} ·{" "}
                            {course.cohorts[0].timezone}
                          </p>
                          <p>
                            Trainer(s):{" "}
                            {course.cohorts[0].trainers
                              .map((trainer) => trainer.name)
                              .join(", ") || "To be assigned"}
                          </p>
                        </div>
                      ) : (
                        <span>
                          Upcoming cohort dates and trainers to be announced
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Pricing and Action */}
                  <div className="px-7 py-5 bg-[#fbf9f1] border-t border-[#0d1210]/10 flex items-center justify-between">
                    <div>
                      <div className="text-lg font-black text-[#0d1210] flex items-baseline gap-1">
                        {course.currency === "XAF"
                          ? `${course.priceXAF.toLocaleString()} XAF`
                          : `$${course.priceUSD}`}
                        {course.currency !== "XAF" && (
                          <span className="text-xs text-[#5f6c65] font-normal">
                            / {course.priceXAF.toLocaleString()} XAF
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-[#059669] font-bold">
                        Installment plans accepted
                      </div>
                    </div>

                    <Link
                      href={`/courses/${course.slug}`}
                      className="btn-dark px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm"
                    >
                      <span>Syllabus</span>
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

export default CoursesPage;
