import Link from "next/link";
import { Sparkles, BrainCircuit, Network, BookOpen, Bot, CheckCircle2, ArrowRight } from "lucide-react";

export function AIFeatureSpotlight() {
  const capabilities = [
    {
      icon: Bot,
      title: "Marketplace-Style AI Career Matcher",
      description: "Answer a 2-minute diagnostic questionnaire about your goals, coding comfort, and career timeline. Our AI computes your optimal skill path.",
      tag: "For Prospective Students",
    },
    {
      icon: Network,
      title: "FalkorDB Graph Skill Trees",
      description: "Understand the true prerequisite dependencies of modern software engineering. We don't teach isolated tricks; we teach connected graph ontologies.",
      tag: "Powered by FalkorDB",
    },
    {
      icon: BrainCircuit,
      title: "Qdrant Vector RAG Search",
      description: "Ask questions naturally about any lecture, code snippet, or slide. Qdrant semantic search pulls the exact seconds of the lecture video or note.",
      tag: "Powered by Qdrant",
    },
    {
      icon: BookOpen,
      title: "AI Lesson Planning & Lecture Summaries",
      description: "Instructors generate structured multi-module lesson blueprints instantly. Students get automated executive summaries and key bullet notes.",
      tag: "For Students & Instructors",
    },
  ];

  return (
    <section className="py-24 border-t border-white/5 relative overflow-hidden bg-gradient-to-b from-[#090a0f] via-[#0d0f17] to-[#090a0f]">
      {/* Background Amber & Emerald radiance */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute left-0 bottom-10 w-96 h-96 bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            Next-Generation AI EdTech
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            An LMS Engineered with <span className="gold-gradient-text">Cognitive Intelligence</span>
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            Mboa Academy combines <strong className="text-zinc-200">Qdrant Vector Databases</strong> and <strong className="text-zinc-200">FalkorDB Knowledge Graphs</strong> to personalize your education, answer questions in real-time, and guarantee skill mastery.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="mercor-card p-8 rounded-2xl relative overflow-hidden group hover:border-amber-500/40"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white/5 text-amber-400/90 border border-amber-500/20">
                    {cap.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {cap.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Interactive Callout banner */}
        <div className="mt-12 mercor-card p-8 rounded-2xl border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-amber-500/10 via-black to-emerald-500/10">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">
              Try the AI Course & Career Advisor
            </h4>
            <p className="text-sm text-zinc-400">
              Not sure which track to choose? Let our AI match your career objectives to the right cohort in 60 seconds.
            </p>
          </div>

          <Link
            href="/ai-advisor"
            className="gold-btn px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 shrink-0"
          >
            <Sparkles className="w-4 h-4 text-black" />
            <span>Launch AI Advisor</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </Link>
        </div>

      </div>
    </section>
  );
}
