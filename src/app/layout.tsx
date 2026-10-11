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
  title: "Mboa Academy | On-Demand Job Skills & AI-Powered Career LMS",
  description:
    "Accelerated hybrid & on-site career academy for software engineering, AI vector search, cloud, and product design. Douala & Yaounde innovation labs.",
  keywords: [
    "Mboa Academy",
    "Career Academy Cameroon",
    "LMS Cameroon",
    "Tech Bootcamps Africa",
    "Next.js Course",
    "AI Vector DB Qdrant",
    "FalkorDB Graph",
    "Remote Software Engineering",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#090a0f] text-slate-100">
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}

