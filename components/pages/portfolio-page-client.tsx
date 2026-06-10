"use client";

import { TechStrip } from "@/components/sections/home/tech-strip";
import { PortfolioHeroSection } from "@/components/sections/portfolio/portfolio-hero-section";
import { PortfolioProjectsSection } from "@/components/sections/portfolio/portfolio-projects-section";

export default function PortfolioPageClient() {
  return (
    <main className="min-h-screen overflow-hidden text-[#232634]">
      <div className="relative mx-auto min-h-screen max-w-[1800px]">

        <PortfolioHeroSection />
        <div className="relative left-1/2 z-40 -mt-[8px] w-screen -translate-x-1/2">
            <TechStrip />
        </div>  
        <PortfolioProjectsSection />
      </div>
    </main>
  );
}