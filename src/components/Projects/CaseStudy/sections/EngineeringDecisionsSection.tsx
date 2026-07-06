"use client";

import { Scale, XCircle } from "lucide-react";
import type { EngineeringDecisionsData } from "@/content/projects/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProductSection } from "../primitives/ProductSection";

interface EngineeringDecisionsSectionProps {
  data: EngineeringDecisionsData;
}

export function EngineeringDecisionsSection({ data }: EngineeringDecisionsSectionProps) {
  return (
    <ProductSection
      id="engineering"
      variant="gradient"
      eyebrow={data.eyebrow}
      align="center"
      containerClassName="max-w-[900px]"
    >
      <Accordion type="single" collapsible className="w-full text-left">
        {data.items.map((decision, index) => (
          <AccordionItem
            id={`decision-${decision.id}`}
            key={decision.id}
            value={decision.id}
            className="mb-3 scroll-mt-36 overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] px-5 data-[state=open]:bg-white/[0.055]"
          >
            <AccordionTrigger className="gap-4 py-6 text-left text-white hover:no-underline">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/8 text-xs font-bold text-white/45">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-lg font-semibold md:text-xl">{decision.title}</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-4 pb-5 text-sm">
                <div className="rounded-2xl border border-blue-300/10 bg-blue-400/[0.04] p-5">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-200/60">
                    {data.labels.why}
                  </p>
                  <p className="leading-relaxed text-white/72">{decision.why}</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/[0.06] bg-black/24 p-5">
                    <p className="mb-2 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                      <Scale className="size-3.5" /> {data.labels.tradeoff}
                    </p>
                    <p className="leading-relaxed text-white/58">{decision.tradeoffs}</p>
                  </div>
                  <div className="rounded-2xl border border-white/[0.06] bg-black/24 p-5">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                      {data.labels.alternative}
                    </p>
                    <p className="leading-relaxed text-white/58">{decision.alternatives}</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-red-400/10 bg-red-950/10 p-5">
                  <p className="mb-2 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-red-200/50">
                    <XCircle className="size-3.5" /> {data.labels.rejected}
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
