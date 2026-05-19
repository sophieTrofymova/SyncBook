"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";

export function PortfolioHeroSection() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const cases = t.portfolioPage.hero.cases;

  return (
    <section className="relative h-[770px] overflow-hidden bg-[#efeff3] px-8 pt-12 md:px-12 xl:px-14">
      <div className="relative z-20 max-w-[500px] pt-20">
        <h1 className="text-[40px] font-medium leading-[1.15] tracking-[-0.045em] text-[#282b37] md:text-[46px]">
            {t.portfolioPage.hero.titleLine1}
            <br />
            <span className="text-[#4b74ff]">
            {t.portfolioPage.hero.titleAccent}
            </span>{" "}
            {t.portfolioPage.hero.titleLine2}
            <br />
            {t.portfolioPage.hero.titleLine3}
        </h1>

        <p className="mt-12 max-w-[420px] text-[15px] leading-[1.4] tracking-[-0.02em] text-[#707582]">
            {t.portfolioPage.hero.description}
        </p>
        </div>

      <div className="absolute bottom-[-95px] right-[-34vw] z-0 h-[440px] w-[95vw] rounded-tl-[440px] bg-[#4B74FF]" />

      <div className="absolute right-[30px] top-[180px] z-10 w-[640px]">
        <img
          src={cases[active].image}
          alt={cases[active].title}
          className="w-full object-contain drop-shadow-[0_24px_34px_rgba(35,38,52,0.22)]"
        />
      </div>

      <div className="absolute bottom-0 left-8 z-30 flex items-end gap-6 md:left-12 xl:left-14">
        {cases.map((item, index) => {
            const isActive = active === index;

            return (
            <div
                key={item.number}
                onClick={() => setActive(index)}
                className="relative cursor-pointer"
            >
                <div className="absolute -inset-8 z-0" />

                <button
                type="button"
                className={`
                    relative z-10 rounded-t-[42px] text-center
                    transition-[box-shadow,transform] duration-150 ease-out
                    ${
                    isActive
                        ? "h-[190px] w-[170px] px-7 pb-10 pt-10 text-[#4b74ff]"
                        : "h-[130px] w-[130px] px-6 pb-8 pt-10 text-[#282b37]"
                    }
                `}
                style={{
                    background: "#f3f3f7",
                    boxShadow: `
                    -10px -10px 20px rgba(255,255,255,0.95),
                    12px 16px 30px rgba(185,190,205,0.45)
                    `,
                }}
                onMouseEnter={(e) => {
                    if (!isActive) {
                    e.currentTarget.style.boxShadow = `
                        inset 5px 5px 12px rgba(185,190,205,0.45),
                        inset -5px -5px 12px rgba(255,255,255,0.95)
                    `;
                    }
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `
                    -10px -10px 20px rgba(255,255,255,0.95),
                    12px 16px 30px rgba(185,190,205,0.45)
                    `;
                }}
                >
                <div
                    className={
                    isActive
                        ? "text-[54px] font-semibold leading-none tracking-[-0.04em]"
                        : "text-[36px] font-semibold leading-none tracking-[-0.04em]"
                    }
                >
                    {item.number}
                </div>

                {isActive && (
                    <p className="mt-5 whitespace-pre-line text-[14px] font-semibold leading-[1.25] tracking-[-0.02em]">
                    {item.title}
                    </p>
                )}
                </button>
            </div>
            );
        })}
        </div>
    </section>
  );
}