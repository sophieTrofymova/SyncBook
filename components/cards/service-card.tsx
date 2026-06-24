import { embossedCardStyle } from "@/lib/ui-styles";

type ServiceCardProps = {
  item: {
    title: string;
    description: string;
    image: string;
    alt: string;
  };
};

export function ServiceCard({ item }: ServiceCardProps) {
  return (
    <article
      className="
        mobile-service-card
        group flex h-[420px] w-[338px] shrink-0 flex-col
        rounded-[32px] border border-white/70
        px-7 pb-7 pt-7

        md:h-[464px] md:w-[373px]
        md:rounded-[34px] md:px-9 md:pb-9 md:pt-9
      "
      style={embossedCardStyle}
    >
      <div className="flex justify-start">
        <img
          src={item.image}
          alt={item.alt}
          className="
            h-[112px] w-[112px] object-contain
            transition-transform duration-500
            group-hover:translate-y-[-2px]
            group-hover:scale-[1.02]

            md:h-[112px] md:w-[112px]
          "
        />
      </div>

      <h3
        className="
          mt-8 max-w-[280px]
          text-[22px] font-medium leading-[1.12]
          tracking-[-0.045em] text-[#2c3140]

          md:mt-[82px]
          md:max-w-[320px]
          md:text-[30px]
          md:leading-[1.08]
        "
      >
        {item.title}
      </h3>

      <p
        className="
          mt-6 max-w-[280px]
          text-[13px] leading-[1.5]
          tracking-[-0.015em] text-[#7f8595]

          md:mt-7
          md:max-w-[330px]
          md:text-[15px]
          md:leading-[1.45]
        "
      >
        {item.description}
      </p>
    </article>
  );
}