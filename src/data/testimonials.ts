export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  cohort: string;
  mode: "Onsite Cohort (Douala)" | "Onsite Cohort (Yaounde)" | "Hybrid / Online";
  rating: number;
  story: string;
  salaryIncrease?: string;
  badge?: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Marcelle Nguena",
    role: "Full-Stack Software Engineer",
    company: "Fintech Global Labs",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
    cohort: "Cohort 4 - Full-Stack Track",
    mode: "Onsite Cohort (Douala)",
    rating: 5,
    story: "Studying onsite at the Douala campus made all the difference. Having access to high-speed fiber internet, pair-programming mentors, and weekly mock technical interviews helped me secure a remote USD-paying engineering role within 45 days of graduation.",
    salaryIncrease: "+240% compensation boost",
    badge: "Hired Remotely",
  },
  {
    id: "test-2",
    name: "Cedric Fomekong",
    role: "AI & Data Solutions Architect",
    company: "AfriTech Analytics",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80",
    cohort: "Cohort 5 - AI & Graph Engineering",
    mode: "Hybrid / Online",
    rating: 5,
    story: "The curriculum goes beyond toy tutorials. We built vector-indexed RAG chatbots using Qdrant and knowledge graphs using FalkorDB. Employers were blown away when I walked them through my live capstone project during interviews.",
    salaryIncrease: "Transitioned to Lead AI Engineer",
    badge: "Fast Track",
  },
  {
    id: "test-3",
    name: "Aicha Bello",
    role: "DevOps & Cloud Systems Engineer",
    company: "CloudScale Africa",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80",
    cohort: "Cohort 3 - Cloud & DevOps",
    mode: "Onsite Cohort (Yaounde)",
    rating: 5,
    story: "The physical lab in Yaounde felt like working in a real Silicon Valley startup. The instructors didn't just teach code—they taught production troubleshooting, Linux servers, and Docker multi-stage pipelines.",
    salaryIncrease: "+180% salary increase",
    badge: "Top Performer",
  },
  {
    id: "test-4",
    name: "Kevin Ebongue",
    role: "Product Designer & Frontend Developer",
    company: "Mboa Studio Labs",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80",
    cohort: "Cohort 6 - UI/UX & Next.js",
    mode: "Hybrid / Online",
    rating: 5,
    story: "Mboa Academy gave me both design aesthetics and coding muscle. The career advisors spent hours refining my GitHub portfolio and optimizing my resume for international remote marketplaces.",
    salaryIncrease: "Landed 3 Global Contracts",
    badge: "Contractor of the Year",
  },
];
