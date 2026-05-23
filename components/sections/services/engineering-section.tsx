import { embossedPillStyle } from "@/lib/ui-styles";

const engineeringItems = [
  {
    title: "Full-Stack Development",
    text: "Creating high-performance web/mobile platforms for your product",
  },
  {
    title: "API Ecosystems",
    text: "Development of reliable interfaces for the interaction of your products",
  },
  {
    title: "Cloud-Native Solutions",
    text: "Optimization under AWS, Azure and Google Cloud for maximum stability",
  },
];

export function EngineeringSection() {
  return (
    <section className="relative mx-auto max-w-[1800px] overflow-hidden px-5 pt-25 py-16 md:px-12 md:py-28 xl:px-14">
      <div className="mx-auto grid max-w-[1680px] grid-cols-1 items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="relative z-20">
          <p className="text-[13px] font-normal uppercase leading-none tracking-[-0.04em] text-[#4b74ff] md:text-[24px]">
            FROM CHAOS TO CODE
          </p>

          <h2 className="mt-3 text-[31px] font-medium leading-[1.08] tracking-[-0.045em] text-[#282b37] md:mt-5 md:text-[58px]">
            Enterprise-Grade
            <br />
            Software Engineering
          </h2>

          <p className="mt-9 max-w-[330px] text-[13px] font-normal leading-[1.35] tracking-[-0.025em] text-[#707582] md:mt-12 md:max-w-[720px] md:text-[19px] md:leading-[1.45]">
            We create not just applications, but the foundation for your
            business.
            <span className="hidden md:inline">
              <br />
            </span>{" "}
            Our solutions are designed with future loads and data security in
            mind.
          </p>

          <div className="mt-16 flex max-w-[760px] flex-col gap-7 md:mt-32 md:gap-8">
            {engineeringItems.map((item) => (
              <div
                key={item.title}
                className="
                  flex min-h-[136px] flex-col items-center justify-center
                  rounded-[28px] px-8 py-8 text-center

                  md:grid md:min-h-[108px]
                  md:grid-cols-[0.9fr_1.1fr]
                  md:px-10 md:py-0 md:text-left
                "
                style={embossedPillStyle}
              >
                <h3 className="text-[16px] font-semibold tracking-[-0.035em] text-[#4b74ff] md:text-[20px]">
                  {item.title}
                </h3>

                <div className="my-5 h-px w-[210px] bg-[#d9dbe3] md:hidden" />

                <p className="max-w-[230px] text-[13px] leading-[1.25] tracking-[-0.03em] text-[#707582] md:max-w-none md:border-l md:border-[#d9dbe3] md:pl-12 md:text-[18px] md:leading-[1.3]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <img
            src="/Services/engineering.png"
            alt="Enterprise software engineering visualization"
            className="
              w-full max-w-[360px] object-contain

              md:max-w-[1020px]

              [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent),linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)]
              [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent),linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)]
              [mask-composite:intersect]
              [-webkit-mask-composite:destination-in]

              md:[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent),linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
              md:[-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent),linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
            "
          />
        </div>
      </div>
    </section>
  );
}