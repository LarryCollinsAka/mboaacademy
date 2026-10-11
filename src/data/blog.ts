export interface BlogPostItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: "Career Strategy" | "Tech Trends" | "AI & Engineering" | "Student Stories";
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
}

export const BLOG_POSTS_DATA: BlogPostItem[] = [
  {
    id: "blog-1",
    title: "How to Land High-Paying Global Tech Roles from Cameroon & Africa in 2026",
    slug: "land-global-tech-roles-from-africa-2026",
    excerpt: "The playbook for breaking into international remote engineering, from building proof-of-work portfolios to passing technical architecture rounds.",
    category: "Career Strategy",
    readTime: "7 min read",
    publishedDate: "Oct 8, 2026",
    coverImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Dr. Paul Ebanda",
      role: "Dean of Academic Careers, Mboa Academy",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=250&q=80",
    },
    tags: ["Remote Work", "Career Coaching", "Software Engineering", "Interviews"],
    content: `
Landing a remote role in top European, North American, or African tech ecosystems requires shifting from generic credentials to verifiable proof-of-work.

### 1. Build Production-Grade Systems, Not Generic Clones
Hiring managers are tired of simple Todo lists and clones. They want to see:
- Architecture diagrams showing request flows and caching layers.
- Real database indexing and relational modeling using PostgreSQL and Prisma.
- Containerization using Docker for reproducible environments.

### 2. Leverage Graph and Vector AI in Your Stack
Modern software products are moving from simple relational tables to cognitive architectures. Demonstrating familiarity with vector databases like **Qdrant** for semantic retrieval and graph databases like **FalkorDB** for skill mapping sets your resume apart from 99% of applicants.

### 3. The Power of Hybrid Onsite Immersion
While remote work is the destination, intense onsite learning with mentors eliminates distractions, provides uninterrupted electricity and fiber broadband, and builds lifetime professional brotherhood.
    `,
  },
  {
    id: "blog-2",
    title: "Why Vector Search (Qdrant) & Knowledge Graphs (FalkorDB) Are Reshaping EdTech & LMS",
    slug: "vector-search-knowledge-graphs-lms-future",
    excerpt: "Exploring how AI is transforming rote online lectures into dynamic, personalized career graphs tailored to individual learning speeds.",
    category: "AI & Engineering",
    readTime: "5 min read",
    publishedDate: "Oct 4, 2026",
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Cedric Fomekong",
      role: "AI Lead Instructor",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80",
    },
    tags: ["Qdrant", "FalkorDB", "Next.js", "AI LMS"],
    content: `
Traditional LMS platforms are flat catalogs of video playlists. At Mboa Academy, we believe in **Dynamic Skill Ontologies**.

By using FalkorDB to map dependencies between tech concepts, we know exactly which foundational module a student needs before unlocking advanced topics like multi-tenant Postgres partitioning or RAG reranking.
    `,
  },
  {
    id: "blog-3",
    title: "Inside Mboa Academy: Douala & Yaounde Campus Labs Tour",
    slug: "inside-mboa-academy-onsite-campus-labs",
    excerpt: "A look inside our hybrid learning spaces equipped with solar backup power, gigabit fiber, and collaborative creator studios.",
    category: "Student Stories",
    readTime: "4 min read",
    publishedDate: "Sep 28, 2026",
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Marcelle Nguena",
      role: "Academy Alum & Community Host",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
    },
    tags: ["Onsite Campus", "Douala", "Yaounde", "Community"],
    content: `
Education is more than a screen. Our on-site labs in Douala (Akwa) and Yaounde (Bastos) offer uninterrupted power, high-speed fiber internet, private project rooms, and a peer network where tomorrow's tech leaders build together.
    `,
  },
];
