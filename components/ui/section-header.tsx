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
        className="
          flex h-[64px] w-[220px] items-center justify-center
          rounded-full border border-[#d6dae5]

          text-[20px] font-medium tracking-[-0.02em]
          text-[#2f3443]

          transition-all duration-300 ease-out

          hover:text-[#4B74FF]
          hover:border-[#4B74FF]
          hover:bg-transparent
          hover:shadow-[0_0_0_4px_rgba(75,116,255,0.08)]
        "
      >
        {actionText}
      </button>
    </div>
  );
}