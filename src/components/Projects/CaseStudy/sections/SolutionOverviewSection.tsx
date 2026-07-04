"use client";

import type { SolutionOverviewData } from "@/content/case-studies/types";
import { ProductSection } from "../primitives/ProductSection";
import { Reveal } from "../primitives/Reveal";

interface SolutionOverviewSectionProps {
  data: SolutionOverviewData;
}

export function SolutionOverviewSection({ data }: SolutionOverviewSectionProps) {
  return (
    <ProductSection
      id="solution"
      variant="gradient"
      eyebrow="Solution"
      headline="A system, not a pile of features."
      subheadline="Each capability earns its place by solving part of the original constraint."
      align="center"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.cards.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.06}>
            <article className="group h-full rounded-3xl border border-white/[0.08] bg-white/[0.04] p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/25 hover:bg-white/[0.065]">
              <span className="mb-8 flex size-10 items-center justify-center rounded-full bg-white text-sm font-bold text-black">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-blue-200">
                {card.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/55">
                {card.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </ProductSection>
  );
}
