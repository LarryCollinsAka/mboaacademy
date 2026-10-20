import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, CheckCircle2 } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mercor-card p-10 sm:p-16 rounded-3xl border border-amber-500/40 relative overflow-hidden text-center bg-gradient-to-b from-[#131622] to-[#090a0f]">
          
          {/* Radial ambient background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-amber-500/20 blur-[120px] rounded-full pointer-events-none" />

          {/* Golden Star Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-6">
            <Star className="w-3.5 h-3.5 fill-current" />
            Explore published learning paths
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-tight">
            Build practical skills for roles that matter.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Explore the published programs, check each cohort’s confirmed format and schedule, and practise role-relevant tasks with clear deliverables. Physical hubs and mentoring arrangements are only available when explicitly confirmed.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/courses"
              className="gold-btn w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold flex items-center justify-center gap-2"
            >
              <span>Explore Learning Paths</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/ai-advisor"
              className="w-full sm:w-auto px-7 py-4 rounded-xl text-base font-medium text-zinc-300 hover:text-white border border-white/10 hover:border-amber-500/40 transition-colors"
            >
              Explore Role Guidance
            </Link>
          </div>

          {/* Guarantee list */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Practical work samples
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              Delivery details confirmed per cohort
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Payment options shown before enrollment
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
