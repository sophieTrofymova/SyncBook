"use client";

import { useLanguage } from "@/lib/language-context";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      className="
        relative z-10 min-h-0 overflow-hidden bg-[#eef0f6]
        px-5 pb-0 pt-8

        md:min-h-[760px] md:px-12 md:pt-14
      "
    >
      {/* TEXT CONTENT */}
      <div
        className="
          relative z-20 mx-auto flex max-w-[390px]
          flex-col items-center pt-16 text-center

          md:mx-0 md:max-w-[760px] md:items-start md:pt-16 md:text-left
        "
      >
        <h1
          className="
            w-full text-[30px] font-medium leading-[1.18]
            tracking-[-0.055em] text-[#232634]

            md:text-[61px] md:leading-[1.06]
            xl:text-[63px]
          "
        >
          <span className="whitespace-nowrap">
            {t.hero.titleBeforeArrow}{" "}
            <span className="inline-flex translate-y-[-2px]">
              <img
                src="/Arrow.png"
                alt={t.hero.arrowAlt}
                className="h-[0.72em] w-[0.95em]"
              />
            </span>{" "}
            {t.hero.titleAfterArrow}
          </span>

          <br />

          <span className="whitespace-nowrap">
            {t.hero.titleSecondLine}
          </span>
        </h1>

        <p
          className="
            mt-5 max-w-[310px] text-[12px] font-normal
            leading-[1.35] tracking-[-0.02em] text-[#73798a]

            md:mt-8 md:max-w-[520px] md:text-[20px] md:leading-[1.5]
          "
        >
          {t.hero.description}
        </p>

        <button
          type="button"
          className="
            embossed-pill-button group mt-10 flex w-full max-w-[190px]
            items-center rounded-full p-1.5
            transition-all duration-300 ease-out

            hover:scale-[0.985]
            active:scale-[0.97]

            md:mt-16 md:max-w-[420px] md:p-3
          "
        >
          <span
            className="
              flex-1 rounded-full px-4 py-3 text-center text-[12px]
              font-medium tracking-[-0.02em] text-[#2a2e3c]
              transition-colors duration-300 ease-out
              group-hover:text-[#11131a]

              md:px-8 md:py-5 md:text-[21px]
            "
          >
            {t.hero.cta}
          </span>

          <span
            className="
              flex h-[44px] w-[44px] shrink-0 items-center justify-center
              rounded-full transition-all duration-300 ease-out

              group-hover:translate-y-[2px]
              group-hover:scale-[0.94]
              group-active:scale-[0.9]

              md:h-[78px] md:w-[78px]
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
              src="/Vector.png"
              alt={t.hero.arrowAlt}
              className="h-[22px] w-[22px] transition-transform duration-300 ease-out group-hover:scale-[0.9] md:h-[35px] md:w-[35px]"
            />
          </span>
        </button>
      </div>

      {/* MOBILE IMAGE BELOW TITLE/BUTTON */}
      <div
        className="
          relative z-10 mt-7 w-[720px]
          -translate-x-[23%] scale-[1.02]

          md:hidden
        "
      >
        <img
          src="/Hero.png"
          alt={t.hero.heroAlt}
          className="
            h-auto w-full object-contain

            [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_82%,transparent_100%)]
            [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_82%,transparent_100%)]
          "
        />

        {/* top fade */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#eef0f6] via-[#eef0f6]/80 to-transparent" />

        {/* bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#eef0f6] via-[#eef0f6]/70 to-transparent" />
      </div>

      {/* DESKTOP IMAGE */}
      <div
        className="
          hidden

          md:absolute md:right-0 md:top-1/2 md:z-10
          md:block md:w-auto md:-translate-y-1/2
        "
      >
        <img
          src="/Hero.png"
          alt={t.hero.heroAlt}
          className="
            md:h-[722px] md:w-full md:max-w-[943px]

            md:[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent),linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
            md:[-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent),linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
            md:[mask-composite:intersect]
            md:[-webkit-mask-composite:destination-in]
          "
        />
      </div>
    </section>
  );
}