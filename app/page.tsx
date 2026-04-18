"use client";

import "./globals.css";
import { ArchitectureSection } from "@/components/sections/architecture-section";
import { HeroSection } from "@/components/sections/hero-section";
import { OurPortfolioSection } from "@/components/sections/our-portfolio-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TechStrip } from "@/components/sections/tech-strip";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import { SiteHeader } from "@/components/layout/site-header";
import { VisualizeYourGrowth } from "@/components/sections/visualize_your_growth";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f4f7] text-[#232634]">
      <div className="relative mx-auto min-h-screen max-w-[1800px] px-2 pt-2 space-y-15">

        <SiteHeader />
        <HeroSection />
        <TechStrip />
        <ServicesSection />
        <ArchitectureSection />
        <WhyChooseUsSection />
        <OurPortfolioSection />
        <VisualizeYourGrowth />
        <TestimonialsSection/>
        <ContactSection />
      </div>
    </main>
  );
}

