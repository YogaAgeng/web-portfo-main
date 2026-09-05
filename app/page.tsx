import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ContinuousMarquee } from "@/components/ContinuousMarquee";
import { AboutCoreStack } from "@/components/AboutCoreStack";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#f4f4f4] text-[#111111]">
      {/* High-Contrast Rigid Navigation */}
      <Navbar />

      <main className="w-full">
        {/* Redesigned Minimalist Hero with Orange Canvas & Layered Typography */}
        <Hero />

        {/* Continuous Marquee (Framer Motion Horizontal Ticker) */}
        <ContinuousMarquee />

        {/* Core Stack Architecture */}
        <AboutCoreStack />

        {/* Decluttered Projects Showcase */}
        <ProjectsSection />

        {/* Dark Experience Section */}
        <ExperienceSection />

        {/* Contact & Footer */}
        <ContactSection />
      </main>
    </div>
  );
}
