"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type HorizontalCardCarouselProps<T> = {
  eyebrow: string;
  title: string;
  actionText: string;
  actionHref?: string;
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  headerAlign?: "left" | "center";
  cardClassName?: string;
};

export function HorizontalCardCarousel<T>({
  eyebrow,
  title,
  actionText,
  actionHref,
  items,
  renderItem,
  headerAlign = "left",
  cardClassName = "md:w-[405px]",
}: HorizontalCardCarouselProps<T>) {

  const router = useRouter();
  const [canScroll, setCanScroll] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  const maxProgress = 100;

  const updateProgress = () => {
    const el = scrollRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;

    setCanScroll(maxScroll > 1);

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
    <section className="relative z-10 bg-[#eef0f9] pb-20 pt-24 md:pb-24 md:pt-20">
      <div className="px-8 md:px-12 xl:px-12">
  <div className="mx-auto max-w-[1800px]">
    <div
      className={`
        flex flex-col items-center text-center
        ${
          headerAlign === "center"
            ? "md:items-center md:text-center"
            : "md:flex-row md:items-start md:justify-between md:text-left md:pl-6"
        }
      `}
    >
      <div
        className={`
          flex flex-col items-center text-center
          ${
            headerAlign === "center"
              ? "md:items-center md:text-center"
              : "md:items-start md:text-left"
          }
        `}
      >
        <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#4B74FF] md:text-[18px] md:tracking-[-0.04em]">
          {eyebrow}
        </p>

        <h2 className="mt-2 max-w-[330px] text-[24px] font-medium leading-[1.2] tracking-[-0.04em] text-[#232634] md:max-w-none md:text-[36px] md:leading-[1.1]">
          {title}
        </h2>
      </div>

      {actionText ? (
        <button
          type="button"
          onClick={() => {
            window.location.href = actionHref || "/services";
          }}
          className={`
            relative z-[9999] mt-6 cursor-pointer rounded-full
            border border-[#c8ccd8] px-9 py-4
            text-[12px] font-medium text-[#232634]
            transition-all duration-300
            hover:border-[#4B74FF] hover:text-[#4B74FF]
            md:px-10 md:py-4 md:text-[16px]
            ${
              headerAlign === "center"
                ? "md:mt-8"
                : "md:mt-0 md:mr-6"
            }
          `}
        >
          {actionText}
        </button>
      ) : null}
    </div>
  </div>
</div>
      <div
        ref={scrollRef}
        className={`
          mt-10 flex snap-x snap-mandatory overflow-x-auto scroll-smooth
          pb-10 pt-10

          md:mt-14 md:gap-16 md:px-8 md:py-10
          xl:gap-20 xl:px-12

          ${
            headerAlign === "center"
              ? "md:justify-center"
              : ""
          }

          [scrollbar-width:none] [-ms-overflow-style:none]
          [&::-webkit-scrollbar]:hidden
        `}
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

              md:w-[300px]
              lg:w-[320px]
              xl:w-[340px]
              2xl:w-[360px]

              md:[&>*]:!w-full
            "
          >
            {renderItem(item, index)}
          </div>
        </div>
      ))}
    </div>

      {canScroll && (
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
      )}
    </section>
  );
}