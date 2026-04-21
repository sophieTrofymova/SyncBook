"use client";

import { useMemo, useState } from "react";
import { testimonialArrowStyle } from "@/lib/ui-styles";
import { useLanguage } from "@/lib/language-context";

const testimonialImages = [
  "/Testimonial1.png",
  "/Testimonial2.png",
  "/Testimonial3.png",
  "/Testimonial1.png",
  "/Testimonial2.png",
];

const testimonialRatings = ["4,5", "4,9", "4,6", "4,8", "5,0"];

export function TestimonialsSection() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(1);

  const testimonials = useMemo(() => {
    return t.testimonials.items.map((item, index) => ({
      ...item,
      image: testimonialImages[index % testimonialImages.length],
      rating: testimonialRatings[index % testimonialRatings.length],
    }));
  }, [t]);

  const total = testimonials.length;

  const getWrappedIndex = (index: number) => {
    if (index < 0) return total - 1;
    if (index >= total) return 0;
    return index;
  };

  const prevIndex = getWrappedIndex(activeIndex - 1);
  const nextIndex = getWrappedIndex(activeIndex + 1);

  const visibleCards = [
    { ...testimonials[prevIndex], position: "left" as const },
    { ...testimonials[activeIndex], position: "center" as const },
    { ...testimonials[nextIndex], position: "right" as const },
  ];

  const goPrev = () => setActiveIndex((prev) => getWrappedIndex(prev - 1));
  const goNext = () => setActiveIndex((prev) => getWrappedIndex(prev + 1));

  return (
    <section className="relative z-10 overflow-hidden bg-[#f4f4f7] px-8 pb-28 pt-20 md:px-12 xl:px-12">
      <div className="mx-auto max-w-[1780px]">
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
            <button
              type="button"
              aria-label={t.testimonials.prevAlt}
              onClick={goPrev}
              className="flex h-[78px] w-[78px] items-center justify-center rounded-full transition-all duration-300 hover:translate-y-[-2px] hover:scale-[1.03] active:scale-[0.98]"
              style={{
                ...testimonialArrowStyle,
                boxShadow: `
                  inset 0 1px 0 rgba(255,255,255,0.96),
                  0 10px 22px rgba(111,119,146,0.07)
                `,
              }}
            >
              <img
                src="/arrowLeft.png"
                alt={t.testimonials.prevAlt}
                className="h-[28px] w-[28px]"
              />
            </button>

            <button
              type="button"
              aria-label={t.testimonials.nextAlt}
              onClick={goNext}
              className="flex h-[78px] w-[78px] items-center justify-center rounded-full transition-all duration-300 hover:translate-y-[-2px] hover:scale-[1.03] active:scale-[0.98]"
              style={{
                ...testimonialArrowStyle,
                boxShadow: `
                  inset 0 1px 0 rgba(255,255,255,0.96),
                  0 10px 22px rgba(111,119,146,0.07)
                `,
              }}
            >
              <img
                src="/arrowRight.png"
                alt={t.testimonials.nextAlt}
                className="h-[28px] w-[28px]"
              />
            </button>
          </div>
        </div>

        <div className="mt-14 flex w-full items-end justify-center gap-8 overflow-visible xl:gap-10">
          {visibleCards.map((item) => {
            const isCenter = item.position === "center";
            const isLeft = item.position === "left";

            return (
              <article
                  key={`${item.name}-${item.position}`}
                  className={`
                    flex shrink-0 flex-col rounded-[44px] px-8 pt-8 transition-all duration-500
                    ${
                      isCenter
                        ? "h-[470px] w-[500px] -translate-y-5 opacity-100"
                        : "h-[410px] w-[410px] translate-y-6 opacity-85"
                    }
                    ${isLeft ? "saturate-50" : isCenter ? "saturate-100" : "saturate-75"}
                  `}
                  style={{
                    background: "rgba(239, 240, 245, 0.88)",
                    border: "1px solid rgba(255,255,255,0.75)",
                    boxShadow: `
                      inset 0 1px 0 rgba(255,255,255,0.94),
                      0 12px 24px rgba(108,116,145,0.05),
                      0 26px 48px rgba(108,116,145,0.07)
                    `,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`
                        flex shrink-0 items-center justify-center rounded-full bg-white/96
                        shadow-[0_8px_20px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.96)]
                        ring-1 ring-white/90
                        ${isCenter ? "h-[74px] w-[74px]" : "h-[66px] w-[66px]"}
                      `}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className={`
                          rounded-full object-cover
                          ${isCenter ? "h-[100px] w-[100px]" : "h-[80px] w-[80px]"}
                        `}
                      />
                    </div>

                    <div>
                      <h3
                        className={`font-medium leading-none tracking-[-0.04em] ${
                          isCenter
                            ? "text-[28px] text-[#232634]"
                            : "text-[24px] text-[#666c7c]"
                        }`}
                      >
                        {item.name}
                      </h3>

                      <p
                        className={`mt-4 tracking-[-0.03em] ${
                          isCenter
                            ? "text-[17px] text-[#4B74FF]"
                            : "text-[16px] text-[#96a5eb]"
                        }`}
                      >
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <p
                    className={`mt-10 tracking-[-0.02em] ${
                      isCenter
                        ? "max-w-[360px] text-[16px] leading-[1.6] text-[#6c7180]"
                        : "max-w-[300px] text-[15px] leading-[1.6] text-[#a0a5b3]"
                    }`}
                  >
                    “{item.text}”
                  </p>

                  <div className="mt-auto flex items-center gap-3 pb-8">
                    <span
                      className={`${
                        isCenter ? "text-[42px]" : "text-[38px]"
                      } leading-none text-[#DDAF58]`}
                    >
                      ★
                    </span>

                    <div className="flex items-end gap-1.5">
                      <span
                        className={`${
                          isCenter ? "text-[24px]" : "text-[22px]"
                        } font-semibold leading-none tracking-[-0.04em] text-[#2d3140]`}
                      >
                        {item.rating}
                      </span>
                      <span className="text-[18px] leading-none text-[#a0a5b3]">
                        {t.testimonials.ratingSuffix}
                      </span>
                    </div>
                  </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}