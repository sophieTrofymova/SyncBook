"use client";

import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer-section";
import { TechStrip } from "@/components/sections-main/tech-strip";
import { PortfolioHeroSection } from "@/app/portfolio/sections/portfolio-hero-section";
import { PortfolioProjectsSection } from "@/app/portfolio/sections/portfolio-projects-section";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen overflow-hidden text-[#232634]">
      <div className="relative mx-auto min-h-screen max-w-[1800px] px-2 pt-2">
        <SiteHeader />
        <PortfolioHeroSection />
        <TechStrip />
        <PortfolioProjectsSection />
        <Footer />
      </div>
    </main>
  );
}