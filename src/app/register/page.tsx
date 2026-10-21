"use client";

import Link from "next/link";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { registerAction } from "./actions";

const messages: Record<string, string> = {
  details: "Enter your name and a valid email address.",
  password: "Your password does not meet all the requirements below.",
  match: "The passwords do not match.",
  exists: "An account with that email may already exist. Try signing in instead.",
};

function Rule({ met, children }: { met: boolean; children: React.ReactNode }) {
  return (
    <li className={`flex items-start gap-2 ${met ? "text-emerald-700" : "text-neutral-500"}`}>
      <span aria-hidden="true" className="mt-px inline-block w-4 font-bold">{met ? "✓" : "○"}</span>
      <span>{children}</span>
    </li>
  );
}

function RegisterForm() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const rules = [
    { label: "At least 12 characters", met: password.length >= 12 },
    { label: "At least one lowercase letter (a–z)", met: /[a-z]/.test(password) },
    { label: "At least one uppercase letter (A–Z)", met: /[A-Z]/.test(password) },
    { label: "At least one number (0–9)", met: /\d/.test(password) },
    { label: "At least one symbol (for example ! @ # $)", met: /[^A-Za-z0-9]/.test(password) },
  ];
  const passwordsMatch = confirmation.length > 0 && password === confirmation;

  return (
    <main className="min-h-screen bg-[#fbf9f1] px-4 py-12 text-[#0d1210]">
      <div className="mx-auto max-w-lg rounded-3xl border border-black/10 bg-white p-7 shadow-sm sm:p-9">
        <Link href="/" className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">HCIL Academy</Link>
        <h1 className="mt-6 text-3xl font-black tracking-tight">Start building useful capabilities</h1>
        <p className="mt-2 text-sm leading-6 text-neutral-600">
          Create a learner account to explore learning paths, practise real tasks, and build evidence of your work.
        </p>

        {error && messages[error] && (
          <p role="alert" className="mt-5 rounded-xl bg-red-50 p-3 text-sm text-red-800">{messages[error]}</p>
        )}

        <form action={registerAction} className="mt-7 space-y-5">
          <label className="block space-y-2 text-sm font-semibold" htmlFor="register-name">Full name
            <input id="register-name" name="name" type="text" autoComplete="name" required minLength={2} maxLength={100}
              className="w-full rounded-xl border border-neutral-300 px-4 py-3 font-normal outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15" />
          </label>
          <label className="block space-y-2 text-sm font-semibold" htmlFor="register-email">Email address
            <input id="register-email" name="email" type="email" autoComplete="email" required maxLength={254}
              className="w-full rounded-xl border border-neutral-300 px-4 py-3 font-normal outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15" />
          </label>
          <div className="space-y-2">
            <label className="block text-sm font-semibold" htmlFor="register-password">Password</label>
            <div className="flex overflow-hidden rounded-xl border border-neutral-300 focus-within:border-emerald-700 focus-within:ring-2 focus-within:ring-emerald-700/15">
              <input id="register-password" name="password" type={showPassword ? "text" : "password"}
                autoComplete="new-password" required minLength={12} maxLength={1024} value={password}
                onChange={(event) => setPassword(event.target.value)} aria-describedby="password-rules"
                className="min-w-0 flex-1 px-4 py-3 font-normal outline-none" />
              <button type="button" onClick={() => setShowPassword((value) => !value)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                aria-pressed={showPassword} className="shrink-0 px-4 text-sm font-bold text-emerald-800 hover:bg-emerald-50">
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <div id="password-rules" className="rounded-xl bg-neutral-50 p-3">
              <p className="mb-2 text-xs font-bold text-neutral-700">Password requirements</p>
              <ul className="space-y-1 text-xs" aria-live="polite">
                {rules.map((rule) => <Rule key={rule.label} met={rule.met}>{rule.label}</Rule>)}
              </ul>
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold" htmlFor="register-confirm-password">Confirm password</label>
            <div className="flex overflow-hidden rounded-xl border border-neutral-300 focus-within:border-emerald-700 focus-within:ring-2 focus-within:ring-emerald-700/15">
              <input id="register-confirm-password" name="confirmPassword" type={showConfirmation ? "text" : "password"}
                autoComplete="new-password" required minLength={12} maxLength={1024} value={confirmation}
                onChange={(event) => setConfirmation(event.target.value)} aria-describedby="password-match"
                className="min-w-0 flex-1 px-4 py-3 font-normal outline-none" />
              <button type="button" onClick={() => setShowConfirmation((value) => !value)}
                aria-label={showConfirmation ? "Hide confirmation password" : "Show confirmation password"}
                aria-pressed={showConfirmation} className="shrink-0 px-4 text-sm font-bold text-emerald-800 hover:bg-emerald-50">
                {showConfirmation ? "Hide" : "Show"}
              </button>
            </div>
            <p id="password-match" aria-live="polite" className={`text-xs ${confirmation.length === 0 ? "text-neutral-500" : passwordsMatch ? "text-emerald-700" : "text-red-700"}`}>
              {confirmation.length === 0 ? "Re-enter the same password." : passwordsMatch ? "Passwords match." : "Passwords do not match yet."}
            </p>
          </div>
          <button className="w-full rounded-full bg-[#071f15] px-5 py-3.5 text-sm font-bold text-white hover:bg-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2" type="submit">
            Create learner account
          </button>
        </form>

        <p className="mt-5 text-xs leading-5 text-neutral-500">
          Registration creates a learner account only. Instructor and trainer access requires a separate review and approval process. Email verification is not yet configured.
        </p>
        <p className="mt-5 text-sm text-neutral-600">Already have an account? <Link href="/login" className="font-bold text-emerald-800 hover:underline">Sign in</Link></p>
        <Link href="/" className="mt-4 inline-block text-sm font-semibold text-emerald-800">← Return to HCIL Academy</Link>
      </div>
    </main>
  );
}


export default function RegisterPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#fbf9f1] px-4 py-12 text-[#0d1210]">
          <div className="mx-auto max-w-lg rounded-3xl border border-black/10 bg-white p-7 shadow-sm sm:p-9">
            <p className="text-sm text-neutral-600">Loading registration form…</p>
          </div>
        </main>
      }
    >
      <RegisterForm />
    </Suspense>
  );
}
