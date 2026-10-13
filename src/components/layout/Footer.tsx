"use client";

import Link from "next/link";
import { MapPin, Globe, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

export function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#071f15] text-[#9ca7a1] pt-16 pb-12 text-xs border-t border-white/5 relative">
      {/* Top subtle Cameroon Flag tricolor line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#007a3d] via-[#ce1126] to-[#fcd116]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-10 border-b border-white/10">
          
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#ffcd00] flex items-center justify-center font-black text-[#071f15] text-xs">
                HCIL
              </div>
              <span className="text-base font-black text-white tracking-tight">
                HCIL ACADEMY
              </span>
            </div>
            
            <p className="text-xs text-zinc-300 leading-relaxed max-w-sm">
              Equipping ambitious creators with financial intelligence, practical capabilities, and asset-building discipline. Moving beyond schooling into genuine economic agency.
            </p>

            <div className="pt-2 space-y-2 text-[11px] text-zinc-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#ffcd00] shrink-0" />
                <span><strong>Douala Campus:</strong> Akwa Innovation Hub, Douala, Cameroon</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#ffcd00] shrink-0" />
                <span><strong>Yaounde Campus:</strong> Bastos Tech Campus, Yaounde, Cameroon</span>
              </div>
            </div>
          </div>

          {/* Pillars */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Core Pillars
            </h4>
            <ul className="space-y-2 text-zinc-300">
              <li>
                <Link href="/courses" className="hover:text-[#ffcd00] transition-colors">
                  1. Money Intelligence
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-[#ffcd00] transition-colors">
                  2. Value-Creating Skills
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-[#ffcd00] transition-colors">
                  3. Entrepreneurship & Sales
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-[#ffcd00] transition-colors">
                  4. Ownership & Asset Building
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#ffcd00] transition-colors">
                  5. Enterprise Lab
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Flagship & Studio
            </h4>
            <ul className="space-y-2 text-zinc-300">
              <li>
                <Link href="/courses/from-skill-to-enterprise" className="text-[#ffcd00] font-semibold hover:underline flex items-center gap-1">
                  From Skill to Enterprise (Pilot) <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link href="/ai-advisor" className="hover:text-[#ffcd00] transition-colors">
                  Financial IQ & Skill Matcher
                </Link>
              </li>
              <li>
                <Link href="/lms/dashboard" className="hover:text-[#ffcd00] transition-colors">
                  Student Studio & Notes
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#ffcd00] transition-colors">
                  Campus Lab Facilities
                </Link>
              </li>
            </ul>
          </div>

          {/* Technology & Enterprise */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Architecture
            </h4>
            <p className="text-[11px] text-zinc-300 leading-relaxed">
              Built on PostgreSQL, Qdrant Vector Search, FalkorDB Knowledge Graphs, and Redis Caching. Deployed on Vercel Edge.
            </p>
            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] bg-white/10 text-[#ffcd00] border border-[#ffcd00]/30 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffcd00] animate-pulse" />
                Next Cohort Applications Open
              </span>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-300 gap-4">
          <p>© {year} HCIL Academy. Learn. Build. Earn. Own. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>🇨🇲 Founded in Cameroon &bull; Built for Global Economic Agency</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
