"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { COURSES_DATA } from "@/data/courses";
import Link from "next/link";
import {
  BookOpen,
  FileText,
  Sparkles,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
  GraduationCap,
  Calendar,
  Sun,
  Wand2
} from "lucide-react";

export default function StudentDashboardPage() {
  const enrolledCourse = COURSES_DATA[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#090a0f] text-slate-100 selection:bg-amber-400 selection:text-black">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Welcome Banner */}
          <div className="mercor-card p-8 rounded-3xl border border-amber-500/30 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-gradient-to-r from-amber-500/10 via-[#0d0f17] to-emerald-500/10">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
                <GraduationCap className="w-4 h-4" />
                Student Portal &bull; Active Cohort
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white">
                Welcome back, <span className="gold-gradient-text">Student Builder</span>!
              </h1>
              <p className="text-xs sm:text-sm text-zinc-300">
                You are currently enrolled in the <strong className="text-white">{enrolledCourse.title}</strong> cohort.
              </p>
            </div>

            {/* Campus Reservation Pill */}
            <div className="p-4 rounded-2xl bg-black/60 border border-emerald-500/30 space-y-1.5 shrink-0">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>On-Site Desk Confirmed</span>
              </div>
              <p className="text-xs text-white font-medium flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                Douala Campus (Akwa) &bull; Desk #18
              </p>
              <div className="text-[11px] text-zinc-400 flex items-center gap-1">
                <Sun className="w-3 h-3 text-amber-400" />
                <span>Solar Power Active &bull; 1Gbps Fiber Online</span>
              </div>
            </div>
          </div>

          {/* Quick Action Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link
              href={`/lms/learn/${enrolledCourse.slug}/welcome-and-onboarding`}
              className="mercor-card p-6 rounded-2xl border border-amber-500/20 hover:border-amber-500/50 group transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-105 transition-transform">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                Resume Course Player
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Jump right back into Module 1: Architecture & Server Components.
              </p>
            </Link>

            <Link
              href="/lms/instructor/ai-planner"
              className="mercor-card p-6 rounded-2xl border border-white/10 hover:border-amber-500/40 group transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-105 transition-transform">
                <Wand2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                AI Lesson Planner Tool
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Generate structured lecture plans, code walkthroughs, and summaries.
              </p>
            </Link>

            <Link
              href="/ai-advisor"
              className="mercor-card p-6 rounded-2xl border border-white/10 hover:border-amber-500/40 group transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                AI Career Advisor
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Ask career questions or explore FalkorDB graph skill ontologies.
              </p>
            </Link>
          </div>

          {/* Enrolled Courses & Progress */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">Your Active Curriculum</h2>
            
            <div className="mercor-card p-6 rounded-2xl border border-white/10 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-400">
                      {enrolledCourse.category}
                    </span>
                    <span className="text-xs text-zinc-400">
                      {enrolledCourse.durationWeeks} Weeks &bull; {enrolledCourse.mode}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-1">
                    {enrolledCourse.title}
                  </h3>
                </div>

                <Link
                  href={`/lms/learn/${enrolledCourse.slug}/welcome-and-onboarding`}
                  className="gold-btn px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 self-start sm:self-auto"
                >
                  <span>Continue Learning</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Progress bar */}
              <div className="space-y-1.5 pt-2 border-t border-white/5">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span>Overall Cohort Progress</span>
                  <span className="text-amber-400 font-semibold">25% Completed (1 of 4 Modules)</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 w-1/4 rounded-full" />
                </div>
              </div>

              {/* Lessons quick list */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-emerald-500/20 flex items-center gap-2.5 text-xs">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-zinc-200">Orientation & Onboarding</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-amber-500/30 flex items-center gap-2.5 text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-amber-300">Next.js App Router & React 19</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2.5 text-xs text-zinc-500">
                  <span className="w-2 h-2 rounded-full bg-zinc-600" />
                  <span>PostgreSQL & Prisma Modeling</span>
                </div>
              </div>
            </div>
          </div>

          {/* Saved Student Notes & Assignments Hub */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Student Notes Hub */}
            <div className="mercor-card p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-400" />
                  <h3 className="text-sm font-bold text-white">Saved Lecture Notes</h3>
                </div>
                <span className="text-[11px] text-emerald-400 font-semibold">Cloud Synced</span>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">Next.js Server Components Notes</span>
                    <span className="text-[10px] text-zinc-500">Today</span>
                  </div>
                  <p className="text-xs text-zinc-400 font-mono line-clamp-2">
                    &quot;Server Components reduce client JS bundle size by rendering directly on the edge. Prisma calls execute securely without exposing DB secrets.&quot;
                  </p>
                  <Link
                    href={`/lms/learn/${enrolledCourse.slug}/nextjs-app-router-react-19`}
                    className="text-[11px] text-amber-400 hover:underline inline-block pt-1"
                  >
                    Open & Edit in Studio &rarr;
                  </Link>
                </div>

                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">Academy Onboarding & Hybrid Protocols</span>
                    <span className="text-[10px] text-zinc-500">Yesterday</span>
                  </div>
                  <p className="text-xs text-zinc-400 font-mono line-clamp-2">
                    &quot;Lab hours: 8am - 9pm in Douala (Akwa). Weekly code review defense every Friday afternoon.&quot;
                  </p>
                  <Link
                    href={`/lms/learn/${enrolledCourse.slug}/welcome-and-onboarding`}
                    className="text-[11px] text-amber-400 hover:underline inline-block pt-1"
                  >
                    Open & Edit in Studio &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Assignments & Grading Status */}
            <div className="mercor-card p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <h3 className="text-sm font-bold text-white">Assignments & Capstones</h3>
                </div>
                <span className="text-[11px] text-zinc-400">1 of 3 Completed</span>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">Lab 1: Next.js + PostgreSQL Schema</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                      Graded: 95/100
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Feedback: Clean Prisma schema and effective relation models. Ready for Redis integration!
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">Lab 2: Qdrant Vector Semantic Search</span>
                    <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 text-[10px] font-bold">
                      In Progress
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Due in 4 days. Implement cosine similarity search on the curriculum embeddings.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
