"use client";
import { embossedPillStyle } from "@/lib/ui-styles";
import { ctaPanelStyle } from "@/lib/ui-styles";
import { useLanguage } from "@/lib/language-context";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 min-h-[760px] overflow-hidden px-8 pb-0 pt-14 md:px-12 xl:px-12">
      <div className="absolute right-0 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center">
        <img
          src="/Hero.png"
          alt={t.hero.heroAlt}
          className="relative h-[722px] w-full max-w-[943px]
            [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent),linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
            [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent),linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
            [mask-composite:intersect]
            [-webkit-mask-composite:destination-in]"
        />
      </div>

      <div className="relative z-20 max-w-[760px] pt-16">
        <h1 className="text-[58px] font-medium leading-[1.06] tracking-[-0.055em] text-[#232634] md:text-[61px] xl:text-[63px]">
          {t.hero.titleBeforeArrow}{" "}
          <span className="inline-flex translate-y-[-3px]">
            <img
              src="/Arrow.png"
              alt={t.hero.arrowAlt}
              className="h-[0.66em] w-[0.86em]"
            />
          </span>{" "}
          {t.hero.titleAfterArrow}
          <br />
          {t.hero.titleSecondLine}
        </h1>

        <p className="mt-8 max-w-[520px] text-[18px] font-normal leading-[1.5] tracking-[-0.02em] text-[#73798a] md:text-[20px]">
          {t.hero.description}
        </p>

       <button
          type="button"
          className=" embossed-pill-button
            group mt-16 flex w-full max-w-[420px] items-center rounded-full p-3
            transition-all duration-300 ease-out
            hover:scale-[0.985]
            active:scale-[0.97]
          "
        >
          <span
            className="
              flex-1 rounded-full px-8 py-5 text-center text-[21px]
              font-medium tracking-[-0.02em] text-[#2a2e3c]
              transition-colors duration-300 ease-out
              group-hover:text-[#11131a]
            "
          >
            {t.hero.cta}
          </span>

          <span
            className="
              flex h-[78px] w-[78px] items-center justify-center rounded-full
              transition-all duration-300 ease-out
              group-hover:translate-y-[2px]
              group-hover:scale-[0.94]
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
              src="/Vector.png"
              alt={t.hero.arrowAlt}
              className="
                h-[35px] w-[35px]
                transition-transform duration-300 ease-out
                group-hover:scale-[0.9]
              "
            />
          </span>
        </button>
      </div>
    </section>
  );
}


