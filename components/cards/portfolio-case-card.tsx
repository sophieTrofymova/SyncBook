import { embossedPaperCardStyle } from "@/lib/ui-styles";

type PortfolioCaseCardProps = {
  item: {
    title: string;
    image: string;
    alt: string;
  };
};

export function PortfolioCaseCard({ item }: PortfolioCaseCardProps) {
  return (
    <article
      className="
        group flex h-[540px] w-[392px] shrink-0 flex-col overflow-hidden
        rounded-[40px] border border-white/70 px-8 pt-12

        transition-all duration-300 ease-out
        hover:translate-y-[2px]
        hover:scale-[0.995]
        hover:shadow-[inset_0_8px_20px_rgba(40,47,70,0.10),inset_0_-2px_4px_rgba(255,255,255,0.9),0_8px_18px_rgba(40,47,70,0.08)]
      "
      style={embossedPaperCardStyle}
    >
      <h3 className="mx-auto max-w-[300px] text-center text-[26px] font-medium leading-[1.22] tracking-[-0.04em] text-[#2a2e3c]">
        {item.title}
      </h3>

      <div className="mt-auto flex h-[380px] items-end justify-center overflow-hidden">
        <img
          src={item.image}
          alt={item.alt}
          className="max-h-[340px] w-auto object-contain transition-transform duration-500 group-hover:scale-[0.98]"
        />
      </div>
    </article>
  );
}