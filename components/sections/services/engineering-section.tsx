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
    <section className="relative mx-auto max-w-[1800px] overflow-hidden px-8 py-28 md:px-12 xl:px-14">
      <div className="mx-auto grid max-w-[1680px] grid-cols-1 items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative z-20">
          <p className="text-[24px] font-normal uppercase leading-none tracking-[-0.04em] text-[#4b74ff]">
            FROM CHAOS TO CODE
          </p>

          <h2 className="mt-5 text-[52px] font-medium leading-[1.15] tracking-[-0.045em] text-[#282b37] md:text-[58px]">
            Enterprise-Grade Software
            <br />
            Engineering
          </h2>

          <p className="mt-12 max-w-[720px] text-[18px] font-normal leading-[1.45] tracking-[-0.025em] text-[#707582] md:text-[19px]">
            We create not just applications, but the foundation for your business.
            <br />
            Our solutions are designed with future loads and data security in mind.
          </p>

          <div className="mt-32 flex max-w-[760px] flex-col gap-8">
            {engineeringItems.map((item) => (
              <div
                key={item.title}
                className="grid min-h-[108px] grid-cols-[0.9fr_1.1fr] items-center rounded-[28px] px-10"
                style={embossedPillStyle}
              >
                <h3 className="text-[20px] font-semibold tracking-[-0.035em] text-[#4b74ff]">
                  {item.title}
                </h3>

                <p className="border-l border-[#d9dbe3] pl-12 text-[18px] leading-[1.3] tracking-[-0.03em] text-[#707582]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-end">
          <img
            src="/Services/engineering.png"
            alt="Enterprise software engineering visualization"
            className="w-full max-w-[1020px] object-contain [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent),linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
            [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent),linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
            [mask-composite:intersect]
            [-webkit-mask-composite:destination-in]"
          />
        </div>
      </div>
    </section>
  );
}