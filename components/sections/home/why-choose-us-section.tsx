import { blueBlockStyle, embossedCardStyleBlue } from "@/lib/ui-styles";
import { getHomeData } from "@/data/home";
import { useLanguage } from "@/lib/language-context";

export function WhyChooseUsSection() {
  const { t } = useLanguage();
  const { steps } = getHomeData(t);

  return (
    <section className="relative z-10 bg-[#eef0f6] px-3 pb-10 pt-8 md:px-12 md:pb-32 md:pt-10 xl:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div
          className="
            rounded-[24px] px-3 pb-5 pt-9
            md:rounded-[44px] md:px-12 md:py-10
          "
          style={blueBlockStyle}
        >
          <div className="flex flex-col items-center text-center md:flex-row md:items-start md:justify-between md:text-left">
            <div>
              <p className="text-[10px] uppercase tracking-[0.08em] text-white/55 md:text-[16px] md:tracking-[-0.02em]">
                {t.whyChooseUs.eyebrow}
              </p>

              <h2 className="mt-2 text-[22px] font-medium tracking-[-0.04em] text-white md:text-[42px]">
                {t.whyChooseUs.title}
              </h2>
            </div>

            <button
              className="
                group mt-6 flex items-center rounded-full
                bg-white/92 py-2 pl-6 pr-2
                text-[11px] font-medium text-[#2a2e3c]

                shadow-[0_10px_24px_rgba(0,0,0,0.14)]
                transition-all duration-300 ease-out

                hover:bg-transparent
                hover:text-white
                hover:shadow-none
                hover:ring-1 hover:ring-white/60

                md:mt-0 md:py-2 md:pl-9 md:pr-2 md:text-[16px]
              "
            >
              <span className="px-2 transition-colors duration-300 group-hover:text-white">
                {t.whyChooseUs.cta}
              </span>

              <span
                className="
                  ml-3 flex h-8 w-8 items-center justify-center rounded-full
                  bg-white

                  shadow-[0_6px_16px_rgba(0,0,0,0.12)]
                  transition-all duration-300 ease-out

                  group-hover:bg-transparent
                  group-hover:shadow-none
                  group-hover:ring-1 group-hover:ring-white/60

                  md:ml-4 md:h-12 md:w-12
                "
              >
                <img
                  src="/messageUs.png"
                  alt="Chat icon"
                  className="
                    h-[14px] w-[14px] object-contain
                    group-hover:hidden

                    md:h-[18px] md:w-[18px]
                  "
                />

                <img
                  src="/messageUs-hover.png"
                  alt="Chat icon hover"
                  className="
                    hidden object-contain
                    group-hover:block

                    h-[13px] w-[13px]
                    md:h-[17px] md:w-[17px]
                  "
                />
              </span>
            </button>
          </div>

          <div className="mt-9 mb-9 flex flex-col gap-4 md:mt-12 md:gap-8">
            {steps.map((step) => (
              <div
                  key={step.number}
                  className="
                    grid min-h-[84px] grid-cols-[70px_1fr]
                    items-center rounded-[22px] px-6 py-5

                    md:min-h-[94px] md:grid-cols-[92px_1fr_520px]
                    md:rounded-[30px] md:px-10 md:py-5
                  "
                  style={embossedCardStyleBlue}
                >
                <div className="text-[26px] font-semibold leading-none tracking-[-0.04em] text-white/90 md:text-[32px]">
                  {step.number}
                </div>

                <div className="border-l border-white/20 pl-6 md:pl-10">
                  <div className="text-[15px] font-medium leading-[1.15] tracking-[-0.03em] text-white md:text-[24px]">
                    {step.title}
                  </div>

                  <p className="mt-2 max-w-[190px] text-[10px] leading-[1.35] tracking-[-0.015em] text-white/72 md:hidden">
                    {step.description}
                  </p>
                </div>
                <p className="hidden max-w-[520px] text-[15px] leading-[1.45] tracking-[-0.015em] text-white/72 md:block">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}