//import { steps } from "@/data/home";
import { blueBlockStyle, embossedCardStyleBlue } from "@/lib/ui-styles";
import { getHomeData } from "@/data/home";
import { useLanguage } from "@/lib/language-context";
import Image from "next/image";
import Link from "next/link";
export function WhyChooseUsSection() {
  const { t } = useLanguage();
  const { steps } = getHomeData(t);

  return (
    <section className="relative z-10 px-8 pb-32 pt-10 md:px-12 xl:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div
          className="rounded-[44px] px-10 py-10 md:px-12 md:py-10"
          style={blueBlockStyle}
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-[16px] uppercase tracking-[-0.02em] text-white/65">
                 {t.whyChooseUs.eyebrow}
              </p>

              <h2 className="mt-2 text-[34px] font-medium tracking-[-0.04em] text-white md:text-[42px]">
                 {t.whyChooseUs.title}
              </h2>
            </div>

            <Link href="/#contact"
                className="
                group flex items-center gap-0 rounded-full
                bg-white/92 py-2 pl-9 pr-2
                text-[16px] font-medium text-[#2a2e3c]

                shadow-[0_10px_24px_rgba(0,0,0,0.14)]
                transition-all duration-300 ease-out

                hover:bg-transparent
                hover:text-white
                hover:shadow-none
                hover:ring-1 hover:ring-white/60
              "
            >
              <span className="px-2 transition-colors duration-300 group-hover:text-white">
                {t.whyChooseUs.cta}
              </span>

                <span
                  className="
                    ml-4 flex h-12 w-12 items-center justify-center rounded-full
                    bg-white text-[#2f63ff]

                    shadow-[0_6px_16px_rgba(0,0,0,0.12)]
                    transition-all duration-300 ease-out

                    group-hover:bg-transparent
                    group-hover:text-white
                    group-hover:shadow-none
                    group-hover:ring-1 group-hover:ring-white/60
                  "
                >
                  <Image
                    src="/messageUs.png"
                    alt="Message us"
                    width={24}
                    height={24}
                    className="block group-hover:hidden"
                  />
                </span>
          </Link>
          
          </div>

          <div className="mt-12 flex flex-col gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="grid min-h-[94px] grid-cols-[92px_1fr_520px] items-center rounded-[30px] px-10 py-5"
                style={embossedCardStyleBlue}
              >
                <div className="text-[32px] font-semibold leading-none tracking-[-0.04em] text-white/90">
                  {step.number}
                </div>

                <div className="border-l border-white/20 pl-10">
                  <div className="text-[24px] font-medium leading-[1.15] tracking-[-0.03em] text-white">
                    {step.title}
                  </div>
                </div>

                <p className="max-w-[520px] text-[15px] leading-[1.45] tracking-[-0.015em] text-white/72">
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