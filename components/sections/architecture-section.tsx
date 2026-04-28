import { useLanguage } from "@/lib/language-context";
import { embossedCardStyle } from "@/lib/ui-styles";

 export function ArchitectureSection() {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 bg-[#f4f4f7] px-8 pb-28 pt-10 md:px-12 xl:px-12">
      <div className="mx-auto max-w-[1700px]">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-[18px] font-medium uppercase tracking-[-0.03em] text-[#4B74FF]">
            {t.architecture.eyebrow}
          </p>

          <h2 className="mt-4 text-[42px] font-medium leading-[1.12] tracking-[-0.05em] text-[#232634] md:text-[48px]">
            {t.architecture.title1}
            <br />
            {t.architecture.title2}
          </h2>
        </div>

        <div className="mt-20 grid items-center gap-x-16 gap-y-12 lg:grid-cols-[728px_1fr]">
          <div className="flex justify-center lg:justify-start">
            <img
              src="/architecture-illustration.png"
              alt={t.architecture.imageAlt}
              className="h-auto w-full max-w-[628px] object-contain"
            />
          </div>

          <div className="max-w-[646px]">
            <p className="max-w-[646px] text-[18px] leading-[1.55] tracking-[-0.025em] text-[#7b8191]">
              {t.architecture.description}
            </p>

            <div
              className="mt-12 flex min-h-[162px] w-full max-w-[646px] items-center justify-between rounded-[32px] border border-white/70 bg-[#efeff3] px-8 py-7 md:px-10"
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
    <div className="min-w-[150px]">
      <div className="text-[28px] font-semibold leading-none tracking-[-0.04em] text-[#4B74FF] md:text-[32px]">
        {value}
      </div>
      <p className="mt-4 max-w-[150px] text-[16px] leading-[1.45] tracking-[-0.02em] text-[#7b8191]">
        {label}
      </p>
    </div>
  );
}