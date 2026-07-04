"use client";

import Image from "next/image";
import type { ProblemData } from "@/content/case-studies/types";
import { ProductSection } from "../primitives/ProductSection";
import { Reveal, ScaleReveal } from "../primitives/Reveal";

interface ProblemSectionProps {
  data: ProblemData;
}

export function ProblemSection({ data }: ProblemSectionProps) {
  const lead = data.paragraphs[0] ?? "";
  const rest = data.paragraphs.slice(1);

  return (
    <ProductSection
      id="problem"
      variant="fullscreen"
      align="center"
      className="bg-[radial-gradient(circle_at_50%_20%,rgba(239,68,68,0.10),transparent_30%),#000]"
    >
      <Reveal className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
        <p className="cs-eyebrow mb-6">Problem</p>
        <h2 className="cs-headline-large text-balance text-white">
          {lead}
        </h2>
      </Reveal>

      <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        {data.illustration && (
          <ScaleReveal className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.035] p-2 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
              <Image
                src={data.illustration}
                alt="Problem context illustration"
                width={1400}
                height={900}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="w-full rounded-[1.5rem] object-cover opacity-85"
              />
            </div>
          </ScaleReveal>
        )}

        {rest.length > 0 && (
          <Reveal className="order-1 text-left lg:order-2">
            <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.035] p-6 md:p-8">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
                Why it matters
              </p>
              <div className="grid gap-5">
                {rest.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-relaxed text-white/58 md:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </ProductSection>
  );
}
