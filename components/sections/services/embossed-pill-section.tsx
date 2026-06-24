"use client";

import { embossedPillStyle } from "@/lib/ui-styles";
import { HorizontalCardCarousel } from "@/components/ui/horizontal-card-carousel";
import { useLanguage } from "@/lib/language-context";

type ArchitectureItem = {
  icon: string;
  title: string;
  text: string;
};

export function ArchitectureSection() {
  const { t } = useLanguage();
  const architecture = t.servicesPage?.architecture;

  if (!architecture) return null;

  const items: ArchitectureItem[] = [...architecture.items];

  return (
    <HorizontalCardCarousel<ArchitectureItem>
       headerAlign="center"
      eyebrow={architecture.eyebrow}
      title={architecture.title}
      actionText={architecture.actionText}
      items={items}
      renderItem={(item) => (
        <div
          className="
            flex min-h-[490px] flex-col rounded-[48px] px-14 py-14

            max-md:min-h-[300px]
            max-md:rounded-[32px]
            max-md:px-8
            max-md:py-8
          "
          style={embossedPillStyle}
        >
          <img
            src={item.icon}
            alt={item.title}
            className="
              h-[110px] w-[110px] object-contain
              max-md:h-[92px]
              max-md:w-[92px]
            "
          />

          <h3
            className="
              mt-16 whitespace-pre-line text-[30px] font-medium
              leading-[1.15] tracking-[-0.04em] text-[#282b37]
              max-md:mt-14
              max-md:text-[20px]
            "
          >
            {item.title}
          </h3>

          <p
            className="
              mt-8 max-w-[300px] text-[18px] leading-[1.35]
              tracking-[-0.025em] text-[#707582]
              max-md:mt-6
              max-md:max-w-[200px]
              max-md:text-[12px]
            "
          >
            {item.text}
          </p>
        </div>
      )}
    />
  );
}