"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CourseWithDetails } from "@/lib/courses-service";
import { useI18n } from "@/lib/i18n";
import { ArrowRight, Clock, Users, MapPin, Sparkles } from "lucide-react";

export function CoursesPreview() {
  const { locale, t } = useI18n();
  const [courses, setCourses] = useState<CourseWithDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/courses?locale=${encodeURIComponent(locale)}`)
      .then((response) => response.ok ? response.json() : Promise.reject(new Error("Course API unavailable")))
      .then((data: { courses?: CourseWithDetails[] }) => setCourses(data.courses ?? []))
      .catch((error) => console.error("Could not load featured courses", error))
      .finally(() => setIsLoading(false));
  }, [locale]);

  const featuredCourses = courses.slice(0, 3);

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              {t("courses.eyebrow", "Practical learning for real-world roles")}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {t("courses.title", "Build capability. Contribute with confidence.")}
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
              {t("courses.intro", "Learn the work behind a role, practise realistic tasks, and produce evidence of what you can do.")}
            </p>
          </div>

          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
          >
            <span>{t("courses.viewAll", "View all learning paths")}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            <p className="md:col-span-2 lg:col-span-3 py-10 text-center text-sm text-zinc-400">Loading programs from the HCIL database…</p>
          ) : featuredCourses.length === 0 ? (
            <p className="md:col-span-2 lg:col-span-3 py-10 text-center text-sm text-zinc-400">No published programs are available yet. Please check back soon.</p>
          ) : featuredCourses.map((course) => (
            <div
              key={course.id}
              className="mercor-card rounded-2xl flex flex-col justify-between overflow-hidden group hover:border-amber-500/50 transition-all duration-300"
            >
              <div className="p-7 space-y-5">
                
                {/* Badges & Mode */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-amber-500/15 text-amber-400 border border-amber-500/30">
                    {course.badge || course.category}
                  </span>

                  <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-md flex items-center gap-1.5 ${
                    course.mode === "HYBRID"
                      ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                      : "bg-red-500/15 text-red-400 border border-red-500/30"
                  }`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    {course.mode}
                  </span>
                </div>

                {/* Title & Headline */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 line-clamp-3 leading-relaxed">
                    {course.headline}
                  </p>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {course.skills.slice(0, 4).map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-300 border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                  {course.skills.length > 4 && (
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400">
                      +{course.skills.length - 4}
                    </span>
                  )}
                </div>

                {/* Course Meta Info */}
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/5 text-xs text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{course.durationLabel}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-amber-400" />
                    <span>{course.studentsCount} enrolled</span>
                  </div>
                </div>

                {/* Campus footprint */}
                <div className="text-[11px] text-zinc-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{course.cohorts[0] ? `${course.cohorts[0].mode} · ${course.cohorts[0].timezone}` : "Cohort schedule to be announced"}</span>
                </div>

              </div>

              {/* Bottom Price & Link */}
              <div className="px-7 py-5 bg-white/[0.02] border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold text-white flex items-baseline gap-1">
                    {course.currency === "XAF" ? `${course.priceXAF.toLocaleString()} XAF` : `$${course.priceUSD}`}
                    {course.currency !== "XAF" && <span className="text-xs text-zinc-400 font-normal">/ {course.priceXAF.toLocaleString()} XAF</span>}
                  </div>
                  <div className="text-[10px] text-emerald-400 font-medium">Payment options confirmed before enrollment</div>
                </div>

                <Link
                  href={`/courses/${course.slug}`}
                  className="px-4 py-2 rounded-lg text-xs font-semibold gold-btn flex items-center gap-1.5"
                >
                  <span>Curriculum</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
