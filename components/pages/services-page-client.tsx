"use client";

import { HeroSection }         from "@/components/sections/services/hero-section";
import { TechStrip }           from "@/components/sections/about/tech-strip";
import { EngineeringSection }  from "@/components/sections/services/engineering-section";
import { WorkflowSection }     from "@/components/sections/services/workflow-section";
import { ArchitectureSection } from "@/components/sections/services/embossed-pill-section";
import { DeliveryFrameworkSection }     from "@/components/sections/services/embossed-pill-style";
import { ContactSection }      from "@/components/sections/shared/contact-section";

export default function ServicesPageClient() {
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
