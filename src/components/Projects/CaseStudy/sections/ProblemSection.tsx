"use client";

import { ArrowDown, Search } from "lucide-react";
import type { ProblemData } from "@/content/projects/types";
import { ProductSection } from "../primitives/ProductSection";
import { Reveal } from "../primitives/Reveal";

interface ProblemSectionProps {
  data: ProblemData;
}

export function ProblemSection({ data }: ProblemSectionProps) {
  return (
    <ProductSection
      id="problem"
      variant="dark"
      align="left"
      className="bg-[radial-gradient(circle_at_50%_18%,rgba(59,130,246,0.10),transparent_34%),#000]"
      containerClassName="max-w-[980px]"
    >
      <Reveal>
        <div className="mx-auto max-w-4xl text-center">
          <p className="cs-eyebrow mb-6 text-blue-200/65">{data.eyebrow}</p>
          <h2 className="text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-white md:text-4xl lg:text-[3rem]">
            {data.headline}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/58 md:text-lg">
            {data.lead}
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="mx-auto mt-10 max-w-3xl rounded-[2rem] border border-white/[0.08] bg-white/[0.035] p-5 text-left md:p-7">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-2xl border border-white/10 bg-black/30">
              <Search className="size-4 text-blue-200" />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">{data.insightLabel}</p>
              <p className="text-xs text-white/38">{data.insightHelper}</p>
            </div>
          </div>

          <div className="grid gap-4">
            {data.supportingParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-white/62">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mx-auto mt-8 flex max-w-3xl items-center justify-center gap-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-white/30">
          <span>{data.bridgeBefore}</span>
          <ArrowDown className="size-4" />
          <span>{data.bridgeAfter}</span>
        </div>
      </Reveal>
    </ProductSection>
  );
}
