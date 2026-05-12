"use client";

import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer-section";
import { TechStrip } from "@/components/sections-main/tech-strip";
import { PortfolioHeroSection } from "@/app/portfolio/sections/portfolio-hero-section";
import { PortfolioProjectsSection } from "@/app/portfolio/sections/portfolio-projects-section";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen overflow-hidden text-[#232634]">
      <div className="relative mx-auto min-h-screen max-w-[1800px] pt-2">
        <SiteHeader />
        <PortfolioHeroSection />
        <div className="relative left-1/2 z-40 -mt-[8px] w-screen -translate-x-1/2">
            <TechStrip />
        </div>  
        <PortfolioProjectsSection />
        <Footer />
      </div>
    </main>
  );
}