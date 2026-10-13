"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { COURSES_DATA } from "@/data/courses";
import Link from "next/link";
import {
  Sparkles,
  Bot,
  BrainCircuit,
  Network,
  CheckCircle2,
  ArrowRight,
  Send,
  Target,
  Clock,
  MapPin,
  TrendingUp,
  RefreshCw
} from "lucide-react";

export default function AIAdvisorPage() {
  // Wizard state
  const [step, setStep] = useState<number>(1);
  const [goal, setGoal] = useState<string>("fullstack");
  const [experience, setExperience] = useState<string>("intermediate");
  const [learningMode, setLearningMode] = useState<string>("onsite_douala");
  const [timeCommitment, setTimeCommitment] = useState<string>("fulltime");
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [matchResult, setMatchResult] = useState<any | null>(null);

  // Chat advisor state
  const [chatMessages, setChatMessages] = useState<
    Array<{ sender: "user" | "ai"; text: string }>
  >([
    {
      sender: "ai",
      text: "Hello! I am Mboa AI, your Career & Admissions Advisor. Whether you're deciding between Full-Stack or AI Engineering, or wondering about job prospects in Douala, Yaounde, or remote international roles, I'm here to help!",
    },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isChatLoading, setIsChatLoading] = useState(false);

  const handleComputeMatch = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      let matchedCourse = COURSES_DATA[0];

      if (goal === "ai") {
        matchedCourse = COURSES_DATA[1];
      } else if (goal === "cloud") {
        matchedCourse = COURSES_DATA[2];
      } else if (goal === "design") {
        matchedCourse = COURSES_DATA[3];
      }

      setMatchResult({
        course: matchedCourse,
        compatibilityScore: 98,
        graphPrerequisites: [
          { name: "Git & Version Control", status: "Foundational" },
          { name: "Relational Modeling (Postgres)", status: "Target Focus" },
          { name: "Vector & Graph Ontologies", status: "High Advantage" },
        ],
        hiringOutlook: "Top 5% market demand with $1,500 - $3,500/mo remote starting salaries",
      });
      setStep(5); // Show results
    }, 1200);
  };

  const handleSendChatMessage = (text?: string) => {
    const q = text || chatInput;
    if (!q.trim()) return;

    setChatMessages((prev) => [...prev, { sender: "user", text: q }]);
    setChatInput("");
    setIsChatLoading(true);

    setTimeout(() => {
      let reply = "";
      const lower = q.toLowerCase();

      if (lower.includes("douala") || lower.includes("yaounde") || lower.includes("onsite")) {
        reply = "Our physical campuses in **Douala (Akwa)** and **Yaounde (Bastos)** feature continuous solar backup power, 1Gbps fiber internet, and daily on-site mentors. Attending on-site accelerates your learning velocity by 3x compared to pure self-study!";
      } else if (lower.includes("job") || lower.includes("salary") || lower.includes("remote")) {
        reply = "Graduates from our Full-Stack and AI tracks currently hold roles at international tech startups and local African fintechs, with average starting compensation between **$1,500 - $3,500/mo** for remote software engineering contracts.";
      } else if (lower.includes("beginner") || lower.includes("no experience")) {
        reply = "Don't worry! We offer a 2-week pre-cohort bootcamp covering terminal fundamentals, Git, and JavaScript logic to ensure you start your cohort with total confidence.";
      } else {
        reply = `That is an excellent career consideration. Based on our industry hiring partners, combining hands-on PostgreSQL, Next.js, and Vector/Graph DBs gives you an exceptional competitive edge. Would you like to schedule an in-person campus consultation?`;
      }

      setChatMessages((prev) => [...prev, { sender: "ai", text: reply }]);
      setIsChatLoading(false);
    }, 900);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#090a0f] text-slate-100 selection:bg-amber-400 selection:text-black">
      <Navbar />

      <main className="flex-1 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              Marketplace-Style AI Matcher
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              AI Career & Cohort <span className="gold-gradient-text">Advisor</span>
            </h1>
            <p className="text-zinc-400 text-base leading-relaxed">
              Powered by FalkorDB Graph dependencies and Qdrant semantic vectors. Answer 4 quick questions to find the high-impact career track tailored to your goals.
            </p>
          </div>

          {/* 2 Columns: Matcher Wizard & AI Live Chat */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 Cols: Preference Matcher Wizard */}
            <div className="lg:col-span-7 mercor-card p-6 sm:p-8 rounded-3xl border border-amber-500/30 space-y-8">
              
              {/* Stepper Progress */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Step {step <= 4 ? step : 4} of 4: Diagnostic Assessment
                </span>
                <span className="text-xs text-zinc-400">
                  {step === 5 ? "Analysis Complete" : `${step * 25}% Processed`}
                </span>
              </div>

              {/* STEP 1: Career Objective */}
              {step === 1 && (
                <div className="space-y-5 animate-in fade-in duration-150">
                  <div>
                    <h2 className="text-xl font-bold text-white">What is your dream career role?</h2>
                    <p className="text-xs text-zinc-400 mt-1">Select the discipline that excites you most:</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: "fullstack", title: "Full-Stack Web Engineer", desc: "Next.js, TypeScript, Postgres & Redis" },
                      { id: "ai", title: "AI & Graph Engineer", desc: "Qdrant Vector DB, FalkorDB, RAG & LLMs" },
                      { id: "cloud", title: "Cloud & DevOps Specialist", desc: "Docker, Kubernetes, Linux & CI/CD" },
                      { id: "design", title: "UI/UX & Product Designer", desc: "Design Systems, Figma & Frontend UX" },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setGoal(opt.id)}
                        className={`p-4 rounded-2xl border text-left transition-all ${
                          goal === opt.id
                            ? "border-amber-400 bg-amber-500/15 text-white shadow-lg shadow-amber-500/10"
                            : "border-white/10 text-zinc-300 hover:border-white/20 bg-white/[0.02]"
                        }`}
                      >
                        <div className="font-bold text-sm text-amber-400">{opt.title}</div>
                        <div className="text-xs text-zinc-400 mt-1">{opt.desc}</div>
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setStep(2)}
                    className="gold-btn w-full py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 mt-4"
                  >
                    <span>Continue to Technical Background</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* STEP 2: Current Technical Background */}
              {step === 2 && (
                <div className="space-y-5 animate-in fade-in duration-150">
                  <div>
                    <h2 className="text-xl font-bold text-white">What is your current coding background?</h2>
                    <p className="text-xs text-zinc-400 mt-1">This helps us customize prerequisite support:</p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { id: "beginner", title: "Total Beginner / Non-Technical", desc: "Little to no programming experience. Switching from other professions." },
                      { id: "intermediate", title: "Familiar with Basics (HTML/CSS/JS or Python)", desc: "Can write basic scripts and understand core logic, but want enterprise production skills." },
                      { id: "advanced", title: "Experienced Developer Looking to Upskill", desc: "Already working in tech; want to master cutting-edge Next.js, Vector DBs, and Graph DBs." },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setExperience(opt.id)}
                        className={`w-full p-4 rounded-2xl border text-left transition-all ${
                          experience === opt.id
                            ? "border-amber-400 bg-amber-500/15 text-white"
                            : "border-white/10 text-zinc-300 hover:border-white/20 bg-white/[0.02]"
                        }`}
                      >
                        <div className="font-bold text-sm text-amber-400">{opt.title}</div>
                        <div className="text-xs text-zinc-400 mt-1">{opt.desc}</div>
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      onClick={() => setStep(1)}
                      className="px-5 py-3 rounded-xl border border-white/10 text-xs font-semibold text-zinc-300 hover:text-white"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="gold-btn flex-1 py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
                    >
                      <span>Continue to Campus Preference</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Campus & Format Preference */}
              {step === 3 && (
                <div className="space-y-5 animate-in fade-in duration-150">
                  <div>
                    <h2 className="text-xl font-bold text-white">Where would you prefer to learn?</h2>
                    <p className="text-xs text-zinc-400 mt-1">Select your preferred learning hub:</p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { id: "onsite_douala", title: "Douala Innovation Hub (Akwa)", desc: "On-site desk with 24/7 solar power, 1Gbps fiber broadband, and daily in-person mentors." },
                      { id: "onsite_yaounde", title: "Yaounde Tech Campus (Bastos)", desc: "On-site desk with collaborative peer pods and live weekly code defense hackathons." },
                      { id: "online_global", title: "Hybrid / Global Online Live", desc: "Access high-definition interactive live streams, full LMS recordings, and remote mentor chat." },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setLearningMode(opt.id)}
                        className={`w-full p-4 rounded-2xl border text-left transition-all ${
                          learningMode === opt.id
                            ? "border-emerald-400 bg-emerald-500/15 text-white"
                            : "border-white/10 text-zinc-300 hover:border-white/20 bg-white/[0.02]"
                        }`}
                      >
                        <div className="font-bold text-sm text-emerald-400">{opt.title}</div>
                        <div className="text-xs text-zinc-400 mt-1">{opt.desc}</div>
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      onClick={() => setStep(2)}
                      className="px-5 py-3 rounded-xl border border-white/10 text-xs font-semibold text-zinc-300 hover:text-white"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setStep(4)}
                      className="gold-btn flex-1 py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
                    >
                      <span>Continue to Weekly Commitment</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4: Time Commitment */}
              {step === 4 && (
                <div className="space-y-5 animate-in fade-in duration-150">
                  <div>
                    <h2 className="text-xl font-bold text-white">What is your weekly time availability?</h2>
                    <p className="text-xs text-zinc-400 mt-1">We calibrate cohort intensity to match your schedule:</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setTimeCommitment("fulltime")}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        timeCommitment === "fulltime"
                          ? "border-amber-400 bg-amber-500/15 text-white"
                          : "border-white/10 text-zinc-300 hover:border-white/20 bg-white/[0.02]"
                      }`}
                    >
                      <div className="font-bold text-sm text-amber-400">Full-Time Immersion</div>
                      <div className="text-xs text-zinc-400 mt-1">35-40 hours / week. Fastest track to employment in 8-12 weeks.</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setTimeCommitment("parttime")}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        timeCommitment === "parttime"
                          ? "border-amber-400 bg-amber-500/15 text-white"
                          : "border-white/10 text-zinc-300 hover:border-white/20 bg-white/[0.02]"
                      }`}
                    >
                      <div className="font-bold text-sm text-amber-400">Evenings & Weekends</div>
                      <div className="text-xs text-zinc-400 mt-1">15-20 hours / week. Ideal for university students or working professionals.</div>
                    </button>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      onClick={() => setStep(3)}
                      className="px-5 py-3 rounded-xl border border-white/10 text-xs font-semibold text-zinc-300 hover:text-white"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleComputeMatch}
                      disabled={isAnalyzing}
                      className="gold-btn flex-1 py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
                    >
                      {isAnalyzing ? (
                        <>
                          <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>AI Computing Vector & Graph Match...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 text-black" />
                          <span>Generate My Personalized Match</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 5: MATCH RESULT DISPLAY */}
              {step === 5 && matchResult && (
                <div className="space-y-6 animate-in zoom-in-95 duration-200">
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <Target className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-emerald-400">Match Compatibility</div>
                        <div className="text-lg font-extrabold text-white">{matchResult.compatibilityScore}% Match Score</div>
                      </div>
                    </div>

                    <button
                      onClick={() => setStep(1)}
                      className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 border border-white/10 px-3 py-1.5 rounded-lg"
                    >
                      <RefreshCw className="w-3 h-3" />
                      Retake
                    </button>
                  </div>

                  {/* Recommended Course Card */}
                  <div className="mercor-card p-6 rounded-2xl border border-amber-500/40 space-y-4 bg-gradient-to-br from-amber-500/10 via-black to-emerald-500/10">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-amber-500 text-black">
                        Recommended Cohort
                      </span>
                      <span className="text-xs text-zinc-300 font-semibold">
                        {matchResult.course.durationWeeks} Weeks &bull; {matchResult.course.mode}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white">
                      {matchResult.course.title}
                    </h3>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {matchResult.course.description}
                    </p>

                    {/* FalkorDB Graph Skills Path */}
                    <div className="space-y-2 pt-3 border-t border-white/10">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400">
                        <Network className="w-4 h-4" />
                        <span>FalkorDB Skill Graph Roadmaps:</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {matchResult.graphPrerequisites.map((node: any, nIdx: number) => (
                          <div
                            key={nIdx}
                            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs"
                          >
                            <div className="font-bold text-white truncate">{node.name}</div>
                            <div className="text-[10px] text-amber-400 mt-0.5">{node.status}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Hiring Outlook */}
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-black/40 text-xs text-zinc-300">
                      <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{matchResult.hiringOutlook}</span>
                    </div>

                    {/* CTA */}
                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <Link
                        href={`/courses/${matchResult.course.slug}`}
                        className="gold-btn flex-1 py-3 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2"
                      >
                        <span>View Full Syllabus & Enroll</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <a
                        href="/about"
                        className="px-5 py-3 rounded-xl border border-white/15 text-xs font-semibold text-zinc-200 hover:text-white text-center"
                      >
                        Visit Campus First
                      </a>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Right 5 Cols: Live AI Chat Advisor Panel */}
            <div className="lg:col-span-5 mercor-card p-6 rounded-3xl border border-white/10 space-y-4 sticky top-28 bg-[#0c0e14]">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white">Mboa AI Admissions Chat</h3>
                    <p className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Online &bull; Ask anything
                    </p>
                  </div>
                </div>
              </div>

              {/* Chat Quick Questions */}
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => handleSendChatMessage("What is the job placement rate in Cameroon & globally?")}
                  className="px-2.5 py-1 rounded-md text-[10px] bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10"
                >
                  💼 Placement rate?
                </button>
                <button
                  onClick={() => handleSendChatMessage("Tell me about the Douala & Yaounde campuses")}
                  className="px-2.5 py-1 rounded-md text-[10px] bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10"
                >
                  🏢 Onsite facilities?
                </button>
                <button
                  onClick={() => handleSendChatMessage("Can I start with no coding background?")}
                  className="px-2.5 py-1 rounded-md text-[10px] bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10"
                >
                  🌱 For beginners?
                </button>
              </div>

              {/* Chat Stream Window */}
              <div className="h-80 overflow-y-auto space-y-3 p-3 rounded-2xl bg-black/50 border border-white/5 text-xs">
                {chatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col ${
                      msg.sender === "user" ? "items-end" : "items-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] p-3 rounded-2xl leading-relaxed whitespace-pre-wrap ${
                        msg.sender === "user"
                          ? "bg-amber-500 text-black font-medium"
                          : "bg-white/10 text-zinc-200 border border-white/5"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {isChatLoading && (
                  <div className="text-[11px] text-zinc-400 flex items-center gap-1.5 animate-pulse">
                    <Bot className="w-3.5 h-3.5 text-amber-400" />
                    <span>Mboa AI is responding...</span>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Ask a question about tuition, cohorts, or careers..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendChatMessage()}
                  className="flex-1 px-3 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white focus:outline-none focus:border-amber-500"
                />
                <button
                  onClick={() => handleSendChatMessage()}
                  className="gold-btn px-4 py-2.5 rounded-xl text-xs font-bold"
                >
                  <Send className="w-3.5 h-3.5 text-black" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
