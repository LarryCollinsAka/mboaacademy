/**
 * FalkorDB Knowledge Graph Client for Mboa Academy
 * Models:
 * - Career Paths (e.g. "Full-Stack AI Engineer", "Cloud Architect")
 * - Skill Ontologies & Prerequisites (Graph dependencies)
 * - Course-to-Skill Mappings
 */

export interface SkillNode {
  name: string;
  category: string;
  demandLevel: "HIGH" | "VERY_HIGH" | "EMERGING";
  prerequisites: string[];
}

export interface CareerPathGraph {
  targetRole: string;
  requiredSkills: SkillNode[];
  recommendedCourseSequence: {
    order: number;
    title: string;
    skillsCovered: string[];
    mode: "HYBRID" | "ONSITE" | "ONLINE";
  }[];
}

export class FalkorDBService {
  private host: string;
  private port: number;

  constructor() {
    this.host = process.env.FALKORDB_HOST || "localhost";
    this.port = parseInt(process.env.FALKORDB_PORT || "6379", 10);
  }

  /**
   * Returns graph-driven prerequisite paths for career roadmaps
   */
  async getCareerLearningPath(careerGoal: string): Promise<CareerPathGraph> {
    // Built-in intelligent graph ontology for career tracks
    const paths: Record<string, CareerPathGraph> = {
      "ai-engineer": {
        targetRole: "Full-Stack AI & LLM Engineer",
        requiredSkills: [
          { name: "Python / TypeScript", category: "Language", demandLevel: "VERY_HIGH", prerequisites: [] },
          { name: "Next.js & React 19", category: "Frontend", demandLevel: "VERY_HIGH", prerequisites: ["TypeScript"] },
          { name: "PostgreSQL & Prisma", category: "Database", demandLevel: "HIGH", prerequisites: ["SQL Basics"] },
          { name: "Qdrant Vector DB & RAG", category: "AI Infrastructure", demandLevel: "VERY_HIGH", prerequisites: ["Python"] },
          { name: "FalkorDB Graph Knowledge", category: "Graph AI", demandLevel: "EMERGING", prerequisites: ["Database Basics"] },
        ],
        recommendedCourseSequence: [
          { order: 1, title: "Modern Full-Stack Engineering with Next.js 16", skillsCovered: ["Next.js", "TypeScript", "Tailwind CSS"], mode: "HYBRID" },
          { order: 2, title: "Advanced Backend, Postgres & Redis Architecture", skillsCovered: ["PostgreSQL", "Prisma", "Redis"], mode: "ONSITE" },
          { order: 3, title: "Applied AI: RAG, Vector Search & Graph Intelligence", skillsCovered: ["Qdrant", "FalkorDB", "LLMs"], mode: "HYBRID" },
        ],
      },
      "devops-cloud": {
        targetRole: "Cloud & DevOps Specialist",
        requiredSkills: [
          { name: "Linux & Shell Scripting", category: "Systems", demandLevel: "VERY_HIGH", prerequisites: [] },
          { name: "Docker & Containerization", category: "DevOps", demandLevel: "VERY_HIGH", prerequisites: ["Linux"] },
          { name: "Kubernetes & CI/CD", category: "Orchestration", demandLevel: "VERY_HIGH", prerequisites: ["Docker"] },
          { name: "Cloud Architecture (AWS / Vercel)", category: "Cloud", demandLevel: "HIGH", prerequisites: ["Linux"] },
        ],
        recommendedCourseSequence: [
          { order: 1, title: "Cloud Fundamentals & Production Linux", skillsCovered: ["Linux", "Bash", "Networking"], mode: "ONSITE" },
          { order: 2, title: "Docker, Kubernetes & Production CI/CD Pipelines", skillsCovered: ["Docker", "K8s", "GitHub Actions"], mode: "HYBRID" },
        ],
      },
    };

    return paths[careerGoal.toLowerCase()] || paths["ai-engineer"];
  }
}

export const falkorDBService = new FalkorDBService();
