import { TESTIMONIALS_DATA } from "@/data/testimonials";
import { Star, Quote, MapPin, TrendingUp, CheckCircle } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            Graduate Career Outcomes
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Proof in the <span className="gold-gradient-text">Results</span>
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            From university graduates and self-taught switchers to senior leaders. Hear how Mboa Academy helped students bridge the gap into high-paying global tech roles.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="mercor-card p-8 rounded-2xl flex flex-col justify-between group hover:border-amber-500/40 relative overflow-hidden"
            >
              <div className="space-y-5">
                
                {/* Mode & Rating */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, rIdx) => (
                      <Star key={rIdx} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10 flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    {item.mode}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{item.story}&rdquo;
                </p>

                {/* Salary or outcome badge */}
                {item.salaryIncrease && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{item.salaryIncrease}</span>
                  </div>
                )}
              </div>

              {/* Author info */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-amber-500/30"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs text-zinc-400">
                      {item.role} &bull; <span className="text-zinc-200">{item.company}</span>
                    </p>
                    <p className="text-[10px] text-zinc-500">{item.cohort}</p>
                  </div>
                </div>

                {item.badge && (
                  <span className="hidden sm:inline-flex text-[11px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/40">
                    {item.badge}
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
