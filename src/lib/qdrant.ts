/**
 * Qdrant Vector Client Abstraction for Mboa Academy
 * Powers:
 * 1. Semantic Course search & preference matching
 * 2. RAG on course notes, lecture transcripts & student summaries
 */

export interface VectorSearchResult {
  id: string;
  score: number;
  payload: {
    title: string;
    description: string;
    category: string;
    level: string;
    skills: string[];
    courseId?: string;
  };
}

export class QdrantService {
  private url: string;
  private apiKey: string;
  private collection: string;

  constructor() {
    this.url = process.env.QDRANT_URL || "http://localhost:6333";
    this.apiKey = process.env.QDRANT_API_KEY || "";
    this.collection = process.env.QDRANT_COLLECTION || "mboa_courses";
  }

  /**
   * Search for courses matching student career goals & background
   */
  async searchCoursesByEmbedding(
    queryVector: number[],
    limit: number = 4
  ): Promise<VectorSearchResult[]> {
    try {
      const response = await fetch(`${this.url}/collections/${this.collection}/points/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(this.apiKey ? { "api-key": this.apiKey } : {}),
        },
        body: JSON.stringify({
          vector: queryVector,
          limit,
          with_payload: true,
        }),
      });

      if (!response.ok) {
        throw new Error(`Qdrant search failed with status ${response.status}`);
      }

      const data = await response.json();
      return (data.result || []) as VectorSearchResult[];
    } catch (error) {
      console.warn("[Qdrant] Running fallback local matching:", error);
      return [];
    }
  }
}

export const qdrantService = new QdrantService();
