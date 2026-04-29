import { embossedPillStyle } from "@/lib/ui-styles";

const processItems = [
  {
    icon: "/Services/process1.png",
    title: "Discovery",
    text: "Diving into business logic\nand process audit",
    className: "left-[3%] top-[440px]",
  },
  {
    icon: "/Services/process2.png",
    title: "Design",
    text: "UX and technical\narchitecture design",
    className: "left-[30%] top-[530px]",
  },
  {
    icon: "/Services/process3.png",
    title: "Sprint",
    text: "Iterative development\nwith weekly demos.",
    className: "left-[55%] top-[395px]",
  },
  {
    icon: "/Services/process4.png",
    title: "Launch",
    text: "Final testing and\nseamless implementation",
    className: "right-[7%] top-[470px]",
  },
];

export function DeliveryFrameworkSection() {
  return (
    <section className="relative min-h-[880px] overflow-hidden bg-[#f3f3f7] px-8 py-28 md:px-12 xl:px-14">
      <div className="relative z-20 text-center">
        <p className="text-[24px] font-normal uppercase leading-none tracking-[-0.04em] text-[#4b74ff]">
          WHAT IS THE PROCESS
        </p>

        <h2 className="mt-6 text-[52px] font-medium leading-none tracking-[-0.045em] text-[#282b37] md:text-[58px]">
          Our Delivery Framework
        </h2>

        <p className="mt-8 text-[18px] leading-[1.35] tracking-[-0.025em] text-[#707582] md:text-[19px]">
          Each project goes through a rigorous quality control cycle:
        </p>
      </div>

      <svg
        className="absolute left-0 top-[260px] z-10 h-[260px] w-full"
        viewBox="0 0 1728 260"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0C130 310 420 300 620 205C760 138 825 52 1035 82C1232 110 1305 185 1480 170C1620 158 1685 80 1728 10"
          stroke="#9fb7ff"
          strokeWidth="4"
          opacity="0.6"
        />
      </svg>

      {processItems.map((item) => (
        <div
          key={item.title}
          className={`absolute z-20 ${item.className}`}
        >
          <div
            className="flex h-[94px] w-[94px] items-center justify-center rounded-full"
            style={embossedPillStyle}
          >
            <img
              src={item.icon}
              alt={item.title}
              className="h-[42px] w-[42px] object-contain"
            />
          </div>

          <h3 className="mt-14 text-[31px] font-normal leading-none tracking-[-0.04em] text-[#282b37]">
            {item.title}
          </h3>

          <p className="mt-9 whitespace-pre-line text-[20px] font-normal leading-[1.45] tracking-[-0.03em] text-[#707582]">
            {item.text}
          </p>
        </div>
      ))}
    </section>
  );
}