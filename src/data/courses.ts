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
  category: "Full-Stack Web" | "AI & Data" | "Cloud & DevOps" | "Cybersecurity" | "Product Design";
  level: "Beginner" | "Intermediate" | "Advanced";
  mode: "HYBRID" | "ONSITE" | "ONLINE";
  priceUSD: number;
  priceXAF: number; // Cameroon CFA Franc
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
    title: "Full-Stack Next.js 16, TypeScript & Postgres Mastery",
    slug: "full-stack-nextjs-postgres",
    headline: "Build production-ready, job-market applications from database architecture to deployment.",
    description: "Master modern full-stack web development. Learn React 19, Next.js App Router, Tailwind CSS, PostgreSQL with Prisma ORM, Redis caching, and CI/CD deployment on Vercel. Ideal for candidates aiming for high-salary remote or local tech roles.",
    category: "Full-Stack Web",
    level: "Intermediate",
    mode: "HYBRID",
    priceUSD: 249,
    priceXAF: 150000,
    durationWeeks: 12,
    campusLocations: ["Douala Innovation Hub", "Yaounde Tech Campus", "Online Global Live"],
    skills: ["Next.js 16", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Redis"],
    rating: 4.95,
    studentsCount: 382,
    badge: "Most In-Demand",
    featured: true,
    modules: [
      {
        id: "mod-1",
        title: "Foundation & Modern Architecture",
        lessons: [
          {
            id: "les-1",
            title: "Welcome & Academy Onboarding (Hybrid & Onsite Protocols)",
            slug: "welcome-and-onboarding",
            durationMinutes: 18,
            isFreePreview: true,
            summary: "Orientation on the Mboa Academy hybrid pedagogy, workspace setup, and on-site lab hours.",
            notesDefault: "Key takeaway: Focus on daily hands-on commits and attend weekend on-site code reviews.",
          },
          {
            id: "les-2",
            title: "Next.js App Router, Server Components & React 19 Paradigms",
            slug: "nextjs-app-router-react-19",
            durationMinutes: 34,
            isFreePreview: true,
            summary: "Deep dive into Server vs Client Components, streaming with Suspense, and Turbopack.",
            notesDefault: "Server Components reduce client JS bundle size by rendering directly on the edge.",
          },
          {
            id: "les-3",
            title: "Relational Modeling with PostgreSQL & Prisma Client",
            slug: "postgres-prisma-data-modeling",
            durationMinutes: 45,
            isFreePreview: false,
            summary: "Designing scalable schemas, composite keys, indexes, and migrations for high-throughput apps.",
          },
        ],
      },
      {
        id: "mod-2",
        title: "State, Caching & Performance",
        lessons: [
          {
            id: "les-4",
            title: "Redis Caching Strategies & Rate Limiting",
            slug: "redis-caching-rate-limiting",
            durationMinutes: 30,
            isFreePreview: false,
            summary: "Using Redis for session management, API rate limiting, and cache invalidation.",
          },
          {
            id: "les-5",
            title: "Authentication, RBAC & Multi-tenant Security",
            slug: "auth-rbac-security",
            durationMinutes: 40,
            isFreePreview: false,
            summary: "Implementing secure authentication, JSON Web Tokens, and role-based permissions.",
          },
        ],
      },
    ],
  },
  {
    id: "course-2",
    title: "Applied AI Engineering: Vector DBs (Qdrant) & Graph DBs (FalkorDB)",
    slug: "applied-ai-qdrant-falkordb",
    headline: "Build intelligent RAG agents, knowledge graphs, and semantic marketplace recommendation engines.",
    description: "Learn how to build cutting-edge AI systems beyond basic prompt engineering. Integrate Qdrant vector databases for dense embeddings and hybrid search, and FalkorDB graph databases for multi-hop reasoning, skill trees, and prerequisite matching.",
    category: "AI & Data",
    level: "Advanced",
    mode: "HYBRID",
    priceUSD: 299,
    priceXAF: 180000,
    durationWeeks: 10,
    campusLocations: ["Douala Innovation Hub", "Online Live Interactive"],
    skills: ["Qdrant Vector DB", "FalkorDB", "RAG Systems", "Python", "LangChain", "OpenAI / Gemini APIs"],
    rating: 4.98,
    studentsCount: 247,
    badge: "Trending High",
    featured: true,
    modules: [
      {
        id: "mod-ai-1",
        title: "Vector Search & Qdrant Deep Dive",
        lessons: [
          {
            id: "les-ai-1",
            title: "Embeddings, Distance Metrics & Qdrant Architecture",
            slug: "embeddings-and-qdrant",
            durationMinutes: 28,
            isFreePreview: true,
            summary: "Understanding high-dimensional cosine similarity, vector indexing, and payload filtering in Qdrant.",
          },
          {
            id: "les-ai-2",
            title: "Building Production RAG Pipelines with Hybrid Search",
            slug: "production-rag-pipelines",
            durationMinutes: 50,
            isFreePreview: false,
            summary: "Chunking strategies, metadata filtering, reranking, and hallucination guardrails.",
          },
        ],
      },
      {
        id: "mod-ai-2",
        title: "Knowledge Graphs with FalkorDB",
        lessons: [
          {
            id: "les-ai-3",
            title: "Graph Databases & openCypher Fundamentals in FalkorDB",
            slug: "graph-databases-falkordb",
            durationMinutes: 35,
            isFreePreview: false,
            summary: "Modeling entities, relationships, graph traversals, and querying skill networks.",
          },
        ],
      },
    ],
  },
  {
    id: "course-3",
    title: "Cloud Infrastructure, Docker & Production DevOps",
    slug: "cloud-docker-devops",
    headline: "Automate CI/CD pipelines, containerize microservices, and deploy resilient cloud architectures.",
    description: "Learn how production systems are deployed and scaled. Covers Linux system administration, Docker containerization, Kubernetes orchestration, GitHub Actions CI/CD, and Vercel edge infrastructure.",
    category: "Cloud & DevOps",
    level: "Intermediate",
    mode: "ONSITE",
    priceUSD: 219,
    priceXAF: 135000,
    durationWeeks: 8,
    campusLocations: ["Yaounde Tech Campus", "Douala Innovation Hub"],
    skills: ["Docker", "Kubernetes", "Linux", "GitHub Actions", "Vercel", "AWS Basics"],
    rating: 4.91,
    studentsCount: 195,
    badge: "Onsite Cohort",
    featured: true,
    modules: [
      {
        id: "mod-do-1",
        title: "Containers & Deployment Automation",
        lessons: [
          {
            id: "les-do-1",
            title: "Linux Server Hardening & Shell Scripting",
            slug: "linux-server-hardening",
            durationMinutes: 32,
            isFreePreview: true,
            summary: "Essential Linux commands, permissions, SSH keys, firewall rules, and automation scripts.",
          },
          {
            id: "les-do-2",
            title: "Production Docker Multi-Stage Builds & Optimization",
            slug: "docker-multistage-builds",
            durationMinutes: 42,
            isFreePreview: false,
            summary: "Minimizing image sizes, security vulnerability scanning, and caching layers.",
          },
        ],
      },
    ],
  },
  {
    id: "course-4",
    title: "UI/UX & Product Design for High-Conversion Web Apps",
    slug: "ui-ux-product-design",
    headline: "Design sleek, Mercor-level web experiences and translate them into usable component design systems.",
    description: "From wireframing and user psychology to high-fidelity Figma components, design tokens, and frontend handoffs. Learn how to create interfaces that impress global clients and hiring managers.",
    category: "Product Design",
    level: "Beginner",
    mode: "HYBRID",
    priceUSD: 189,
    priceXAF: 115000,
    durationWeeks: 8,
    campusLocations: ["Douala Innovation Hub", "Online Global Live"],
    skills: ["Figma", "Design Systems", "Prototyping", "User Research", "Tailwind Design Tokens"],
    rating: 4.88,
    studentsCount: 310,
    featured: false,
    modules: [],
  },
];
