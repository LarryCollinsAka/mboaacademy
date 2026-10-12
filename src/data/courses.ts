export interface LessonItem {
  id: string;
  title: string;
  slug: string;
  durationMinutes: number;
  isFreePreview: boolean;
  videoUrl?: string;
  summary: string;
  notesDefault?: string;
}

export interface ModuleItem {
  id: string;
  title: string;
  lessons: LessonItem[];
}

export interface CourseItem {
  id: string;
  title: string;
  slug: string;
  headline: string;
  description: string;
  category: "Value-Creating Skills" | "Entrepreneurship & Ownership" | "Money Intelligence" | "Enterprise Lab";
  level: "Foundational" | "Intermediate" | "All Levels (Pilot Cohort)";
  mode: "HYBRID" | "ONSITE" | "ONLINE";
  priceUSD: number;
  priceXAF: number;
  durationWeeks: number;
  campusLocations: string[];
  skills: string[];
  rating: number;
  studentsCount: number;
  badge?: string;
  featured: boolean;
  modules: ModuleItem[];
}

export const COURSES_DATA: CourseItem[] = [
  {
    id: "course-1",
    title: "Customer Service Representative & CX Support Specialist",
    slug: "customer-service-support-specialist",
    headline: "Master high-value client communication, ticketing systems, CRM operations, and retention strategies.",
    description: "Equip yourself with practical, enterprise-grade customer experience skills. Learn active listening, conflict de-escalation, Zendesk/Freshdesk workflows, asynchronous client communication, and how exceptional customer support directly impacts company cash flow and customer lifetime value (LTV).",
    category: "Value-Creating Skills",
    level: "Foundational",
    mode: "HYBRID",
    priceUSD: 160,
    priceXAF: 96000,
    durationWeeks: 8,
    campusLocations: ["Douala Innovation Hub (Planned)", "Yaounde Tech Campus (Planned)", "Online Interactive"],
    skills: ["Customer Communication", "CRM & Ticketing", "Conflict Resolution", "Client Retention", "SOP Documentation"],
    rating: 4.96,
    studentsCount: 215,
    badge: "Initial Launch Program",
    featured: true,
    modules: [
      {
        id: "mod-1",
        title: "The Economics of Customer Experience",
        lessons: [
          {
            id: "les-1",
            title: "Why Retention Protects Cash Flow: The Customer LTV Equation",
            slug: "economics-of-customer-retention",
            durationMinutes: 30,
            isFreePreview: true,
            summary: "Understand why acquiring a new customer costs 5x more than retaining an existing one. How great support directly protects business revenue.",
          },
          {
            id: "les-2",
            title: "Professional Omnichannel Communication & Tone of Voice",
            slug: "professional-communication-tone",
            durationMinutes: 40,
            isFreePreview: true,
            summary: "Mastering written and verbal communication across live chat, email, phone, and ticketing desks with empathy and precision.",
          },
        ],
      },
    ],
  },
  {
    id: "course-2",
    title: "Executive & Virtual Assistant (VA) Mastery",
    slug: "executive-virtual-assistant-mastery",
    headline: "Become an indispensable operational partner: executive scheduling, travel logistics, document workflow & project coordination.",
    description: "Learn to operate at the highest level of administrative support for international executives, entrepreneurs, and busy professionals. Master complex calendar management, inbox zero workflows, research briefs, bookkeeping basics, and modern AI productivity tools.",
    category: "Value-Creating Skills",
    level: "Intermediate",
    mode: "HYBRID",
    priceUSD: 180,
    priceXAF: 108000,
    durationWeeks: 9,
    campusLocations: ["Douala Innovation Hub (Planned)", "Yaounde Tech Campus (Planned)", "Online Interactive"],
    skills: ["Executive Calendar Management", "Inbox Zero Protocols", "Travel Logistics", "Confidentiality & Ethics", "AI Productivity Workflows"],
    rating: 4.97,
    studentsCount: 260,
    badge: "Initial Launch Program",
    featured: true,
    modules: [
      {
        id: "mod-2",
        title: "High-Leverage Operational Support",
        lessons: [
          {
            id: "les-3",
            title: "The Role of an Executive Partner: Buying Back Executive Time",
            slug: "buying-back-executive-time",
            durationMinutes: 35,
            isFreePreview: true,
            summary: "Understand the financial value of an executive's hour. Learn how anticipating needs and eliminating friction creates immense commercial value.",
          },
          {
            id: "les-4",
            title: "Multi-Timezone Calendar Management & Conflict Resolution",
            slug: "calendar-management-timezones",
            durationMinutes: 45,
            isFreePreview: true,
            summary: "Managing executive schedules across London, Paris, New York, and Douala/Yaoundé with zero double-bookings.",
          },
        ],
      },
    ],
  },
  {
    id: "course-3",
    title: "From Skill to Enterprise (Flagship Pilot)",
    slug: "from-skill-to-enterprise",
    headline: "The 8-12 week flagship pilot bridging demonstrated skill, unit economics, and client revenue.",
    description: "Our flagship pathway. Establish a financial baseline, choose a high-demand service capability (such as Customer Support or Executive Assistance), build a practical customer offer, calculate costs and margins, and present verified evidence of client problem-solving. Graduates leave with a financial plan, a portfolio project, an assessed capability record, and a viable business offer.",
    category: "Entrepreneurship & Ownership",
    level: "All Levels (Pilot Cohort)",
    mode: "HYBRID",
    priceUSD: 249,
    priceXAF: 149000,
    durationWeeks: 10,
    campusLocations: ["Douala Innovation Hub (Planned)", "Yaounde Tech Campus (Planned)", "Online Interactive"],
    skills: ["Cash Flow Management", "Customer Discovery", "Unit Economics", "Offer Creation", "Productive Assets"],
    rating: 4.98,
    studentsCount: 140,
    badge: "Flagship Pilot",
    featured: true,
    modules: [],
  },
  {
    id: "course-4",
    title: "Practical Financial Intelligence & Cash Flow Mastery",
    slug: "financial-intelligence-cash-flow",
    headline: "Understand personal finance, business cash flow, accounting basics, and responsible asset allocation.",
    description: "Learn to distinguish productive assets from liabilities. Master income statements, balance sheets, taxes, and responsible risk management inspired by classical wealth principles adapted for modern emerging economies.",
    category: "Money Intelligence",
    level: "Foundational",
    mode: "HYBRID",
    priceUSD: 140,
    priceXAF: 84000,
    durationWeeks: 6,
    campusLocations: ["Online Interactive", "Douala (Planned Hub)"],
    skills: ["Financial Statements", "Cash Flow Analysis", "Tax Basics", "Asset Allocation", "Risk Management"],
    rating: 4.94,
    studentsCount: 310,
    featured: false,
    modules: [],
  },
];
