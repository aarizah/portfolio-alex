"use client";

import { ShieldCheck } from "lucide-react";
import type { SecurityCard } from "@/content/case-studies/types";
import { ProductSection } from "../primitives/ProductSection";
import { Reveal } from "../primitives/Reveal";

interface SecuritySectionProps {
  cards: SecurityCard[];
}

export function SecuritySection({ cards }: SecuritySectionProps) {
  return (
    <ProductSection
      id="security"
      variant="default"
      eyebrow="Security"
      headline="Trust is part of the product."
      subheadline="Security is not a footer note. It changes architecture, data flow, and user confidence."
      align="center"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.08}>
            <article className="h-full rounded-3xl border border-white/[0.08] bg-white/[0.035] p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/20 hover:bg-white/[0.06]">
              <div className="mb-5 flex size-11 items-center justify-center rounded-2xl border border-emerald-300/15 bg-emerald-400/10">
                <ShieldCheck className="size-5 text-emerald-200" />
              </div>
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{card.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </ProductSection>
  );
}
