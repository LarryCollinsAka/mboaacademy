import { db } from "@/lib/db";

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
  currency: string;
  durationDays: number | null;
  durationWeeks: number;
  durationHours: number;
  durationLabel: string;
  cohorts: Array<{
    id: string;
    name: string;
    code: string;
    startsAt: string;
    endsAt: string;
    timezone: string;
    mode: "HYBRID" | "ONSITE" | "ONLINE";
    status: string;
    durationLabel: string;
    weeklyLearningHours: number | null;
    trainers: Array<{ id: string; name: string }>;
  }>;
  skills: string[];
  rating: number | null;
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

function formatCalendarDuration(start: Date, end: Date, locale: string): string {
  const days = Math.max(1, Math.ceil((end.getTime() - start.getTime()) / 86_400_000));
  const french = locale === "fr";
  if (days >= 60) {
    const months = Math.round(days / 30.4375);
    return french ? `${months} ${months > 1 ? "mois" : "mois"}` : `${months} ${months === 1 ? "month" : "months"}`;
  }
  if (days >= 14) {
    const weeks = Math.round(days / 7);
    return french ? `${weeks} ${weeks === 1 ? "semaine" : "semaines"}` : `${weeks} ${weeks === 1 ? "week" : "weeks"}`;
  }
  return french ? `${days} ${days === 1 ? "jour" : "jours"}` : `${days} ${days === 1 ? "day" : "days"}`;
}

function formatCourseDuration(days: number | null, hours: number, locale: string): string {
  if (locale === "fr") {
    return days
      ? `${days} ${days === 1 ? "jour" : "jours"} · dates de promotion à confirmer`
      : `${hours} heures d’apprentissage · dates à confirmer`;
  }
  return days
    ? `${days} ${days === 1 ? "day" : "days"} · cohort dates to be announced`
    : `${hours} learning hours · dates to be announced`;
}

export async function getCoursesFromDb(locale = "en"): Promise<CourseWithDetails[]> {
  const normalizedLocale = locale.trim().toLowerCase().split("-")[0] === "fr" ? "fr" : "en";
  const courses = await db.course.findMany({
    where: { published: true },
    include: {
      translations: { where: { locale: normalizedLocale }, take: 1 },
      cohorts: {
        where: { status: { in: ["PLANNED", "ENROLLING", "IN_PROGRESS"] } },
        orderBy: { startsAt: "asc" },
        include: {
          trainers: { select: { id: true, name: true } },
        },
      },
      modules: {
        orderBy: { order: "asc" },
        include: { lessons: { orderBy: { order: "asc" } } },
      },
      _count: { select: { enrollments: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  return courses.map((course) => {
    const translated = course.translations[0];
    const cohorts = course.cohorts.map((cohort) => ({
      id: cohort.id,
      name: cohort.name,
      code: cohort.code,
      startsAt: cohort.startsAt.toISOString(),
      endsAt: cohort.endsAt.toISOString(),
      timezone: cohort.timezone,
      mode: cohort.mode as "HYBRID" | "ONSITE" | "ONLINE",
      status: cohort.status,
      durationLabel: formatCalendarDuration(cohort.startsAt, cohort.endsAt, normalizedLocale),
      weeklyLearningHours: cohort.weeklyLearningHours,
      trainers: cohort.trainers.map((trainer) => ({
        id: trainer.id,
        name: trainer.name?.trim() || "Trainer profile pending",
      })),
    }));

    const firstCohort = cohorts[0];
    const courseDurationHours = course.durationHours;
    return {
      id: course.id,
      title: translated?.title || course.title,
      slug: course.slug,
      headline: translated?.headline || course.headline,
      description: translated?.description || course.description,
      category: translated?.category || course.category,
      level: course.level,
      mode: (firstCohort?.mode || course.mode) as "HYBRID" | "ONSITE" | "ONLINE",
      priceUSD: course.currency === "USD" ? course.price : 0,
      priceXAF: course.currency === "XAF" ? course.price : Math.round(course.price * 600),
      currency: course.currency,
      durationDays: course.durationDays,
      durationWeeks: firstCohort ? Math.max(1, Math.round((new Date(firstCohort.endsAt).getTime() - new Date(firstCohort.startsAt).getTime()) / (7 * 86_400_000))) : 0,
      durationHours: courseDurationHours,
      durationLabel: firstCohort ? firstCohort.durationLabel : formatCourseDuration(course.durationDays, courseDurationHours, normalizedLocale),
      cohorts,
      skills: translated?.skills?.length ? translated.skills : course.skills,
      rating: null,
      studentsCount: course._count.enrollments,
      badge: course.slug === "from-skill-to-enterprise" ? "Flagship Program" : undefined,
      modules: course.modules.map((module) => ({
        id: module.id,
        title: module.title,
        order: module.order,
        lessons: module.lessons.map((lesson) => ({
          id: lesson.id,
          title: lesson.title,
          slug: lesson.slug,
          durationMinutes: lesson.durationMinutes,
          isFreePreview: lesson.isFreePreview,
          summary: lesson.content?.slice(0, 140) || "",
          content: lesson.content,
          notesDefault: `Key takeaways from ${lesson.title}:\n\n- Capability demonstrated:\n- Evidence to submit:\n- Practical application:`,
        })),
      })),
    };
  });
}
