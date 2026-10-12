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
  title: "HCIL Academy | Learn how money works. Build skills that create value. Turn value into ownership.",
  description:
    "HCIL Academy equips people with financial intelligence, practical capabilities, and asset-building discipline to bridge the gap between learning, earning, and owning. Physical innovation hubs in Douala & Yaounde, Cameroon.",
  keywords: [
    "HCIL Academy",
    "Financial Intelligence",
    "Learn Build Earn Own",
    "From Skill to Enterprise",
    "Cash Flow Mastery",
    "Cameroon Tech Innovation Hub",
    "Rich Dad Poor Dad African EdTech",
    "Douala Innovation Lab",
    "Yaounde Tech Campus",
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
