"use client";

import { ArrowRight } from "lucide-react";
import type { ResultsData } from "@/content/projects/types";
import { ProductSection } from "../primitives/ProductSection";
import { Reveal } from "../primitives/Reveal";

interface ResultsSectionProps {
  data: ResultsData;
}

export function ResultsSection({ data }: ResultsSectionProps) {
  const supporting = data.metrics.slice(1, 4);
  const proof = data.proofChallenge;

  return (
    <ProductSection
      id="results"
      variant="dark"
      align="center"
      className="bg-[radial-gradient(circle_at_50%_24%,rgba(16,185,129,0.10),transparent_34%),#000]"
      containerClassName="max-w-[1040px]"
    >
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="cs-eyebrow mb-6 text-emerald-200/70">{data.eyebrow}</p>
          <h2 className="cs-headline text-white">{data.headline}</h2>
          <p className="cs-subheadline mt-5 text-white/56">{data.subheadline}</p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mx-auto mt-10 grid max-w-4xl gap-3 text-left md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
          {data.impactStory.map((step, index, array) => (
            <div key={step.label} className="contents">
              <article className="rounded-[2rem] border border-white/[0.08] bg-white/[0.035] p-5 md:p-6">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/32">
                  {String(index + 1).padStart(2, "0")} - {step.label}
                </p>
                <p className="text-base leading-relaxed text-white/68">{step.body}</p>
              </article>
              {index < array.length - 1 && (
                <div className="hidden items-center justify-center px-1 text-white/20 md:flex">
                  <ArrowRight className="size-5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Reveal>

      {(supporting.length > 0 || proof) && (
        <Reveal delay={0.22}>
          <div className="mx-auto mt-8 max-w-4xl rounded-[2rem] border border-white/[0.08] bg-black/30 p-5 text-left md:p-6">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/32">
              {data.supportingLabel}
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              {supporting.map((result) => (
                <div key={result.label} className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4">
                  <p className="text-sm font-semibold text-white">{result.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/34">{result.label}</p>
                  {result.description && (
                    <p className="mt-2 text-sm leading-relaxed text-white/48">
                      {result.description}
                    </p>
                  )}
                </div>
              ))}
              {proof && (
                <div className="rounded-2xl border border-emerald-300/10 bg-emerald-400/[0.035] p-4 md:col-span-2">
                  <p className="text-sm font-semibold text-white">{proof.challenge}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/52">{proof.result}</p>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      )}
    </ProductSection>
  );
}
