"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";

export function PortfolioHeroSection() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const cases = t.portfolioPage.hero.cases;

  return (
    <section className="relative h-[900px] overflow-hidden bg-[#efeff3] px-5 pt-16 md:h-[770px] md:px-12 md:pt-12 xl:px-14">
      <div className="relative z-20 mx-auto max-w-[380px] text-center md:mx-0 md:max-w-[500px] md:pt-20 md:text-left">
        <h1 className="text-[32px] font-medium leading-[1.18] tracking-[-0.045em] text-[#282b37] md:text-[46px]">
          {t.portfolioPage.hero.titleLine1}
          <br />
          <span className="text-[#4b74ff]">
            {t.portfolioPage.hero.titleAccent}
          </span>{" "}
          {t.portfolioPage.hero.titleLine2}
          <br />
          {t.portfolioPage.hero.titleLine3}
        </h1>

        <p className="mx-auto mt-9 max-w-[330px] text-[14px] leading-[1.35] tracking-[-0.02em] text-[#707582] md:mx-0 md:mt-12 md:max-w-[420px] md:text-[15px] md:leading-[1.4]">
          {t.portfolioPage.hero.description}
        </p>
      </div>

      <div className="absolute bottom-[-140px] right-[-80px] z-0 h-[430px] w-[430px] rounded-tl-full bg-[#4B74FF] -pb-10 md:bottom-[-95px] md:right-[-34vw] md:h-[440px] md:w-[95vw] md:rounded-tl-[440px]" />

      <div className="absolute bottom-[10px] left-1/2 z-10 w-[400px] -translate-x-1/2 md:bottom-auto md:left-auto md:right-[30px] md:top-[180px] md:w-[640px] md:translate-x-0">
        <img
          src={cases[active].image}
          alt={cases[active].title}
          className="w-full object-contain drop-shadow-[0_24px_34px_rgba(35,38,52,0.22)]"
        />
      </div>

      <div className="absolute left-1/2 top-[350px] z-30 flex -translate-x-1/2 items-end gap-5 md:bottom-0 md:left-8 md:top-auto md:translate-x-0 md:gap-10 md:left-12 xl:left-14">
      {cases.map((item, index) => {
        const isActive = active === index;

        return (
          <button
            key={item.number}
            type="button"
            onClick={() => setActive(index)}
            className={`
              relative flex flex-col items-center justify-start text-center
              transition-all duration-300 ease-out

              rounded-t-[44px]

              ${
                isActive
                  ? "h-[180px] w-[140px] px-6 pt-10 text-[#4b74ff] md:h-[260px] md:w-[205px] md:px-8 md:pt-14"
                  : "h-[120px] w-[100px] px-5 pt-9 text-[#282b37] md:h-[185px] md:w-[155px] md:px-6 md:pt-14"
              }
            `}
            style={{
              background: "#f3f3f7",
              boxShadow: `
                -12px -12px 24px rgba(255,255,255,0.95),
                14px 16px 32px rgba(185,190,205,0.42)
              `,
            }}
          >
            <div
              className={`
                font-semibold leading-none tracking-[-0.04em]
                ${
                  isActive
                    ? "text-[42px] md:text-[56px]"
                    : "text-[34px] md:text-[42px]"
                }
              `}
            >
              {item.number}
            </div>

            {isActive && (
              <p className="mt-7 hidden whitespace-pre-line text-[15px] font-semibold leading-[1.35] tracking-[-0.03em] md:block">
                {item.title}
              </p>
            )}
          </button>
        );
      })}
    </div>
    </section>
  );
}