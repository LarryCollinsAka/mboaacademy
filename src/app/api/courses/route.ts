import { NextResponse } from "next/server";
import { getCoursesFromDb } from "@/lib/courses-service";

// Course availability, cohort schedules and trainer assignments are database-driven.
// Keep this endpoint request-time so the build does not query production data.
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const locale = new URL(request.url).searchParams.get("locale") || "en";

  try {
    const courses = await getCoursesFromDb(locale);
    return NextResponse.json({ courses });
  } catch (error) {
    console.error("[API /courses] Database query failed", error);
    return NextResponse.json(
      { error: "Courses are temporarily unavailable. Please try again later." },
      { status: 503 },
    );
  }
}
