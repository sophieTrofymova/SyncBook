"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";

export function PortfolioHeroSection() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const cases = t.portfolioPage.hero.cases;

  return (
    <section className="relative min-h-[640px] overflow-visible bg-[#efeff3] px-8 pt-20 md:px-12 xl:px-14">
      
      <div className="relative z-20 max-w-[520px] pt-10">
        <h1 className="text-[42px] font-medium leading-[1.18] tracking-[-0.045em] text-[#282b37] md:text-[48px]">
          {t.portfolioPage.hero.titleLine1}
          <br />
          <span className="text-[#4b74ff]">
            {t.portfolioPage.hero.titleAccent}
          </span>{" "}
          {t.portfolioPage.hero.titleLine2}
          <br />
          {t.portfolioPage.hero.titleLine3}
        </h1>

        <p className="mt-12 max-w-[440px] text-[15px] leading-[1.4] tracking-[-0.02em] text-[#707582]">
          {t.portfolioPage.hero.description}
        </p>
      </div>

      <div className="absolute right-[-120px] bottom-[-20px] z-0 h-[520px] w-[820px] rounded-tl-[420px] bg-[#4B74FF]" />

      <div className="absolute right-[30px] top-[10px] z-10 w-[720px]">
        <img
          src={cases[active].image}
          alt={cases[active].title}
          className="w-full object-contain drop-shadow-[0_28px_35px_rgba(35,38,52,0.22)]"
        />
      </div>

      <div className="absolute bottom-0 left-8 z-30 flex items-end gap-6 md:left-12 xl:left-14">
        {cases.map((item, index) => {
          const isActive = active === index;

          return (
            <button
              key={item.number}
              type="button"
              onClick={() => setActive(index)}
              className={`
                rounded-t-[44px] text-center transition-all duration-300
                ${
                  isActive
                    ? "h-[210px] w-[200px] px-8 pb-10 pt-10 text-[#4b74ff]"
                    : "h-[150px] w-[150px] px-6 pb-8 pt-10 text-[#282b37]"
                }
              `}
              style={{
                background: "#f3f3f7",
                boxShadow: `
                  inset 0 1px 0 rgba(255,255,255,0.85),
                  -8px -8px 18px rgba(255,255,255,0.9),
                  12px 16px 30px rgba(185,190,205,0.45)
                `,
              }}
            >
              <div className="text-[54px] font-semibold tracking-[-0.04em] leading-none">
                {item.number}
              </div>

              {isActive && (
                <p className="mt-4 whitespace-pre-line text-[16px] font-semibold leading-[1.25] tracking-[-0.02em]">
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