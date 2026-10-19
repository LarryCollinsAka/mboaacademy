"use client";

import { use, useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CourseWithDetails } from "@/lib/courses-service";
import { PaymentModal } from "@/components/checkout/PaymentModal";
import Link from "next/link";
import {
  Clock,
  Users,
  MapPin,
  CheckCircle2,
  PlayCircle,
  Lock,
  Building,
  CreditCard,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  DollarSign
} from "lucide-react";

export default function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [course, setCourse] = useState<CourseWithDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  useEffect(() => {
    async function fetchCourse() {
      try {
        const res = await fetch("/api/courses");
        if (res.ok) {
          const data = await res.json();
          const match = (data.courses || []).find((c: CourseWithDetails) => c.slug === slug);
          setCourse(match || null);
        }
      } catch (e) {
        console.warn("Failed fetching course detail", e);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCourse();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-[#fbf9f1] text-[#0d1210]">
        <Navbar />
        <main className="flex-1 flex items-center justify-center py-32">
          <div className="text-center space-y-3">
            <div className="w-10 h-10 border-3 border-[#071f15] border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-xs text-[#5f6c65] font-semibold">Loading HCIL curriculum...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col bg-[#fbf9f1] text-[#0d1210]">
        <Navbar />
        <main className="flex-1 max-w-xl mx-auto py-24 text-center space-y-4 px-4">
          <h1 className="text-2xl font-bold">Course Not Found</h1>
          <p className="text-sm text-[#4d5953]">The requested HCIL program could not be located in the database.</p>
          <Link href="/courses" className="btn-dark px-6 py-2.5 rounded-full text-xs font-bold inline-block">
            View All Programs
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const firstLesson = course.modules[0]?.lessons[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f1] text-[#0d1210] selection:bg-[#ffcd00] selection:text-black">
      <Navbar />

      <main className="flex-1 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          {/* Breadcrumb & Badges */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs text-[#5f6c65]">
              <Link href="/courses" className="hover:text-[#0d1210] font-medium">
                Programs
              </Link>
              <span>/</span>
              <span>{course.category}</span>
              <span>/</span>
              <span className="text-[#0d1210] font-bold">{course.title}</span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-[#ffcd00]/30 text-[#0d1210]">
                {course.badge || course.category}
              </span>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#059669]/10 text-[#059669] border border-[#059669]/20 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
                {course.mode} Learning Mode
              </span>
              <span className="text-xs text-[#5f6c65] font-semibold">
                <Users className="w-3.5 h-3.5 text-[#059669] inline mr-1" />
                {course.studentsCount} Enrolled Learners
              </span>
            </div>
          </div>

          {/* Hero Split */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            
            {/* Left 2 Cols: Course Overview */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-5xl font-black text-[#0d1210] tracking-tight leading-tight">
                  {course.title}
                </h1>
                <p className="text-base sm:text-lg font-medium text-[#2d332f] leading-relaxed">
                  {course.headline}
                </p>
                <p className="text-sm text-[#4d5953] leading-relaxed">
                  {course.description}
                </p>
              </div>

              <section className="rounded-2xl border border-[#0d1210]/10 bg-white p-5 space-y-3">
                <h2 className="text-sm font-black text-[#0d1210]">Cohort schedule & trainers</h2>
                {course.cohorts.length ? course.cohorts.map((cohort) => (
                  <div key={cohort.id} className="rounded-xl bg-[#fbf9f1] p-4 space-y-1.5 text-xs">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <strong>{cohort.name}</strong>
                      <span className="rounded-full bg-[#059669]/10 px-2 py-1 text-[#059669] font-bold">{cohort.status.replaceAll("_", " ")}</span>
                    </div>
                    <p>{new Date(cohort.startsAt).toLocaleDateString(undefined, { dateStyle: "medium", timeZone: cohort.timezone })} – {new Date(cohort.endsAt).toLocaleDateString(undefined, { dateStyle: "medium", timeZone: cohort.timezone })} ({cohort.durationLabel})</p>
                    <p>Mode: {cohort.mode} · Time zone: {cohort.timezone}</p>
                    <p>Trainer(s): {cohort.trainers.map((trainer) => trainer.name).join(", ") || "To be assigned"}</p>
                    {cohort.weeklyLearningHours !== null && <p>Expected learning time: {cohort.weeklyLearningHours} hours/week</p>}
                  </div>
                )) : (
                  <p className="text-xs text-[#5f6c65]">The curriculum is available for review. Cohort dates, trainer assignments, and registration windows will appear here once scheduled.</p>
                )}
              </section>

              {/* Skills and Competencies */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#071f15]">
                  Verified Skills & Economic Outcomes Taught
                </h3>
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-white border border-[#0d1210]/10 text-[#0d1210] shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Physical Campus Facilities */}
              <div className="cream-card p-6 rounded-2xl bg-white border border-[#0d1210]/10 space-y-4 shadow-sm">
                <div className="flex items-center gap-2.5">
                  <Building className="w-5 h-5 text-[#059669]" />
                  <h3 className="text-base font-bold text-[#0d1210]">
                    Physical Campus Lab Access (Douala & Yaounde)
                  </h3>
                </div>
                <p className="text-xs text-[#4d5953] leading-relaxed">
                  Enrollment includes a dedicated desk at our Douala (Akwa) and Yaounde (Bastos) innovation hubs, continuous industrial solar power, 1Gbps fiber broadband, and in-person mentor code reviews.
                </p>
                <div className="flex flex-wrap gap-4 text-xs font-medium text-[#4d5953] pt-2 border-t border-[#0d1210]/5">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />
                    Akwa Innovation Hub, Douala
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />
                    Bastos Tech Campus, Yaounde
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />
                    Live Interactive Stream Worldwide
                  </span>
                </div>
              </div>

            </div>

            {/* Right Col: Tuition & Enrollment Card */}
            <div className="cream-card p-8 rounded-3xl bg-white border-2 border-[#ffcd00] sticky top-28 space-y-6 shadow-md">
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#059669]">
                  Total Program Tuition
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-[#0d1210]">
                    {course.currency === "XAF" ? `${course.priceXAF.toLocaleString()} XAF` : `$${course.priceUSD}`}
                  </span>
                  {course.currency !== "XAF" && <span className="text-sm text-[#5f6c65] font-semibold">/ {course.priceXAF.toLocaleString()} XAF</span>}
                </div>
                <p className="text-xs text-[#059669] font-bold">
                  Payment options are confirmed during enrollment
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={() => setIsPaymentOpen(true)}
                  className="btn-dark w-full py-4 rounded-full text-sm font-bold flex items-center justify-center gap-2 shadow-sm"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Enroll in Program</span>
                </button>

                {firstLesson && (
                  <Link
                    href={`/lms/learn/${course.slug}/${firstLesson.slug}`}
                    className="w-full py-3 rounded-full text-xs font-bold text-[#0d1210] bg-[#fbf9f1] hover:bg-[#ffcd00]/20 border border-[#0d1210]/15 flex items-center justify-center gap-2 transition-all"
                  >
                    <PlayCircle className="w-4 h-4 text-[#059669]" />
                    <span>Free Preview in Student Studio</span>
                  </Link>
                )}
              </div>

              {/* Quick Pillars Perks */}
              <div className="space-y-2.5 pt-4 border-t border-[#0d1210]/10 text-xs text-[#2b332f] font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>{course.durationLabel} · {course.durationHours} learning hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>Practical exercises and portfolio-focused learning</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>Cash flow simulator + student notes studio</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>Verified HCIL capability certificate</span>
                </div>
              </div>

            </div>

          </div>

          {/* Curriculum Breakdown */}
          <div className="space-y-6 pt-8 border-t border-[#0d1210]/10">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#059669]">
                Structured Progression
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0d1210]">
                Curriculum Modules & Lessons
              </h2>
              <p className="text-xs text-[#4d5953]">
                Practical exercises, financial simulations, and genuine client problem-solving.
              </p>
            </div>

            <div className="space-y-4">
              {course.modules.map((mod, mIdx) => (
                <div
                  key={mod.id}
                  className="cream-card rounded-2xl bg-white border border-[#0d1210]/10 overflow-hidden shadow-sm"
                >
                  <div className="p-5 bg-[#fbf9f1] border-b border-[#0d1210]/5 flex items-center justify-between">
                    <h3 className="text-sm font-bold text-[#0d1210] flex items-center gap-2">
                      <span className="text-[#059669] font-mono">Module {mIdx + 1}:</span>
                      {mod.title}
                    </h3>
                    <span className="text-xs text-[#5f6c65] font-semibold">
                      {mod.lessons.length} Lessons
                    </span>
                  </div>

                  <div className="divide-y divide-[#0d1210]/5">
                    {mod.lessons.map((lesson) => (
                      <div
                        key={lesson.id}
                        className="p-4 flex items-center justify-between hover:bg-[#fbf9f1]/60 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          {lesson.isFreePreview ? (
                            <PlayCircle className="w-4 h-4 text-[#059669] shrink-0" />
                          ) : (
                            <Lock className="w-4 h-4 text-[#8a9690] shrink-0" />
                          )}
                          <div>
                            <h4 className="text-xs font-bold text-[#0d1210]">
                              {lesson.title}
                            </h4>
                            <p className="text-[11px] text-[#5f6c65]">
                              {lesson.summary}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 shrink-0">
                          <span className="text-xs text-[#5f6c65] flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#059669]" />
                            {lesson.durationMinutes} min
                          </span>

                          {lesson.isFreePreview ? (
                            <Link
                              href={`/lms/learn/${course.slug}/${lesson.slug}`}
                              className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#059669]/10 text-[#059669] hover:bg-[#059669]/20 transition-colors"
                            >
                              Free Preview
                            </Link>
                          ) : (
                            <button
                              onClick={() => setIsPaymentOpen(true)}
                              className="px-3 py-1 rounded-full text-[11px] font-semibold text-[#5f6c65] hover:text-[#0d1210] border border-[#0d1210]/15"
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

      {/* Payment Checkout Modal */}
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
