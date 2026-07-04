"use client";

import type { LessonsLearnedData } from "@/content/case-studies/types";
import { ProductSection } from "../primitives/ProductSection";
import { Reveal } from "../primitives/Reveal";

interface LessonsLearnedSectionProps {
  data: LessonsLearnedData;
}

function Column({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="h-full rounded-3xl border border-white/[0.08] bg-white/[0.035] p-6 text-left">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/55">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function LessonsLearnedSection({ data }: LessonsLearnedSectionProps) {
  return (
    <ProductSection
      id="lessons"
      variant="dark"
      eyebrow="Reflection"
      headline="What the project taught me."
      subheadline="The best case studies show judgment. Reflection proves the work changed the engineer, not only the repo."
      align="center"
    >
      <Reveal>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Column title="What went well" items={data.wentWell} />
          <Column title="What I'd improve" items={data.wouldImprove} />
          <Column title="What I learned" items={data.learned} />
        </div>
      </Reveal>
    </ProductSection>
  );
}
