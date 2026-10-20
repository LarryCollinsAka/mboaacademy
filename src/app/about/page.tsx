"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Star, MapPin, CheckCircle2, Sun, Wifi, ShieldCheck, Clock, Award, Compass } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f1] text-[#0d1210] selection:bg-[#ffcd00] selection:text-black">
      <Navbar />

      <main className="flex-1 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffcd00]/20 border border-[#ffcd00] text-xs font-bold text-[#0d1210]">
              <Star className="w-3.5 h-3.5 fill-[#0d1210]" />
              Mission & Assessment Standards
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-[#0d1210] tracking-tight">
              Connecting learning, <span className="underline decoration-[#ffcd00] decoration-wavy">practical work, and contribution</span> across value chains.
            </h1>
            <p className="text-[#4d5953] text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              HCIL Academy is built around a practical idea: people should understand the work that needs to be done, develop the capabilities to contribute, and demonstrate what they can do. Financial literacy, independent work, and entrepreneurship can support that journey, but they do not define every learner’s goals.
            </p>
          </div>

          {/* Core Beliefs (Directly from user's manifesto) */}
          <div className="cream-card p-8 sm:p-12 rounded-3xl bg-white border border-[#0d1210]/10 shadow-sm space-y-8">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#059669]">
                Our Core Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0d1210]">
                Every Role Can Contribute to Value.
              </h2>
              <p className="text-xs sm:text-sm text-[#4d5953] leading-relaxed">
                Knowledge gives context. Practice builds capability. Clear evidence helps others understand what you can do. HCIL connects role-specific tasks to the customers, teams, processes, and outcomes they support. Financial literacy and ownership are useful supporting topics, not mandatory destinations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#0d1210]/5">
              <div className="p-5 rounded-2xl bg-[#fbf9f1] border border-[#0d1210]/5 space-y-2">
                <span className="text-xs font-black text-[#0d1210] uppercase tracking-wider">Employment</span>
                <p className="text-xs text-[#4d5953] leading-relaxed">
                  A valuable path. Learn the standards, tools, communication, and handoffs that help you contribute reliably within a team or organization.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#fbf9f1] border border-[#0d1210]/5 space-y-2">
                <span className="text-xs font-black text-[#0d1210] uppercase tracking-wider">Freelancing & Services</span>
                <p className="text-xs text-[#4d5953] leading-relaxed">
                  An option for people who want to offer services independently. Learn to define scope, communicate expectations, document deliverables, and understand costs.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#fbf9f1] border border-[#0d1210]/5 space-y-2">
                <span className="text-xs font-black text-[#0d1210] uppercase tracking-wider">Enterprise & Assets</span>
                <p className="text-xs text-[#4d5953] leading-relaxed">
                  One possible path. People who choose entrepreneurship can learn to document processes, coordinate teams, test demand, and build systems that continue to work as the organization grows.
                </p>
              </div>
            </div>
          </div>

          {/* Assessment Standards: Practical Evidence Alongside Credentials */}
          <div className="space-y-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#059669]">
                Objective Proof-of-Work
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0d1210]">
                Practical Evidence Alongside Recognized Credentials
              </h2>
              <p className="text-xs text-[#4d5953]">
                We do not dismiss conventional credentials, but we know employers and clients hire for execution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="cream-card p-6 rounded-2xl bg-white border border-[#0d1210]/10 space-y-3 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0d1210]">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>Transparent Assessment Rubrics</span>
                </div>
                <p className="text-xs text-[#4d5953] leading-relaxed">
                  Programs should publish clear assessment criteria and identify which tasks receive feedback or formal review. Assessment methods and reviewer availability depend on the specific program.
                </p>
              </div>

              <div className="cream-card p-6 rounded-2xl bg-white border border-[#0d1210]/10 space-y-3 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0d1210]">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>Role-Based Scenarios & Guided Simulations</span>
                </div>
                <p className="text-xs text-[#4d5953] leading-relaxed">
                  Learners work through realistic briefs, calculate the economic impact of their work, and present auditable deliverables that clients can review.
                </p>
              </div>
            </div>
          </div>

          {/* Campus Footprint: Truthful distinction between Active Online and Planned Hubs */}
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#059669]">
                Learning Environments
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0d1210]">
                Online / Hybrid Options & Planned Physical Hubs
              </h2>
              <p className="text-xs text-[#4d5953]">
                Delivery options are confirmed per published cohort. Physical learning spaces in Douala and Yaoundé remain planned initiatives until availability is explicitly announced.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Douala Hub */}
              <div className="cream-card p-8 rounded-3xl bg-white border border-[#0d1210]/10 space-y-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#ffcd00]/20 flex items-center justify-center text-[#0d1210]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0d1210]">Douala Innovation Hub</h3>
                      <p className="text-xs text-[#5f6c65]">Akwa Business District, Douala</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#ffcd00]/30 text-[#0d1210]">
                    Pilot Planning Phase
                  </span>
                </div>

                <p className="text-xs text-[#4d5953] leading-relaxed">
                  Proposed future learning space. Facilities, equipment, opening dates, and in-person support are not available commitments until a cohort announcement confirms them.
                </p>

                <div className="grid grid-cols-2 gap-2 text-[11px] text-[#5f6c65] pt-2 border-t border-[#0d1210]/5">
                  <div className="flex items-center gap-1.5">
                    <Sun className="w-3.5 h-3.5 text-[#059669]" />
                    <span>Industrial Solar Inverter</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Wifi className="w-3.5 h-3.5 text-[#059669]" />
                    <span>Redundant Fiber Connection</span>
                  </div>
                </div>
              </div>

              {/* Yaounde Hub */}
              <div className="cream-card p-8 rounded-3xl bg-white border border-[#0d1210]/10 space-y-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#ffcd00]/20 flex items-center justify-center text-[#0d1210]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0d1210]">Yaoundé Tech Campus</h3>
                      <p className="text-xs text-[#5f6c65]">Bastos Innovation Quarter, Yaoundé</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#ffcd00]/30 text-[#0d1210]">
                    Pilot Planning Phase
                  </span>
                </div>

                <p className="text-xs text-[#4d5953] leading-relaxed">
                  Planned collaborative sprint rooms in Bastos designed for peer-led accountability pods, customer discovery mock interviews, and project defenses.
                </p>

                <div className="grid grid-cols-2 gap-2 text-[11px] text-[#5f6c65] pt-2 border-t border-[#0d1210]/5">
                  <div className="flex items-center gap-1.5">
                    <Sun className="w-3.5 h-3.5 text-[#059669]" />
                    <span>Hybrid Solar Backup</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Wifi className="w-3.5 h-3.5 text-[#059669]" />
                    <span>High-Speed Broadband</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-6">
            <Link
              href="/courses"
              className="btn-dark px-8 py-4 rounded-full text-xs font-bold inline-flex items-center gap-2 shadow-sm"
            >
              Explore Initial Launch Tracks
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
