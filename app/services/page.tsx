"use client";

import { HeroSection }         from "@/app/services/sections/hero-section";
import { TechStrip }           from "@/app/about/sections-about-us/tech-strip";
import { EngineeringSection }  from "@/app/services/sections/engineering-section";
import { WorkflowSection }     from "@/app/services/sections/workflow-section";
import { ArchitectureSection } from "@/app/services/sections/embossed-pill-section";
import { DeliveryFrameworkSection }     from "@/app/services/sections/embossed-pill-style";
import { ContactSection }      from "@/components/sections-main/contact-section";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden text-[#232634]">
      <div className="relative mx-auto min-h-screen">

        <HeroSection />
        <TechStrip />
        <EngineeringSection/>
        <WorkflowSection/>
        <ArchitectureSection/>
        <DeliveryFrameworkSection/>
        <ContactSection />
      </div>
    </main>
  );
}
