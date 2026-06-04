"use client";

import { HeroSection }         from "@/components/sections/about/hero-section";
import { TechStrip }           from "@/components/sections/about/tech-strip";
import { BuildTogetherSection }from "@/components/sections/shared/buil-together-section";
import { ValuesSection }       from "@/components/sections/about/our-values";
import { AboutStorySection }   from "@/components/sections/about/team";
import { PhilosophySection }   from "@/components/sections/about/philosophy";
import { DifferenceSection }   from "@/components/sections/about/difference-section";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden text-[#232634]">
      <div className="relative min-h-screen">
        <HeroSection />
        <TechStrip />
        <AboutStorySection/>
        <ValuesSection/>
        <PhilosophySection/>
        <DifferenceSection/>
        <BuildTogetherSection/>
      </div>
    </main>
  );
}

