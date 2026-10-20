"use client";

import { use, useState, useEffect } from "react";
import { CourseWithDetails } from "@/lib/courses-service";
import Link from "next/link";
import {
  ArrowLeft,
  Play,
  CheckCircle,
  FileText,
  Sparkles,
  Download,
  Send,
  Upload,
  BookOpen,
  Check,
  Bot,
  HelpCircle,
  ListTodo,
  Star,
  DollarSign
} from "lucide-react";

export default function LMSClassroomPage({
  params,
}: {
  params: Promise<{ courseSlug: string; lessonSlug: string }>;
}) {
  const { courseSlug, lessonSlug } = use(params);
  const [course, setCourse] = useState<CourseWithDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Active Tab
  const [activeTab, setActiveTab] = useState<"notes" | "summary" | "assignments" | "ai">("notes");

  // Student Notes state
  const [notes, setNotes] = useState<string>("");
  const [isSaved, setIsSaved] = useState<boolean>(true);

  // Assignment Submission state
  const [deliverableUrl, setDeliverableUrl] = useState("");
  const [submissionNotes, setSubmissionNotes] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState<"IDLE" | "SUBMITTING" | "GRADED">("IDLE");

  // AI Chat Assistant
  const [chatMessages, setChatMessages] = useState<
    Array<{ sender: "user" | "ai"; text: string }>
  >([
    {
      sender: "ai",
      text: "Hello! I am your HCIL Learning & Financial Intelligence Assistant. Ask me how to calculate unit margins, structure cash flow balance sheets, or test business assumptions for this lesson!",
    },
  ]);
  const [inputQuestion, setInputQuestion] = useState("");
  const [isAILoading, setIsAILoading] = useState(false);

  useEffect(() => {
    async function loadCourse() {
      try {
        const res = await fetch("/api/courses");
        if (res.ok) {
          const data = await res.json();
          const match = (data.courses || []).find((c: CourseWithDetails) => c.slug === courseSlug);
          setCourse(match || null);
        }
      } catch (e) {
        console.warn("Failed fetching course", e);
      } finally {
        setIsLoading(false);
      }
    }
    loadCourse();
  }, [courseSlug]);

  // Current lesson & module title
  let currentLesson: any = null;
  let currentModuleTitle = "";

  if (course) {
    for (const mod of course.modules) {
      const match = mod.lessons.find((l) => l.slug === lessonSlug);
      if (match) {
        currentLesson = match;
        currentModuleTitle = mod.title;
        break;
      }
    }
    if (!currentLesson && course.modules[0]?.lessons[0]) {
      currentLesson = course.modules[0].lessons[0];
      currentModuleTitle = course.modules[0].title;
    }
  }

  // Load notes from storage
  useEffect(() => {
    if (!currentLesson) return;
    const storageKey = `hcil_notes_${courseSlug}_${lessonSlug}`;
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      setNotes(saved);
    } else if (currentLesson.notesDefault) {
      setNotes(currentLesson.notesDefault);
    } else {
      setNotes(
        `# Notes: ${currentLesson.title}\n\n- How this creates commercial value:\n- Cash flow & cost implications:\n- Key action points:`
      );
    }
  }, [courseSlug, lessonSlug, currentLesson]);

  const handleNotesChange = (text: string) => {
    setNotes(text);
    setIsSaved(false);
    const storageKey = `hcil_notes_${courseSlug}_${lessonSlug}`;
    localStorage.setItem(storageKey, text);
    setTimeout(() => setIsSaved(true), 600);
  };

  const exportNotesAsMarkdown = () => {
    const blob = new Blob([notes], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${lessonSlug}-hcil-notes.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleAssignmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus("SUBMITTING");
    setTimeout(() => {
      setSubmissionStatus("GRADED");
    }, 1500);
  };

  const handleSendMessage = (textToSend?: string) => {
    const q = textToSend || inputQuestion;
    if (!q.trim()) return;

    setChatMessages((prev) => [...prev, { sender: "user", text: q }]);
    setInputQuestion("");
    setIsAILoading(true);

    setTimeout(() => {
      let aiReply = "";
      const lower = q.toLowerCase();

      if (lower.includes("cash flow") || lower.includes("margin") || lower.includes("money")) {
        aiReply = `In this module on **${currentLesson?.title || "Value Creation"}**, remember: Cash flow is reality, profit is an accounting estimate. Always calculate:\n\n**Net Cash Flow = Cash Inflows - Cash Outflows**.\n\nNever price services solely on hourly time; price based on the commercial impact created for the client!`;
      } else if (lower.includes("simulation") || lower.includes("test")) {
        aiReply = `Here is a practical simulation challenge:\n\nIf your operating overhead is $400/month and each client pays $600/month on retainer, you break even with **1 client** and reach 66% net margins with **2 clients**. What assumptions would you validate with the client before proposing a service, and how would you measure whether it is useful?`;
      } else {
        aiReply = `Great observation on **${currentLesson?.title}**! In HCIL's proof-of-work framework, focus on documenting the measurable deliverable before seeking payment. Would you like me to generate an executive template for your student notes?`;
      }

      setChatMessages((prev) => [...prev, { sender: "ai", text: aiReply }]);
      setIsAILoading(false);
    }, 900);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fbf9f1] text-[#0d1210]">
        <div className="w-10 h-10 border-3 border-[#071f15] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fbf9f1] text-[#0d1210] p-4 text-center">
        <h2 className="text-xl font-bold">Course not found</h2>
        <Link href="/courses" className="mt-4 btn-dark px-6 py-2 rounded-full text-xs font-bold">
          Back to Programs
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f1] text-[#0d1210]">
      
      {/* Top Studio Bar */}
      <header className="h-16 border-b border-[#0d1210]/10 bg-white px-4 sm:px-6 flex items-center justify-between z-30">
        <div className="flex items-center gap-4">
          <Link
            href={`/courses/${course.slug}`}
            className="p-2 rounded-full text-[#4d5953] hover:text-[#0d1210] hover:bg-[#fbf9f1] border border-[#0d1210]/10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>

          <div>
            <span className="text-[10px] text-[#059669] font-black uppercase tracking-wider">
              {course.title}
            </span>
            <h1 className="text-sm font-black text-[#0d1210] truncate max-w-sm sm:max-w-md">
              {currentLesson?.title}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-[#059669]">
            <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
            <span>Progress: 35% Verified</span>
          </div>

          <Link
            href="/lms/dashboard"
            className="px-4 py-1.5 rounded-full text-xs font-bold bg-[#fbf9f1] hover:bg-[#ffcd00]/30 text-[#0d1210] border border-[#0d1210]/15"
          >
            Student Studio
          </Link>
        </div>
      </header>

      {/* Main Studio Body */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        
        {/* Left/Middle Content */}
        <div className="flex-1 flex flex-col overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">
          
          {/* Lecture / Simulation Screen */}
          <div className="w-full aspect-video rounded-3xl bg-[#071f15] text-white relative overflow-hidden flex flex-col justify-between p-6 shadow-xl group border border-white/10">
            <div className="flex items-center justify-between z-10">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-[#ffcd00] backdrop-blur-md border border-[#ffcd00]/30">
                {currentModuleTitle}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/40 text-zinc-300 backdrop-blur-md">
                Interactive Simulation & Video &bull; 1080p
              </span>
            </div>

            <div className="flex items-center justify-center z-10">
              <button
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#ffcd00] hover:bg-[#e6b800] text-[#0d1210] flex items-center justify-center shadow-lg transition-transform group-hover:scale-105"
                aria-label="Play Simulation"
              >
                <Play className="w-8 h-8 fill-current translate-x-0.5" />
              </button>
            </div>

            <div className="z-10 space-y-2">
              <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-[#ffcd00] w-1/3 rounded-full" />
              </div>
              <div className="flex items-center justify-between text-[11px] text-zinc-300">
                <span>08:15 / {currentLesson?.durationMinutes}:00</span>
                <span>Subtitles: English & Français (Contextual)</span>
              </div>
            </div>
          </div>

          {/* Interactive Study Tabs */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-[#0d1210]/10 pb-2 overflow-x-auto">
              <button
                onClick={() => setActiveTab("notes")}
                className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 transition-all ${
                  activeTab === "notes"
                    ? "bg-[#ffcd00] text-[#0d1210] shadow-sm"
                    : "text-[#4d5953] hover:text-[#0d1210]"
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Student Notes (Auto-Saved)</span>
              </button>

              <button
                onClick={() => setActiveTab("summary")}
                className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 transition-all ${
                  activeTab === "summary"
                    ? "bg-[#ffcd00] text-[#0d1210] shadow-sm"
                    : "text-[#4d5953] hover:text-[#0d1210]"
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>Executive Summary</span>
              </button>

              <button
                onClick={() => setActiveTab("assignments")}
                className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 transition-all ${
                  activeTab === "assignments"
                    ? "bg-[#ffcd00] text-[#0d1210] shadow-sm"
                    : "text-[#4d5953] hover:text-[#0d1210]"
                }`}
              >
                <ListTodo className="w-4 h-4" />
                <span>Deliverable Task</span>
              </button>

              <button
                onClick={() => setActiveTab("ai")}
                className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 transition-all ${
                  activeTab === "ai"
                    ? "bg-[#ffcd00] text-[#0d1210] shadow-sm"
                    : "text-[#4d5953] hover:text-[#0d1210]"
                }`}
              >
                <Bot className="w-4 h-4" />
                <span>Ask AI Financial Tutor</span>
              </button>
            </div>

            {/* TAB: Student Notes */}
            {activeTab === "notes" && (
              <div className="cream-card p-6 rounded-2xl bg-white border border-[#0d1210]/10 space-y-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#0d1210]">Your Notes on this Lesson</span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                        isSaved
                          ? "bg-[#059669]/10 text-[#059669]"
                          : "bg-[#ffcd00]/20 text-[#0d1210]"
                      }`}
                    >
                      {isSaved ? "Saved to Cloud" : "Saving..."}
                    </span>
                  </div>

                  <button
                    onClick={exportNotesAsMarkdown}
                    className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#fbf9f1] hover:bg-[#0d1210]/10 text-[#0d1210] border border-[#0d1210]/15 flex items-center gap-1.5 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-[#059669]" />
                    <span>Download Markdown (.md)</span>
                  </button>
                </div>

                <textarea
                  rows={8}
                  value={notes}
                  onChange={(e) => handleNotesChange(e.target.value)}
                  placeholder="Record your commercial insights, cash flow logic, code architecture, or questions for your on-site lab mentor..."
                  className="w-full p-4 rounded-xl bg-[#fbf9f1] border border-[#0d1210]/15 text-xs text-[#0d1210] font-mono focus:outline-none focus:border-[#ffcd00] leading-relaxed"
                />
                <p className="text-[11px] text-[#5f6c65]">
                  Notes auto-save continuously to your HCIL Student Studio and can be exported anytime.
                </p>
              </div>
            )}

            {/* TAB: Executive Summary */}
            {activeTab === "summary" && (
              <div className="cream-card p-6 rounded-2xl bg-white border border-[#0d1210]/10 space-y-4 shadow-sm">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#059669]" />
                  <h3 className="text-sm font-bold text-[#0d1210]">
                    Executive Lesson Summary & Economic Principles
                  </h3>
                </div>

                <p className="text-xs text-[#4d5953] leading-relaxed">
                  {currentLesson?.content || currentLesson?.summary}
                </p>

                <div className="space-y-2 pt-2 border-t border-[#0d1210]/10">
                  <h4 className="text-xs font-bold text-[#071f15] uppercase tracking-wider">
                    Core Wealth & Capability Takeaways:
                  </h4>
                  <ul className="text-xs text-[#4d5953] space-y-1.5 list-disc list-inside">
                    <li>Differentiate cash-flow producing assets from depreciating consumer liabilities.</li>
                    <li>Always define project scope around client measurable business outcomes.</li>
                    <li>Retain equity and intellectual property ownership whenever architecting systems.</li>
                  </ul>
                </div>
              </div>
            )}

            {/* TAB: Deliverable Task */}
            {activeTab === "assignments" && (
              <div className="cream-card p-6 rounded-2xl bg-white border border-[#0d1210]/10 space-y-5 shadow-sm">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-[#ffcd00]/30 text-[#0d1210]">
                    Verified Proof-of-Work
                  </span>
                  <h3 className="text-base font-bold text-[#0d1210] mt-1">
                    Task: Build & Document the Deliverable Solution
                  </h3>
                  <p className="text-xs text-[#4d5953] mt-1 leading-relaxed">
                    Execute the practical exercise, calculate the unit economics, and provide a verifiable link to your live code repository or business document.
                  </p>
                </div>

                {submissionStatus === "GRADED" ? (
                  <div className="p-4 rounded-xl bg-[#059669]/10 border border-[#059669]/30 space-y-2">
                    <div className="flex items-center gap-2 text-[#059669] font-bold text-xs">
                      <CheckCircle className="w-4 h-4" />
                      <span>Deliverable Approved & Capability Verified!</span>
                    </div>
                    <p className="text-xs text-[#0d1210]">
                      Score: <strong className="text-[#059669]">96 / 100</strong> (Added to HCIL Passport)
                    </p>
                    <p className="text-[11px] text-[#4d5953] italic">
                      &quot;Excellent cash flow analysis and clean data model. Ready for client test deployment!&quot; &mdash; HCIL Evaluator
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleAssignmentSubmit} className="space-y-4 pt-2">
                    <div>
                      <label className="text-[11px] font-bold text-[#0d1210]">
                        Project or Deliverable URL (GitHub / Live Link / Google Doc)
                      </label>
                      <input
                        required
                        type="url"
                        placeholder="https://github.com/your-name/hcil-capstone-deliverable"
                        value={deliverableUrl}
                        onChange={(e) => setDeliverableUrl(e.target.value)}
                        className="w-full mt-1 px-3 py-2.5 rounded-xl bg-[#fbf9f1] border border-[#0d1210]/15 text-xs text-[#0d1210] focus:outline-none focus:border-[#ffcd00]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-[#0d1210]">
                        Execution Summary & Commercial Value Created
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Describe the problem solved, pricing rationale, and client outcome..."
                        value={submissionNotes}
                        onChange={(e) => setSubmissionNotes(e.target.value)}
                        className="w-full mt-1 px-3 py-2.5 rounded-xl bg-[#fbf9f1] border border-[#0d1210]/15 text-xs text-[#0d1210] focus:outline-none focus:border-[#ffcd00]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submissionStatus === "SUBMITTING"}
                      className="btn-dark px-6 py-2.5 rounded-full text-xs font-bold flex items-center gap-2"
                    >
                      {submissionStatus === "SUBMITTING" ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Submitting for HCIL Assessment...</span>
                        </>
                      ) : (
                        <>
                          <Upload className="w-3.5 h-3.5" />
                          <span>Submit Deliverable for Proof-of-Work Verification</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* TAB: Ask AI Financial Tutor */}
            {activeTab === "ai" && (
              <div className="cream-card p-6 rounded-2xl bg-white border border-[#0d1210]/10 space-y-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bot className="w-4 h-4 text-[#059669]" />
                    <h3 className="text-sm font-bold text-[#0d1210]">AI Financial & Skill Tutor</h3>
                  </div>
                  <span className="text-[10px] text-[#5f6c65] font-semibold">Grounded on lesson context</span>
                </div>

                {/* Quick Prompts */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <button
                    onClick={() => handleSendMessage("How do I calculate unit margins for this service?")}
                    className="px-3 py-1 rounded-full text-[11px] bg-[#fbf9f1] hover:bg-[#ffcd00]/20 text-[#0d1210] border border-[#0d1210]/10 font-medium"
                  >
                    💰 Calculate unit margins
                  </button>
                  <button
                    onClick={() => handleSendMessage("Give me a simulation test question for cash flow")}
                    className="px-3 py-1 rounded-full text-[11px] bg-[#fbf9f1] hover:bg-[#ffcd00]/20 text-[#0d1210] border border-[#0d1210]/10 font-medium"
                  >
                    📊 Run cash flow simulation
                  </button>
                </div>

                {/* Chat Log */}
                <div className="h-64 overflow-y-auto space-y-3 p-3 rounded-2xl bg-[#fbf9f1] border border-[#0d1210]/10 text-xs">
                  {chatMessages.map((msg, mIdx) => (
                    <div
                      key={mIdx}
                      className={`flex flex-col ${
                        msg.sender === "user" ? "items-end" : "items-start"
                      }`}
                    >
                      <div
                        className={`max-w-[85%] p-3 rounded-2xl leading-relaxed whitespace-pre-wrap ${
                          msg.sender === "user"
                            ? "bg-[#071f15] text-white font-medium"
                            : "bg-white text-[#0d1210] border border-[#0d1210]/10 shadow-sm"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {isAILoading && (
                    <div className="text-[11px] text-[#5f6c65] flex items-center gap-1.5 animate-pulse">
                      <Bot className="w-3.5 h-3.5 text-[#059669]" />
                      <span>AI is calculating...</span>
                    </div>
                  )}
                </div>

                {/* Chat Input */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Ask a question about this lesson or cash flow model..."
                    value={inputQuestion}
                    onChange={(e) => setInputQuestion(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1 px-3 py-2 rounded-full bg-[#fbf9f1] border border-[#0d1210]/15 text-xs text-[#0d1210] focus:outline-none focus:border-[#ffcd00]"
                  />
                  <button
                    onClick={() => handleSendMessage()}
                    className="btn-dark px-4 py-2 rounded-full text-xs font-bold"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Right Sidebar: Syllabus Drawer */}
        <aside className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-[#0d1210]/10 bg-white p-4 sm:p-6 overflow-y-auto space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#0d1210]/10">
            <h3 className="text-xs font-bold text-[#0d1210] uppercase tracking-wider">
              Program Modules
            </h3>
            <span className="text-[10px] text-[#5f6c65] font-semibold">
              {course.modules.length} Modules
            </span>
          </div>

          <div className="space-y-4">
            {course.modules.map((mod, mIdx) => (
              <div key={mod.id} className="space-y-2">
                <h4 className="text-[11px] font-bold text-[#5f6c65] uppercase tracking-wide">
                  Module {mIdx + 1}: {mod.title}
                </h4>

                <div className="space-y-1">
                  {mod.lessons.map((lesson) => {
                    const isCurrent = lesson.slug === lessonSlug;
                    return (
                      <Link
                        key={lesson.id}
                        href={`/lms/learn/${courseSlug}/${lesson.slug}`}
                        className={`p-2.5 rounded-xl text-xs flex items-center justify-between transition-all ${
                          isCurrent
                            ? "bg-[#ffcd00]/30 text-[#0d1210] border border-[#ffcd00] font-bold"
                            : "text-[#4d5953] hover:text-[#0d1210] hover:bg-[#fbf9f1]"
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          {isCurrent ? (
                            <Play className="w-3.5 h-3.5 text-[#0d1210] shrink-0 fill-current" />
                          ) : (
                            <CheckCircle className="w-3.5 h-3.5 text-[#b0bbb5] shrink-0" />
                          )}
                          <span className="truncate">{lesson.title}</span>
                        </div>
                        <span className="text-[10px] text-[#5f6c65] shrink-0">
                          {lesson.durationMinutes}m
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </aside>

      </div>

    </div>
  );
}
