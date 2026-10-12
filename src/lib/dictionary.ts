export type TranslationMap = Record<string, string>;

export const DEFAULT_DICTIONARY: Record<string, TranslationMap> = {
  en: {
    // Navigation
    "nav.brand": "HCIL ACADEMY",
    "nav.tagline": "Learn. Build. Earn. Own.",
    "nav.programs": "Programs",
    "nav.methodology": "Methodology",
    "nav.labs": "Labs & Tools",
    "nav.courses": "Programs & Pillars",
    "nav.flagship": "From Skill to Enterprise",
    "nav.ai_advisor": "Financial & Skill Matcher",
    "nav.campuses": "Innovation Hubs",
    "nav.blog": "Insights",
    "nav.portal": "Student Studio",
    "nav.apply": "Explore Cohorts",

    // Hero
    "hero.badge": "HCIL ACADEMY • INITIAL LAUNCH: CUSTOMER SUPPORT & EXECUTIVE ASSISTANT (VA)",
    "hero.headline_1": "Learn to create value.",
    "hero.headline_2": "Understand money.",
    "hero.headline_3": "Build what you own.",
    "hero.subheadline": "HCIL Academy helps you develop practical skills, understand cash flow, prove what you can do, and turn useful ideas into real-world opportunities—from your first project to a viable enterprise.",
    "hero.btn_explore": "Explore Learning Paths",
    "hero.btn_lab": "Explore the Money Lab (Preview)",

    // Pillars
    "pillar.1.title": "Financial Intelligence",
    "pillar.1.desc": "Master cash flow, net profit, operating overhead, and debt. Learn why money earned is not necessarily money retained, and distinguish productive assets from liabilities.",
    "pillar.2.title": "Value-Creating Skills",
    "pillar.2.desc": "Develop verified capabilities in Customer Support, Executive & Virtual Assistance (VA), and operational workflows that businesses urgently pay to resolve.",
    "pillar.3.title": "Entrepreneurship & Business Basics",
    "pillar.3.desc": "Identify real customer problems, price services by commercial value rather than hourly labor, and design service packages with clear unit margins.",
    "pillar.4.title": "Ownership & Asset Building",
    "pillar.4.desc": "Document standard operating procedures (SOPs), delegate tasks, and explore how a solo service can grow into a resilient, scalable operation that you own.",

    // Progression
    "progression.tag": "The Learner Journey",
    "progression.title": "From problem to proof in five steps",
    "progression.desc": "A structured learning progression that moves from foundational theory to demonstrated commercial execution.",
    "step.1.name": "Understand",
    "step.1.desc": "Learn the deep mechanics of how money, operating costs, and client expectations work in modern service businesses.",
    "step.2.name": "Practise",
    "step.2.desc": "Interactive customer support ticketing simulations, executive calendar conflict resolutions, and unit economics calculations.",
    "step.3.name": "Build",
    "step.3.desc": "Create tangible operational assets: complete support playbooks, executive scheduling protocols, and client onboarding kits.",
    "step.4.name": "Prove",
    "step.4.desc": "Demonstrate capability against clear rubrics reviewed by mentors—building an evidence record alongside credentials.",
    "step.5.name": "Apply & Grow",
    "step.5.desc": "Test offers with real clients, manage cash flow and expenses deliberately, and lay the foundation for sustainable independence.",

    // AI & Tools
    "ai.tag": "Pragmatic EdTech Architecture",
    "ai.title": "Tools that turn learning into practical decisions.",
    "ai.desc": "We don't teach passive theory. HCIL combines deterministic financial models with practical AI tools to help learners analyze customer needs, calculate unit economics, and test business decisions before spending money.",
    "ai.card.1.title": "Cash Flow Simulator",
    "ai.card.1.desc": "Test pricing, operating expenses, and retainer models with transparent arithmetic to understand net cash retention.",
    "ai.card.2.title": "Capability & Task Matcher",
    "ai.card.2.desc": "Maps verified student project evidence against real employer and contract briefs. Does not guarantee jobs, but provides objective skill fit.",
    "ai.card.3.title": "Lesson-to-Action Guides",
    "ai.card.3.desc": "Structured executive playbooks, support templates, and operational SOPs for every lesson to ensure actionable implementation.",
    "ai.card.4.title": "Business Economics Simulator",
    "ai.card.4.desc": "Understand break-even points, customer acquisition costs, and margin sensitivity before taking on business overhead.",

    // Built Differently
    "diff.title": "Built differently, on purpose.",
    "diff.desc": "We bridge the gap between academic theory, practical capability, and financial intelligence. Honest standards, objective rubrics, and demonstrable skills.",
    "diff.1.title": "Practical evidence alongside recognized credentials",
    "diff.1.desc": "Credentials have value, but employers and clients hire for execution. Learners graduate with assessed project rubrics, verified work samples, and transparent capability records.",
    "diff.2.title": "Active simulations over passive lecture listening",
    "diff.2.desc": "Learn money mechanics and client communication by actively resolving realistic scenarios: handling dissatisfied customers, balancing project budgets, and managing calendars across time zones.",
    "diff.3.title": "Hybrid learning + Planned physical innovation hubs",
    "diff.3.desc": "Live interactive hybrid streams available today, with dedicated physical innovation spaces planned in Douala (Akwa) and Yaounde (Bastos) during our next pilot phase to ensure 24/7 solar power and in-person mentorship.",
    "diff.4.title": "Ownership and agency as the ultimate objective",
    "diff.4.desc": "Employment is a valid path. Freelancing is a valid path. Entrepreneurship is a valid path. Our mission is to give you the financial intelligence to choose and build sustainable economic agency.",

    // Split Cards
    "split.left.badge": "FLAGSHIP PILOT PROGRAMME",
    "split.left.title": "From Skill to Enterprise",
    "split.left.subtitle": "A practical 8–12 week pilot programme designed to turn verified capability into a viable client offer, with transparent unit economics.",
    "split.left.bullet1": "Develop a baseline financial plan & cash flow statement",
    "split.left.bullet2": "Deliver a real-world capstone project solving a business problem",
    "split.left.bullet3": "Validate pricing, margins, and customer willingness to pay",
    "split.left.bullet4": "Graduate with a verified HCIL capability record and viable offer",
    "split.left.btn": "Apply for Flagship Cohort",

    "split.right.badge": "INITIAL LAUNCH TRACKS",
    "split.right.title": "Customer Support & Executive Assistant.",
    "split.right.subtitle": "We begin with foundational, high-demand operational skills that businesses urgently need to protect customer retention and buy back leadership time.",
    "split.right.btn": "Explore Launch Programs",

    // Multilingual
    "lang.title": "Bilingual foundation with pan-African ambition.",
    "lang.desc": "HCIL Academy is built bilingual from day one. Every lesson, assessment rubric, and mentor consultation operates seamlessly in English and French.",

    // FAQ
    "faq.title": "Questions, answered.",
    "faq.q1": "Is HCIL Academy only for entrepreneurs?",
    "faq.a1": "No. Employment is a valid path. Freelancing is a valid path. Entrepreneurship is a valid path. We teach you how money works, how value is created, and how to manage cash flow so you can make informed, resilient choices on whatever path you choose.",
    "faq.q2": "What makes this different from traditional online courses?",
    "faq.a2": "Most courses offer passive video playlists and certificates of completion. At HCIL, you complete interactive simulations, build real operating procedures, and prove capability against transparent rubrics.",
    "faq.q3": "Are the physical innovation hubs in Douala and Yaoundé operating today?",
    "faq.a3": "Our live hybrid online cohorts and student studio are active today. Dedicated physical innovation lab facilities in Douala (Akwa) and Yaoundé (Bastos) are currently in their pilot planning rollout to ensure 24/7 solar power, gigabit fiber, and in-person peer pods.",
    "faq.q4": "What is the 'From Skill to Enterprise' program?",
    "faq.a4": "It is our 8–12 week flagship pilot accelerator. You establish a financial baseline, take a high-demand capability (like Customer Support or Virtual Assistance), calculate unit costs and margins, test an offer with potential clients, and leave with verifiable proof of capability.",

    // Bottom CTA
    "cta.bottom.title": "Ready to build skills that create value?",
    "cta.bottom.desc": "Begin with our initial launch programs in Customer Support & CX or Executive Assistance (VA), or apply for the From Skill to Enterprise flagship pilot.",
    "cta.bottom.btn1": "Explore Learning Paths",
    "cta.bottom.btn2": "Review Assessment Standards",
  },

  fr: {
    // Navigation
    "nav.brand": "HCIL ACADEMY",
    "nav.tagline": "Apprendre. Bâtir. Gagner. Posséder.",
    "nav.programs": "Formations",
    "nav.methodology": "Méthode",
    "nav.labs": "Outils & Labs",
    "nav.courses": "Filières & Piliers",
    "nav.flagship": "De la Compétence à l'Entreprise",
    "nav.ai_advisor": "Orientation & Bilan Financier",
    "nav.campuses": "Pôles d'Innovation",
    "nav.blog": "Analyses",
    "nav.portal": "Espace Étudiant",
    "nav.apply": "Rejoindre une Promotion",

    // Hero
    "hero.badge": "HCIL ACADEMY • LANCEMENT INITIAL : SERVICE CLIENT & ASSISTANAT DE DIRECTION (VA)",
    "hero.headline_1": "Apprendre à créer de la valeur.",
    "hero.headline_2": "Comprendre l'argent.",
    "hero.headline_3": "Bâtir son propre patrimoine.",
    "hero.subheadline": "HCIL Academy vous aide à développer des compétences concrètes, maîtriser les flux de trésorerie, prouver vos capacités sur pièces et transformer vos idées en opportunités réelles—du premier projet à une entreprise viable.",
    "hero.btn_explore": "Découvrir les Filières",
    "hero.btn_lab": "Accéder au Lab Financier (Aperçu)",

    // Pillars
    "pillar.1.title": "Intelligence Financière",
    "pillar.1.desc": "Comprendre la trésorerie nette, les charges d'exploitation et la dette. Retenir que l'argent encaissé n'est pas forcément conservé, et distinguer les actifs des passifs.",
    "pillar.2.title": "Compétences Créatrices de Valeur",
    "pillar.2.desc": "Développer des compétences vérifiées en Service Client (CX), Assistanat Virtuel de Direction (VA) et opérations clés que les entreprises rémunèrent immédiatement.",
    "pillar.3.title": "Entrepreneuriat & Gestion de Base",
    "pillar.3.desc": "Identifier les besoins urgents des clients, tarifier selon la valeur plutôt que le temps passé, et concevoir des offres avec une rentabilité claire.",
    "pillar.4.title": "Propriété & Création d'Actifs",
    "pillar.4.desc": "Formaliser des procédures (SOPs), déléguer et comprendre comment une prestation individuelle peut devenir une structure pérenne et indépendante.",

    // Progression
    "progression.tag": "Le Parcours Pédagogique",
    "progression.title": "Du problème à la preuve d'impact en 5 étapes",
    "progression.desc": "Une progression structurée qui transforme la compréhension théorique en capacité d'exécution économique démontrée.",
    "step.1.name": "Comprendre",
    "step.1.desc": "Assimiler les rouages de la trésorerie, des charges réelles et des exigences professionnelles des entreprises clientes.",
    "step.2.name": "Pratiquer",
    "step.2.desc": "Simulations interactives : résolution de réclamations client, gestion d'agendas multi-fuseaux horaires et calculs de rentabilité unitaire.",
    "step.3.name": "Construire",
    "step.3.desc": "Créer de vrais livrables opérationnels : guides complets de support client, protocoles d'assistanat et kits d'accueil client.",
    "step.4.name": "Démontrer",
    "step.4.desc": "Faire évaluer ses résultats selon des grilles d'évaluation rigoureuses, constituant ainsi un dossier de preuves tangibles aux côtés des certificats.",
    "step.5.name": "Appliquer & Grandir",
    "step.5.desc": "Tester ses offres auprès de vrais clients, gérer ses rentrées d'argent avec rigueur et poser les jalons d'une autonomie durable.",

    // AI & Tools
    "ai.tag": "Technologie Pédagogique Concrète",
    "ai.title": "Des outils pour transformer l'apprentissage en décisions d'action.",
    "ai.desc": "Nous refusons la théorie passive. HCIL combine des modèles financiers déterministes et des assistants IA pour tester la viabilité économique de ses services avant tout investissement.",
    "ai.card.1.title": "Simulateur de Trésorerie",
    "ai.card.1.desc": "Calculez de manière transparente l'impact de vos tarifs, de vos charges et de votre volume client sur votre solde net.",
    "ai.card.2.title": "Détecteur de Compétences & Missions",
    "ai.card.2.desc": "Rapproche vos livrables certifiés des besoins d'entreprises réelles. Ne garantit pas l'emploi, mais valide l'adéquation technique.",
    "ai.card.3.title": "Guides Pratiques de Cours",
    "ai.card.3.desc": "Fiches opérationnelles, modèles de communication client et procédures pas à pas pour chaque session de formation.",
    "ai.card.4.title": "Simulateur Économique d'Entreprise",
    "ai.card.4.desc": "Évaluez le seuil de rentabilité, le coût d'acquisition client et la sensibilité des marges avant d'engager des frais.",

    // Built Differently
    "diff.title": "Conçu différemment, par conviction.",
    "diff.desc": "Nous comblons le fossé entre la théorie académique, l'aptitude opérationnelle et l'intelligence financière. Critères objectifs et compétences démontrées.",
    "diff.1.title": "Des preuves pratiques aux côtés des diplômes reconnus",
    "diff.1.desc": "Les diplômes ont leur utilité, mais les clients recrutent pour l'exécution. Nos apprenants sortent avec des livrables audités et des compétences vérifiées.",
    "diff.2.title": "Des simulations actives plutôt que l'écoute passive",
    "diff.2.desc": "Apprendre par l'action : désamorcer des tensions clients, équilibrer des budgets et gérer des plannings d'exception sous contrainte réelle.",
    "diff.3.title": "Formation hybride + Pôles physiques en projet",
    "diff.3.desc": "Sessions en ligne interactives disponibles immédiatement, avec des espaces physiques dédiés à Douala (Akwa) et Yaoundé (Bastos) en phase pilote avec énergie solaire 24/7.",
    "diff.4.title": "L'indépendance économique comme véritable finalité",
    "diff.4.desc": "L'emploi salarié, le freelancing et l'entrepreneuriat sont tous légitimes. Nous vous donnons la clarté financière pour choisir et bâtir votre indépendance.",

    // Split Cards
    "split.left.badge": "PROGRAMME PILOTE PHARE",
    "split.left.title": "De la Compétence à l'Entreprise",
    "split.left.subtitle": "Un accélérateur pratique de 8 à 12 semaines pour convertir un savoir-faire opérationnel en offre de service rentable.",
    "split.left.bullet1": "Bâtir un bilan financier initial et un tableau de flux de trésorerie",
    "split.left.bullet2": "Réaliser un projet d'envergure résolvant un vrai besoin d'entreprise",
    "split.left.bullet3": "Valider la tarification, les marges et la disposition des clients à payer",
    "split.left.bullet4": "Sortir avec un dossier de compétences vérifiées HCIL et une offre active",
    "split.left.btn": "Postuler au Programme Pilote",

    "split.right.badge": "FILIÈRES DE LANCEMENT INITIAL",
    "split.right.title": "Support Client & Assistanat Virtuel.",
    "split.right.subtitle": "Nous démarrons avec des compétences opérationnelles indispensables que les entreprises recherchent activement pour fidéliser leurs clients et alléger leurs dirigeants.",
    "split.right.btn": "Découvrir les Filières de Lancement",

    // Multilingual
    "lang.title": "Un ancrage bilingue, une ambition panafricaine.",
    "lang.desc": "HCIL Academy est bilingue dès sa conception. Chaque programme, grille d'évaluation et session de mentorat fonctionne en français et en anglais.",

    // FAQ
    "faq.title": "Foire aux questions",
    "faq.q1": "HCIL Academy est-elle réservée uniquement aux entrepreneurs ?",
    "faq.a1": "Non. Le salariat, le freelancing et l'entrepreneuriat sont tous des voies respectables. Nous enseignons le fonctionnement de l'argent et la création de valeur afin que vous fassiez des choix éclairés et résilients.",
    "faq.q2": "En quoi cette formation diffère-t-elle des cours en ligne traditionnels ?",
    "faq.a2": "La plupart des formations proposent des vidéos passives. À l'HCIL, vous effectuez des simulations concrètes, élaborez de véritables procédures opérationnelles et attestez vos compétences sur pièces.",
    "faq.q3": "Les campus physiques de Douala et Yaoundé sont-ils déjà ouverts ?",
    "faq.a3": "Nos cohortes hybrides interactives et notre studio d'apprentissage sont actifs aujourd'hui. Les installations physiques pilotes de Douala (Akwa) et Yaoundé (Bastos) sont en cours de déploiement pour garantir énergie solaire ininterrompue et accompagnement de proximité.",
    "faq.q4": "Qu'est-ce que le programme 'De la Compétence à l'Entreprise' ?",
    "faq.a4": "C'est notre programme pilote phare de 8 à 12 semaines. Vous y définissez votre plan financier de base, maîtrisez une compétence demandée (comme le support client ou l'assistanat virtuel), chiffrez vos marges et testez une offre avec de vrais clients.",

    // Bottom CTA
    "cta.bottom.title": "Prêt(e) à bâtir des compétences qui créent de la valeur ?",
    "cta.bottom.desc": "Démarrez avec nos filières initiales de Service Client ou d'Assistanat Virtuel (VA), ou candidatez pour la promotion pilote De la Compétence à l'Entreprise.",
    "cta.bottom.btn1": "Découvrir les Filières",
    "cta.bottom.btn2": "Consulter les Critères d'Évaluation",
  },
};
