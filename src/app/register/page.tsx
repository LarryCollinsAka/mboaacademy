import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { registerAction } from "./actions";

export const dynamic = "force-dynamic";

const messages: Record<string, string> = {
  details: "Enter your name and a valid email address.",
  password: "Choose a password with at least 12 characters.",
  match: "The passwords do not match.",
  exists: "An account with that email may already exist. Try signing in instead.",
};

export default async function RegisterPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  if (await getCurrentUser()) redirect("/lms/dashboard");
  const params = await searchParams;

  return (
    <main className="min-h-screen bg-[#fbf9f1] px-4 py-12 text-[#0d1210]">
      <div className="mx-auto max-w-lg rounded-3xl border border-black/10 bg-white p-7 shadow-sm sm:p-9">
        <Link href="/" className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">HCIL Academy</Link>
        <h1 className="mt-6 text-3xl font-black tracking-tight">Start building useful capabilities</h1>
        <p className="mt-2 text-sm leading-6 text-neutral-600">
          Create a learner account to explore learning paths, practise real tasks, and build evidence of your work.
        </p>

        {params.error && messages[params.error] && (
          <p role="alert" className="mt-5 rounded-xl bg-red-50 p-3 text-sm text-red-800">{messages[params.error]}</p>
        )}

        <form action={registerAction} className="mt-7 space-y-4">
          <label className="block space-y-2 text-sm font-semibold">Full name
            <input name="name" type="text" autoComplete="name" required minLength={2} maxLength={100}
              className="w-full rounded-xl border border-neutral-300 px-4 py-3 font-normal outline-none focus:border-emerald-700" />
          </label>
          <label className="block space-y-2 text-sm font-semibold">Email address
            <input name="email" type="email" autoComplete="email" required maxLength={254}
              className="w-full rounded-xl border border-neutral-300 px-4 py-3 font-normal outline-none focus:border-emerald-700" />
          </label>
          <label className="block space-y-2 text-sm font-semibold">Password
            <input name="password" type="password" autoComplete="new-password" required minLength={12} maxLength={1024}
              className="w-full rounded-xl border border-neutral-300 px-4 py-3 font-normal outline-none focus:border-emerald-700" />
            <span className="block text-xs font-normal text-neutral-500">Use at least 12 characters.</span>
          </label>
          <label className="block space-y-2 text-sm font-semibold">Confirm password
            <input name="confirmPassword" type="password" autoComplete="new-password" required minLength={12} maxLength={1024}
              className="w-full rounded-xl border border-neutral-300 px-4 py-3 font-normal outline-none focus:border-emerald-700" />
          </label>
          <button className="w-full rounded-full bg-[#071f15] px-5 py-3.5 text-sm font-bold text-white hover:bg-emerald-900" type="submit">
            Create learner account
          </button>
        </form>

        <p className="mt-5 text-xs leading-5 text-neutral-500">
          Registration currently creates a learner account only. Instructor and trainer access must be handled through a separate review and approval process. Email verification is not yet configured, so do not treat an account email as verified.
        </p>
        <p className="mt-5 text-sm text-neutral-600">Already have an account? <Link href="/login" className="font-bold text-emerald-800 hover:underline">Sign in</Link></p>
        <Link href="/" className="mt-4 inline-block text-sm font-semibold text-emerald-800">← Return to HCIL Academy</Link>
      </div>
    </main>
  );
}
