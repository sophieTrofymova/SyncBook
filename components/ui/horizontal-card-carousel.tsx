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

    const next = (el.scrollLeft / maxScroll) * maxProgress;
    setProgress(next);
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
    <section className="relative z-10 bg-[#f4f4f7] px-8 pb-24 pt-20 md:px-12 xl:px-12">
      <div className="mx-auto max-w-[1700px]">
        <SectionHeader eyebrow={eyebrow} title={title} actionText={actionText} />

        <div className="mt-14">
          <div
            ref={scrollRef}
            className="flex gap-14 overflow-x-auto scroll-smooth pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {items.map((item, index) => renderItem(item, index))}
          </div>

          <div className="mt-6">
            <input
              type="range"
              min={0}
              max={maxProgress}
              step={0.1}
              value={progress}
              onChange={handleRangeChange}
              style={{ ["--fill" as string]: `${progress}%` }}
              className="portfolio-range h-[16px] w-full cursor-pointer appearance-none bg-transparent"
              aria-label={`${title} scroll progress`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}