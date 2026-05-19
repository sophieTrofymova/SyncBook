"use client";

import { HeroSection }         from "@/app/about/sections-about-us/hero-section";
import { TechStrip }           from "@/app/about/sections-about-us/tech-strip";
import { BuildTogetherSection }from "@/app/about//sections-about-us/buil-together-section";
import { ValuesSection }       from "@/app/about//sections-about-us/our-values";
import { AboutStorySection }   from "@/app/about//sections-about-us/team";
import { PhilosophySection }   from "@/app/about//sections-about-us/philosophy";
import { DifferenceSection }   from "@/app/about//sections-about-us/difference-section";

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

