"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { COURSES_DATA } from "@/data/courses";
import { PaymentModal } from "@/components/checkout/PaymentModal";
import Link from "next/link";
import { useState } from "react";
import {
  Clock,
  Star,
  MapPin,
  CheckCircle2,
  PlayCircle,
  Lock,
  Calendar,
  Sparkles,
  ArrowRight,
  CreditCard,
  Building,
  GraduationCap
} from "lucide-react";

export default function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const course = COURSES_DATA.find((c) => c.slug === slug);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  if (!course) {
    return notFound();
  }

  const firstLesson = course.modules[0]?.lessons[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#090a0f] text-slate-100 selection:bg-amber-400 selection:text-black">
      <Navbar />

      <main className="flex-1 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          {/* Top Breadcrumb & Badge */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <Link href="/courses" className="hover:text-amber-400">
                Courses
              </Link>
              <span>/</span>
              <span className="text-zinc-200">{course.category}</span>
              <span>/</span>
              <span className="text-amber-400 font-semibold">{course.title}</span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-amber-500/15 text-amber-400 border border-amber-500/30">
                {course.badge || course.category}
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-md bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {course.mode} Learning Mode
              </span>
              <span className="text-xs text-zinc-400">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 inline mr-1" />
                {course.rating} ({course.studentsCount} alumni)
              </span>
            </div>
          </div>

          {/* Hero Section & Pricing Card */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            
            {/* Left 2 Cols: Details */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  {course.title}
                </h1>
                <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                  {course.headline}
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* Skills Taught */}
              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  Core Technologies & Graph Ontologies Taught
                </h3>
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/5 text-zinc-200 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* On-Site Campuses Options */}
              <div className="mercor-card p-6 rounded-2xl border border-amber-500/30 space-y-4">
                <div className="flex items-center gap-2.5">
                  <Building className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-base font-bold text-white">
                    Physical Campus Access Included
                  </h3>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Enrollment in this cohort includes a dedicated lab desk at both Douala (Akwa) and Yaounde (Bastos) facilities, high-speed fiber internet, solar backup, and in-person mentor code reviews.
                </p>
                <div className="flex flex-wrap gap-4 text-xs text-zinc-400 pt-2 border-t border-white/5">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    Douala Innovation Hub
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Yaounde Tech Campus
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    Global Live Video Sync
                  </span>
                </div>
              </div>

            </div>

            {/* Right Col: Pricing & Enrollment Action Card */}
            <div className="mercor-card p-8 rounded-3xl border border-amber-500/40 sticky top-28 space-y-6 bg-gradient-to-b from-[#11131c] to-[#090a0f]">
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                  Full Cohort Tuition
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-white">
                    ${course.priceUSD}
                  </span>
                  <span className="text-sm text-zinc-400">
                    / {course.priceXAF.toLocaleString()} XAF
                  </span>
                </div>
                <p className="text-xs text-emerald-400 font-medium">
                  Includes all lectures, lab seat, LMS notes, and job placement support.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={() => setIsPaymentOpen(true)}
                  className="gold-btn w-full py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Enroll in Cohort</span>
                </button>

                {firstLesson && (
                  <Link
                    href={`/lms/learn/${course.slug}/${firstLesson.slug}`}
                    className="w-full py-3 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white border border-white/10 hover:border-amber-500/40 flex items-center justify-center gap-2 transition-all"
                  >
                    <PlayCircle className="w-4 h-4 text-amber-400" />
                    <span>Try Free Preview in LMS</span>
                  </Link>
                )}
              </div>

              {/* Quick Perks */}
              <div className="space-y-2.5 pt-4 border-t border-white/5 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{course.durationWeeks} weeks intensive curriculum</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>On-site desk + 24/7 solar power</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>AI LMS with notes & assignment auto-grading</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>MTN MoMo, Orange Money & Stripe accepted</span>
                </div>
              </div>

            </div>

          </div>

          {/* Curriculum Syllabus & Modules Section */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Course Syllabus
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Curriculum Breakdown
              </h2>
              <p className="text-xs text-zinc-400">
                Hands-on practical modules with code exercises, assignments, and student notes.
              </p>
            </div>

            <div className="space-y-4">
              {course.modules.map((mod, mIdx) => (
                <div
                  key={mod.id}
                  className="mercor-card rounded-2xl border border-white/10 overflow-hidden"
                >
                  <div className="p-5 bg-white/[0.02] border-b border-white/5 flex items-center justify-between">
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <span className="text-amber-400 font-mono">Module {mIdx + 1}:</span>
                      {mod.title}
                    </h3>
                    <span className="text-xs text-zinc-400">
                      {mod.lessons.length} Lessons
                    </span>
                  </div>

                  <div className="divide-y divide-white/5">
                    {mod.lessons.map((lesson) => (
                      <div
                        key={lesson.id}
                        className="p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          {lesson.isFreePreview ? (
                            <PlayCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                          ) : (
                            <Lock className="w-4 h-4 text-zinc-500 shrink-0" />
                          )}
                          <div>
                            <h4 className="text-xs font-semibold text-zinc-200">
                              {lesson.title}
                            </h4>
                            <p className="text-[11px] text-zinc-400">
                              {lesson.summary}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 shrink-0">
                          <span className="text-xs text-zinc-400 flex items-center gap-1">
                            <Clock className="w-3 h-3 text-amber-400" />
                            {lesson.durationMinutes} min
                          </span>

                          {lesson.isFreePreview ? (
                            <Link
                              href={`/lms/learn/${course.slug}/${lesson.slug}`}
                              className="px-3 py-1 rounded-md text-[11px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors"
                            >
                              Free Preview
                            </Link>
                          ) : (
                            <button
                              onClick={() => setIsPaymentOpen(true)}
                              className="px-3 py-1 rounded-md text-[11px] font-semibold text-zinc-400 hover:text-white border border-white/10"
                            >
                              Enroll to Unlock
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />

      {/* Payment Modal for Stripe & MTN/Orange Mobile Money */}
      <PaymentModal
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        courseTitle={course.title}
        courseSlug={course.slug}
        priceUSD={course.priceUSD}
        priceXAF={course.priceXAF}
      />
    </div>
  );
}
