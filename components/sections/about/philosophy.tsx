export function PhilosophySection() {
  return (
    <section className="px-3 py-16 md:px-12 md:py-28 xl:px-14">
      <div
        className="
          relative overflow-hidden rounded-[42px] px-6 py-16
          md:rounded-[64px] md:px-20 md:py-24
        "
        style={{
          background:
            "linear-gradient(135deg, #2554fd 0%, #305ef5 60%, #2e5ce5 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-full"
          style={{
            background:
              "radial-gradient(circle at 20% 40%, rgba(255,255,255,0.25), transparent 60%)",
          }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.6fr_0.9fr] lg:items-start">
          <div>
            <p className="text-center text-[14px] uppercase tracking-[-0.03em] text-white/60 md:text-left md:text-[22px]">
              AUTOMATION IS FOR PEOPLE
            </p>

            <h2 className="mt-6 text-center text-[28px] font-medium leading-[1.18] tracking-[-0.04em] text-white md:mt-8 md:text-left md:text-[44px]">
              The Philosophy:
              <br className="md:hidden" />
              {" "}Humans vs. Machines
            </h2>
          </div>

          <div className="z-10 mt-15 max-w-[350px] text-[14px] leading-[1.22] tracking-[-0.04em] text-white/70 md:mt-20 md:text-[19px] md:leading-[1.4] md:tracking-[-0.02em] lg:pt-44">
            <p>
              There is a common misconception that automation is about replacing humans.
              We believe the opposite.
            </p>

            <p className="mt-8 font-semibold text-white md:mt-6">
              Automation is about liberating humans.
            </p>

            <p className="mt-8 md:mt-6">
              By delegating the repetitive, the mundane, and the error-prone tasks to
              intelligent systems, we allow teams to focus on what they do best:
              strategy, empathy, and innovation.
            </p>

            <p className="mt-8 md:mt-6">
              We build the machines, so you can focus on the vision.
            </p>
          </div>

          <div className="z-0 mt-10 ml-5 lg:-ml-15 lg:col-span-1 lg:-mt-120">
            <img
              src="/AboutUs/philosophy.png"
              alt="Automation concept"
              className="
                w-[170%] max-w-none -translate-x-[18%] object-contain
                md:w-full md:max-w-[920px] md:translate-x-0
                lg:w-[110%] lg:max-w-none
                [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent),linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
                [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent),linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
                [mask-composite:intersect]
                [-webkit-mask-composite:destination-in]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}