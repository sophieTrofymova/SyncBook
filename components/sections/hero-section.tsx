import { embossedPaperStyle } from "@/lib/ui-styles";

export function HeroSection() {
  return (
    <section className="relative z-10 min-h-[760px] overflow-hidden px-8 pb-0 pt-14 md:px-12 xl:px-12">
      <div className="absolute right-0 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center">
        <img
          src="/Hero.png"
          alt="Hero"
          className="relative h-[722px] w-full max-w-[943px]
            [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent),linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
            [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent),linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
            [mask-composite:intersect]
            [-webkit-mask-composite:destination-in]"
        />
      </div>

      <div className="relative z-20 max-w-[760px] pt-16">
        <h1 className="text-[58px] font-medium leading-[1.06] tracking-[-0.055em] text-[#232634] md:text-[61px] xl:text-[63px]">
          Engineering{" "}
          <span className="inline-flex translate-y-[-3px]">
            <img src="/Arrow.png" alt="Arrow" className="h-[0.66em] w-[0.86em]" />
          </span>{" "}
          Efficiency
          <br />
          for Modern Business
        </h1>

        <p className="mt-8 max-w-[520px] text-[18px] font-normal leading-[1.5] tracking-[-0.02em] text-[#73798a] md:text-[20px]">
          We design and implement customized automation systems that free your team
          from routine tasks and accelerate growth. We combine fast delivery with
          strong engineering foundations.
        </p>

        <div
          className="mt-16 flex w-full max-w-[420px] items-center rounded-full p-3 ring-1 ring-white/80"
          style={embossedPaperStyle}
        >
          <button className="flex-1 rounded-full px-8 py-5 text-center text-[21px] font-medium tracking-[-0.02em] text-[#2a2e3c] font-sans transition-all duration-300 hover:text-[#11131a]">
            Start automation
          </button>

          <button
            aria-label="Start automation"
            className="flex h-[78px] w-[78px] items-center justify-center rounded-full transition-all duration-300 hover:translate-y-[-4px] hover:scale-[1.04] active:translate-y-[0px] active:scale-[0.98]"
            style={{
              background: "linear-gradient(180deg, #5A82FF 0%, #4B74FF 100%)",
              boxShadow: `
                inset 0 1px 0 rgba(255,255,255,0.35),
                0 10px 20px rgba(75,116,255,0.35),
                0 20px 40px rgba(75,116,255,0.25)
              `,
            }}
          >
            <img src="/Vector.png" alt="Arrow" className="h-[28px] w-[28px]" />
          </button>
        </div>
      </div>
    </section>
  );
}