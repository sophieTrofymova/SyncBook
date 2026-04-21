import { embossedPaperCardStyle } from "@/lib/ui-styles";

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
      className="group flex h-[468px] w-[392px] shrink-0 flex-col rounded-[34px] border border-white/70 px-8 pb-8 pt-7"
      style={{
        ...embossedPaperCardStyle,
        boxShadow: `
          inset 0 1px 0 rgba(255,255,255,0.92),
          0 12px 24px rgba(100, 108, 140, 0.06),
          0 24px 48px rgba(100, 108, 140, 0.08)
        `,
      }}
    >
      <div className="flex justify-start">
        <img
          src={item.image}
          alt={item.alt}
          className="h-[156px] w-[156px] object-contain transition-transform duration-500 group-hover:translate-y-[-2px] group-hover:scale-[1.02]"
        />
      </div>

      <h3 className="mt-7 max-w-[270px] text-[28px] font-medium leading-[1.08] tracking-[-0.045em] text-[#2c3140]">
        {item.title}
      </h3>

      <p className="mt-8 max-w-[295px] text-[16px] leading-[1.55] tracking-[-0.015em] text-[#7f8595]">
        {item.description}
      </p>
    </article>
  );
}