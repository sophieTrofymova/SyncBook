import { useLanguage } from "@/lib/language-context";
import { embossedCardStyle } from "@/lib/ui-styles";

export function ArchitectureSection() {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 bg-[#eef0f6] px-8 pb-24 pt-20 md:px-12 md:pb-28 md:pt-10 xl:px-12">
      <div className="mx-auto max-w-[1700px]">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.08em] text-[#4B74FF] md:text-[18px] md:tracking-[-0.03em]">
            {t.architecture.eyebrow}
          </p>

          <h2 className="mt-3 text-[24px] font-medium leading-[1.18] tracking-[-0.05em] text-[#232634] md:mt-4 md:text-[48px] md:leading-[1.12]">
            {t.architecture.title1}
            <br />
            {t.architecture.title2}
          </h2>
        </div>

        <div className="mt-10 grid items-center gap-y-8 md:mt-20 lg:grid-cols-[728px_1fr] lg:gap-x-16 lg:gap-y-12">
          <div className="flex justify-center overflow-visible lg:justify-start">
            <img
              src="/architecture-illustration.png"
              alt={t.architecture.imageAlt}
              className="
                relative left-[-34px] h-auto w-[560px] max-w-none object-contain

                md:left-0 md:w-full md:max-w-[628px]

                [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent),linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)]
                [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent),linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)]
                [mask-composite:intersect]
                [-webkit-mask-composite:destination-in]

                md:[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent),linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
                md:[-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent),linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
              "
            />
          </div>

          <div className="relative left-[-28px] mx-auto max-w-[390px] px-2 text-center md:left-0 md:max-w-[646px] md:px-0 md:text-left">
            <p
              className="
                mx-auto max-w-[390px] text-center
                text-[14px] font-normal leading-[18px]
                tracking-[0em] text-[#232634]/70

                md:max-w-[646px] md:text-left
                md:text-[18px] md:leading-[1.55]
                md:tracking-[-0.025em] md:text-[#7b8191]
              "
            >
              {t.architecture.description}
            </p>

            <div
              className="
                ml-6 mt-10 flex min-h-[431px] w-[280px]
                flex-col justify-center gap-[58px]
                rounded-[28px] border border-white/70 bg-[#efeff3]
                px-[38px] py-[46px] text-left

                md:ml-[-18px] md:mt-12 md:flex md:min-h-[162px] md:w-full md:max-w-[646px]
                md:flex-row md:items-center md:justify-between md:gap-0
                md:rounded-[32px] md:px-10 md:py-7
              "
              style={embossedCardStyle}
            >
              <StatItem value="40%" label={t.architecture.stat1} />
              <StatItem value="3x" label={t.architecture.stat2} />
              <StatItem value="100%" label={t.architecture.stat3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="w-full text-left md:min-w-[150px]">
      <div className="text-[32px] font-semibold leading-none tracking-[-0.04em] text-[#4B74FF] md:text-[32px]">
        {value}
      </div>

      <p
        className="
          mt-3 max-w-[160px] text-[16px] font-normal
          leading-[18px] tracking-[0em] text-[#232634]/70

          md:mt-4 md:max-w-[150px]
          md:text-[16px] md:leading-[1.45]
          md:tracking-[-0.02em] md:text-[#7b8191]
        "
      >
        {label}
      </p>
    </div>
  );
}