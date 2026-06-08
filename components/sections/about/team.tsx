"use client";

import { useLanguage } from "@/lib/language-context";

export function AboutStorySection() {
  const { t } = useLanguage();
  const team = t.aboutPage.team;
  
  return (
    <section className="relative mx-auto max-w-[1800px] overflow-hidden px-8 py-24 md:px-12 xl:px-14">
      <div className="grid min-h-[900px] grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-x-28">
        <div className="max-w-[650px]">
          <p className="mb-5 text-[24px] font-normal uppercase leading-none tracking-[-0.04em] text-[#4b74ff]">
            {team.eyebrow}
          </p>

          <h2 className="text-[46px] font-medium leading-[1.14] tracking-[-0.045em] text-[#282b37] md:text-[58px]">
            {team.titleLine1}
            <br />
            {team.titleLine2}
          </h2>

          <p className="mt-14 max-w-[570px] text-[18px] font-normal leading-[1.38] tracking-[-0.025em] text-[#707582] md:text-[19px]">
            {team.description1}
          </p>
        </div>

        <div className="flex -mr-14">
          <img
            src="/AboutUs/team1.png"
            alt={team.image1Alt}
            className="h-[520px] w-full max-w-[960px] rounded-bl-[42px] rounded-tl-[42px] object-cover"
          />
        </div>

        <div className="flex -ml-14">
          <img
            src="/AboutUs/team2.png"
            alt={team.image2Alt}
            className="h-[400px] w-full max-w-[960px] rounded-br-[42px] rounded-tr-[42px] object-cover"
          />
        </div>

        <div className="flex items-start px-8 pt-28 md:px-12 xl:px-14">
          <p className="max-w-[650px] whitespace-pre-line text-[18px] font-normal leading-[1.38] tracking-[-0.025em] text-[#707582] md:text-[19px]">
            {team.description2}
          </p>
        </div>
      </div>
    </section>
  );
}