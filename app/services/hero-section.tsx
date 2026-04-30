"use client";

import { useLanguage } from "@/lib/language-context";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 min-h-[760px] overflow-hidden px-8 pt-28 md:px-12 xl:px-14">
      <div className="absolute right-0 top-[110px] z-10 w-[58vw] min-w-[1020px] max-w-[1380px]">
        <img
          src="/Services/hero-services.png"
          alt={t.hero.heroAlt}
          className="h-auto w-full object-contain [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent),linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
            [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent),linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
            [mask-composite:intersect]
            [-webkit-mask-composite:destination-in]"
        />
      </div>

      <div className="relative z-20 max-w-[780px]">
        <h1 className="text-[52px] font-medium leading-[1.15] tracking-[-0.045em] text-[#282b37] md:text-[60px]">
          Solutions Engineered for Scale
          <br />
          <span className="text-[#4774ff]">- Discover our services</span>
        </h1>

        <p className="mt-14 max-w-[700px] text-[20px] font-normal leading-[1.35] tracking-[-0.03em] text-[#6f7480] underline decoration-[#4774ff] decoration-[2px] underline-offset-[3px] md:text-[21px]">
          We transform technical complexity into operational advantage.
          <br />
          Explore our core competencies in development and automation
        </p>

        <button
          type="button"
          className="
            embossed-pill-button group mt-36 flex w-full max-w-[430px] items-center rounded-full p-3
            transition-all duration-300 ease-out
            hover:scale-[0.985] active:scale-[0.97]
          "
        >
          <span
            className="
              flex-1 rounded-full px-8 py-5 text-center text-[27px]
              font-medium tracking-[-0.03em] text-[#2a2e3c]
              transition-colors duration-300 ease-out
              group-hover:text-[#11131a]
            "
          >
            Start exploring
          </span>

          <span
            className="
              flex h-[82px] w-[82px] items-center justify-center rounded-full
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
      </div>
    </section>
  );
}