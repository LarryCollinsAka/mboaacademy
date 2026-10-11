import { Wifi, Sun, Cpu, Users, Laptop, Award } from "lucide-react";

export function HybridOnsiteSection() {
  const perks = [
    {
      icon: Sun,
      title: "Solar Backup & 24/7 Power",
      description: "Zero electricity interruptions. Dedicated industrial solar power systems ensure your code runs non-stop without downtime.",
      badge: "Onsite Lab Guarantee",
      color: "text-amber-400",
    },
    {
      icon: Wifi,
      title: "Gigabit Fiber Broadband",
      description: "Blazing-fast fiber lines dedicated for software builds, docker pulls, model fine-tuning, and seamless live pair-programming.",
      badge: "High-Speed",
      color: "text-emerald-400",
    },
    {
      icon: Cpu,
      title: "Modern Engineering Hardware",
      description: "High-spec workstations, dual monitors, and private project suites for group capstone sprints and production mock tests.",
      badge: "Hardware Equipped",
      color: "text-amber-400",
    },
    {
      icon: Users,
      title: "Daily Onsite Mentorship",
      description: "Direct in-person guidance from seasoned senior engineers who review your pull requests and unblock bugs in real-time.",
      badge: "In-Person Support",
      color: "text-red-400",
    },
    {
      icon: Laptop,
      title: "Synchronized Online LMS Access",
      description: "Review every lecture anytime on our AI-powered student portal. Auto-saved lecture notes, assignment dropboxes, and quizzes.",
      badge: "Hybrid Flexibility",
      color: "text-amber-400",
    },
    {
      icon: Award,
      title: "Hiring Network & Demo Day",
      description: "Pitch your capstone projects directly to global remote tech companies, venture studios, and local African tech unicorns.",
      badge: "Career Outcomes",
      color: "text-emerald-400",
    },
  ];

  return (
    <section className="py-20 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Hybrid & Onsite Immersion
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Why Learning <span className="gold-gradient-text">On-Site & Hybrid</span> Outperforms Pure Online Video Courses
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            Most online tutorials have a 95% dropout rate. At Mboa Academy, our physical innovation labs in Douala and Yaounde surround you with driven peers and mentors, creating a high-accountability environment where you actually finish and get hired.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.map((perk, i) => {
            const Icon = perk.icon;
            return (
              <div
                key={i}
                className="mercor-card p-6 rounded-2xl relative overflow-hidden group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-amber-500/30 transition-colors">
                    <Icon className={`w-6 h-6 ${perk.color}`} />
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white/5 text-zinc-300 border border-white/10">
                    {perk.badge}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {perk.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {perk.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Campus Location Footprint Banner */}
        <div className="mt-12 p-6 rounded-2xl mercor-card border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-amber-500/5 via-transparent to-emerald-500/5">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-semibold text-white flex items-center justify-center md:justify-start gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
              Visit Our Campuses in Person
            </h4>
            <p className="text-xs text-zinc-400">
              Douala Campus (Akwa) &bull; Yaounde Campus (Bastos) &bull; Mon - Sat: 8:00 AM - 9:00 PM
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-amber-400 font-medium">Free Campus Tour Available</span>
            <a
              href="/about"
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-white/10 text-white hover:bg-white/20 transition-all border border-white/15"
            >
              Book a Tour
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
