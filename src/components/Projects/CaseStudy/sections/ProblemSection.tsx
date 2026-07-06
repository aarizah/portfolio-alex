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
      className="bg-[radial-gradient(circle_at_44%_18%,rgba(96,165,250,0.10),transparent_34%),radial-gradient(circle_at_70%_20%,rgba(168,85,247,0.09),transparent_30%),radial-gradient(circle_at_82%_70%,rgba(236,72,153,0.05),transparent_28%),#000]"
      containerClassName="max-w-[980px]"
    >
      <Reveal>
        <div className="mx-auto max-w-4xl text-center">
          <p className="cs-eyebrow mb-6 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            {data.eyebrow}
          </p>
          <h2 className="text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-white md:text-4xl lg:text-[3rem]">
            {data.headline}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/58 md:text-lg">
            {data.lead}
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="mx-auto mt-10 max-w-3xl rounded-[2rem] border border-purple-300/[0.10] bg-white/[0.035] p-5 text-left shadow-[0_28px_90px_rgba(168,85,247,0.08)] md:p-7">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-2xl border border-purple-300/15 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10">
              <Search className="size-4 text-purple-200" />
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
