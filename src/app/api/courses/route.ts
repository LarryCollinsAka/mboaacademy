import { NextResponse } from "next/server";
import { getCoursesFromDb } from "@/lib/courses-service";

export async function GET() {
  try {
    const courses = await getCoursesFromDb();
    return NextResponse.json({ courses });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
