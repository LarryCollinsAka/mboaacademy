import { LEARNING_OUTCOMES } from "@/data/testimonials";
import { CheckCircle2, ClipboardCheck, MessageSquareText, Workflow, FileCheck2 } from "lucide-react";

const icons = [MessageSquareText, Workflow, FileCheck2, ClipboardCheck];

export function TestimonialsSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Practical learning outcomes
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            What you will learn to <span className="gold-gradient-text">demonstrate</span>
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            We do not substitute invented testimonials or job claims for evidence. Each program should make its practice tasks, expected deliverables, and assessment criteria clear.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {LEARNING_OUTCOMES.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <article key={item.id} className="mercor-card p-7 rounded-2xl border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-zinc-400">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.examples.map((example) => (
                        <span key={example} className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-300">{example}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
