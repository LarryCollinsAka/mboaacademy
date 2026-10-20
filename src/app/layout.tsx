import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { I18nProvider } from "@/lib/i18n";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HCIL Academy | Build practical skills. Contribute across value chains.",
  description:
    "HCIL Academy helps learners understand role expectations, practise realistic tasks, demonstrate practical capability, and contribute to teams, organizations, and value chains. English and French course descriptions are available for the initial published programs; delivery details are confirmed per cohort.",
  keywords: [
    "HCIL Academy",
    "Value chain skills",
    "Practical learning",
    "Role readiness",
    "Evidence of capability",
    "Customer support training",
    "Administrative operations training",
    "English and French learning",
    "Cameroon professional training",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fbf9f1] text-[#0d1210]">
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
