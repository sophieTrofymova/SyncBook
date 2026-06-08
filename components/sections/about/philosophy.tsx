"use client";

import { useLanguage } from "@/lib/language-context";

export function PhilosophySection() {
  const { t } = useLanguage();
  const philosophy = t.aboutPage.philosophy;

  return (
    <section className="px-8 py-28 md:px-12 xl:px-14">
      <div
        className="
          relative overflow-hidden rounded-[64px] px-16 py-20
          md:px-20 md:py-24
        "
        style={{
          background:
            "linear-gradient(135deg, #1447ff 0%, #305ef5 60%, #204eda 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-full"
          style={{
            background:
              "radial-gradient(circle at 20% 40%, rgba(255,255,255,0.25), transparent 60%)",
          }}
        />

        <div className="relative z-10 grid grid-cols-1 items-center lg:grid-cols-2">
          <div>
            <p className="text-[20px] uppercase tracking-[-0.03em] text-white/70">
              {philosophy.eyebrow}
            </p>

            <h2 className="mt-8 text-[46px] font-medium leading-[1.12] tracking-[-0.04em] text-white md:text-[56px]">
              {philosophy.title}
            </h2>

            <div className="mt-16">
              <img
                src="/AboutUs/philosophy.png"
                alt={philosophy.imageAlt}
                className="w-full max-w-[820px] object-contain [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent),linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
                [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent),linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
                [mask-composite:intersect]
                [-webkit-mask-composite:destination-in]"
              />
            </div>
          </div>

          <div className="max-w-[520px] text-[18px] leading-[1.4] tracking-[-0.02em] text-white/80 md:text-[19px]">
            <p>{philosophy.paragraph1}</p>

            <p className="mt-6 font-semibold text-white">
              {philosophy.highlight}
            </p>

            <p className="mt-6">
              {philosophy.paragraph2}
            </p>

            <p className="mt-6">
              {philosophy.paragraph3}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}