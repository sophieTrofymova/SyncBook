"use client";

import { SiteHeader }          from "@/components/layout/site-header";
import { HeroSection }         from "@/app/services/hero-section";
import { TechStrip }           from "@/app/about/sections-about-us/tech-strip";
import { EngineeringSection }  from "@/app/services/engineering-section";
import { WorkflowSection }     from "@/app/services/workflow-section";
import { ArchitectureSection }     from "@/app/services/embossed-pill-section";
import { DeliveryFrameworkSection }     from "@/app/services/embossed-pill-style";
import { ContactSection }      from "@/components/sections-main/contact-section";
import { Footer }              from "@/components/layout/footer-section";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden text-[#232634]">
      <div className="relative mx-auto min-h-screen pt-2">
        <SiteHeader />
        <HeroSection />
        <TechStrip />
        <EngineeringSection/>
        <WorkflowSection/>
        <ArchitectureSection/>
        <DeliveryFrameworkSection/>

        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
