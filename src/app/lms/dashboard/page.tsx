import { redirect } from "next/navigation";
import { requireUser } from "@/lib/auth";
import { DashboardScaffold } from "@/components/lms/DashboardScaffold";
import { logoutAction } from "@/app/login/actions";

export const dynamic = "force-dynamic";

export default async function StudentDashboardPage() {
  const user = await requireUser();
  if (user.role === "ADMIN") redirect("/lms/admin/dashboard");
  if (user.role === "INSTRUCTOR" || user.role === "TRAINER") redirect("/lms/instructor/dashboard");
  return <><div className="mx-auto w-full max-w-5xl px-4 pt-5 text-right"><form action={logoutAction}><button className="rounded-full border border-black/15 px-4 py-2 text-xs font-bold hover:bg-white">Sign out</button></form></div><DashboardScaffold role="Student" /></>;
}
