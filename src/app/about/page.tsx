import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Star, MapPin, CheckCircle2, Users, Sun, Wifi, ShieldCheck, HeartHandshake } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const leadership = [
    {
      name: "Dr. Paul Ebanda",
      role: "Founder & Head of Pedagogy",
      bio: "Ex-Google Senior Staff Engineer and African Tech Fellow. Passionate about bringing world-class systems engineering directly to youth in Cameroon and across Africa.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Marcelle Nguena",
      role: "VP of Industry Placements",
      bio: "Former Tech Recruiter connecting African engineering talent to high-growth startups in San Francisco, London, Paris, and Kigali.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Cedric Fomekong",
      role: "Lead AI & Graph Architect",
      bio: "Researcher in Knowledge Graphs and Vector Embeddings. Leads applied AI curricula covering Qdrant, FalkorDB, and production LLMs.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#090a0f] text-slate-100 selection:bg-amber-400 selection:text-black">
      <Navbar />

      <main className="flex-1 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/25">
              <Star className="w-3.5 h-3.5 fill-current" />
              Our Mission & Campuses
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
              Building the Future of African Tech, <span className="gold-gradient-text">One World-Class Engineer at a Time</span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mx-auto">
              Mboa Academy was born in Cameroon with an uncompromising premise: African engineers possess unlimited talent, but deserve world-tier physical learning environments, high-speed connectivity, and an AI-accelerated curriculum.
            </p>
          </div>

          {/* Physical Campuses Showcase */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  Physical Footprint
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  Our On-Site Innovation Hubs
                </h2>
              </div>
              <p className="text-xs text-zinc-400 max-w-md">
                Equipped with industrial solar backups, low-latency gigabit fiber, and 24/7 dedicated engineering desks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Douala Hub */}
              <div className="mercor-card p-8 rounded-3xl border border-amber-500/30 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Douala Innovation Hub</h3>
                      <p className="text-xs text-zinc-400">Akwa Business District, Douala</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Active Lab
                  </span>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  Located in the economic heartbeat of Cameroon, our Douala campus houses 60 dedicated developer stations, 2 hardware test benches, an amphitheater for live code pitch days, and silent focus booths.
                </p>

                <div className="grid grid-cols-2 gap-3 text-xs text-zinc-400 pt-2 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <Sun className="w-4 h-4 text-amber-400" />
                    <span>25kVA Solar Inverter</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wifi className="w-4 h-4 text-emerald-400" />
                    <span>1Gbps Redundant Fiber</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-amber-400" />
                    <span>Daily Mentor Office Hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-red-400" />
                    <span>Access 8:00 AM - 9:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Yaounde Hub */}
              <div className="mercor-card p-8 rounded-3xl border border-white/10 hover:border-amber-500/30 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Yaounde Tech Campus</h3>
                      <p className="text-xs text-zinc-400">Bastos Diplomatic Quarter, Yaounde</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Active Lab
                  </span>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  Situated in Bastos, our Yaounde tech space hosts collaborative software sprint rooms, mentor breakout areas, high-speed satellite backup, and our applied AI experimentation team.
                </p>

                <div className="grid grid-cols-2 gap-3 text-xs text-zinc-400 pt-2 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <Sun className="w-4 h-4 text-amber-400" />
                    <span>Dual Solar-Grid Hybrid</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wifi className="w-4 h-4 text-emerald-400" />
                    <span>Low-Latency Fiber + Starlink</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-amber-400" />
                    <span>Weekly Mock Interviews</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-red-400" />
                    <span>Quiet Coding Rooms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pedagogy Pillars */}
          <div className="mercor-card p-10 sm:p-14 rounded-3xl border border-amber-500/20 bg-gradient-to-b from-[#10131d] to-[#090a0f]">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
              Our 3 Educational Pillars
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="text-amber-400 text-3xl font-extrabold font-mono">01.</div>
                <h3 className="text-lg font-bold text-white">Production-Ready Code</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  No toy apps or superficial tutorials. Every student writes production code with TypeScript, tests, database migrations, and CI/CD pipelines deployed live to Vercel.
                </p>
              </div>

              <div className="space-y-3">
                <div className="text-amber-400 text-3xl font-extrabold font-mono">02.</div>
                <h3 className="text-lg font-bold text-white">AI-Native Engineering</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  We integrate modern vector search (Qdrant) and graph databases (FalkorDB). Students learn how to build real-world cognitive architectures and high-throughput systems.
                </p>
              </div>

              <div className="space-y-3">
                <div className="text-amber-400 text-3xl font-extrabold font-mono">03.</div>
                <h3 className="text-lg font-bold text-white">High-Stakes Accountability</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Physical presence or scheduled live syncs keep students engaged. Pair programming, weekly project presentations, and code review gauntlets build unstoppable confidence.
                </p>
              </div>
            </div>
          </div>

          {/* Academic Leadership */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Mentorship by Practicing Engineers
              </h2>
              <p className="text-xs text-zinc-400">
                You are taught directly by professionals who build and deploy enterprise software daily.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadership.map((leader, lIdx) => (
                <div
                  key={lIdx}
                  className="mercor-card p-6 rounded-2xl space-y-4 hover:border-amber-500/40 transition-colors"
                >
                  <img
                    src={leader.avatar}
                    alt={leader.name}
                    className="w-20 h-20 rounded-2xl object-cover border-2 border-amber-500/30"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-white">{leader.name}</h3>
                    <p className="text-xs text-amber-400 font-semibold">{leader.role}</p>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center py-6">
            <Link
              href="/courses"
              className="gold-btn px-8 py-4 rounded-xl text-sm font-semibold inline-flex items-center gap-2"
            >
              Explore Available Cohorts & Apply
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
