import { steps } from "@/data/home";
import { blueBlockStyle, stepCardStyle } from "@/lib/ui-styles";

export function WhyChooseUsSection() {
  return (
    <section className="relative z-10 bg-[#f4f4f7] px-8 pb-32 pt-10 md:px-12 xl:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div
          className="rounded-[44px] px-10 py-10 md:px-12 md:py-10"
          style={blueBlockStyle}
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-[16px] uppercase tracking-[-0.02em] text-white/65">
                WE ARE READY TO HELP
              </p>

              <h2 className="mt-2 text-[34px] font-medium tracking-[-0.04em] text-white md:text-[42px]">
                Why choose us?
              </h2>
            </div>

            <button className="flex items-center gap-0 rounded-full bg-white/92 py-2 pl-9 pr-2 text-[16px] font-medium text-[#2a2e3c] shadow-[0_10px_24px_rgba(0,0,0,0.14)]">
              <span className="px-2 text-[#2f63ff]">Discuss my project</span>
              <span className="ml-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#2f63ff] shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
                💬
              </span>
            </button>
          </div>

          <div className="mt-12 flex flex-col gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="grid min-h-[94px] grid-cols-[92px_1fr_520px] items-center rounded-[30px] px-10 py-5"
                style={stepCardStyle}
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