
import { useLanguage } from "@/lib/language-context";
export function VisualizeYourGrowth() {
  const { t } = useLanguage();
  return (
    <section className="relative z-10 pb-28 pt-16 md:px-12 xl:px-12">
      <div className="mx-auto max-w-[1700px]">
        <div className="mx-auto max-w-[760px] text-center  px-8">
          <p className="text-[18px] font-medium uppercase tracking-[-0.03em] text-[#4B74FF]">
            {t.growth.eyebrow}
          </p>

          <h2 className="mt-3 text-[44px] font-medium leading-[1.04] tracking-[-0.05em] text-[#232634] md:text-[56px]">
            {t.growth.title}
          </h2>

          <p className="mx-auto mt-8 max-w-[620px] text-[18px] font-normal leading-[1.45] tracking-[-0.02em] text-[#7b8191] md:text-[20px]">
            {t.growth.description}
          </p>
        </div>

        <div className="mx-auto mt-16 flex w-full max-w-[1180px] justify-center">
          <img
            src="/VisualizeGrowth.png"
            alt={t.growth.imageAlt}
            className="h-auto w-full max-w-[1120px] scale-[1.25] object-contain
            [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent),linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
            [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent),linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
            [mask-composite:intersect]
            [-webkit-mask-composite:destination-in]"
          />
        </div>
      </div>
    </section>
  );
}