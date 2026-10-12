import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const SEED_COURSES = [
  {
    title: "Customer Service Representative & CX Support Specialist",
    slug: "customer-service-support-specialist",
    headline: "Master high-value client communication, ticketing systems, CRM operations, and retention strategies.",
    description: "Equip yourself with practical, enterprise-grade customer experience skills. Learn active listening, conflict de-escalation, Zendesk/Freshdesk workflows, asynchronous client communication, and how exceptional customer support directly impacts company cash flow and customer lifetime value (LTV).",
    category: "Value-Creating Skills",
    level: "Foundational to Intermediate",
    mode: "HYBRID",
    priceUSD: 160,
    currency: "USD",
    durationHours: 60,
    skills: ["Customer Communication", "CRM & Ticketing (Zendesk)", "Conflict Resolution", "Client Retention", "SOP Documentation"],
    published: true,
    modules: [
      {
        title: "Module 1: The Economics of Customer Experience",
        order: 1,
        lessons: [
          {
            title: "Why Retention Protects Cash Flow: The Customer LTV Equation",
            slug: "economics-of-customer-retention",
            content: "Understand why acquiring a new customer costs 5x more than retaining an existing one. How great support directly protects business revenue and reduces operational churn.",
            durationMinutes: 30,
            order: 1,
            isFreePreview: true,
          },
          {
            title: "Professional Omnichannel Communication & Tone of Voice",
            slug: "professional-communication-tone",
            content: "Mastering written and verbal communication across live chat, email, phone, and ticketing desks with empathy, speed, and precision.",
            durationMinutes: 40,
            order: 2,
            isFreePreview: true,
          },
        ],
      },
      {
        title: "Module 2: Practical Tools & Ticketing Workflows",
        order: 2,
        lessons: [
          {
            title: "Ticketing Architectures: Zendesk, Freshdesk & SLA Management",
            slug: "ticketing-architectures-slas",
            content: "Setting up ticket categories, priority tags, response time SLAs, and internal escalations. Hands-on workflow simulation.",
            durationMinutes: 45,
            order: 3,
            isFreePreview: false,
          },
          {
            title: "De-escalating High-Stress Client Scenarios",
            slug: "de-escalation-frameworks",
            content: "Turn dissatisfied clients into brand advocates using structured empathetic resolution frameworks and transparent restitution.",
            durationMinutes: 45,
            order: 4,
            isFreePreview: false,
          },
        ],
      },
      {
        title: "Module 3: Capstone Deliverable & Assessment",
        order: 3,
        lessons: [
          {
            title: "Capstone: Building a Complete Customer Support Knowledge Base & SOP",
            slug: "customer-support-sop-capstone",
            content: "Design an end-to-end support playbook for an e-commerce retailer or SaaS platform, complete with macros, FAQs, and SLA targets.",
            durationMinutes: 60,
            order: 5,
            isFreePreview: false,
          },
        ],
      },
    ],
  },
  {
    title: "Executive & Virtual Assistant (VA) Mastery",
    slug: "executive-virtual-assistant-mastery",
    headline: "Become an indispensable operational partner: executive scheduling, travel logistics, document workflow & project coordination.",
    description: "Learn to operate at the highest level of administrative support for international executives, entrepreneurs, and busy professionals. Master complex calendar management, inbox zero workflows, research briefs, bookkeeping basics, and modern AI productivity tools.",
    category: "Value-Creating Skills",
    level: "Foundational to Advanced",
    mode: "HYBRID",
    priceUSD: 180,
    currency: "USD",
    durationHours: 65,
    skills: ["Executive Calendar Management", "Inbox Zero Protocols", "Travel Logistics", "Confidentiality & Ethics", "AI Productivity Workflows"],
    published: true,
    modules: [
      {
        title: "Module 1: High-Leverage Operational Support",
        order: 1,
        lessons: [
          {
            title: "The Role of an Executive Partner: Buying Back Executive Time",
            slug: "buying-back-executive-time",
            content: "Understand the financial value of an executive's hour. Learn how anticipating needs and eliminating friction creates immense commercial value.",
            durationMinutes: 35,
            order: 1,
            isFreePreview: true,
          },
          {
            title: "Multi-Timezone Calendar Management & Conflict Resolution",
            slug: "calendar-management-timezones",
            content: "Managing executive schedules across London, Paris, New York, and Douala/Yaoundé. Buffer times, VIP meeting priorities, and briefing prep.",
            durationMinutes: 45,
            order: 2,
            isFreePreview: true,
          },
        ],
      },
      {
        title: "Module 2: Executive Communications & Systems",
        order: 2,
        lessons: [
          {
            title: "Inbox Zero Architecture & Email Drafting",
            slug: "inbox-zero-email-protocols",
            content: "Filters, folders, drafting on behalf of leadership, and prioritizing urgent operational communications.",
            durationMinutes: 40,
            order: 3,
            isFreePreview: false,
          },
          {
            title: "Travel Logistics, Expense Tracking & Basic Bookkeeping",
            slug: "travel-logistics-expenses",
            content: "Coordinating multi-leg international itineraries, contingency planning, receipt reconciliation, and basic ledger maintenance.",
            durationMinutes: 50,
            order: 4,
            isFreePreview: false,
          },
        ],
      },
      {
        title: "Module 3: Capstone Simulation",
        order: 3,
        lessons: [
          {
            title: "Capstone: Simulated 7-Day Executive Crisis Management Brief",
            slug: "executive-assistant-crisis-capstone",
            content: "Handle a simulated week of flight cancellations, urgent investor meeting reschedules, and briefing document preparations.",
            durationMinutes: 60,
            order: 5,
            isFreePreview: false,
          },
        ],
      },
    ],
  },
  {
    title: "From Skill to Enterprise (Flagship Pilot)",
    slug: "from-skill-to-enterprise",
    headline: "The 8-12 week flagship pilot bridging demonstrated skill, unit economics, and client revenue.",
    description: "Our flagship pathway. Establish a financial baseline, choose a high-demand service capability (such as Customer Support or Executive Assistance), build a practical customer offer, calculate costs and margins, and present verified evidence of client problem-solving. Graduates leave with a financial plan, a portfolio project, an assessed capability record, and a viable business offer.",
    category: "Entrepreneurship & Ownership",
    level: "All Levels (Pilot Cohort)",
    mode: "HYBRID",
    priceUSD: 249,
    currency: "USD",
    durationHours: 80,
    skills: ["Cash Flow Management", "Customer Discovery", "Unit Economics", "Offer Creation", "Productive Assets"],
    published: true,
    modules: [
      {
        title: "Pillar 1: Financial Intelligence & Economic Baseline",
        order: 1,
        lessons: [
          {
            title: "Cash Flow vs Income: The Wealth Equation",
            slug: "cash-flow-vs-income",
            content: "Understanding income, expenses, cash flow, debt, and the difference between an asset and a liability. Why high revenue without cost control leads to vulnerability.",
            durationMinutes: 35,
            order: 1,
            isFreePreview: true,
          },
          {
            title: "Financial Statements & The Cash Flow Quadrant",
            slug: "financial-statements-quadrant",
            content: "How to read and construct personal and business balance sheets. Transitioning from Employee (E) and Self-Employed (S) to Business Owner (B) and Investor (I).",
            durationMinutes: 45,
            order: 2,
            isFreePreview: true,
          },
        ],
      },
      {
        title: "Pillar 2: Packaging Skills into Viable Offers",
        order: 2,
        lessons: [
          {
            title: "Identifying Problems People Will Pay to Solve",
            slug: "identifying-high-value-problems",
            content: "Market research, customer discovery interviews, and identifying urgent pain points across support, administration, and digital operations.",
            durationMinutes: 40,
            order: 3,
            isFreePreview: false,
          },
          {
            title: "Unit Economics, Pricing & Margin Calculations",
            slug: "packaging-capabilities-offers",
            content: "Pricing by value instead of billable hours. Designing service packages that solve complete problems with clear deliverables.",
            durationMinutes: 50,
            order: 4,
            isFreePreview: false,
          },
        ],
      },
      {
        title: "Pillar 3: The Enterprise Lab & Asset Building",
        order: 3,
        lessons: [
          {
            title: "Simulating Business Decisions & Real Customer Tests",
            slug: "simulating-business-decisions",
            content: "Testing offers with real potential clients in our Enterprise Lab framework. Generating verifiable proof-of-work deliverables.",
            durationMinutes: 60,
            order: 5,
            isFreePreview: false,
          },
          {
            title: "Building Systems that Run Beyond Daily Manual Labor",
            slug: "building-systems-and-ownership",
            content: "Documenting standard operating procedures (SOPs), team coordination, leveraging AI to scale output, and retaining equity ownership.",
            durationMinutes: 55,
            order: 6,
            isFreePreview: false,
          },
        ],
      },
    ],
  },
  {
    title: "Practical Financial Intelligence & Cash Flow Mastery",
    slug: "financial-intelligence-cash-flow",
    headline: "Understand personal finance, business cash flow, accounting basics, and responsible asset allocation.",
    description: "Learn to distinguish productive assets from liabilities. Master income statements, balance sheets, taxes, and responsible risk management inspired by classical wealth principles adapted for modern emerging economies.",
    category: "Money Intelligence",
    level: "Foundational",
    mode: "HYBRID",
    priceUSD: 140,
    currency: "USD",
    durationHours: 40,
    skills: ["Financial Statements", "Cash Flow Analysis", "Tax Basics", "Asset Allocation", "Risk Management"],
    published: true,
    modules: [
      {
        title: "Foundations of Economic Agency",
        order: 1,
        lessons: [
          {
            title: "Why Traditional Education Ignores Money Mechanics",
            slug: "why-school-ignores-money",
            content: "The fundamental gap between academic schooling and practical financial resilience.",
            durationMinutes: 30,
            order: 1,
            isFreePreview: true,
          },
        ],
      },
    ],
  },
];

export async function seedDatabase() {
  console.log("Seeding HCIL Academy database with refined Customer Support & VA focus...");

  // 1. Seed Languages
  await prisma.language.upsert({
    where: { code: "en" },
    update: { name: "English", flag: "🇬🇧", isDefault: true },
    create: { code: "en", name: "English", nativeName: "English", flag: "🇬🇧", isDefault: true },
  });

  await prisma.language.upsert({
    where: { code: "fr" },
    update: { name: "Français", flag: "🇫🇷", isDefault: false },
    create: { code: "fr", name: "Français", nativeName: "Français", flag: "🇫🇷", isDefault: false },
  });

  // 2. Seed Courses
  for (const c of SEED_COURSES) {
    const course = await prisma.course.upsert({
      where: { slug: c.slug },
      update: {
        title: c.title,
        headline: c.headline,
        description: c.description,
        price: c.priceUSD,
        level: c.level,
        mode: c.mode as any,
        durationHours: c.durationHours,
        skills: c.skills,
        published: true,
      },
      create: {
        title: c.title,
        slug: c.slug,
        headline: c.headline,
        description: c.description,
        price: c.priceUSD,
        level: c.level,
        mode: c.mode as any,
        durationHours: c.durationHours,
        skills: c.skills,
        published: true,
      },
    });

    for (const modData of c.modules) {
      let existingMod = await prisma.module.findFirst({
        where: { courseId: course.id, title: modData.title },
      });

      if (!existingMod) {
        existingMod = await prisma.module.create({
          data: {
            courseId: course.id,
            title: modData.title,
            order: modData.order,
          },
        });
      }

      for (const lesData of modData.lessons) {
        const existingLes = await prisma.lesson.findFirst({
          where: { moduleId: existingMod.id, slug: lesData.slug },
        });

        if (!existingLes) {
          await prisma.lesson.create({
            data: {
              moduleId: existingMod.id,
              title: lesData.title,
              slug: lesData.slug,
              content: lesData.content,
              durationMinutes: lesData.durationMinutes,
              order: lesData.order,
              isFreePreview: lesData.isFreePreview,
            },
          });
        }
      }
    }
  }

  console.log("Database seeded successfully with HCIL Academy Customer Support & VA curricula!");
}

if (process.argv[1]?.endsWith("seed.mjs") || process.argv[1]?.endsWith("seed.ts")) {
  seedDatabase()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}
