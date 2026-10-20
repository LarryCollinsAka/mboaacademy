
import { PrismaClient, LearningMode } from "@prisma/client";

const prisma = new PrismaClient();

const courses = [
  {
    slug: "cv-building-cover-letter-writing",
    en: {
      title: "CV Building & Cover Letter Writing",
      headline:
        "Build a targeted CV and persuasive cover letter for local and remote applications.",
      description:
        "A practical three-day workshop on CV structure, achievement-focused bullet points, ATS-aware formatting, reusable templates, tailored cover letters, common application mistakes, and adapting documents for remote roles. Includes guided exercises and a final application-ready CV and cover letter. Mboa Academy is an independent training provider and does not guarantee employment.",
      category: "Career Readiness",
    },
    fr: {
      title: "Création de CV et rédaction de lettres de motivation",
      headline:
        "Créez un CV ciblé et une lettre de motivation convaincante pour vos candidatures locales et à distance.",
      description:
        "Un atelier pratique de trois jours consacré à la structure du CV, aux réalisations professionnelles mesurables, à la mise en forme adaptée aux systèmes de suivi des candidatures (ATS), aux modèles réutilisables et aux lettres de motivation personnalisées. Vous apprendrez à éviter les erreurs fréquentes et à adapter vos documents aux postes à distance. Des exercices guidés vous permettront de préparer un CV et une lettre de motivation prêts à être utilisés. Mboa Academy est un organisme de formation indépendant et ne garantit pas l'obtention d'un emploi.",
      category: "Préparation professionnelle",
    },
    level: "Beginner",
    mode: LearningMode.ONLINE,
    price: 3000,
    durationDays: 3,
    durationHours: 9,
    skills: [
      "CV writing",
      "Cover letters",
      "ATS-aware formatting",
      "Remote job applications",
      "Professional writing",
    ],
  },
  {
    slug: "linkedin-profile-optimization",
    en: {
      title: "LinkedIn Profile Optimization",
      headline:
        "Make your LinkedIn profile clearer, credible, searchable, and aligned with target roles.",
      description:
        "A focused three-day workshop covering profile positioning, headline and About section, skills and experience, evidence and portfolio links, networking etiquette, recruiter search basics, and a practical plan for connecting with legitimate remote opportunities. Participants leave with a revised profile checklist and action plan. No job placement is guaranteed.",
      category: "Career Readiness",
    },
    fr: {
      title: "Optimisation de profil LinkedIn",
      headline:
        "Rendez votre profil LinkedIn plus clair, crédible et visible, en l'alignant sur les postes recherchés.",
      description:
        "Un atelier ciblé de trois jours consacré au positionnement professionnel, au titre du profil, à la section À propos, aux compétences et expériences, aux preuves de réalisations et liens vers le portfolio. Vous découvrirez les bonnes pratiques de réseautage, les principes de recherche des recruteurs et une méthode concrète pour identifier des opportunités légitimes de travail à distance. Chaque participant repart avec une liste de vérification pour améliorer son profil et un plan d'action. Aucun placement professionnel n'est garanti.",
      category: "Préparation professionnelle",
    },
    level: "Beginner",
    mode: LearningMode.ONLINE,
    price: 1500,
    durationDays: 3,
    durationHours: 6,
    skills: [
      "LinkedIn profile writing",
      "Professional branding",
      "Networking",
      "Portfolio presentation",
      "Remote job search",
    ],
  },
  {
    slug: "customer-support-customer-representative",
    en: {
      title: "Customer Support & Customer Representative",
      headline:
        "An intensive two-week practical program for customer support and customer experience roles.",
      description:
        "An intensive two-week program covering professional written and spoken communication, active listening, ticket lifecycle, prioritization, escalation, complaint resolution, knowledge-base writing, service-level concepts, CRM and help-desk workflows, and practical role-play. Tool exposure may include Microsoft, Zendesk, Salesforce, Zoho, and Jira-style workflows where training access is available. Includes CV and application alignment, interview practice, and a guided search strategy for remote roles and reputable job platforms. Vendor certification exams are separate and not included in tuition unless explicitly stated.",
      category: "Customer Operations",
    },
    fr: {
      title: "Support client et relation clientèle",
      headline:
        "Un programme pratique intensif de deux semaines pour les métiers du support client et de l'expérience client.",
      description:
        "Un programme intensif de deux semaines portant sur la communication professionnelle écrite et orale, l'écoute active, le cycle de traitement des tickets, la priorisation, l'escalade des demandes, la résolution des réclamations, la rédaction de bases de connaissances, les niveaux de service ainsi que les processus CRM et de centre d'assistance. Des mises en situation pratiques sont incluses. Selon les accès disponibles, les outils étudiés peuvent comprendre Microsoft, Zendesk, Salesforce, Zoho et des flux de travail de type Jira. Le programme comprend également l'adaptation du CV aux candidatures, la préparation aux entretiens et une stratégie guidée de recherche d'emplois à distance sur des plateformes reconnues. Les examens de certification des fournisseurs sont distincts et ne sont pas inclus dans les frais, sauf indication explicite.",
      category: "Opérations de service client",
    },
    level: "Beginner to Intermediate",
    mode: LearningMode.HYBRID,
    price: 15000,
    durationDays: 14,
    durationHours: 40,
    skills: [
      "Customer communication",
      "Ticketing workflows",
      "Escalation",
      "CRM fundamentals",
      "Knowledge-base writing",
      "Remote job applications",
    ],
  },
  {
    slug: "executive-virtual-assistant",
    en: {
      title: "Executive & Virtual Assistant",
      headline:
        "Build practical skills for remote administrative and executive support work.",
      description:
        "An intensive two-week program covering calendar and inbox management, professional correspondence, meeting preparation, online research, document formatting, task tracking, confidentiality, time-zone coordination, customer communication, and basic workflow documentation. Includes practical simulations, portfolio deliverables, CV and interview alignment, and a guided strategy for applying to remote assistant roles through reputable platforms. Employment is not guaranteed.",
      category: "Administrative Operations",
    },
    fr: {
      title: "Assistant exécutif et assistant virtuel",
      headline:
        "Développez les compétences pratiques nécessaires aux fonctions d'assistance administrative et exécutive à distance.",
      description:
        "Un programme intensif de deux semaines consacré à la gestion des calendriers et des boîtes de réception, à la correspondance professionnelle, à la préparation des réunions, à la recherche en ligne, à la mise en forme des documents, au suivi des tâches, à la confidentialité, à la coordination des fuseaux horaires, à la communication client et à la documentation des procédures. Le programme comprend des simulations pratiques, des livrables pour constituer un portfolio, l'adaptation du CV et la préparation aux entretiens, ainsi qu'une stratégie guidée de candidature sur des plateformes reconnues. Aucun emploi n'est garanti.",
      category: "Opérations administratives",
    },
    level: "Beginner to Intermediate",
    mode: LearningMode.HYBRID,
    price: 20000,
    durationDays: 14,
    durationHours: 40,
    skills: [
      "Calendar management",
      "Inbox management",
      "Business writing",
      "Research",
      "Task coordination",
      "Remote job applications",
    ],
  },
];

async function main() {
  // Ensure the two supported language records exist.
  await prisma.language.upsert({
    where: { code: "en" },
    create: {
      code: "en",
      name: "English",
      nativeName: "English",
      flag: "🇬🇧",
      isDefault: true,
      isActive: true,
    },
    update: {
      name: "English",
      nativeName: "English",
      flag: "🇬🇧",
      isActive: true,
    },
  });

  await prisma.language.upsert({
    where: { code: "fr" },
    create: {
      code: "fr",
      name: "French",
      nativeName: "Français",
      flag: "🇫🇷",
      isDefault: false,
      isActive: true,
    },
    update: {
      name: "French",
      nativeName: "Français",
      flag: "🇫🇷",
      isActive: true,
    },
  });

  for (const item of courses) {
    const { en, fr, ...courseData } = item;

    // Keep the canonical course fields in English.
    const course = await prisma.course.upsert({
      where: { slug: courseData.slug },
      create: {
        ...courseData,
        ...en,
        currency: "XAF",
        published: true,
      },
      update: {
        ...courseData,
        ...en,
        currency: "XAF",
        published: true,
      },
    });

    // Add or update the Cameroon-market tuition price.
    await prisma.coursePrice.upsert({
      where: {
        courseId_marketCode_currency: {
          courseId: course.id,
          marketCode: "CM",
          currency: "XAF",
        },
      },
      create: {
        courseId: course.id,
        marketCode: "CM",
        currency: "XAF",
        amount: courseData.price,
        isActive: true,
      },
      update: {
        amount: courseData.price,
        isActive: true,
      },
    });

    // Store both localized versions directly in PostgreSQL.
    for (const [locale, content] of [
      ["en", en],
      ["fr", fr],
    ]) {
      await prisma.courseTranslation.upsert({
        where: {
          courseId_locale: {
            courseId: course.id,
            locale,
          },
        },
        create: {
          courseId: course.id,
          locale,
          ...content,
        },
        update: content,
      });
    }

    console.log(`Seeded: ${en.title} (English + French)`);
  }

  console.log("Bilingual course seeding completed.");
}

main()
  .catch((error) => {
    console.error("Course seeding failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
