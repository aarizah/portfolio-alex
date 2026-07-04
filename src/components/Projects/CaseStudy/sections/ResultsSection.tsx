"use client";

import type { ResultCard } from "@/content/case-studies/types";
import { ProductSection } from "../primitives/ProductSection";
import { Reveal } from "../primitives/Reveal";

interface ResultsSectionProps {
  results: ResultCard[];
}

export function ResultsSection({ results }: ResultsSectionProps) {
  return (
    <ProductSection
      id="results"
      variant="fullscreen"
      align="center"
      className="bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.18),transparent_34%),#000]"
    >
      <Reveal className="mb-10 md:mb-12">
        <p className="cs-eyebrow mb-4">Impact</p>
        <h2 className="cs-headline text-white">Proof, not decoration.</h2>
        <p className="cs-subheadline mx-auto mt-5 max-w-3xl">
          Metrics make the story credible. Even prototype metrics clarify what improved and what still needs validation.
        </p>
      </Reveal>

      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {results.map((result, i) => (
          <Reveal key={result.label} delay={i * 0.09}>
            <article className="h-full rounded-[2rem] border border-white/[0.08] bg-white/[0.045] p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.065] md:p-7">
              <p className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                {result.value}
              </p>
              <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                {result.label}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </ProductSection>
  );
}
