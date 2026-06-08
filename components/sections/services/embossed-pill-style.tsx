"use client";

import { embossedPillStyle } from "@/lib/ui-styles";
import { useLanguage } from "@/lib/language-context";

type ProcessItem = {
  icon: string;
  title: string;
  text: string;
  className: string;
};

export function DeliveryFrameworkSection() {
  const { t } = useLanguage();
  const deliveryFramework = t.servicesPage?.deliveryFramework;

  if (!deliveryFramework) return null;

  const processItems: ProcessItem[] = [...deliveryFramework.items];

  return (
    <section className="relative overflow-hidden px-5 py-16 md:min-h-[980px] md:px-12 md:py-28 xl:px-14">
      <div className="relative z-20 text-center">
        <p className="text-[12px] font-normal uppercase leading-none tracking-[-0.04em] text-[#4b74ff] md:text-[24px]">
          {deliveryFramework.eyebrow}
        </p>

        <h2 className="mt-4 text-[25px] font-medium leading-[1.15] tracking-[-0.045em] text-[#282b37] md:mt-6 md:text-[58px]">
          {deliveryFramework.title}
        </h2>

        <p className="mt-5 text-[12px] leading-[1.35] tracking-[-0.025em] text-[#707582] md:mt-8 md:text-[19px]">
          {deliveryFramework.description}
        </p>
      </div>

      <svg
        className="absolute right-[120px] top-[220px] z-10 h-[800px] w-[200px] md:hidden"
        viewBox="0 0 220 760"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M180 0C40 130 70 250 135 340C210 445 155 560 120 650C95 715 140 750 205 760"
          stroke="#3E6FFF"
          strokeWidth="3"
          opacity="0.45"
        />
      </svg>

      <svg
        className="absolute left-0 top-[260px] z-10 hidden h-[260px] w-full md:block"
        viewBox="0 0 1728 280"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0C130 310 420 300 620 205C760 138 825 52 1035 82C1232 110 1305 185 1480 170C1620 158 1685 80 1728 10"
          stroke="#3E6FFF"
          strokeWidth="4"
          opacity="0.6"
        />
      </svg>

      <div className="relative z-20 mt-16 flex flex-col gap-16 md:hidden">
        {processItems.map((item) => (
          <div key={item.title}>
            <div
              className="flex h-[54px] w-[54px] items-center justify-center rounded-full"
              style={embossedPillStyle}
            >
              <img
                src={item.icon}
                alt={item.title}
                className="h-[28px] w-[28px] object-contain"
              />
            </div>

            <h3 className="mt-7 text-[18px] font-normal leading-none tracking-[-0.04em] text-[#282b37]">
              {item.title}
            </h3>

            <p className="mt-5 whitespace-pre-line text-[12px] font-normal leading-[1.45] tracking-[-0.03em] text-[#707582]">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <div className="hidden md:block">
        {processItems.map((item) => (
          <div key={item.title} className={`absolute z-20 ${item.className}`}>
            <div
              className="flex h-[94px] w-[94px] items-center justify-center rounded-full"
              style={embossedPillStyle}
            >
              <img
                src={item.icon}
                alt={item.title}
                className="h-[42px] w-[42px] object-contain"
              />
            </div>

            <h3 className="mt-14 text-[31px] font-normal leading-none tracking-[-0.04em] text-[#282b37]">
              {item.title}
            </h3>

            <p className="mt-9 whitespace-pre-line text-[20px] font-normal leading-[1.45] tracking-[-0.03em] text-[#707582]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}