"use client";

import "./globals.css";
import { ArchitectureSection } from "@/components/sections/home/architecture-section";
import { HeroSection } from "@/components/sections/home/hero-section";
import { OurPortfolioSection } from "@/components/sections/home/our-portfolio-section";
import { ServicesSection } from "@/components/sections/home/services-section";
import { TechStrip } from "@/components/sections/home/tech-strip";
import { WhyChooseUsSection } from "@/components/sections/home/why-choose-us-section";
import { VisualizeYourGrowth } from "@/components/sections/home/visualize_your_growth";
import { TestimonialsSection } from "@/components/sections/home/testimonials";
import { ContactSection } from "@/components/sections/shared/contact-section";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden text-[#232634]">
      <div className="relative mx-auto min-h-screen max-w-[1800px]">
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

