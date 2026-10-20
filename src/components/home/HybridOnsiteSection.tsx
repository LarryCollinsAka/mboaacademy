import { Wifi, Sun, Cpu, Users, Laptop, Award } from "lucide-react";

const deliveryPrinciples = [
  {
    icon: Laptop,
    title: "Online learning where offered",
    description: "Course pages should state the learning materials, communication channels, and expected learner workload available for each published cohort.",
    badge: "Cohort-specific",
  },
  {
    icon: Users,
    title: "Guided practice and feedback",
    description: "Where review or mentoring is included, the cohort description should explain the format, frequency, and scope of that support.",
    badge: "Confirm before enrolling",
  },
  {
    icon: Award,
    title: "Evidence of capability",
    description: "Learners should know which tasks they will complete, what work samples they can retain, and how assessment criteria will be shared.",
    badge: "Clear expectations",
  },
  {
    icon: Wifi,
    title: "Reliable access planning",
    description: "Learners can review device, connectivity, and software requirements before committing to a course.",
    badge: "Practical readiness",
  },
  {
    icon: Cpu,
    title: "Tools matched to the role",
    description: "Practice should reflect the tasks being taught. Specific software access or vendor certification is included only when stated in the program details.",
    badge: "Role-relevant",
  },
  {
    icon: Sun,
    title: "Physical hubs are a future initiative",
    description: "Dedicated spaces in Douala and Yaoundé are planned. Facilities, opening dates, and in-person support are not commitments until officially confirmed.",
    badge: "Planned, not guaranteed",
  },
];

export function HybridOnsiteSection() {
  return (
    <section className="relative border-t border-white/5 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
            Learning delivery and support
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Clear learning expectations, <span className="gold-gradient-text">confirmed per cohort</span>
          </h2>
          <p className="text-base leading-relaxed text-zinc-400">
            HCIL’s goal is to connect practice to the work a role contributes across a value chain. Course format, access to tools, feedback, and physical facilities should be described honestly for each offering rather than promised universally.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {deliveryPrinciples.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="mercor-card rounded-2xl border border-white/10 p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-amber-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-zinc-300">{item.badge}</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
