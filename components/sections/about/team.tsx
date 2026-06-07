export function AboutStorySection() {
  return (
    <section className="relative mx-auto max-w-[1800px] overflow-hidden px-8 py-24 md:px-12 xl:px-14">
      <div className="grid min-h-[900px] grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-x-28">
        <div className="max-w-[650px]">
          <p className="mb-5 text-[24px] font-normal uppercase leading-none tracking-[-0.04em] text-[#4b74ff]">
            FROM CHAOS TO CODE
          </p>

          <h2 className="text-[46px] font-medium leading-[1.14] tracking-[-0.045em] text-[#282b37] md:text-[58px]">
            Born from a Passion
            <br />
            for Precision
          </h2>

          <p className="mt-14 max-w-[570px] text-[18px] font-normal leading-[1.38] tracking-[-0.025em] text-[#707582] md:text-[19px]">
            Our journey started with a simple observation: most businesses are
            held back not by a lack of ideas, but by the weight of inefficient
            processes. We saw brilliant teams spending 40% of their time on
            manual data entry, fragmented communication, and battling legacy
            systems that weren't built for the modern pace.
          </p>
        </div>

        <div className="flex -mr-14">
          <img
            src="/AboutUs/team1.png"
            alt="Team working together in an office"
            className="
              -ml-[15px] md:ml-0
              h-[520px] w-full max-w-[960px]
              rounded-bl-[42px] rounded-tl-[42px]
              object-cover
            "
          />
        </div>

        <div className="flex -ml-14">
        <img
          src="/AboutUs/team2.png"
          alt="Team planning automation project"
          className="
            translate-x-[15px] md:translate-x-0
            h-[400px] w-full max-w-[960px]
            rounded-br-[42px] rounded-tr-[42px]
            object-cover
          "
        />
      </div>

        <div className="flex items-start px-8 pt-28 md:px-12 xl:px-14">
          <p className="max-w-[650px] text-[18px] font-normal leading-[1.38] tracking-[-0.025em] text-[#707582] md:text-[19px]">
            We founded SyncBook to change that. We didn't want to be just
            another software shop. We set out to be architects of efficiency. We
            spent our early days experimenting with modular code and AI-driven
            logic to find a way to make automation feel seamless, not mechanical.
            <br />
            Today, we operate as a boutique agency where engineering excellence
            meets strategic thinking. We don't just "take orders"—we dive deep
            into your business DNA to find where technology can create the most
            significant impact.
          </p>
        </div>
      </div>
    </section>
  );
}