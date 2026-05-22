"use client";

import { useState } from "react";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { getHomeData } from "@/data/home";
import { useLanguage } from "@/lib/language-context";

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
      className="embossed-pill-button flex h-[58px] w-[58px] items-center justify-center rounded-full transition-all duration-300 hover:scale-[0.98] active:scale-[0.98] md:h-[78px] md:w-[78px]"
    >
      <img
        src={direction === "left" ? "/arrowLeft.png" : "/arrowRight.png"}
        alt={label}
        className="h-[22px] w-[22px] md:h-[28px] md:w-[28px]"
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
    <section className="relative z-10 overflow-hidden px-5 pb-12 pt-12 md:px-12 md:pb-28 md:pt-20 xl:px-12">
      <div className="mx-auto max-w-[1780px]">
        <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:justify-between lg:text-left">
          <div className="max-w-[760px]">
            <p className="text-[14px] font-medium uppercase tracking-[-0.03em] text-[#4B74FF] md:text-[22px]">
              {t.testimonials.eyebrow}
            </p>

            <h2 className="mt-3 text-[28px] font-medium leading-[1.15] tracking-[-0.045em] text-[#232634] md:mt-4 md:text-[66px]">
              {t.testimonials.title1}
              <br />
              {t.testimonials.title2}
            </h2>

            <p className="mx-auto mt-5 max-w-[260px] text-[11px] leading-[1.35] tracking-[-0.02em] text-[#8a8f9c] md:hidden">
              Our solutions give you complete control over your data and operations in real time.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-5 lg:mt-0 lg:pt-4">
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

        <div className="relative mt-12 h-[410px] w-full overflow-hidden md:mt-14 md:h-[640px]">
          {testimonials.map((item: TestimonialItem, index: number) => {
            const position = getPosition(index);

            return (
              <div
                key={item.name}
                className={`
                  absolute pb-10 left-1/2 transition-all duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  bottom-0 md:bottom-20
                  ${
                    position === "center"
                      ? "z-20 -translate-x-1/2 opacity-100"
                      : position === "left"
                      ? "pointer-events-none z-10 -translate-x-[170%] opacity-0 md:opacity-85"
                      : position === "right"
                      ? "pointer-events-none z-10 translate-x-[70%] opacity-0 md:opacity-85"
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