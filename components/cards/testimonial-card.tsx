import { embossedCardStyle } from "@/lib/ui-styles";

type TestimonialCardProps = {
  item: {
    name: string;
    role: string;
    text: string;
    image: string;
    rating: string;
    position: "left" | "center" | "right";
  };
  ratingSuffix: string;
};

export function TestimonialCard({ item, ratingSuffix }: TestimonialCardProps) {
  const isCenter = item.position === "center";
  const isLeft = item.position === "left";

  return (
    <article
      className={`
        flex shrink-0 flex-col rounded-[32px] border border-white/70
        px-7 pt-7 transition-all duration-500
        h-[310px] w-[310px]
        md:rounded-[44px] md:px-8 md:pt-8
        ${
          isCenter
            ? "md:h-[470px] md:w-[500px] md:-translate-y-5 opacity-100"
            : "md:h-[410px] md:w-[410px] md:translate-y-6 opacity-85"
        }
        ${isLeft ? "md:saturate-50" : isCenter ? "md:saturate-100" : "md:saturate-75"}
      `}
      style={embossedCardStyle}
    >
      <div className="flex items-center gap-4">
        <div
          className={`
            flex h-[58px] w-[58px] shrink-0 items-center justify-center
            rounded-full bg-white/90 shadow-[0_8px_20px_rgba(0,0,0,0.06)]
            ring-1 ring-white/90
            ${isCenter ? "md:h-[74px] md:w-[74px]" : "md:h-[66px] md:w-[66px]"}
          `}
        >
          <img
            src={item.image}
            alt={item.name}
            className={`
              h-[72px] w-[72px] rounded-full object-cover
              ${isCenter ? "md:h-[100px] md:w-[100px]" : "md:h-[80px] md:w-[80px]"}
            `}
          />
        </div>

        <div>
          <h3
            className={`
              text-[20px] font-medium leading-none tracking-[-0.04em]
              md:${
                isCenter ? "text-[28px] text-[#232634]" : "text-[24px] text-[#666c7c]"
              }
              text-[#232634]
            `}
          >
            {item.name}
          </h3>

          <p
            className={`
              mt-2 text-[15px] tracking-[-0.03em] text-[#4B74FF]
              md:mt-4
              md:${isCenter ? "text-[17px] text-[#4B74FF]" : "text-[16px] text-[#96a5eb]"}
            `}
          >
            {item.role}
          </p>
        </div>
      </div>

      <p
        className={`
          mt-8 max-w-[250px] text-[13px] leading-[1.45] tracking-[-0.02em]
          text-[#6c7180]
          md:mt-10
          md:${
            isCenter
              ? "max-w-[360px] text-[16px] leading-[1.6] text-[#6c7180]"
              : "max-w-[300px] text-[15px] leading-[1.6] text-[#a0a5b3]"
          }
        `}
      >
        “{item.text}”
      </p>

      <div className="mt-auto flex items-center gap-3 pb-7 md:pb-8">
        <span
          className={`
            text-[32px] leading-none text-[#DDAF58]
            md:${isCenter ? "text-[42px]" : "text-[38px]"}
          `}
        >
          ★
        </span>

        <div className="flex items-end gap-1.5">
          <span
            className={`
              text-[20px] font-semibold leading-none tracking-[-0.04em]
              text-[#2d3140]
              md:${isCenter ? "text-[24px]" : "text-[22px]"}
            `}
          >
            {item.rating}
          </span>

          <span className="text-[14px] leading-none text-[#a0a5b3] md:text-[18px]">
            {ratingSuffix}
          </span>
        </div>
      </div>
    </article>
  );
}