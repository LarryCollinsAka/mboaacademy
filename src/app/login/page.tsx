import Link from "next/link";
import { loginAction } from "@/app/login/actions";
import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  if (await getCurrentUser()) redirect("/lms/dashboard");
  const params = await searchParams;
  return (
    <main className="min-h-screen bg-[#fbf9f1] px-4 py-16 text-[#0d1210]">
      <div className="mx-auto max-w-md rounded-3xl border border-black/10 bg-white p-7 shadow-sm sm:p-9">
        <Link href="/" className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">HCIL Academy</Link>
        <h1 className="mt-6 text-3xl font-black tracking-tight">Welcome back</h1>
        <p className="mt-2 text-sm leading-6 text-neutral-600">Sign in to access your learning workspace.</p>
        {params.error === "invalid" && <p role="alert" className="mt-5 rounded-xl bg-red-50 p-3 text-sm text-red-800">The email or password was not recognized.</p>}
        <form action={loginAction} className="mt-7 space-y-4">
          <label className="block space-y-2 text-sm font-semibold">Email address
            <input name="email" type="email" autoComplete="email" required maxLength={254} className="w-full rounded-xl border border-neutral-300 px-4 py-3 font-normal outline-none focus:border-emerald-700" />
          </label>
          <label className="block space-y-2 text-sm font-semibold">Password
            <input name="password" type="password" autoComplete="current-password" required maxLength={1024} className="w-full rounded-xl border border-neutral-300 px-4 py-3 font-normal outline-none focus:border-emerald-700" />
          </label>
          <button className="w-full rounded-full bg-[#071f15] px-5 py-3.5 text-sm font-bold text-white hover:bg-emerald-900" type="submit">Sign in</button>
        </form>
        <p className="mt-6 text-xs leading-5 text-neutral-500">Accounts are provisioned by an administrator. Public registration is not enabled.</p>
        <Link href="/" className="mt-5 inline-block text-sm font-semibold text-emerald-800">← Return to HCIL Academy</Link>
      </div>
    </main>
  );
}
