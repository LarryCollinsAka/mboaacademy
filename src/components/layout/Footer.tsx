import Link from "next/link";
import { Star, MapPin, Mail, Globe, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07080b] pt-16 pb-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <Star className="w-4 h-4 text-black fill-black" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                MBOA <span className="gold-gradient-text">ACADEMY</span>
              </span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              The premier career academy for on-demand job skills in Africa and beyond. Accelerated hybrid and on-site cohorts training world-class engineers, AI builders, and designers.
            </p>
            
            {/* Physical Campuses */}
            <div className="pt-2 space-y-2 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span><strong className="text-zinc-200">Douala Campus:</strong> Akwa Tech Hub, Cameroon</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span><strong className="text-zinc-200">Yaounde Campus:</strong> Bastos Innovation Center, Cameroon</span>
              </div>
            </div>
          </div>

          {/* Career Tracks */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
              Career Tracks
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/courses/full-stack-nextjs-postgres" className="hover:text-amber-400 transition-colors">
                  Full-Stack Next.js 16
                </Link>
              </li>
              <li>
                <Link href="/courses/applied-ai-qdrant-falkordb" className="hover:text-amber-400 transition-colors">
                  AI, Vector & Graph DBs
                </Link>
              </li>
              <li>
                <Link href="/courses/cloud-docker-devops" className="hover:text-amber-400 transition-colors">
                  Cloud & Production DevOps
                </Link>
              </li>
              <li>
                <Link href="/courses/ui-ux-product-design" className="hover:text-amber-400 transition-colors">
                  UI/UX & Product Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Platform & AI */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
              Academy & AI LMS
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/ai-advisor" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  AI Career Matcher <ArrowUpRight className="w-3 h-3 text-amber-500" />
                </Link>
              </li>
              <li>
                <Link href="/lms/dashboard" className="hover:text-amber-400 transition-colors">
                  Student Portal & Notes
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">
                  On-site Campus Labs
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-amber-400 transition-colors">
                  Career Intelligence Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Tech Architecture badge */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
              Enterprise Tech Stack
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Engineered with <span className="text-white font-medium">Next.js 16</span>, <span className="text-white font-medium">PostgreSQL</span>, <span className="text-white font-medium">Qdrant Vector DB</span>, <span className="text-white font-medium">FalkorDB Graph</span>, <span className="text-white font-medium">Redis</span>, and Vercel.
            </p>
            <div className="pt-2 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Next Cohort Admissions Open
              </span>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
          <p>© {new Date().getFullYear()} Mboa Academy Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-amber-400/80">Proudly Founded in Cameroon &bull; Built for Global Careers</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
