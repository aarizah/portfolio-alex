"use client";

import { Scale, XCircle } from "lucide-react";
import type { EngineeringDecision } from "@/content/case-studies/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProductSection } from "../primitives/ProductSection";

interface EngineeringDecisionsSectionProps {
  decisions: EngineeringDecision[];
}

export function EngineeringDecisionsSection({
  decisions,
}: EngineeringDecisionsSectionProps) {
  return (
    <ProductSection
      id="engineering"
      variant="gradient"
      eyebrow="Engineering decisions"
      headline="Tradeoffs beat buzzwords."
      subheadline="This is where the case study proves seniority: the solution, the cost, the alternative, and why it was rejected."
      align="center"
    >
      <Accordion type="single" collapsible className="mx-auto w-full max-w-4xl text-left">
        {decisions.map((decision, index) => (
          <AccordionItem
            key={decision.id}
            value={decision.id}
            className="mb-3 overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.035] px-5 data-[state=open]:bg-white/[0.055]"
          >
            <AccordionTrigger className="gap-4 py-6 text-left text-white hover:no-underline">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/8 text-xs font-bold text-white/45">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-lg font-semibold md:text-xl">{decision.title}</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-4 pb-5 text-sm md:grid-cols-2">
                <div className="rounded-2xl border border-white/[0.06] bg-black/28 p-5 md:col-span-2">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-200/55">
                    Why
                  </p>
                  <p className="leading-relaxed text-white/72">{decision.why}</p>
                </div>
                <div className="rounded-2xl border border-white/[0.06] bg-black/28 p-5">
                  <p className="mb-2 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                    <Scale className="size-3.5" /> Tradeoffs
                  </p>
                  <p className="leading-relaxed text-white/58">{decision.tradeoffs}</p>
                </div>
                <div className="rounded-2xl border border-white/[0.06] bg-black/28 p-5">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                    Alternatives
                  </p>
                  <p className="leading-relaxed text-white/58">{decision.alternatives}</p>
                </div>
                <div className="rounded-2xl border border-red-400/10 bg-red-950/10 p-5 md:col-span-2">
                  <p className="mb-2 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-red-200/50">
                    <XCircle className="size-3.5" /> Rejected because
                  </p>
                  <p className="leading-relaxed text-white/58">{decision.rejected}</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </ProductSection>
  );
}
