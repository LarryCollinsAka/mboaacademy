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
  CheckCircle2,
  ArrowRight,
  Send,
  Target,
  Clock,
  MapPin,
  RefreshCw
} from "lucide-react";

export default function AIAdvisorPage() {
  // Wizard state
  const [step, setStep] = useState<number>(1);
  const [goal, setGoal] = useState<string>("customer_support");
  const [experience, setExperience] = useState<string>("intermediate");
  const [learningMode, setLearningMode] = useState<string>("online");
  const [timeCommitment, setTimeCommitment] = useState<string>("fulltime");
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [matchResult, setMatchResult] = useState<any | null>(null);

  // Chat advisor state
  const [chatMessages, setChatMessages] = useState<
    Array<{ sender: "user" | "ai"; text: string }>
  >([
    {
      sender: "ai",
      text: "Hello! I’m HCIL’s learning-path guide. I can help you explore a starting point based on the kind of work you want to practise. Recommendations are guidance, not a hiring prediction; check each course’s published content and delivery details.",
    },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isChatLoading, setIsChatLoading] = useState(false);

  const handleComputeMatch = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      const courseIndexByGoal: Record<string, number> = {
        career_readiness: 0,
        profile_readiness: 1,
        customer_support: 2,
        admin_operations: 3,
      };
      const matchedCourse = COURSES_DATA[courseIndexByGoal[goal] ?? 2];
      const practiceFocus = matchedCourse.skills;
      const experienceLabel = experience === "beginner" ? "new to this type of work" : experience === "advanced" ? "experienced in a related role" : "some related experience";
      const formatLabel = learningMode === "online" ? "online, where offered" : learningMode === "hybrid" ? "hybrid, where confirmed" : "open to available formats";
      const timeLabel = timeCommitment === "fulltime" ? "a larger weekly time commitment" : "an evening/weekend or part-time schedule";

      setMatchResult({
        course: matchedCourse,
        recommendationReason: `You described yourself as ${experienceLabel} and prefer ${formatLabel} with ${timeLabel}. This course is a starting suggestion; compare its workload and tasks with your actual availability and goals.`,
        practiceFocus,
        nextStep: "Course availability, cohort format, assessment criteria, and payment options must be confirmed on the course page before enrolling. This recommendation does not predict employment or income.",
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
        reply = "Physical learning hubs in Douala and Yaoundé are planned, not guaranteed current facilities. Please check the course page for the specific cohort’s confirmed delivery format, venue, and support.";
      } else if (lower.includes("job") || lower.includes("salary") || lower.includes("remote")) {
        reply = "A course can help you practise relevant tasks and build work samples, but hiring outcomes and compensation depend on many factors. HCIL does not promise jobs or salary levels. Start by reviewing the course deliverables and the requirements of roles you are interested in.";
      } else if (lower.includes("beginner") || lower.includes("no experience")) {
        reply = "You can begin with a foundational program and build from there. Review the course prerequisites and practice tasks, then choose a pace that fits your current skills and available time.";
      } else {
        reply = `A useful starting point is to identify the work you want to do, the people or process that work supports, and the evidence you can produce. Explore the published learning paths and confirm the cohort details before making a decision.`;
      }

      setChatMessages((prev) => [...prev, { sender: "ai", text: reply }]);
      setIsChatLoading(false);
    }, 900);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f1] text-[#0d1210] selection:bg-[#ffcd00] selection:text-black">
      <Navbar />

      <main className="flex-1 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              Role & Learning-Path Guide
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Explore a Practical <span className="gold-gradient-text">Learning Path</span>
            </h1>
            <p className="text-zinc-400 text-base leading-relaxed">
              Answer four quick questions to explore a starting course. This guide uses your stated preferences; it is not a live labor-market forecast or an automated hiring assessment.
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
                    <h2 className="text-xl font-bold text-white">What kind of work would you like to prepare for?</h2>
                    <p className="text-xs text-zinc-400 mt-1">Choose the closest starting point. You can explore other roles later:</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: "career_readiness", title: "Prepare for a target role", desc: "Understand role requirements and present relevant experience." },
                      { id: "profile_readiness", title: "Improve my professional profile", desc: "Present capabilities and work evidence clearly." },
                      { id: "customer_support", title: "Customer support operations", desc: "Practise customer communication, case handling, and escalation." },
                      { id: "admin_operations", title: "Administrative operations", desc: "Practise coordination, documentation, and task tracking." },
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
                    <span>Continue to Role Experience</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* STEP 2: Current Technical Background */}
              {step === 2 && (
                <div className="space-y-5 animate-in fade-in duration-150">
                  <div>
                    <h2 className="text-xl font-bold text-white">How familiar are you with the tasks in your target role?</h2>
                    <p className="text-xs text-zinc-400 mt-1">This helps you think about where to begin:</p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { id: "beginner", title: "New to this type of work", desc: "I need clear foundations and guided practice." },
                      { id: "intermediate", title: "Some related experience", desc: "I know some of the tasks but want more consistent execution." },
                      { id: "advanced", title: "Experienced in a related role", desc: "I want to improve quality, speed, communication, or coordination." },
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
                    <h2 className="text-xl font-bold text-white">Which learning format would you prefer?</h2>
                    <p className="text-xs text-zinc-400 mt-1">Choose a preference; actual availability depends on each published cohort:</p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { id: "online", title: "Online, where offered", desc: "Learn remotely when the published cohort provides an online option." },
                      { id: "hybrid", title: "Hybrid, where confirmed", desc: "A mix of online and in-person activity only when stated for a specific cohort." },
                      { id: "undecided", title: "I’m open to options", desc: "I will decide after reviewing the confirmed schedule and delivery details." },
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
                      <span>Continue to Weekly Time</span>
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
                    <p className="text-xs text-zinc-400 mt-1">Choose the amount of time you can realistically set aside:</p>
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
                      <div className="text-xs text-zinc-400 mt-1">A substantial weekly commitment for practice and assignments; outcomes and timelines vary.</div>
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
                      <div className="text-xs text-zinc-400 mt-1">A smaller weekly commitment that may suit people balancing other responsibilities.</div>
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
                          <span>Reviewing your preferences...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 text-black" />
                          <span>Suggest a Starting Course</span>
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
                        <div className="text-xs font-semibold text-emerald-400">Suggested starting point</div>
                        <div className="text-lg font-extrabold text-white">Based on your selections</div>
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
                        Suggested learning path
                      </span>
                      <span className="text-xs text-zinc-300 font-semibold">
                        {matchResult.course.durationWeeks} {matchResult.course.durationWeeks === 1 ? "week" : "weeks"} · {matchResult.course.mode}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white">
                      {matchResult.course.title}
                    </h3>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {matchResult.course.description}
                    <br /><span className="text-zinc-400">{matchResult.recommendationReason}</span>
                    </p>

                    <div className="space-y-2 pt-3 border-t border-white/10">
                      <div className="text-xs font-semibold text-amber-400">Practice focus</div>
                      <div className="flex flex-wrap gap-2">
                        {matchResult.practiceFocus.map((skill: string) => (
                          <span key={skill} className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-300">{skill}</span>
                        ))}
                      </div>
                      <p className="text-xs leading-relaxed text-zinc-400">{matchResult.nextStep}</p>
                    </div>

                    {/* CTA */}
                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <Link
                        href={`/courses/${matchResult.course.slug}`}
                        className="gold-btn flex-1 py-3 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2"
                      >
                        <span>Review Course Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <a
                        href={`/courses/${matchResult.course.slug}`}
                        className="px-5 py-3 rounded-xl border border-white/15 text-xs font-semibold text-zinc-200 hover:text-white text-center"
                      >
                        Review Delivery Details
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
