import { PrismaClient, LearningMode } from "@prisma/client";

const prisma = new PrismaClient();

// Upserts only these four known course slugs and their EN/FR display translations.
// Existing related modules, enrollments, cohorts, payments, and users are not deleted or recreated.
const courses = [
  {
    title: "CV Writing for Target Roles", slug: "cv-building-cover-letter-writing",
    headline: "Show how your experience, skills, and work evidence match a role and its responsibilities.",
    description: "A practical three-day workshop on understanding role requirements, selecting relevant experience, describing contributions with specific evidence, structuring a readable CV, writing a focused cover letter, and tailoring applications honestly. Learners finish with a role-targeted CV, a cover letter, and a checklist for explaining how their work can support a team. HCIL Academy does not guarantee employment.",
    category: "Career Readiness", level: "Beginner", mode: LearningMode.ONLINE, price: 3000, currency: "XAF", durationDays: 3, durationHours: 9,
    skills: ["Role analysis", "CV writing", "Evidence-based achievements", "Cover letters", "Professional communication"]
  },
  {
    title: "LinkedIn Profile for Role Readiness", slug: "linkedin-profile-optimization",
    headline: "Present your capabilities, examples of work, and professional direction clearly to people recruiting for target roles.",
    description: "A focused three-day workshop covering role positioning, headline and About section, skills and experience, work evidence and portfolio links, professional networking, and a realistic outreach plan. Learners practise connecting their experience to the needs of a team or organization and leave with a revised profile and action plan. No job placement is guaranteed.",
    category: "Career Readiness", level: "Beginner", mode: LearningMode.ONLINE, price: 1500, currency: "XAF", durationDays: 3, durationHours: 6,
    skills: ["Role positioning", "Profile writing", "Work evidence", "Professional networking", "Portfolio presentation"]
  },
  {
    title: "Customer Support & Customer Experience Operations", slug: "customer-support-customer-representative",
    headline: "Practise the communication, triage, documentation, and problem-solving tasks that help teams resolve customer needs reliably.",
    description: "A practical two-week program covering active listening, customer communication, ticket triage, prioritisation, escalation, complaint resolution, knowledge-base writing, service measures, and CRM/help-desk workflows. Learners practise documenting cases, setting clear expectations, protecting customer trust, and handing complex issues to the right team. Tool demonstrations depend on training access. The portfolio includes sample responses, a ticket workflow, and a short knowledge-base article. Vendor certification exams and employment placement are not included unless explicitly stated.",
    category: "Customer Operations", level: "Beginner to Intermediate", mode: LearningMode.HYBRID, price: 15000, currency: "XAF", durationDays: 14, durationHours: 40,
    skills: ["Customer communication", "Ticket triage", "Case documentation", "Escalation and handoff", "CRM workflows", "Knowledge-base writing"]
  },
  {
    title: "Administrative & Virtual Assistant Operations", slug: "executive-virtual-assistant",
    headline: "Develop the organisation, communication, documentation, and coordination skills that help teams protect time and complete work.",
    description: "A practical two-week program covering calendar and inbox management, professional correspondence, meeting preparation, research briefs, document formatting, task tracking, confidentiality, time-zone coordination, and workflow documentation. Learners practise preparing accurate handovers, anticipating dependencies, tracking actions, and keeping information organised. Portfolio outputs include a meeting brief, a schedule, a task tracker, and a process checklist. The program supports application preparation but does not guarantee employment.",
    category: "Administrative Operations", level: "Beginner to Intermediate", mode: LearningMode.HYBRID, price: 20000, currency: "XAF", durationDays: 14, durationHours: 40,
    skills: ["Calendar management", "Inbox coordination", "Business writing", "Research briefs", "Task tracking", "Process documentation"]
  }
];

const courseTranslations = {
  "cv-building-cover-letter-writing": {
    fr: {
      title: "Rédiger un CV adapté à un rôle",
      headline: "Montrez comment votre expérience et vos réalisations répondent aux responsabilités d’un poste.",
      description: "Atelier pratique de trois jours sur l’analyse d’une offre, la sélection d’expériences pertinentes, la description de contributions avec des preuves précises, la structure d’un CV lisible et la rédaction d’une lettre ciblée. Les apprenants repartent avec un CV adapté, une lettre de motivation et une grille pour expliquer comment leur travail peut soutenir une équipe. HCIL Academy ne garantit pas d’emploi.",
      category: "Préparation professionnelle",
      skills: ["Analyse du poste", "Rédaction de CV", "Réalisations étayées", "Lettres de motivation", "Communication professionnelle"]
    }
  },
  "linkedin-profile-optimization": {
    fr: {
      title: "Optimiser son profil LinkedIn pour un rôle",
      headline: "Présentez clairement vos capacités, vos exemples de travail et votre orientation professionnelle.",
      description: "Atelier de trois jours sur le positionnement, le titre et la section À propos, les compétences et expériences, les preuves de travail, les liens de portfolio, le réseautage et une stratégie réaliste de prise de contact. Les apprenants relient leur expérience aux besoins d’une équipe ou d’une organisation et repartent avec un profil révisé et un plan d’action. Aucun placement n’est garanti.",
      category: "Préparation professionnelle",
      skills: ["Positionnement professionnel", "Rédaction de profil", "Preuves de travail", "Réseautage professionnel", "Présentation du portfolio"]
    }
  },
  "customer-support-customer-representative": {
    fr: {
      title: "Service client et opérations d’expérience client",
      headline: "Pratiquez la communication, le tri des demandes, la documentation et la résolution de problèmes au service des clients.",
      description: "Programme pratique de deux semaines : écoute active, communication client, tri et priorisation des tickets, escalade, résolution des réclamations, rédaction d’articles de base de connaissances, indicateurs de service et flux CRM. Les apprenants documentent les cas, fixent des attentes claires, protègent la confiance du client et transmettent les situations complexes à la bonne équipe. Les démonstrations d’outils dépendent des accès disponibles. Le portfolio comprend des réponses types, un flux de traitement des tickets et un article de base de connaissances. Les certifications éditeur et l’emploi ne sont pas inclus ni garantis.",
      category: "Opérations et relation client",
      skills: ["Communication client", "Tri des tickets", "Documentation des cas", "Escalade et transmission", "Flux CRM", "Rédaction de base de connaissances"]
    }
  },
  "executive-virtual-assistant": {
    fr: {
      title: "Opérations administratives et assistance virtuelle",
      headline: "Développez les compétences d’organisation, de communication, de documentation et de coordination qui font avancer les équipes.",
      description: "Programme pratique de deux semaines : gestion de calendrier et de boîte de réception, correspondance professionnelle, préparation de réunions, notes de recherche, mise en forme de documents, suivi des tâches, confidentialité, coordination entre fuseaux horaires et documentation des processus. Les apprenants préparent des transmissions précises, anticipent les dépendances, suivent les actions et organisent l’information. Le portfolio comprend une note de réunion, un calendrier, un tableau de suivi et une liste de contrôle. La formation aide à préparer les candidatures sans garantir un emploi.",
      category: "Opérations administratives",
      skills: ["Gestion de calendrier", "Gestion de boîte de réception", "Rédaction professionnelle", "Notes de recherche", "Suivi des tâches", "Documentation des processus"]
    }
  }
};

async function main() {
  await Promise.all([
    prisma.language.upsert({ where: { code: "en" }, update: { name: "English", nativeName: "English", flag: "🇬🇧", isActive: true }, create: { code: "en", name: "English", nativeName: "English", flag: "🇬🇧", isDefault: true, isActive: true } }),
    prisma.language.upsert({ where: { code: "fr" }, update: { name: "Français", nativeName: "Français", flag: "🇫🇷", isActive: true }, create: { code: "fr", name: "Français", nativeName: "Français", flag: "🇫🇷", isDefault: false, isActive: true } }),
  ]);

  for (const course of courses) {
    const savedCourse = await prisma.course.upsert({
      where: { slug: course.slug },
      create: { ...course, published: true },
      update: {
        title: course.title, headline: course.headline, description: course.description,
        category: course.category, level: course.level, mode: course.mode,
        price: course.price, currency: course.currency, durationDays: course.durationDays,
        durationHours: course.durationHours, skills: course.skills, published: true
      }
    });
    for (const locale of ["en", "fr"]) {
      const translation = locale === "en" ? {
        title: course.title,
        headline: course.headline,
        description: course.description,
        category: course.category,
        skills: course.skills,
      } : courseTranslations[course.slug].fr;

      await prisma.courseTranslation.upsert({
        where: { courseId_locale: { courseId: savedCourse.id, locale } },
        update: translation,
        create: { courseId: savedCourse.id, locale, ...translation },
      });
    }
    console.log(`Seeded course and EN/FR translations: ${course.title}`);
  }
}

main().catch((error) => { console.error(error); process.exitCode = 1; })
  .finally(async () => { await prisma.$disconnect(); });
