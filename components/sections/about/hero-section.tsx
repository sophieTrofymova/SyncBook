"use client";

import { useLanguage } from "@/lib/language-context";
import Link from "next/link";

export function HeroSection() {
  const { t } = useLanguage();
  const hero = t.aboutPage.hero;

  return (
    <section className="relative z-10 mx-auto min-h-[740px] max-w-[1800px] overflow-hidden px-5 pt-10 md:min-h-[920px] md:px-12 md:pt-22 xl:px-14">
      {/* Mobile title */}
      <h1
        className="
          relative z-20 mx-auto max-w-[320px]
          text-center text-[30px] font-medium
          leading-[1.15] tracking-[-0.04em]
          text-[#282b37]
          md:hidden
        "
      >
        {hero.mobileTitleLine1}
        <br />
        {hero.mobileTitleLine2}
        <br />
        {hero.mobileTitleLine3}
      </h1>

      {/* Desktop title */}
      <h1
        className="
          relative z-20 mx-auto hidden max-w-[980px]
          text-center text-[58px] font-medium
          leading-[1.18] tracking-[-0.04em]
          text-[#282b37]
          md:block
        "
      >
        {hero.desktopTitleLine1}
        <br />
        {hero.desktopTitleLine2}
      </h1>

      <div className="absolute left-1/2 top-[118px] z-10 w-[600px] -translate-x-1/2 pt-16 md:top-[160px] md:w-[1050px] md:pt-20 xl:w-[1200px]">
        <img
          src="/AboutUs/hero-about-us.png"
          alt={hero.imageAlt}
          className="
            h-auto w-full object-contain
            [mask-image:linear-gradient(to_right,transparent,black_10%,black_95%,transparent),linear-gradient(to_bottom,transparent,black_15%,black_95%,transparent)]
            [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_95%,transparent),linear-gradient(to_bottom,transparent,black_15%,black_90%,transparent)]
            [mask-composite:intersect]
            [-webkit-mask-composite:destination-in]
          "
        />
      </div>

      {/* Mobile bottom content */}
      <div className="absolute bottom-[48px] left-0 right-0 z-20 mx-auto flex max-w-[360px] flex-col items-center px-4 md:hidden">
        <div className="flex w-full items-start justify-between gap-6">
          <h2 className="shrink-0 text-[18px] font-normal leading-none tracking-[-0.04em] text-[#4774ff]">
            {hero.label}
          </h2>

          <p className="max-w-[175px] text-[10px] font-normal leading-[1.25] tracking-[-0.02em] text-[#6f7480]">
            {hero.descriptionLine1}
            <br />
            {hero.descriptionLine2}
            <br />
            {hero.descriptionLine3}
            <br />
            {hero.descriptionLine4}
          </p>
        </div>
        <Link
          href="/home#contact"
          className="
            embossed-pill-button group mt-8 flex w-full max-w-[170px]
            items-center rounded-full p-2
            transition-all duration-300 ease-out
            hover:scale-[0.985] active:scale-[0.97]
          "
        >
          <span
            className="
              flex-1 rounded-full px-4 py-3 text-center text-[12px]
              font-medium tracking-[-0.03em] text-[#2a2e3c]
              transition-colors duration-300 ease-out
              group-hover:text-[#11131a]
            "
          >
            {hero.cta}
          </span>

          <span
            className="
              flex h-[42px] w-[42px] items-center justify-center rounded-full
              transition-all duration-300 ease-out
              group-hover:translate-y-[2px] group-hover:scale-[0.94]
              group-active:scale-[0.9]
            "
            style={{
              background: "linear-gradient(180deg, #5A82FF 0%, #4B74FF 100%)",
              boxShadow: `
                inset 0 2px 6px rgba(255,255,255,0.22),
                inset 0 -8px 14px rgba(23,61,178,0.28),
                0 10px 22px rgba(75,116,255,0.28),
                0 0 0 8px rgba(75,116,255,0.06)
              `,
            }}
          >
            <img
              src="/AboutUs/Vector.png"
              alt=""
              aria-hidden="true"
              className="h-[18px] w-[18px] transition-transform duration-300 ease-out group-hover:scale-[0.9]"
            />
          </span>
        </Link>
      </div>

      {/* Desktop bottom text */}
      <div className="absolute bottom-[92px] left-8 z-20 hidden max-w-[340px] md:block md:left-12 xl:left-14">
        <h2 className="text-[42px] font-normal leading-none tracking-[-0.04em] text-[#4774ff]">
          {hero.label}
        </h2>

        <p className="text-[19px] font-normal leading-[1.35] tracking-[-0.02em] text-[#6f7480]">
          {hero.descriptionLine1}
          <br />
          {hero.descriptionLine2}
          <br />
          {hero.descriptionLine3}
          <br />
          {hero.descriptionLine4}
        </p>
      </div>

      {/* Desktop button */}
      <button
        type="button"
        className="
          embossed-pill-button group absolute bottom-[86px] right-8 z-20
          hidden w-full max-w-[300px] items-center rounded-full p-3
          transition-all duration-300 ease-out
          hover:scale-[0.985] active:scale-[0.97]
          md:flex md:right-12 xl:right-14
        "
      >
        <span
          className="
            flex-1 rounded-full px-8 py-5 text-center text-[25px]
            font-medium tracking-[-0.03em] text-[#2a2e3c]
            transition-colors duration-300 ease-out
            group-hover:text-[#11131a]
          "
        >
          {hero.cta}
        </span>

        <span
          className="
            flex h-[78px] w-[78px] items-center justify-center rounded-full
            transition-all duration-300 ease-out
            group-hover:translate-y-[2px] group-hover:scale-[0.94]
            group-active:scale-[0.9]
          "
          style={{
            background: "linear-gradient(180deg, #5A82FF 0%, #4B74FF 100%)",
            boxShadow: `
              inset 0 2px 6px rgba(255,255,255,0.22),
              inset 0 -8px 14px rgba(23,61,178,0.28),
              0 10px 22px rgba(75,116,255,0.28),
              0 0 0 8px rgba(75,116,255,0.06)
            `,
          }}
        >
          <img
            src="/AboutUs/Vector.png"
            alt=""
            aria-hidden="true"
            className="h-[35px] w-[35px] transition-transform duration-300 ease-out group-hover:scale-[0.9]"
          />
        </span>
      </button>
    </section>
  );
}