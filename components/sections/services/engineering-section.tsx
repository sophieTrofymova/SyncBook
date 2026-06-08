"use client";

import { embossedPillStyle } from "@/lib/ui-styles";
import { useLanguage } from "@/lib/language-context";

export function EngineeringSection() {
  const { t } = useLanguage();
  const engineering = t.servicesPage?.engineering;

  if (!engineering) return null;

  return (
    <section className="relative mx-auto max-w-[1800px] overflow-hidden px-5 pt-25 py-16 md:px-12 md:py-28 xl:px-14">
      <div className="mx-auto grid max-w-[1680px] grid-cols-1 items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="relative z-20">
          <p className="text-[13px] font-normal uppercase leading-none tracking-[-0.04em] text-[#4b74ff] md:text-[24px]">
            {engineering.eyebrow}
          </p>

          <h2 className="mt-3 text-[31px] font-medium leading-[1.08] tracking-[-0.045em] text-[#282b37] md:mt-5 md:text-[58px]">
            {engineering.titleLine1}
            <br />
            {engineering.titleLine2}
          </h2>

          <p className="mt-9 max-w-[330px] text-[13px] font-normal leading-[1.35] tracking-[-0.025em] text-[#707582] md:mt-12 md:max-w-[720px] md:text-[19px] md:leading-[1.45]">
            {engineering.descriptionLine1}
            <span className="hidden md:inline">
              <br />
            </span>{" "}
            {engineering.descriptionLine2}
          </p>

          <div className="mt-16 flex max-w-[760px] flex-col gap-7 md:mt-32 md:gap-8">
            {engineering.items.map((item) => (
              <div
                key={item.title}
                className="
                  flex min-h-[136px] flex-col items-center justify-center
                  rounded-[28px] px-8 py-8 text-center
                  md:grid md:min-h-[108px]
                  md:grid-cols-[0.9fr_1.1fr]
                  md:px-10 md:py-0 md:text-left
                "
                style={embossedPillStyle}
              >
                <h3 className="text-[16px] font-semibold tracking-[-0.035em] text-[#4b74ff] md:text-[20px]">
                  {item.title}
                </h3>

                <div className="my-5 h-px w-[210px] bg-[#d9dbe3] md:hidden" />

                <p className="max-w-[230px] text-[13px] leading-[1.25] tracking-[-0.03em] text-[#707582] md:max-w-none md:border-l md:border-[#d9dbe3] md:pl-12 md:text-[18px] md:leading-[1.3]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <img
            src="/Services/engineering.png"
            alt={engineering.imageAlt}
            className="w-full max-w-[360px] object-contain md:max-w-[1020px]"
          />
        </div>
      </div>
    </section>
  );
}