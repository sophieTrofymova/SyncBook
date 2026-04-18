export const embossedPaperStyle = {
  background: `
    linear-gradient(
      to bottom,
      rgba(239,239,243,0.96) 20%,
      rgba(239,239,243,0.92) 40%,
      rgba(239,239,243,0.94) 100%
    )
  `,
  boxShadow: `
    inset 0 1px 0 rgba(255,255,255,0.7),
    0 -12px 6px rgba(255,255,255,0.8),
    0 20px 24px rgba(0, 0, 0, 0.12),
    0 34px 40px rgba(18, 20, 27, 0.1)
  `,
  backdropFilter: "blur(24px)",
  WebkitBackdropFilter: "blur(24px)",
};

export const embossedPaperCardStyle = {
  background: `
    linear-gradient(
      to bottom,
      rgba(239,239,243,0.96) 20%,
      rgba(239,239,243,0.92) 40%,
      rgba(239,239,243,0.94) 100%
    )
  `,
  boxShadow: `
    inset 0 1px 0 rgba(255,255,255,0.7),
    0 -12px 6px rgba(255,255,255,0.8),
    0 15px 20px rgba(0, 0, 0, 0.12),
    0 22px 25px rgba(2, 7, 24, 0.1)
  `,
  backdropFilter: "blur(24px)",
  WebkitBackdropFilter: "blur(24px)",
};

export const elevatedCardStyle = {
  boxShadow: `
    inset 0 1px 0 rgba(255,255,255,0.95),
    0 10px 30px rgba(31, 38, 58, 0.06),
    0 22px 40px rgba(56, 63, 88, 0.08)
  `,
};

export const blueBlockStyle = {
  background: `
    linear-gradient(135deg, #4B74FF 0%, #3D63E8 100%)
  `,
  boxShadow: `
    inset 0 1px 0 rgba(255,255,255,0.2),
    0 30px 60px rgba(60,80,180,0.25)
  `,
};

export const stepCardStyle = {
  background: "rgba(255,255,255,0.08)",
  boxShadow: `
    inset 0 1px 0 rgba(255,255,255,0.2),
    0 12px 30px rgba(0,0,0,0.15)
  `,
  backdropFilter: "blur(12px)",
};