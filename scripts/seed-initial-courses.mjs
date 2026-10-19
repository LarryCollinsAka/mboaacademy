import { PrismaClient, LearningMode } from "@prisma/client";

const prisma = new PrismaClient();

// Upserts only these four known course slugs. Existing related modules, enrollments,
// cohorts, payments, and users are not deleted or recreated.
const courses = [
  {
    title: "CV Building & Cover Letter Writing", slug: "cv-building-cover-letter-writing",
    headline: "Build a targeted CV and persuasive cover letter for local and remote applications.",
    description: "A practical three-day workshop on CV structure, achievement-focused bullet points, ATS-aware formatting, reusable templates, tailored cover letters, common application mistakes, and adapting documents for remote roles. Includes guided exercises and a final application-ready CV and cover letter. HCIL Academy is an independent training provider and does not guarantee employment.",
    category: "Career Readiness", level: "Beginner", mode: LearningMode.ONLINE, price: 3000, currency: "XAF", durationDays: 3, durationHours: 9,
    skills: ["CV writing", "Cover letters", "ATS-aware formatting", "Remote job applications", "Professional writing"]
  },
  {
    title: "LinkedIn Profile Optimization", slug: "linkedin-profile-optimization",
    headline: "Make your LinkedIn profile clearer, credible, searchable, and aligned with target roles.",
    description: "A focused three-day workshop covering profile positioning, headline and About section, skills and experience, evidence and portfolio links, networking etiquette, recruiter search basics, and a practical plan for connecting with legitimate remote opportunities. Participants leave with a revised profile checklist and action plan. No job placement is guaranteed.",
    category: "Career Readiness", level: "Beginner", mode: LearningMode.ONLINE, price: 1500, currency: "XAF", durationDays: 3, durationHours: 6,
    skills: ["LinkedIn profile writing", "Professional branding", "Networking", "Portfolio presentation", "Remote job search"]
  },
  {
    title: "Customer Support & Customer Representative", slug: "customer-support-customer-representative",
    headline: "An intensive two-week practical program for customer support and customer experience roles.",
    description: "An intensive two-week program covering professional written and spoken communication, active listening, ticket lifecycle, prioritization, escalation, complaint resolution, knowledge-base writing, service-level concepts, CRM and help-desk workflows, and practical role-play. Tool exposure may include Microsoft, Zendesk, Salesforce, Zoho, and Jira-style workflows where training access is available. Includes CV/application alignment, interview practice, and a guided search strategy for remote roles and reputable job platforms. Vendor certification exams are separate and not included in tuition unless explicitly stated.",
    category: "Customer Operations", level: "Beginner to Intermediate", mode: LearningMode.HYBRID, price: 15000, currency: "XAF", durationDays: 14, durationHours: 40,
    skills: ["Customer communication", "Ticketing workflows", "Escalation", "CRM fundamentals", "Knowledge-base writing", "Remote job applications"]
  },
  {
    title: "Executive & Virtual Assistant", slug: "executive-virtual-assistant",
    headline: "Build practical skills for remote administrative and executive support work.",
    description: "An intensive two-week program covering calendar and inbox management, professional correspondence, meeting preparation, online research, document formatting, task tracking, confidentiality, time-zone coordination, customer communication, and basic workflow documentation. Includes practical simulations, portfolio deliverables, CV and interview alignment, and a guided strategy for applying to remote assistant roles through reputable platforms. Employment is not guaranteed.",
    category: "Administrative Operations", level: "Beginner to Intermediate", mode: LearningMode.HYBRID, price: 20000, currency: "XAF", durationDays: 14, durationHours: 40,
    skills: ["Calendar management", "Inbox management", "Business writing", "Research", "Task coordination", "Remote job applications"]
  }
];

async function main() {
  for (const course of courses) {
    await prisma.course.upsert({
      where: { slug: course.slug },
      create: { ...course, published: true },
      update: {
        title: course.title, headline: course.headline, description: course.description,
        category: course.category, level: course.level, mode: course.mode,
        price: course.price, currency: course.currency, durationDays: course.durationDays,
        durationHours: course.durationHours, skills: course.skills, published: true
      }
    });
    console.log(`Seeded course: ${course.title}`);
  }
}

main().catch((error) => { console.error(error); process.exitCode = 1; })
  .finally(async () => { await prisma.$disconnect(); });
