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
        group flex h-[550px] w-[452px] shrink-0 flex-col
        rounded-[34px] border border-white/70
        px-8 pb-8 pt-7
      "
      style={embossedCardStyle}
    >
      <div className="flex justify-start">
        <img
          src={item.image}
          alt={item.alt}
          className="h-[186px] w-[170px] object-contain transition-transform duration-500 group-hover:translate-y-[-2px] group-hover:scale-[1.02]"
        />
      </div>

      <h3 className="mt-7 max-w-[360px] text-[38px] font-medium leading-[1.08] tracking-[-0.045em] text-[#2c3140]">
        {item.title}
      </h3>

      <p className="mt-8 max-w-[385px] text-[23px] leading-[1.55] tracking-[-0.015em] text-[#7f8595]">
        {item.description}
      </p>
    </article>
  );
}