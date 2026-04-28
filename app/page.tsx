"use client";

import "./globals.css";
import { ArchitectureSection } from "@/components/sections-main/architecture-section";
import { HeroSection } from "@/components/sections-main/hero-section";
import { OurPortfolioSection } from "@/components/sections-main/our-portfolio-section";
import { ServicesSection } from "@/components/sections-main/services-section";
import { TechStrip } from "@/components/sections-main/tech-strip";
import { WhyChooseUsSection } from "@/components/sections-main/why-choose-us-section";
import { SiteHeader } from "@/components/layout/site-header";
import { VisualizeYourGrowth } from "@/components/sections-main/visualize_your_growth";
import { TestimonialsSection } from "@/components/sections-main/testimonials";
import { ContactSection } from "@/components/sections-main/contact-section";
import { Footer } from "@/components/layout/footer-section";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden text-[#232634]">
      <div className="relative mx-auto min-h-screen max-w-[1800px] px-2 pt-2">

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
        <Footer />
      </div>
    </main>
  );
}

