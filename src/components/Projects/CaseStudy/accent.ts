/** Shared case-study accent. Change here — every case study uses these classes. */
export const cs = {
  eyebrow:
    "text-brand",
  titleGradient:
    "text-white",
  progress:
    "bg-brand",
  primaryCta:
    "inline-flex items-center gap-2 rounded-full bg-white px-[1.125rem] py-2.5 text-[13px] font-semibold text-black transition-transform hover:-translate-y-0.5 hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white",
  secondaryCta:
    "inline-flex items-center gap-2 rounded-full border border-white/80 bg-transparent px-[1.125rem] py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white",
  chip:
    "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] text-white/80",
  navActive:
    "bg-brand text-black shadow-[0_0_24px_rgba(232,180,74,0.28)]",
  navIdle:
    "text-white/48 hover:bg-brand/10 hover:text-white",
  cardBorder:
    "border-white/10",
  hoverBorder:
    "hover:border-brand/35",
  icon:
    "text-brand",
  glow:
    "shadow-[0_12px_34px_rgba(232,180,74,0.18)]",
} as const;
