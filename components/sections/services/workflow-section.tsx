"use client";

import { embossedCardStyleBlue } from "@/lib/ui-styles";
import { useLanguage } from "@/lib/language-context";

export function WorkflowSection() {
  const { t } = useLanguage();
  const workflow = t.servicesPage?.workflow;

  if (!workflow) return null;

  return (
    <section className="px-5 py-16 md:px-12 md:py-24 xl:px-14">
      <div
        className="
          relative overflow-hidden rounded-[32px] px-4 py-14
          md:rounded-[64px] md:px-20 md:py-24
        "
        style={{
          background:
            "linear-gradient(135deg, #2c61ff 0%, #1a4fef 60%, #3861dc 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 20% 40%, rgba(255,255,255,0.2), transparent 60%)",
          }}
        />

        <div className="relative z-10 text-center">
          <p className="text-[11px] uppercase tracking-[-0.03em] text-white/45 md:text-[22px]">
            {workflow.eyebrow}
          </p>

          <h2 className="mx-auto mt-4 max-w-[280px] text-[22px] font-medium leading-[1.18] tracking-[-0.045em] text-white md:mt-6 md:max-w-none md:text-[60px]">
            {workflow.title}
          </h2>

          <p className="mx-auto mt-8 max-w-[250px] text-[11px] leading-[1.25] tracking-[-0.03em] text-white/55 md:mt-6 md:max-w-[700px] md:text-[19px] md:leading-[1.4] md:text-white/75">
            {workflow.description}
          </p>
        </div>

        <div className="relative z-10 mt-14 flex flex-col gap-14 md:mt-20 lg:grid lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          <div className="order-2 flex justify-center lg:order-1 lg:justify-start">
            <img
              src="/Services/workflow.png"
              alt={workflow.imageAlt}
              className="w-full max-w-[290px] object-contain md:max-w-[520px]"
            />
          </div>

          <div className="order-1 flex flex-col gap-7 lg:order-2 lg:gap-8">
            {workflow.items.map((item) => (
              <div
                key={item.title}
                className="
                  flex min-h-[148px] flex-col items-center justify-center
                  rounded-[22px] px-7 py-8 text-center backdrop-blur-md
                  md:grid md:min-h-[110px] md:grid-cols-[0.9fr_1.1fr]
                  md:items-center md:rounded-[28px] md:px-10 md:py-6
                  md:text-left
                "
                style={embossedCardStyleBlue}
              >
                <h3 className="whitespace-pre-line text-[15px] font-semibold tracking-[-0.035em] text-white md:text-[20px]">
                  {item.title}
                </h3>

                <div className="my-5 h-px w-[180px] bg-white/25 md:hidden" />

                <p className="max-w-[230px] text-[12px] leading-[1.25] tracking-[-0.03em] text-white/60 md:max-w-none md:border-l md:border-white/20 md:pl-10 md:text-[18px] md:leading-[1.3] md:text-white/80">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}