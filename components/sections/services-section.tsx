"use client";

import { useEffect, useRef, useState } from "react";
import { getHomeData } from "@/data/home";
import { useLanguage } from "@/lib/language-context";
import { embossedPaperCardStyle } from "@/lib/ui-styles";

export function ServicesSection() {
  const { t } = useLanguage();
  const { services } = getHomeData(t);

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
  }, [services]);

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
      <div className="mx-auto w-full max-w-[1700px]">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-[18px] font-medium uppercase tracking-[-0.03em] text-[#4B74FF]">
              {t.services.eyebrow}
            </p>

            <h2 className="mt-3 text-[44px] font-medium leading-[1.04] tracking-[-0.05em] text-[#232634] md:text-[56px]">
              {t.services.title}
            </h2>
          </div>

          <button
            className="
              flex h-[64px] w-[220px] items-center justify-center
              rounded-full border border-[#d8dce8]

              text-[20px] font-medium tracking-[-0.02em]
              text-[#2a2e3c]

              transition-all duration-300 ease-out

              hover:text-[#4B74FF]
              hover:border-[#4B74FF]
              hover:shadow-[0_0_0_4px_rgba(75,116,255,0.08)]
            "
          >
            {t.services.actionText}
        </button>
        </div>

        <div className="mt-16">
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {services.map((item) => (
              <article
                key={item.title}
                className="group flex min-h-[520px] w-[392px] shrink-0 flex-col rounded-[36px] border border-white/70 p-9"
                style={embossedPaperCardStyle}
              >
                <div className="flex justify-start">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-[170px] w-[170px] object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <h3 className="mt-8 max-w-[290px] text-[30px] font-medium leading-[1.08] tracking-[-0.045em] text-[#2a2e3c]">
                  {item.title}
                </h3>

                <p className="mt-10 max-w-[320px] text-[17px] leading-[1.55] text-[#7b8191]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-7">
            <input
              type="range"
              min={0}
              max={maxProgress}
              step={0.1}
              value={progress}
              onChange={handleRangeChange}
              style={{ ["--fill" as string]: `${progress}%` }}
              className="portfolio-range h-[16px] w-full cursor-pointer appearance-none bg-transparent"
              aria-label={`${t.services.title} scroll progress`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}