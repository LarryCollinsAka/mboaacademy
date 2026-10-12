import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { YellowPillarsBand } from "@/components/home/YellowPillarsBand";
import { FiveStepProgression } from "@/components/home/FiveStepProgression";
import { AIFeaturesSection } from "@/components/home/AIFeaturesSection";
import { BuiltDifferentlySection } from "@/components/home/BuiltDifferentlySection";
import { SplitCalloutsSection } from "@/components/home/SplitCalloutsSection";
import { MultilingualSection } from "@/components/home/MultilingualSection";
import { BlogInsightsSection } from "@/components/home/BlogInsightsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { BottomCtaBanner } from "@/components/home/BottomCtaBanner";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f1] text-[#0d1210] selection:bg-[#ffcd00] selection:text-black">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <YellowPillarsBand />
        <FiveStepProgression />
        <AIFeaturesSection />
        <BuiltDifferentlySection />
        <SplitCalloutsSection />
        <MultilingualSection />
        <BlogInsightsSection />
        <FaqSection />
        <BottomCtaBanner />
      </main>
      <Footer />
    </div>
  );
}
