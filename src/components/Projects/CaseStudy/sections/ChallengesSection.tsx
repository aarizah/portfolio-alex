"use client";

import { ArrowRight } from "lucide-react";
import type { ChallengeStep } from "@/content/projects/types";
import { ProductSection } from "../primitives/ProductSection";
import { Reveal } from "../primitives/Reveal";

interface ChallengesSectionProps {
  steps: ChallengeStep[];
}

export function ChallengesSection({ steps }: ChallengesSectionProps) {
  return (
    <ProductSection
      id="challenges"
      variant="gradient"
      eyebrow="Challenges"
      headline="Obstacles reveal the real engineering."
      subheadline="The value is not that everything worked. The value is how decisions were made when constraints appeared."
      align="center"
    >
      <div className="mx-auto grid max-w-5xl gap-4 text-left">
        {steps.map((step, i) => (
          <Reveal key={`${step.challenge}-${i}`} delay={i * 0.08}>
            <article className="grid gap-5 rounded-3xl border border-white/[0.08] bg-white/[0.035] p-5 md:grid-cols-[1fr_auto_1fr] md:p-6">
              <div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                  Challenge
                </p>
                <h3 className="text-lg font-semibold text-white">{step.challenge}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">{step.problem}</p>
              </div>
              <div className="hidden items-center text-white/20 md:flex">
                <ArrowRight className="size-5" />
              </div>
              <div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-200/55">
                  Decision ? Result
                </p>
                <p className="text-sm leading-relaxed text-white/60">{step.decision}</p>
                <p className="mt-3 text-sm font-semibold text-blue-200">{step.result}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </ProductSection>
  );
}

