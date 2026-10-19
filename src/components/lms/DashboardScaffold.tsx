import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";

type DashboardRole = "Student" | "Trainer" | "Administrator";

const dashboardDetails: Record<DashboardRole, { description: string; areas: string[] }> = {
  Student: {
    description: "Your enrolled cohorts, scheduled learning, assignments, and verified learning evidence will appear here after sign-in is enabled and you are enrolled.",
    areas: ["My cohorts and calendar", "Lessons and assignments", "Progress and capability evidence"],
  },
  Trainer: {
    description: "Assigned cohorts, learner rosters, teaching schedules, assessments, and grading tools will appear here after trainer authentication and cohort assignment are enabled.",
    areas: ["Assigned cohorts and schedules", "Learner rosters and attendance", "Assignments, grading, and feedback"],
  },
  Administrator: {
    description: "Course publishing, cohort scheduling, trainer assignment, user access, and enrollment oversight will appear here after administrator authentication and server-side authorization are enabled.",
    areas: ["Course and cohort management", "Trainer and role administration", "Enrollment and operational reports"],
  },
};

export function DashboardScaffold({ role }: { role: DashboardRole }) {
  const details = dashboardDetails[role];

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f1] text-[#0d1210]">
      <Navbar />
      <main className="flex-1 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-3">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#059669]">HCIL Academy · {role} workspace</p>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">{role} dashboard</h1>
            <p className="max-w-3xl text-sm sm:text-base leading-relaxed text-[#4d5953]">{details.description}</p>
          </div>

          <section className="rounded-2xl border border-amber-500/40 bg-amber-50 p-5 sm:p-6 space-y-2" role="status">
            <div className="flex items-center gap-2 font-bold text-amber-950">
              <ShieldCheck className="h-5 w-5" /> Authentication setup required
            </div>
            <p className="text-sm leading-relaxed text-amber-950/80">
              This is a dashboard structure preview, not a protected workspace yet. Sign-in, session validation, and server-side role/ownership checks must be implemented before private records or administrative actions are connected. No personal learning or performance data is shown here.
            </p>
          </section>

          <div className="grid gap-4 md:grid-cols-3">
            {details.areas.map((area, index) => (
              <article key={area} className="rounded-2xl border border-[#0d1210]/10 bg-white p-5 space-y-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#ffcd00]/30 text-xs font-black">0{index + 1}</span>
                <h2 className="font-bold">{area}</h2>
                <p className="text-xs leading-relaxed text-[#5f6c65]">Designed to use authenticated, role-scoped database records rather than hardcoded demonstration metrics.</p>
              </article>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/courses" className="inline-flex items-center gap-2 rounded-full bg-[#071f15] px-5 py-3 text-xs font-bold text-white hover:bg-[#123d2b]">
              Browse courses <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/about" className="inline-flex items-center rounded-full border border-[#0d1210]/15 px-5 py-3 text-xs font-bold hover:bg-white">
              About HCIL Academy
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
