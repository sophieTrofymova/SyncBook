type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  actionText: string;
};

export function SectionHeader({
  eyebrow,
  title,
  actionText,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
      <div>
        <p className="text-[18px] font-medium uppercase tracking-[-0.03em] text-[#4B74FF]">
          {eyebrow}
        </p>

        <h2 className="mt-3 text-[44px] font-medium leading-[1.04] tracking-[-0.05em] text-[#232634] md:text-[56px]">
          {title}
        </h2>
      </div>

      <button
        type="button"
        className="rounded-full border border-[#d6dae5] bg-[#f4f4f7] px-8 py-5 text-[18px] font-medium tracking-[-0.02em] text-[#2f3443] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] transition-all duration-300 hover:bg-white/70"
      >
        {actionText}
      </button>
    </div>
  );
}