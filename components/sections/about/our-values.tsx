"use client";

import { embossedPillStyle } from "@/lib/ui-styles";
import { useLanguage } from "@/lib/language-context";

export function ValuesSection() {
  const { t } = useLanguage();
  const valuesSection = t.aboutPage.values;
  const values = [...valuesSection.items];

  return (
    <section className="relative overflow-hidden px-8 py-28 md:px-12 xl:px-14">
      <div className="mx-auto max-w-[1600px]">
        <div className="text-center">
          <p className="text-[24px] font-normal uppercase leading-none tracking-[-0.04em] text-[#4b74ff]">
            {valuesSection.eyebrow}
          </p>

          <h2 className="mt-8 text-[52px] font-medium leading-none tracking-[-0.045em] text-[#282b37] md:text-[58px]">
            {valuesSection.title}
          </h2>
        </div>

        <div className="mt-36 grid grid-cols-1 items-center gap-16 md:grid-cols-3 md:gap-20">
          {values.map((value, index) => (
            <div
              key={value.number}
              className={`
                flex min-h-[400px] flex-col justify-center rounded-[54px]
                px-16 py-14
                ${index === 1 ? "md:-translate-y-16" : ""}
              `}
              style={embossedPillStyle}
            >
              <span className="text-[52px] font-semibold leading-none tracking-[-0.04em] text-[#4b74ff]">
                {value.number}
              </span>

              <h3 className="mt-20 text-[31px] font-medium leading-[1.1] tracking-[-0.04em] text-[#282b37]">
                {value.title}
              </h3>

              <p className="mt-7 max-w-[330px] text-[19px] font-normal leading-[1.28] tracking-[-0.025em] text-[#707582]">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}