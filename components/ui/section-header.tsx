type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  actionText?: string;
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

        <h2 className="mt-3 text-[44px] font-medium leading-[1.02] tracking-[-0.05em] text-[#232634] md:text-[56px]">
          {title}
        </h2>
      </div>

      {actionText ? (
        <button
          className="inline-flex h-[68px] items-center justify-center rounded-full border border-[#cfd3dd] bg-[#f1f2f6] px-9 text-[22px] font-medium tracking-[-0.03em] text-[#2c3140] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_24px_rgba(72,82,110,0.08)] transition-all duration-300 hover:translate-y-[-1px] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_14px_30px_rgba(72,82,110,0.12)]"
          type="button"
        >
          {actionText}
        </button>
      ) : null}
    </div>
  );
}