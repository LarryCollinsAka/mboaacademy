export interface CourseItem {
  id: string;
  title: string;
  slug: string;
  headline: string;
  description: string;
  category: string;
  level: string;
  mode: "HYBRID" | "ONSITE" | "ONLINE";
  durationWeeks: number;
  skills: string[];
}

// The advisor is a guide, not a hiring prediction. Keep these slugs aligned with the database seed.
export const COURSES_DATA: CourseItem[] = [
  {
    id: "career-readiness-cv",
    title: "CV Writing for Target Roles",
    slug: "cv-building-cover-letter-writing",
    headline: "Show how your experience, skills, and work evidence match a role and its responsibilities.",
    description: "Practise analysing a role, selecting relevant experience, describing contributions with evidence, and preparing a targeted CV and cover letter. This program supports applications but does not guarantee interviews or employment.",
    category: "Career Readiness",
    level: "Beginner",
    mode: "ONLINE",
    durationWeeks: 1,
    skills: ["Role analysis", "CV writing", "Evidence-based achievements", "Cover letters"],
  },
  {
    id: "career-readiness-linkedin",
    title: "LinkedIn Profile for Role Readiness",
    slug: "linkedin-profile-optimization",
    headline: "Present your capabilities, examples of work, and professional direction clearly.",
    description: "Build a clearer profile by connecting your experience to role requirements, adding relevant evidence, and planning professional outreach. No job placement is guaranteed.",
    category: "Career Readiness",
    level: "Beginner",
    mode: "ONLINE",
    durationWeeks: 1,
    skills: ["Role positioning", "Profile writing", "Work evidence", "Professional networking"],
  },
  {
    id: "customer-operations",
    title: "Customer Support & Customer Experience Operations",
    slug: "customer-support-customer-representative",
    headline: "Practise the communication, triage, documentation, and problem-solving tasks that help teams resolve customer needs reliably.",
    description: "Build practical customer support capability through realistic ticket triage, escalation, complaint resolution, knowledge-base writing, and CRM workflow exercises. Produce work samples that show how you document cases, set expectations, and hand issues to the right team.",
    category: "Customer Operations",
    level: "Beginner to Intermediate",
    mode: "HYBRID",
    durationWeeks: 2,
    skills: ["Customer communication", "Ticket triage", "Case documentation", "Escalation and handoff", "CRM workflows"],
  },
  {
    id: "administrative-operations",
    title: "Administrative & Virtual Assistant Operations",
    slug: "executive-virtual-assistant",
    headline: "Develop the organisation, communication, documentation, and coordination skills that help teams protect time and complete work.",
    description: "Practise calendar and inbox management, meeting preparation, research briefs, task tracking, confidentiality, and workflow documentation. Build a portfolio of useful administrative deliverables. Employment is not guaranteed.",
    category: "Administrative Operations",
    level: "Beginner to Intermediate",
    mode: "HYBRID",
    durationWeeks: 2,
    skills: ["Calendar management", "Inbox coordination", "Business writing", "Research briefs", "Task tracking"],
  },
];
