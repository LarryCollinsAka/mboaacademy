import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { HybridOnsiteSection } from "@/components/home/HybridOnsiteSection";
import { CoursesPreview } from "@/components/home/CoursesPreview";
import { AIFeatureSpotlight } from "@/components/home/AIFeatureSpotlight";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CallToAction } from "@/components/home/CallToAction";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#090a0f] text-slate-100 selection:bg-amber-400 selection:text-black">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CoursesPreview />
        <HybridOnsiteSection />
        <AIFeatureSpotlight />
        <TestimonialsSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
