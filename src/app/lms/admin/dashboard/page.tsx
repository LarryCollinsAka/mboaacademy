import Link from "next/link";
import { requireRole } from "@/lib/auth";
import { logoutAction } from "@/app/login/actions";
import { DashboardScaffold } from "@/components/lms/DashboardScaffold";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  await requireRole(["ADMIN"]);
  return <><div className="mx-auto flex w-full max-w-5xl items-center justify-end gap-3 px-4 pt-5"><Link href="/lms/admin/courses" className="rounded-full bg-[#071f15] px-4 py-2 text-xs font-bold text-white">Manage courses</Link><form action={logoutAction}><button className="rounded-full border border-black/15 px-4 py-2 text-xs font-bold hover:bg-white">Sign out</button></form></div><DashboardScaffold role="Administrator" /></>;
}
