export type TranslationMap = Record<string, string>;

export const DEFAULT_DICTIONARY: Record<string, TranslationMap> = {
  en: {
    // Navigation
    "nav.courses": "Courses & LMS",
    "nav.ai_advisor": "AI Career Matcher",
    "nav.campuses": "Onsite Campuses",
    "nav.blog": "Blog & Insights",
    "nav.portal": "Student Portal",
    "nav.apply": "Apply for Cohort",
    "nav.tagline": "On-Demand Job Skills • On-site & Hybrid",

    // Hero
    "hero.badge_campuses": "On-Site Campuses:",
    "hero.badge_location": "Douala & Yaounde Labs + Global Online Cohorts",
    "hero.badge_admissions": "Admissions Active",
    "hero.headline_1": "The Career Academy for",
    "hero.headline_highlight": "On-Demand Job Skills",
    "hero.subheadline": "Learn the highest-paying software, AI engineering, and cloud skills. Accelerated training combining on-site physical lab immersion with our intelligent AI-powered LMS.",
    "hero.btn_explore": "Explore Career Cohorts",
    "hero.btn_ai_quiz": "AI Career Matcher (Free)",
    "hero.stat_placement": "Hiring Placement Rate",
    "hero.stat_campuses": "Douala & Yaounde Labs",
    "hero.stat_graduates": "Graduates & Alumni",
    "hero.stat_curriculum": "Curriculum Standards",

    // Campus Section
    "campus.tag": "Hybrid & Onsite Immersion",
    "campus.title_1": "Why Learning",
    "campus.title_highlight": "On-Site & Hybrid",
    "campus.title_2": "Outperforms Pure Online Video Courses",
    "campus.desc": "Most online tutorials have a 95% dropout rate. At Mboa Academy, our physical innovation labs in Douala and Yaounde surround you with driven peers and mentors, creating a high-accountability environment where you finish and get hired.",
    "campus.tour_title": "Visit Our Campuses in Person",
    "campus.tour_hours": "Douala (Akwa) • Yaounde (Bastos) • Mon - Sat: 8:00 AM - 9:00 PM",
    "campus.tour_btn": "Book a Tour",

    // Courses Section
    "courses.tag": "Industry-Aligned Curricula",
    "courses.title_1": "In-Demand",
    "courses.title_highlight": "Career Tracks",
    "courses.desc": "Curated by tech leaders and hiring managers. Master full-stack architectures, vector search, graph databases, and modern cloud deployment.",
    "courses.view_all": "View All Courses & Syllabi",
    "courses.weeks": "Weeks Cohort",
    "courses.installments": "Installment plans available",
    "courses.curriculum_btn": "Curriculum",

    // AI Spotlight
    "ai.tag": "Next-Generation AI EdTech",
    "ai.title_1": "An LMS Engineered with",
    "ai.title_highlight": "Cognitive Intelligence",
    "ai.desc": "Mboa Academy combines Qdrant Vector Databases and FalkorDB Knowledge Graphs to personalize your education, answer questions in real-time, and guarantee skill mastery.",
    "ai.advisor_banner_title": "Try the AI Course & Career Advisor",
    "ai.advisor_banner_desc": "Not sure which track to choose? Let our AI match your career objectives to the right cohort in 60 seconds.",
    "ai.advisor_btn": "Launch AI Advisor",

    // Testimonials
    "testimonials.tag": "Graduate Career Outcomes",
    "testimonials.title_1": "Proof in the",
    "testimonials.title_highlight": "Results",
    "testimonials.desc": "From university graduates and self-taught switchers to senior leaders. Hear how Mboa Academy helped students bridge the gap into high-paying global tech roles.",

    // CTA
    "cta.badge": "Limited Physical Cohort Seats Available",
    "cta.title_1": "Ready to Build Your Career in Modern",
    "cta.title_highlight": "Software & AI",
    "cta.desc": "Join the next cohort starting next month at our Douala or Yaounde Innovation Hubs, or learn hybrid from anywhere. Gain real-world skills, mentorship, and guaranteed portfolio reviews.",
    "cta.btn_apply": "Apply for Next Cohort",
    "cta.btn_quiz": "Take 2-Min Career Quiz",

    // LMS & Student Notes
    "lms.my_courses": "My Enrolled Courses",
    "lms.student_notes": "Interactive Student Notes",
    "lms.assignments": "Assignments & Projects",
    "lms.ai_tutor": "AI Lecture Assistant",
    "lms.save_notes": "Save Notes",
    "lms.export_notes": "Export Notes",
  },

  fr: {
    // Navigation
    "nav.courses": "Formations & LMS",
    "nav.ai_advisor": "Orientation IA",
    "nav.campuses": "Campus Présentiels",
    "nav.blog": "Blog & Tendances",
    "nav.portal": "Espace Étudiant",
    "nav.apply": "Rejoindre une Cohorte",
    "nav.tagline": "Compétences Tech de Pointe • Présentiel & Hybride",

    // Hero
    "hero.badge_campuses": "Campus Présentiels :",
    "hero.badge_location": "Labs Douala & Yaoundé + Cohortes en ligne",
    "hero.badge_admissions": "Inscriptions Ouvertes",
    "hero.headline_1": "L'Académie d'Élite pour les",
    "hero.headline_highlight": "Compétences Métiers Très Demandées",
    "hero.subheadline": "Maîtrisez les technologies logicielles, l'ingénierie IA et le cloud les mieux rémunérés. Une formation intensive alliant immersion physique en laboratoire et notre LMS intelligent propulsé par l'IA.",
    "hero.btn_explore": "Découvrir les Cohortes",
    "hero.btn_ai_quiz": "Test d'Orientation IA (Gratuit)",
    "hero.stat_placement": "Taux de Recrutement",
    "hero.stat_campuses": "Labs Douala & Yaoundé",
    "hero.stat_graduates": "Diplômés & Alumni",
    "hero.stat_curriculum": "Excellence Pédagogique",

    // Campus Section
    "campus.tag": "Immersion Hybride & Présentielle",
    "campus.title_1": "Pourquoi la Formation",
    "campus.title_highlight": "Présentielle & Hybride",
    "campus.title_2": "Surpasse les Simples Cours Vidéo en Ligne",
    "campus.desc": "95% des cours en ligne sont abandonnés. À la Mboa Academy, nos laboratoires d'innovation physique à Douala et Yaoundé vous plongent au cœur d'une émulation collective avec des mentors dédiés.",
    "campus.tour_title": "Visitez Nos Campus en Personne",
    "campus.tour_hours": "Douala (Akwa) • Yaoundé (Bastos) • Lun - Sam : 08h00 - 21h00",
    "campus.tour_btn": "Réserver une Visite",

    // Courses Section
    "courses.tag": "Cursus Aligné sur l'Industrie",
    "courses.title_1": "Filières Métiers",
    "courses.title_highlight": "À Forte Demande",
    "courses.desc": "Conçus par des directeurs techniques et recruteurs mondiaux. Maîtrisez les architectures full-stack, la recherche vectorielle, les bases de données graphes et le déploiement cloud moderne.",
    "courses.view_all": "Voir Toutes les Formations & Programmes",
    "courses.weeks": "Semaines de Cohorte",
    "courses.installments": "Paiement échelonné disponible",
    "courses.curriculum_btn": "Programme",

    // AI Spotlight
    "ai.tag": "EdTech IA Nouvelle Génération",
    "ai.title_1": "Un LMS Doté d'une",
    "ai.title_highlight": "Intelligence Cognitive",
    "ai.desc": "Mboa Academy associe les bases de données vectorielles Qdrant et les bases de données graphes FalkorDB pour personnaliser votre apprentissage, répondre à vos questions en temps réel et garantir la maîtrise pratique.",
    "ai.advisor_banner_title": "Essayez le Conseiller d'Orientation IA",
    "ai.advisor_banner_desc": "Hésitant(e) sur le choix de votre filière ? Laissez notre IA analyser vos objectifs et trouver votre cohorte idéale en 60 secondes.",
    "ai.advisor_btn": "Démarrer l'Orientation IA",

    // Testimonials
    "testimonials.tag": "Succès & Débouchés Professionnels",
    "testimonials.title_1": "La Preuve par les",
    "testimonials.title_highlight": "Résultats",
    "testimonials.desc": "De diplômés universitaires à des cadres en reconversion. Découvrez comment la Mboa Academy a propulsé leur carrière vers des postes internationaux hautement rémunérés.",

    // CTA
    "cta.badge": "Places Limitées pour la Prochaine Cohorte Présentielle",
    "cta.title_1": "Prêt(e) à Bâtir Votre Carrière dans le",
    "cta.title_highlight": "Génie Logiciel & l'IA",
    "cta.desc": "Rejoignez la prochaine promotion le mois prochain dans nos campus de Douala ou Yaoundé, ou suivez le programme en hybride d'où que vous soyez. Compétences concrètes, mentorat et revues de code garanties.",
    "cta.btn_apply": "Postuler pour la Prochaine Cohorte",
    "cta.btn_quiz": "Faire le Quiz d'Orientation (2 min)",

    // LMS & Student Notes
    "lms.my_courses": "Mes Formations Inscrites",
    "lms.student_notes": "Prise de Notes Intelligente",
    "lms.assignments": "Projets & Devoirs Pratiques",
    "lms.ai_tutor": "Tuteur IA du Cours",
    "lms.save_notes": "Enregistrer les Notes",
    "lms.export_notes": "Exporter mes Notes",
  },
};
