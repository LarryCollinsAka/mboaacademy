"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Sparkles,
  BookOpen,
  Copy,
  Check,
  Download,
  BrainCircuit,
  Wand2,
  ListOrdered,
  FileText,
  HelpCircle,
  Lightbulb
} from "lucide-react";

export function AILessonPlannerPage() {
  const [topic, setTopic] = useState("PostgreSQL Indexing & Redis Caching with Next.js 16");
  const [level, setLevel] = useState("Intermediate");
  const [duration, setDuration] = useState("45");
  const [format, setFormat] = useState("Hybrid (Onsite Lab + Remote Stream)");
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  // Generated Plan State
  const [generatedPlan, setGeneratedPlan] = useState({
    title: "",
    summary: "",
    prerequisites: [] as string[],
    timeline: [] as Array<{ min: string; title: string; desc: string }>,
    codeSnippet: "",
    assignment: { title: "", instructions: "", rubric: "" },
  });

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    setTimeout(() => {
      setIsGenerating(false);
      setHasGenerated(true);
      setGeneratedPlan({
        title: `Masterclass: ${topic}`,
        summary: `This high-impact lesson trains students on building production data pipelines. By combining PostgreSQL indexes with Redis in-memory caching, application read latencies drop from ~120ms to under 4ms on edge deployments.`,
        prerequisites: [
          "Understanding of SQL relational schemas and primary keys",
          "Basic familiarity with async/await in TypeScript",
          "Next.js App Router route handlers",
        ],
        timeline: [
          { min: "00-10m", title: "Motivation & Architecture Dilemma", desc: "Live profiling of a slow un-indexed query on 100k rows. Explaining B-Tree indexes and query plans (EXPLAIN ANALYZE)." },
          { min: "10-25m", title: "Prisma Composite Indexing", desc: "Adding @@index to Prisma schema, running migration, and inspecting execution times." },
          { min: "25-35m", title: "Redis Layer Invalidation", desc: "Setting Upstash/Redis cache-aside pattern with TTL revalidation and stale-while-revalidate." },
          { min: "35-45m", title: "Hands-on Student Lab & Verification", desc: "Students apply indexes to their local capstones in the Douala/Yaounde physical lab and submit before/after benchmark screenshots." },
        ],
        codeSnippet: `// lib/cache.ts - Redis Cache-Aside Pattern
import { redisService } from "@/lib/redis";
import { db } from "@/lib/db";

export async function getCachedCourses(locale: string) {
  const cacheKey = \`courses:\${locale}\`;
  const cached = await redisService.get(cacheKey);
  if (cached) return JSON.parse(cached);

  const fresh = await db.course.findMany({ where: { published: true } });
  await redisService.set(cacheKey, JSON.stringify(fresh), 3600); // 1h TTL
  return fresh;
}`,
        assignment: {
          title: "Lab Task: Benchmark & Optimize an Un-Indexed Query",
          instructions: "Seed a local PostgreSQL database with 50,000 records. Write a complex relational query, run EXPLAIN ANALYZE, apply a B-Tree composite index, and cache results with Redis. Document the latency drop in your student notes.",
          rubric: "100 pts total: 40 pts Index creation, 30 pts Redis caching, 30 pts documentation and GitHub commit.",
        },
      });
    }, 1400);
  };

  const copyToClipboard = () => {
    const text = `# ${generatedPlan.title}\n\n## Executive Summary\n${generatedPlan.summary}\n\n## Lesson Timeline\n${generatedPlan.timeline
      .map((t) => `- **${t.min}**: ${t.title} - ${t.desc}`)
      .join("\n")}\n\n## Code Pattern\n\`\`\`typescript\n${generatedPlan.codeSnippet}\n\`\`\`\n\n## Assignment\n${generatedPlan.assignment.title}\n${generatedPlan.assignment.instructions}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#090a0f] text-slate-100 selection:bg-amber-400 selection:text-black">
      <Navbar />

      <main className="flex-1 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Wand2 className="w-3.5 h-3.5" />
              Instructor & Student AI Toolkit
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              AI Lesson Planner & <span className="gold-gradient-text">Lecture Generator</span>
            </h1>
            <p className="text-zinc-400 text-base leading-relaxed">
              Design complete curriculum blueprints, executive lecture summaries, code walk-throughs, and lab assignments in seconds.
            </p>
          </div>

          {/* Form & Generation Workspace */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Config (4 Cols) */}
            <div className="lg:col-span-4 mercor-card p-6 rounded-3xl border border-white/10 space-y-5 bg-[#0c0e14]">
              <div className="flex items-center gap-2 pb-3 border-b border-white/5">
                <BrainCircuit className="w-5 h-5 text-amber-400" />
                <h3 className="text-sm font-bold text-white">Lesson Blueprint Parameters</h3>
              </div>

              <form onSubmit={handleGenerate} className="space-y-4 text-xs">
                <div>
                  <label className="font-semibold text-zinc-300">Topic or Technology:</label>
                  <input
                    required
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="e.g. Qdrant Vector Search with Next.js 16"
                    className="w-full mt-1.5 px-3 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="font-semibold text-zinc-300">Target Skill Level:</label>
                  <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="w-full mt-1.5 px-3 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="Beginner">Beginner (Foundations & Syntax)</option>
                    <option value="Intermediate">Intermediate (Architecture & APIs)</option>
                    <option value="Advanced">Advanced (High-Throughput & Production)</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-zinc-300">Duration (Minutes):</label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full mt-1.5 px-3 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="20">20 Minutes (Bite-Sized Sprint)</option>
                    <option value="45">45 Minutes (Full Deep-Dive Lecture)</option>
                    <option value="90">90 Minutes (On-Site Interactive Lab Workshop)</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-zinc-300">Teaching Delivery Format:</label>
                  <select
                    value={format}
                    onChange={(e) => setFormat(e.target.value)}
                    className="w-full mt-1.5 px-3 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="Hybrid">Hybrid (On-Site Lab + Remote Stream)</option>
                    <option value="Onsite">On-Site Only (Physical Douala/Yaounde)</option>
                    <option value="Online">Online LMS Self-Paced</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isGenerating}
                  className="gold-btn w-full py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 mt-2"
                >
                  {isGenerating ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>Generating Lesson Blueprint...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-black" />
                      <span>Generate Full Lesson Plan</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Generated Plan Output (8 Cols) */}
            <div className="lg:col-span-8 mercor-card p-6 sm:p-8 rounded-3xl border border-amber-500/30 space-y-6 bg-[#0c0e14]">
              {hasGenerated ? (
                <div className="space-y-6 animate-in fade-in duration-200">
                  
                  {/* Top Bar Actions */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                        Generated Blueprint & Summary
                      </span>
                      <h2 className="text-xl font-bold text-white mt-0.5">
                        {generatedPlan.title}
                      </h2>
                    </div>

                    <button
                      onClick={copyToClipboard}
                      className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-zinc-200 border border-white/10 flex items-center gap-1.5 transition-colors self-start sm:self-auto"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-amber-400" />
                          <span>Copy Markdown</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Summary Box */}
                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-2">
                    <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Lightbulb className="w-3.5 h-3.5" />
                      Executive Lecture Summary
                    </h3>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {generatedPlan.summary}
                    </p>
                  </div>

                  {/* Prerequisites */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                      Prerequisites:
                    </h3>
                    <ul className="text-xs text-zinc-400 space-y-1 list-disc list-inside">
                      {generatedPlan.prerequisites.map((p, idx) => (
                        <li key={idx}>{p}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Timeline */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                      Structured Timeline Breakdown ({duration} min):
                    </h3>
                    <div className="space-y-2">
                      {generatedPlan.timeline.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3 text-xs"
                        >
                          <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-mono text-[10px] shrink-0 font-bold">
                            {item.min}
                          </span>
                          <div>
                            <div className="font-bold text-white">{item.title}</div>
                            <div className="text-zinc-400 text-[11px] mt-0.5">{item.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Code Pattern */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                      Production Code Architecture:
                    </h3>
                    <pre className="p-4 rounded-xl bg-black border border-white/10 text-xs font-mono text-amber-300 overflow-x-auto leading-relaxed">
                      {generatedPlan.codeSnippet}
                    </pre>
                  </div>

                  {/* Assignment */}
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-white">
                      <FileText className="w-4 h-4 text-emerald-400" />
                      <span>{generatedPlan.assignment.title}</span>
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {generatedPlan.assignment.instructions}
                    </p>
                    <p className="text-[11px] text-zinc-500 italic">
                      Grading Criteria: {generatedPlan.assignment.rubric}
                    </p>
                  </div>

                </div>
              ) : (
                <div className="py-24 text-center space-y-4">
                  <div className="w-16 h-16 rounded-3xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto text-amber-400">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-white">
                      AI Lesson Generator Ready
                    </h3>
                    <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                      Configure your topic and parameters on the left and click &quot;Generate&quot; to build an industry-grade lesson plan.
                    </p>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default AILessonPlannerPage;
