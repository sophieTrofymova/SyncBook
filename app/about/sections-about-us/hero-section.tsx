"use client";

import { useLanguage } from "@/lib/language-context";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 min-h-[920px] mx-auto max-w-[1800px] overflow-hidden px-8 pt-22 md:px-12 xl:px-14">
      <h1 className="relative z-20 mx-auto max-w-[980px] text-center text-[44px] font-medium leading-[1.18] tracking-[-0.04em] text-[#282b37] md:text-[58px]">
        “We Bridge the Gap Between
        <br />
        Complexity and Efficiency”
      </h1>

      <div className="absolute left-1/2 top-[160px] z-10 w-[820px] pt-20 -translate-x-1/2 md:w-[1050px] xl:w-[1200px]">
        <img
          src="/AboutUs/hero-about-us.png"
          alt={t.hero.heroAlt}
          className="h-auto w-full object-contain
          [mask-image:linear-gradient(to_right,transparent,black_10%,black_95%,transparent),linear-gradient(to_bottom,transparent,black_15%,black_95%,transparent)]
          [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_95%,transparent),linear-gradient(to_bottom,transparent,black_15%,black_90%,transparent)]
          [mask-composite:intersect]
          [-webkit-mask-composite:destination-in]"
        />
      </div>

      <div className="absolute bottom-[92px] left-8 z-20 max-w-[340px] md:left-12 xl:left-14">
        <h2 className="text-[38px] font-normal leading-none tracking-[-0.04em] text-[#4774ff] md:text-[42px]">
          -About us
        </h2>

        <p className="mt-14 text-[18px] font-normal leading-[1.35] tracking-[-0.02em] text-[#6f7480] md:text-[19px]">
          We transform technical complexity
          <br />
          into operational advantage.
          <br />
          Explore our core competencies in
          <br />
          development and automation.
        </p>
      </div>

      <button
        type="button"
        className="
          embossed-pill-button group absolute bottom-[86px] right-8 z-20
          flex w-full max-w-[300px] items-center rounded-full p-3
          transition-all duration-300 ease-out
          hover:scale-[0.985] active:scale-[0.97]
          md:right-12 xl:right-14
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
          Meet us
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
            alt={t.hero.arrowAlt}
            className="h-[35px] w-[35px] transition-transform duration-300 ease-out group-hover:scale-[0.9]"
          />
        </span>
      </button>
    </section>
  );
}