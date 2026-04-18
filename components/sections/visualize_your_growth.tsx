export function VisualizeYourGrowth() {
  return (
    <section className="relative z-10 bg-[#f4f4f7] px-8 pb-28 pt-16 md:px-12 xl:px-12">
      <div className="mx-auto max-w-[1700px]">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-[18px] font-medium uppercase tracking-[-0.03em] text-[#4B74FF]">
            OUR CLIENTS GET THE BEST
          </p>

          <h2 className="mt-3 text-[44px] font-medium leading-[1.04] tracking-[-0.05em] text-[#232634] md:text-[56px]">
            Visualize your growth
          </h2>

          <p className="mx-auto mt-8 max-w-[620px] text-[18px] font-normal leading-[1.45] tracking-[-0.02em] text-[#7b8191] md:text-[20px]">
            Our solutions give you complete control over your data and
            operations in real time.
          </p>
        </div>

        <div className="mx-auto mt-16 flex max-w-[1180px] justify-center">
          <img
            src="/VisualizeGrowth.png"
            alt="Visualize your growth dashboard illustration"
            className="h-auto w-full max-w-[1120px] object-contain
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