"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "@/components/ui/section-header";

type HorizontalCardCarouselProps<T> = {
  eyebrow: string;
  title: string;
  actionText: string;
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
};

export function HorizontalCardCarousel<T>({
  eyebrow,
  title,
  actionText,
  items,
  renderItem,
}: HorizontalCardCarouselProps<T>) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  const maxProgress = 100;

  const updateProgress = () => {
    const el = scrollRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;

    if (maxScroll <= 0) {
      setProgress(0);
      return;
    }

    setProgress((el.scrollLeft / maxScroll) * maxProgress);
  };

  useEffect(() => {
    updateProgress();

    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => updateProgress();

    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateProgress);
    };
  }, [items]);

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const el = scrollRef.current;
    if (!el) return;

    const value = Number(e.target.value);
    setProgress(value);

    const maxScroll = el.scrollWidth - el.clientWidth;

    el.scrollTo({
      left: (value / maxProgress) * maxScroll,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative z-10 bg-[#eef0f6] pb-20 pt-24 md:pb-24 md:pt-20">
      <div className="px-8 md:px-12 xl:px-12">
        <div className="mx-auto max-w-[1800px]">
          <div className="md:hidden">
            <div className="flex flex-col items-center text-center">
              <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#4B74FF]">
                {eyebrow}
              </p>

              <h2 className="mt-2 text-[24px] font-medium tracking-[-0.04em] text-[#232634]">
                {title}
              </h2>

              <button
                type="button"
                className="mt-6 rounded-full border border-[#c8ccd8] px-9 py-4 text-[12px] font-medium text-[#232634]"
              >
                {actionText}
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <SectionHeader
              eyebrow={eyebrow}
              title={title}
              actionText={actionText}
            />
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="
          mt-10 flex snap-x snap-mandatory overflow-x-auto scroll-smooth
          pb-10 pt-4

          md:mt-14 md:gap-14 md:px-12 md:py-10 xl:px-12

          [scrollbar-width:none] [-ms-overflow-style:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="
              flex w-screen min-w-full shrink-0 snap-center justify-center px-8

              md:w-auto md:min-w-0 md:px-0
            "
          >
            <div
              className="
                w-[338px]

                [&>*]:!w-full
                [&>*]:!min-w-0
                [&>*]:!max-w-none

                md:w-auto
                md:[&>*]:!w-auto
              "
            >
              {renderItem(item, index)}
            </div>
          </div>
        ))}
      </div>

      <div className="px-8 md:px-12 xl:px-12">
  <div className="mx-auto max-w-[338px] md:max-w-[2200px]">
    <div className="mt-0 md:mt-6">
      <input
        type="range"
        min={0}
        max={maxProgress}
        step={0.1}
        value={progress}
        onChange={handleRangeChange}
        style={{ ["--fill" as string]: `${progress}%` }}
        className="
          portfolio-range h-[7px] w-full cursor-pointer appearance-none bg-transparent

          md:h-[16px]
        "
        aria-label={`${title} scroll progress`}
      />
    </div>
  </div>
</div>
    </section>
  );
}