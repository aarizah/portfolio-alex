"use client";

import type { TechStackItem } from "@/content/projects/types";
import { ProductSection } from "../primitives/ProductSection";

interface TechStackSectionProps {
  items: TechStackItem[];
}

export function TechStackSection({ items }: TechStackSectionProps) {
  return (
    <ProductSection
      id="stack"
      variant="default"
      eyebrow="Stack"
      headline="Tools chosen for the job."
      subheadline="Technology is listed last on purpose: it supports the product and architecture decisions, not the other way around."
      align="center"
    >
      <div className="flex flex-wrap justify-center gap-3">
        {items.map((item) => (
          <span
            key={item.name}
            className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-2.5 text-sm font-medium text-white/65 transition-colors hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
          >
            {item.name}
          </span>
        ))}
      </div>
    </ProductSection>
  );
}

