"use client";

import { useLanguage } from "@/lib/language-context";
import Link from "next/link";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 mx-auto h-[850px] max-w-[1800px] overflow-hidden px-5 pt-18 md:h-[770px] md:px-12 md:pt-28 xl:px-14">
      <div className="absolute left-1/2 top-[390px] z-10 w-[620px] -translate-x-1/2 md:left-auto md:right-0 md:top-[100px] md:w-[58vw] md:min-w-[920px] md:max-w-[1080px] md:translate-x-0">
        <img
          src="/heroservices.png"
          alt={t.hero.heroAlt}
          className="
            h-auto w-full object-contain
            [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent),linear-gradient(to_bottom,transparent,black_6%,black_94%,transparent)]
            [-webkit-mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent),linear-gradient(to_bottom,transparent,black_6%,black_94%,transparent)]
            [mask-composite:intersect]
            [-webkit-mask-composite:destination-in]

            md:[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent),linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
            md:[-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent),linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
          "
        />
      </div>

      <div className="relative z-20 mx-auto flex max-w-[390px] flex-col items-center text-center md:mx-0 md:max-w-[780px] md:items-start md:text-left">
        <h1 className="text-[32px] font-medium leading-[1.15] tracking-[-0.045em] text-[#282b37] md:text-[60px]">
          {t.servicesPage.hero.titleLine1}{" "}
          <span className="text-[#4774ff] md:block">
            {t.servicesPage.hero.titleAccent}
          </span>
        </h1>

        <p className="mt-10 max-w-[330px] text-[15px] font-normal leading-[1.25] tracking-[-0.03em] text-[#6f7480] md:mt-14 md:max-w-[700px] md:text-[21px] md:leading-[1.35]">
          {t.servicesPage.hero.description}
        </p>

        <Link
          href="/#contact"
          className="
              embossed-pill-button group mt-10 flex w-full max-w-[230px]
              items-center rounded-full p-2
              transition-all duration-300 ease-out
              hover:scale-[0.985] active:scale-[0.97]

            md:mt-36 md:max-w-[430px] md:p-3
          "
        >
          <span
            className="
              flex-1 rounded-full px-4 py-3 text-center text-[15px]
              font-medium tracking-[-0.03em] text-[#2a2e3c]
              transition-colors duration-300 ease-out
              group-hover:text-[#11131a]
              md:px-8 md:py-5 md:text-[27px]
            "
          >
            {t.servicesPage.hero.cta}
          </span>

          <span
            className="
                flex h-[52px] w-[52px] items-center justify-center rounded-full
                transition-all duration-300 ease-out
                group-hover:translate-y-[2px] group-hover:scale-[0.94]
                group-active:scale-[0.9]

                md:h-[82px] md:w-[82px]
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
              className="h-[22px] w-[22px] transition-transform duration-300 ease-out group-hover:scale-[0.9] md:h-[35px] md:w-[35px]"
            />
          </span>
        </Link>
      </div>
    </section>
  );
}