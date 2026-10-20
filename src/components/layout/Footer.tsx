import Link from "next/link";

export function Footer() {
  return <footer className="mt-auto border-t border-[#0d1210]/10 bg-white px-4 py-10 text-[#34403b]">
    <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 md:grid-cols-4">
      <div className="space-y-3"><Link href="/" className="font-black tracking-tight text-[#0d1210]">HCIL Academy</Link><p className="max-w-xs text-sm leading-relaxed">Learn practical capabilities, demonstrate what you can do, and build pathways toward meaningful work.</p></div>
      <div><h2 className="mb-3 text-xs font-black uppercase tracking-wider text-[#0d1210]">Explore</h2><ul className="space-y-2 text-sm"><li><Link className="hover:text-[#059669]" href="/courses">Courses</Link></li><li><Link className="hover:text-[#059669]" href="/about">About HCIL</Link></li><li><Link className="hover:text-[#059669]" href="/blog">Insights</Link></li></ul></div>
      <div><h2 className="mb-3 text-xs font-black uppercase tracking-wider text-[#0d1210]">Practice</h2><ul className="space-y-2 text-sm"><li><Link className="hover:text-[#059669]" href="/labs">Labs</Link></li><li><Link className="hover:text-[#059669]" href="/tools">Tools</Link></li><li><Link className="hover:text-[#059669]" href="/ai-advisor">AI Career Advisor</Link></li></ul></div>
      <div><h2 className="mb-3 text-xs font-black uppercase tracking-wider text-[#0d1210]">Learning spaces</h2><ul className="space-y-2 text-sm"><li><Link className="hover:text-[#059669]" href="/lms/dashboard">Student Studio</Link></li><li><Link className="hover:text-[#059669]" href="/lms/instructor/dashboard">Instructor Studio</Link></li><li><Link className="hover:text-[#059669]" href="/login">Sign in</Link></li></ul></div>
    </div><div className="mx-auto mt-8 max-w-7xl border-t border-[#0d1210]/10 pt-5 text-xs text-[#5f6c65]">© {new Date().getFullYear()} HCIL Academy. All rights reserved.</div>
  </footer>;
}
