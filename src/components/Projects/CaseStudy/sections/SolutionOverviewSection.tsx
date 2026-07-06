"use client";

import { ArrowDown, CheckCircle2 } from "lucide-react";
import type {
  FeatureWalkthroughData,
  SolutionOverviewData,
} from "@/content/projects/types";
import { ProductSection } from "../primitives/ProductSection";
import { Reveal } from "../primitives/Reveal";

interface SolutionOverviewSectionProps {
  data: SolutionOverviewData;
  walkthrough: FeatureWalkthroughData;
}

export function SolutionOverviewSection({
  data,
  walkthrough,
}: SolutionOverviewSectionProps) {
  const journey = walkthrough.items;
  const capabilities = data.cards.slice(0, 6);

  return (
    <ProductSection
      id="solution"
      variant="gradient"
      eyebrow={data.eyebrow}
      headline={data.headline}
      subheadline={data.subheadline}
      align="center"
      containerClassName="max-w-[1040px]"
    >
      {journey.length > 0 && (
        <div className="mx-auto max-w-3xl text-left">
          {journey.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.05}>
              <article className="relative grid gap-4 border-l border-white/[0.12] pb-8 pl-6 last:pb-0 md:grid-cols-[150px_1fr] md:gap-8">
                <div className="absolute -left-[17px] top-0 flex size-8 items-center justify-center rounded-full border border-blue-300/20 bg-blue-500 text-xs font-bold text-white shadow-[0_0_30px_rgba(59,130,246,0.28)]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-blue-100">{item.label}</p>
                  {index < journey.length - 1 && (
                    <ArrowDown className="mt-4 hidden size-4 text-white/18 md:block" />
                  )}
                </div>
                <p className="text-base leading-relaxed text-white/62">{item.explanation}</p>
              </article>
            </Reveal>
          ))}
        </div>
      )}

      {capabilities.length > 0 && (
        <Reveal delay={0.18}>
          <div className="mx-auto mt-12 max-w-4xl rounded-[2rem] border border-white/[0.08] bg-black/28 p-5 text-left md:p-7">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/32">
              {data.capabilitiesLabel}
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              {capabilities.map((card) => (
                <div
                  key={card.title}
                  className="flex gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-blue-200/80" />
                  <div>
                    <h3 className="text-sm font-semibold text-white">{card.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/48">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      )}
    </ProductSection>
  );
}
