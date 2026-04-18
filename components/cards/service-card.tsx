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
      className="group flex h-[464px] w-[373px] shrink-0 flex-col rounded-[36px] border border-white/70 p-8"
      style={embossedPaperCardStyle}
    >
      <div className="flex justify-start">
        <img
          src={item.image}
          alt={item.alt}
          className="h-[159px] w-[159px] object-contain transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <h3 className="mt-8 max-w-[260px] text-[28px] font-medium leading-[1.1] tracking-[-0.04em] text-[#2a2e3c]">
        {item.title}
      </h3>

      <p className="mt-10 max-w-[300px] text-[16px] leading-[1.5] text-[#7b8191]">
        {item.description}
      </p>
    </article>
  );
}