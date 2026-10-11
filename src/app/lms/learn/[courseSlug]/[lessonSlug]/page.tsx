"use client";

import { use, useState, useEffect } from "react";
import { notFound } from "next/navigation";
import { COURSES_DATA } from "@/data/courses";
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
  Star
} from "lucide-react";

export default function LMSClassroomPage({
  params,
}: {
  params: Promise<{ courseSlug: string; lessonSlug: string }>;
}) {
  const { courseSlug, lessonSlug } = use(params);
  const course = COURSES_DATA.find((c) => c.slug === courseSlug);

  if (!course) return notFound();

  // Find current lesson
  let currentLesson = course.modules[0]?.lessons[0];
  let currentModuleTitle = course.modules[0]?.title || "";

  for (const mod of course.modules) {
    const match = mod.lessons.find((l) => l.slug === lessonSlug);
    if (match) {
      currentLesson = match;
      currentModuleTitle = mod.title;
      break;
    }
  }

  // Active Tab: "summary" | "notes" | "assignments" | "ai"
  const [activeTab, setActiveTab] = useState<"summary" | "notes" | "assignments" | "ai">("notes");

  // Student Notes state
  const [notes, setNotes] = useState<string>("");
  const [isSaved, setIsSaved] = useState<boolean>(true);

  // Initialize or load notes from localStorage
  useEffect(() => {
    const storageKey = `mboa_note_${courseSlug}_${lessonSlug}`;
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      setNotes(saved);
    } else if (currentLesson?.notesDefault) {
      setNotes(currentLesson.notesDefault);
    } else {
      setNotes(
        `# Notes: ${currentLesson?.title}\n\n- Key concept 1:\n- Code snippet:\n\`\`\`typescript\n// Write your code reflections here\n\`\`\`\n\n- Questions for mentor:`
      );
    }
  }, [courseSlug, lessonSlug, currentLesson]);

  const handleNotesChange = (text: string) => {
    setNotes(text);
    setIsSaved(false);
    const storageKey = `mboa_note_${courseSlug}_${lessonSlug}`;
    localStorage.setItem(storageKey, text);
    setTimeout(() => setIsSaved(true), 600);
  };

  const exportNotesAsMarkdown = () => {
    const blob = new Blob([notes], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${lessonSlug}-notes.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Assignment Submission state
  const [githubUrl, setGithubUrl] = useState("");
  const [submissionText, setSubmissionText] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState<"IDLE" | "SUBMITTING" | "GRADED">("IDLE");

  const handleAssignmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus("SUBMITTING");
    setTimeout(() => {
      setSubmissionStatus("GRADED");
    }, 1500);
  };

  // AI Assistant Chat state
  const [chatMessages, setChatMessages] = useState<
    Array<{ sender: "user" | "ai"; text: string }>
  >([
    {
      sender: "ai",
      text: `Hello! I am your Mboa AI Lecture Assistant for "${currentLesson?.title}". Ask me any question, request code examples, or ask for a quiz!`,
    },
  ]);
  const [inputQuestion, setInputQuestion] = useState("");
  const [isAILoading, setIsAILoading] = useState(false);

  const handleSendMessage = (textToSend?: string) => {
    const q = textToSend || inputQuestion;
    if (!q.trim()) return;

    setChatMessages((prev) => [...prev, { sender: "user", text: q }]);
    setInputQuestion("");
    setIsAILoading(true);

    setTimeout(() => {
      let aiReply = "";
      const lower = q.toLowerCase();

      if (lower.includes("quiz") || lower.includes("test")) {
        aiReply = `Here is a practice quiz on **${currentLesson?.title}**:\n\n**Question:** Why do Server Components reduce client-side bundle size compared to traditional client components?\n\nA) They bundle CSS into HTML\nB) Their JavaScript dependencies remain on the server and are never downloaded by the browser.\nC) They eliminate HTTP requests entirely.\n\n*(Think about it, or reply with your answer!)*`;
      } else if (lower.includes("example") || lower.includes("code")) {
        aiReply = `Here is a production code pattern for this module:\n\n\`\`\`typescript\n// src/lib/fetchData.ts\nexport async function getCohortData(cohortId: string) {\n  const res = await fetch(\`https://api.mboaacademy.com/cohorts/\${cohortId}\`, {\n    next: { revalidate: 60 } // Next.js cache revalidation\n  });\n  return res.json();\n}\n\`\`\`\nThis combines automatic caching with fast Edge revalidation!`;
      } else {
        aiReply = `Great question regarding **${currentLesson?.title}**! In production environments (especially when deploying to Vercel with PostgreSQL & Redis), maintaining clean separation of concerns and caching dynamic queries gives you sub-50ms response times. Would you like me to generate a step-by-step implementation guide?`;
      }

      setChatMessages((prev) => [...prev, { sender: "ai", text: aiReply }]);
      setIsAILoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#07080b] text-slate-100 selection:bg-amber-400 selection:text-black">
      
      {/* Top Classroom Bar */}
      <header className="h-16 border-b border-white/10 bg-[#0c0e14] px-4 sm:px-6 flex items-center justify-between z-30">
        <div className="flex items-center gap-4">
          <Link
            href={`/courses/${course.slug}`}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 border border-white/10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>

          <div>
            <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">
              {course.title}
            </span>
            <h1 className="text-sm font-bold text-white truncate max-w-sm sm:max-w-md">
              {currentLesson?.title}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 text-xs text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Progress: 25%</span>
          </div>

          <Link
            href="/lms/dashboard"
            className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white/5 hover:bg-white/10 text-zinc-200 border border-white/10"
          >
            Exit to Dashboard
          </Link>
        </div>
      </header>

      {/* Main Studio Split */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        
        {/* Left/Middle Content Studio */}
        <div className="flex-1 flex flex-col overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">
          
          {/* Lecture Video Player Simulated Screen */}
          <div className="w-full aspect-video rounded-2xl bg-black border border-white/10 relative overflow-hidden flex flex-col justify-between p-6 shadow-2xl group">
            {/* Ambient glowing video glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-emerald-500/10 pointer-events-none" />

            <div className="flex items-center justify-between z-10">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 text-amber-400 backdrop-blur-md border border-amber-500/30">
                {currentModuleTitle}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/60 text-zinc-300 backdrop-blur-md border border-white/10">
                HD 1080p &bull; Recorded On-Site Lab
              </span>
            </div>

            {/* Play Button Icon */}
            <div className="flex items-center justify-center z-10">
              <button
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-500 hover:bg-amber-400 text-black flex items-center justify-center shadow-xl shadow-amber-500/30 transition-transform group-hover:scale-105"
                aria-label="Play Lecture"
              >
                <Play className="w-8 h-8 fill-black translate-x-0.5" />
              </button>
            </div>

            {/* Bottom Progress Bar */}
            <div className="z-10 space-y-2">
              <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 w-1/3 rounded-full" />
              </div>
              <div className="flex items-center justify-between text-[11px] text-zinc-400">
                <span>05:30 / {currentLesson?.durationMinutes}:00</span>
                <span>Speed: 1.0x &bull; English & French Subtitles</span>
              </div>
            </div>
          </div>

          {/* Interactive Study Tabs */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-white/10 pb-2">
              <button
                onClick={() => setActiveTab("notes")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                  activeTab === "notes"
                    ? "bg-amber-500/20 text-amber-400 border border-amber-500/40"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Student Notes (Auto-Saved)</span>
              </button>

              <button
                onClick={() => setActiveTab("summary")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                  activeTab === "summary"
                    ? "bg-amber-500/20 text-amber-400 border border-amber-500/40"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>AI Lecture Summary</span>
              </button>

              <button
                onClick={() => setActiveTab("assignments")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                  activeTab === "assignments"
                    ? "bg-amber-500/20 text-amber-400 border border-amber-500/40"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <ListTodo className="w-4 h-4" />
                <span>Practical Assignment</span>
              </button>

              <button
                onClick={() => setActiveTab("ai")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                  activeTab === "ai"
                    ? "bg-amber-500/20 text-amber-400 border border-amber-500/40"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <Bot className="w-4 h-4" />
                <span>Ask AI Tutor</span>
              </button>
            </div>

            {/* TAB CONTENT: Student Notes */}
            {activeTab === "notes" && (
              <div className="mercor-card p-6 rounded-2xl border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white">Your Notes for this Lesson</span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full ${
                        isSaved
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                      }`}
                    >
                      {isSaved ? "Saved to Cloud" : "Saving..."}
                    </span>
                  </div>

                  <button
                    onClick={exportNotesAsMarkdown}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10 flex items-center gap-1.5 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-amber-400" />
                    <span>Download Markdown (.md)</span>
                  </button>
                </div>

                <textarea
                  rows={8}
                  value={notes}
                  onChange={(e) => handleNotesChange(e.target.value)}
                  placeholder="Type your notes, code insights, questions for the onsite mentor..."
                  className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-xs text-zinc-200 font-mono focus:outline-none focus:border-amber-500/50 leading-relaxed"
                />
                <p className="text-[11px] text-zinc-500">
                  Notes are stored continuously and accessible from your Mboa Academy student dashboard.
                </p>
              </div>
            )}

            {/* TAB CONTENT: AI Lecture Summary */}
            {activeTab === "summary" && (
              <div className="mercor-card p-6 rounded-2xl border border-white/10 space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <h3 className="text-sm font-bold text-white">
                    Executive Summary & Takeaways (AI Generated)
                  </h3>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  {currentLesson?.summary}
                </p>

                <div className="space-y-2 pt-2 border-t border-white/5">
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Key Architectural Takeaways:
                  </h4>
                  <ul className="text-xs text-zinc-400 space-y-1.5 list-disc list-inside">
                    <li>Maintain minimal JavaScript payload on initial render for faster First Contentful Paint.</li>
                    <li>Utilize PostgreSQL indexes for relational foreign keys to avoid full table scans.</li>
                    <li>Ensure environment credentials are kept safe in server-only modules.</li>
                  </ul>
                </div>
              </div>
            )}

            {/* TAB CONTENT: Assignments */}
            {activeTab === "assignments" && (
              <div className="mercor-card p-6 rounded-2xl border border-white/10 space-y-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-400">
                    Required Capstone Task
                  </span>
                  <h3 className="text-base font-bold text-white mt-1">
                    Task: Implement and Deploy the Module Architecture
                  </h3>
                  <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                    Clone the starter template, configure the schema with Prisma, connect to a PostgreSQL database, and submit your public GitHub repository URL and Vercel preview link below.
                  </p>
                </div>

                {submissionStatus === "GRADED" ? (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                      <CheckCircle className="w-4 h-4" />
                      <span>Assignment Successfully Submitted & Graded!</span>
                    </div>
                    <p className="text-xs text-zinc-300">
                      Score: <strong className="text-emerald-400">95 / 100</strong> (A+)
                    </p>
                    <p className="text-[11px] text-zinc-400 italic">
                      &quot;Excellent relational schema design and clean server component boundaries. Ready for module 2!&quot; &mdash; Academy Reviewer
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleAssignmentSubmit} className="space-y-4 pt-2">
                    <div>
                      <label className="text-[11px] font-semibold text-zinc-300">
                        GitHub Repository URL
                      </label>
                      <input
                        required
                        type="url"
                        placeholder="https://github.com/your-username/mboa-capstone-project"
                        value={githubUrl}
                        onChange={(e) => setGithubUrl(e.target.value)}
                        className="w-full mt-1 px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-xs text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-semibold text-zinc-300">
                        Implementation Notes / Architecture Highlights
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Explain challenges overcome, database indexing choices, or questions for your lab instructor..."
                        value={submissionText}
                        onChange={(e) => setSubmissionText(e.target.value)}
                        className="w-full mt-1 px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-xs text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submissionStatus === "SUBMITTING"}
                      className="gold-btn px-6 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2"
                    >
                      {submissionStatus === "SUBMITTING" ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>Submitting Solution...</span>
                        </>
                      ) : (
                        <>
                          <Upload className="w-3.5 h-3.5" />
                          <span>Submit Solution for Mentor Review</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* TAB CONTENT: Ask AI Tutor */}
            {activeTab === "ai" && (
              <div className="mercor-card p-6 rounded-2xl border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bot className="w-4 h-4 text-amber-400" />
                    <h3 className="text-sm font-bold text-white">AI Lecture Assistant</h3>
                  </div>
                  <span className="text-[10px] text-zinc-400">Grounded on lesson context</span>
                </div>

                {/* Quick Prompts */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <button
                    onClick={() => handleSendMessage("Explain this lesson simply in 3 bullet points")}
                    className="px-2.5 py-1 rounded-lg text-[11px] bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10"
                  >
                    💡 Summarize simply
                  </button>
                  <button
                    onClick={() => handleSendMessage("Give me a practical code example for this lesson")}
                    className="px-2.5 py-1 rounded-lg text-[11px] bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10"
                  >
                    💻 Code snippet
                  </button>
                  <button
                    onClick={() => handleSendMessage("Generate a quiz for this topic")}
                    className="px-2.5 py-1 rounded-lg text-[11px] bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10"
                  >
                    📝 Test my knowledge
                  </button>
                </div>

                {/* Chat Log */}
                <div className="h-64 overflow-y-auto space-y-3 p-3 rounded-xl bg-black/40 border border-white/5 text-xs">
                  {chatMessages.map((msg, mIdx) => (
                    <div
                      key={mIdx}
                      className={`flex flex-col ${
                        msg.sender === "user" ? "items-end" : "items-start"
                      }`}
                    >
                      <div
                        className={`max-w-[85%] p-3 rounded-xl leading-relaxed whitespace-pre-wrap ${
                          msg.sender === "user"
                            ? "bg-amber-500 text-black font-medium"
                            : "bg-white/10 text-zinc-200 border border-white/5"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {isAILoading && (
                    <div className="text-[11px] text-zinc-400 flex items-center gap-1.5 animate-pulse">
                      <Bot className="w-3.5 h-3.5 text-amber-400" />
                      <span>AI is thinking...</span>
                    </div>
                  )}
                </div>

                {/* Input Bar */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Ask a question about this lecture..."
                    value={inputQuestion}
                    onChange={(e) => setInputQuestion(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1 px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                  <button
                    onClick={() => handleSendMessage()}
                    className="gold-btn px-4 py-2 rounded-lg text-xs font-bold"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Right Sidebar: Curriculum Drawer */}
        <aside className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-white/10 bg-[#090a0f] p-4 sm:p-6 overflow-y-auto space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Course Syllabus
            </h3>
            <span className="text-[10px] text-zinc-400">
              {course.modules.length} Modules
            </span>
          </div>

          <div className="space-y-4">
            {course.modules.map((mod, mIdx) => (
              <div key={mod.id} className="space-y-2">
                <h4 className="text-[11px] font-bold text-zinc-400 uppercase tracking-wide">
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
                            ? "bg-amber-500/20 text-amber-400 border border-amber-500/40 font-semibold"
                            : "text-zinc-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          {isCurrent ? (
                            <Play className="w-3.5 h-3.5 text-amber-400 shrink-0 fill-amber-400" />
                          ) : (
                            <CheckCircle className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
                          )}
                          <span className="truncate">{lesson.title}</span>
                        </div>
                        <span className="text-[10px] text-zinc-500 shrink-0">
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
