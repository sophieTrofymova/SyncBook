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
        flex shrink-0 flex-col rounded-[44px] border border-white/70
        bg-[#f4f4f7] px-8 pt-8 transition-all duration-500
        ${
          isCenter
            ? "h-[470px] w-[500px] -translate-y-5 opacity-100"
            : "h-[410px] w-[410px] translate-y-6 opacity-85"
        }
        ${isLeft ? "saturate-50" : isCenter ? "saturate-100" : "saturate-75"}
      `}
      style={embossedCardStyle}
    >
      <div className="flex items-center gap-4">
        <div
          className={`
            flex shrink-0 items-center justify-center rounded-full bg-white/90
            shadow-[0_8px_20px_rgba(0,0,0,0.06)]
            ring-1 ring-white/90
            ${isCenter ? "h-[74px] w-[74px]" : "h-[66px] w-[66px]"}
          `}
        >
          <img
            src={item.image}
            alt={item.name}
            className={`
              rounded-full object-cover
              ${isCenter ? "h-[100px] w-[100px]" : "h-[80px] w-[80px]"}
            `}
          />
        </div>

        <div>
          <h3
            className={`font-medium leading-none tracking-[-0.04em] ${
              isCenter
                ? "text-[28px] text-[#232634]"
                : "text-[24px] text-[#666c7c]"
            }`}
          >
            {item.name}
          </h3>

          <p
            className={`mt-4 tracking-[-0.03em] ${
              isCenter
                ? "text-[17px] text-[#4B74FF]"
                : "text-[16px] text-[#96a5eb]"
            }`}
          >
            {item.role}
          </p>
        </div>
      </div>

      <p
        className={`mt-10 tracking-[-0.02em] ${
          isCenter
            ? "max-w-[360px] text-[16px] leading-[1.6] text-[#6c7180]"
            : "max-w-[300px] text-[15px] leading-[1.6] text-[#a0a5b3]"
        }`}
      >
        “{item.text}”
      </p>

      <div className="mt-auto flex items-center gap-3 pb-8">
        <span
          className={`${
            isCenter ? "text-[42px]" : "text-[38px]"
          } leading-none text-[#DDAF58]`}
        >
          ★
        </span>

        <div className="flex items-end gap-1.5">
          <span
            className={`${
              isCenter ? "text-[24px]" : "text-[22px]"
            } font-semibold leading-none tracking-[-0.04em] text-[#2d3140]`}
          >
            {item.rating}
          </span>

          <span className="text-[18px] leading-none text-[#a0a5b3]">
            {ratingSuffix}
          </span>
        </div>
      </div>
    </article>
  );
}