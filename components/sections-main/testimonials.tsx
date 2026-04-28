"use client";

import { useState } from "react";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { getHomeData } from "@/data/home";
import { useLanguage } from "@/lib/language-context";
import { embossedPillStyle } from "@/lib/ui-styles";

type TestimonialItem = {
  name: string;
  role: string;
  text: string;
  image: string;
  rating: string;
};

type TestimonialPosition = "left" | "center" | "right" | "hidden";

function TestimonialArrowButton({
  direction,
  label,
  onClick,
}: {
  direction: "left" | "right";
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className=" embossed-pill-button
        flex h-[78px] w-[78px] items-center justify-center rounded-full
        transition-all duration-300
        hover:-translate-y-[-2px] hover:scale-[0.98]
        active:scale-[0.98]
      "
    >
      <img
        src={direction === "left" ? "/arrowLeft.png" : "/arrowRight.png"}
        alt={label}
        className="h-[28px] w-[28px]"
      />
    </button>
  );
}

export function TestimonialsSection() {
  const { t } = useLanguage();
  const { testimonials } = getHomeData(t);

  const [activeIndex, setActiveIndex] = useState(1);

  const total = testimonials.length;

  const getWrappedIndex = (index: number) => {
    if (index < 0) return total - 1;
    if (index >= total) return 0;
    return index;
  };

  const getPosition = (index: number): TestimonialPosition => {
    const diff = index - activeIndex;

    if (diff === 0) return "center";
    if (diff === -1 || diff === total - 1) return "left";
    if (diff === 1 || diff === -(total - 1)) return "right";

    return "hidden";
  };

  const goPrev = () => {
    setActiveIndex((prev) => getWrappedIndex(prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => getWrappedIndex(prev + 1));
  };

  return (
    <section className="relative z-10 overflow-hidden px-8 pb-28 pt-20 md:px-12 xl:px-12">
      <div className="mx-auto max-w-[1780px] ">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[760px]">
            <p className="text-[22px] font-medium uppercase tracking-[-0.03em] text-[#4B74FF]">
              {t.testimonials.eyebrow}
            </p>

            <h2 className="mt-4 text-[58px] font-medium leading-[1.03] tracking-[-0.055em] text-[#232634] md:text-[66px]">
              {t.testimonials.title1}
              <br />
              {t.testimonials.title2}
            </h2>
          </div>

          <div className="hidden items-center gap-5 pt-4 lg:flex">
            <TestimonialArrowButton
              direction="left"
              label={t.testimonials.prevAlt}
              onClick={goPrev}
            />

            <TestimonialArrowButton
              direction="right"
              label={t.testimonials.nextAlt}
              onClick={goNext}
            />
          </div>
        </div>

        <div className="relative mt-14 h-[640px] w-full overflow-hidden">
          {testimonials.map((item: TestimonialItem, index: number) => {
            const position = getPosition(index);

            return (
              <div
                key={item.name}
                className={`
                  absolute left-1/2 bottom-20 transition-all duration-1800
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${
                    position === "center"
                      ? "z-20 -translate-x-1/2 opacity-100"
                      : position === "left"
                      ? "z-10 -translate-x-[170%] opacity-85"
                      : position === "right"
                      ? "z-10 translate-x-[70%] opacity-85"
                      : "pointer-events-none z-0 translate-x-[160%] opacity-0"
                  }
                `}
              >
                <TestimonialCard
                  item={{
                    ...item,
                    position: position === "hidden" ? "right" : position,
                  }}
                  ratingSuffix={t.testimonials.ratingSuffix}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}