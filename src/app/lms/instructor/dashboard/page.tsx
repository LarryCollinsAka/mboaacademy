import { requireRole } from "@/lib/auth";
import { logoutAction } from "@/app/login/actions";
import { DashboardScaffold } from "@/components/lms/DashboardScaffold";

export const dynamic = "force-dynamic";

export default async function TrainerDashboardPage() {
  await requireRole(["INSTRUCTOR", "TRAINER", "ADMIN"]);
  return <><div className="mx-auto w-full max-w-5xl px-4 pt-5 text-right"><form action={logoutAction}><button className="rounded-full border border-black/15 px-4 py-2 text-xs font-bold hover:bg-white">Sign out</button></form></div><DashboardScaffold role="Trainer" /></>;
}
