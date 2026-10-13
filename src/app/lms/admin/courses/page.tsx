import Link from "next/link";
import { LearningMode } from "@prisma/client";
import { requireRole } from "@/lib/auth";
import { db } from "@/lib/db";
import { createCourseAction, setCoursePublishedAction } from "@/app/lms/admin/courses/actions";
import { logoutAction } from "@/app/login/actions";

export const dynamic = "force-dynamic";

function formatMode(mode: LearningMode) {
  return mode === "ONSITE" ? "On-site" : mode === "ONLINE" ? "Online" : "Hybrid";
}

export default async function AdminCoursesPage({ searchParams }: { searchParams: Promise<{ created?: string; updated?: string; error?: string }> }) {
  await requireRole(["ADMIN"]);
  const [courses, params] = await Promise.all([
    db.course.findMany({ orderBy: { updatedAt: "desc" }, select: { id: true, title: true, slug: true, category: true, level: true, durationHours: true, price: true, currency: true, mode: true, published: true, _count: { select: { cohorts: true } } } }),
    searchParams,
  ]);
  return (
    <main className="min-h-screen bg-[#fbf9f1] px-4 py-8 text-[#0d1210] sm:px-6">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div><Link href="/lms/admin/dashboard" className="text-xs font-bold text-emerald-800">← Admin dashboard</Link><p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-emerald-700">HCIL Academy · Administration</p><h1 className="mt-2 text-3xl font-black">Course management</h1><p className="mt-2 max-w-2xl text-sm text-neutral-600">Create reusable course curricula here. Scheduled dates, trainers and delivery intervals belong to separate cohorts.</p></div>
          <form action={logoutAction}><button className="rounded-full border border-black/15 px-4 py-2 text-xs font-bold hover:bg-white">Sign out</button></form>
        </header>
        {params.created && <p role="status" className="rounded-xl bg-emerald-50 p-3 text-sm text-emerald-900">Course created as an unpublished draft.</p>}
        {params.updated && <p role="status" className="rounded-xl bg-emerald-50 p-3 text-sm text-emerald-900">Course publication status updated.</p>}
        {params.error && <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm text-red-900">Some fields were invalid. Check the title, description, price, hours, currency and delivery mode.</p>}
        <section className="rounded-2xl border border-black/10 bg-white p-5 sm:p-7">
          <h2 className="text-xl font-black">Create course draft</h2><p className="mt-1 text-sm text-neutral-600">New courses remain unpublished until an administrator explicitly publishes them.</p>
          <form action={createCourseAction} className="mt-6 grid gap-4 md:grid-cols-2">
            <label className="space-y-1 text-sm font-semibold">Course title<input name="title" required minLength={3} maxLength={160} className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2.5 font-normal" /></label>
            <label className="space-y-1 text-sm font-semibold">Headline<input name="headline" required minLength={3} maxLength={240} className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2.5 font-normal" /></label>
            <label className="space-y-1 text-sm font-semibold">Category<input name="category" defaultValue="Value-Creating Skills" maxLength={100} className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2.5 font-normal" /></label>
            <label className="space-y-1 text-sm font-semibold">Level<select name="level" defaultValue="Beginner" className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2.5 font-normal"><option>Beginner</option><option>Intermediate</option><option>Advanced</option><option>All Levels</option></select></label>
            <label className="space-y-1 text-sm font-semibold">Delivery mode<select name="mode" defaultValue="HYBRID" className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2.5 font-normal"><option value="ONLINE">Online</option><option value="ONSITE">On-site</option><option value="HYBRID">Hybrid</option></select></label>
            <label className="space-y-1 text-sm font-semibold">Estimated learning hours<input name="durationHours" type="number" min="1" max="10000" step="1" defaultValue="40" required className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2.5 font-normal" /></label>
            <label className="space-y-1 text-sm font-semibold">Price<input name="price" type="number" min="0" max="10000000" step="0.01" defaultValue="0" required className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2.5 font-normal" /></label>
            <label className="space-y-1 text-sm font-semibold">Currency (ISO 4217)<input name="currency" defaultValue="USD" minLength={3} maxLength={3} required className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2.5 font-normal uppercase" /></label>
            <label className="space-y-1 text-sm font-semibold md:col-span-2">Skills (comma-separated)<input name="skills" maxLength={1000} placeholder="HTML, CSS, JavaScript" className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2.5 font-normal" /></label>
            <label className="space-y-1 text-sm font-semibold md:col-span-2">Description<textarea name="description" required minLength={10} maxLength={5000} rows={4} className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2.5 font-normal" /></label>
            <div className="md:col-span-2"><button type="submit" className="rounded-full bg-[#071f15] px-6 py-3 text-sm font-bold text-white hover:bg-emerald-900">Create draft</button></div>
          </form>
        </section>
        <section className="space-y-4"><div><h2 className="text-xl font-black">Existing courses</h2><p className="mt-1 text-sm text-neutral-600">{courses.length} course record{courses.length === 1 ? "" : "s"} · scheduled cohort count shown separately</p></div>
          {courses.length === 0 ? <div className="rounded-2xl border border-dashed border-neutral-300 bg-white p-8 text-sm text-neutral-600">No courses found in the database yet.</div> : <div className="grid gap-3">{courses.map((course) => <article key={course.id} className="rounded-2xl border border-black/10 bg-white p-4 sm:p-5"><div className="flex flex-wrap items-start justify-between gap-4"><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><h3 className="font-bold">{course.title}</h3><span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${course.published ? "bg-emerald-100 text-emerald-900" : "bg-amber-100 text-amber-900"}`}>{course.published ? "Published" : "Draft"}</span></div><p className="mt-1 text-xs text-neutral-500">/{course.slug} · {course.category} · {course.level}</p><p className="mt-2 text-sm text-neutral-700">{course.durationHours} learning hours · {formatMode(course.mode)} · {course.price.toFixed(2)} {course.currency} · {course._count.cohorts} cohort{course._count.cohorts === 1 ? "" : "s"}</p></div><form action={setCoursePublishedAction}><input type="hidden" name="courseId" value={course.id} /><input type="hidden" name="published" value={String(!course.published)} /><button className="rounded-full border border-black/15 px-4 py-2 text-xs font-bold hover:bg-neutral-50">{course.published ? "Unpublish" : "Publish"}</button></form></div></article>)}</div>}
        </section>
      </div>
    </main>
  );
}
