import { db } from "@/lib/db";
import { SEED_COURSES } from "../../prisma/seed";

export interface CourseWithDetails {
  id: string;
  title: string;
  slug: string;
  headline: string;
  description: string;
  category: string;
  level: string;
  mode: "HYBRID" | "ONSITE" | "ONLINE";
  priceUSD: number;
  priceXAF: number;
  durationWeeks: number;
  skills: string[];
  rating: number;
  studentsCount: number;
  badge?: string;
  modules: Array<{
    id: string;
    title: string;
    order: number;
    lessons: Array<{
      id: string;
      title: string;
      slug: string;
      durationMinutes: number;
      isFreePreview: boolean;
      summary?: string;
      content?: string | null;
      notesDefault?: string;
    }>;
  }>;
}

export async function getCoursesFromDb(): Promise<CourseWithDetails[]> {
  try {
    const courses = await db.course.findMany({
      where: { published: true },
      include: {
        modules: {
          orderBy: { order: "asc" },
          include: {
            lessons: {
              orderBy: { order: "asc" },
            },
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    if (courses && courses.length > 0) {
      return courses.map((c) => ({
        id: c.id,
        title: c.title,
        slug: c.slug,
        headline: c.headline,
        description: c.description,
        category: c.skills[0] || "Financial Intelligence & Skills",
        level: c.level,
        mode: c.mode as "HYBRID" | "ONSITE" | "ONLINE",
        priceUSD: c.price,
        priceXAF: Math.round(c.price * 600), // Standard XAF conversion
        durationWeeks: Math.round(c.durationHours / 7) || 8,
        skills: c.skills,
        rating: 4.95,
        studentsCount: 320,
        badge: c.slug === "from-skill-to-enterprise" ? "Flagship Program" : undefined,
        modules: c.modules.map((m) => ({
          id: m.id,
          title: m.title,
          order: m.order,
          lessons: m.lessons.map((l) => ({
            id: l.id,
            title: l.title,
            slug: l.slug,
            durationMinutes: l.durationMinutes,
            isFreePreview: l.isFreePreview,
            summary: l.content?.slice(0, 140) || "",
            content: l.content,
            notesDefault: `Key takeaways from ${l.title}:\n\n- How this creates commercial value:\n- Cash flow implications:\n- Actionable steps:`,
          })),
        })),
      }));
    }
  } catch (error) {
    console.warn("[Database] Could not fetch courses directly from Postgres, falling back to seed schema:", error);
  }

  // Graceful fallback to seeded courses structure
  return SEED_COURSES.map((c, index) => ({
    id: `seed-${index + 1}`,
    title: c.title,
    slug: c.slug,
    headline: c.headline,
    description: c.description,
    category: c.category,
    level: c.level,
    mode: c.mode as "HYBRID" | "ONSITE" | "ONLINE",
    priceUSD: c.priceUSD,
    priceXAF: Math.round(c.priceUSD * 600),
    durationWeeks: 10,
    skills: c.skills,
    rating: 4.96,
    studentsCount: 340,
    badge: c.slug === "from-skill-to-enterprise" ? "Flagship Program" : undefined,
    modules: c.modules.map((m, mIdx) => ({
      id: `mod-${mIdx + 1}`,
      title: m.title,
      order: m.order,
      lessons: m.lessons.map((l, lIdx) => ({
        id: `les-${mIdx + 1}-${lIdx + 1}`,
        title: l.title,
        slug: l.slug,
        durationMinutes: l.durationMinutes,
        isFreePreview: l.isFreePreview,
        summary: l.content.slice(0, 140),
        content: l.content,
        notesDefault: `Core lessons from ${l.title}:\n\n1. Commercial value created:\n2. Cash flow mechanics:\n3. Actionable next steps:`,
      })),
    })),
  }));
}
