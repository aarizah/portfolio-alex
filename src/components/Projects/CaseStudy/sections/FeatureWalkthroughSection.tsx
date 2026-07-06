"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { FeatureWalkthroughData } from "@/content/projects/types";
import { ProductSection } from "../primitives/ProductSection";
import { cn } from "@/components/ui/utils";

interface FeatureWalkthroughSectionProps {
  data: FeatureWalkthroughData;
}

export function FeatureWalkthroughSection({ data }: FeatureWalkthroughSectionProps) {
  const [activeId, setActiveId] = useState(data.items[0]?.id ?? "");
  const active = data.items.find((item) => item.id === activeId) ?? data.items[0];
  const activeIndex = Math.max(0, data.items.findIndex((item) => item.id === activeId));

  if (!active) return null;

  return (
    <ProductSection
      id="walkthrough"
      variant="default"
      eyebrow="Product walkthrough"
      headline="The experience, broken into decisions."
      subheadline="A portfolio case study should not only show screens. It should explain why each interaction exists."
      align="center"
      className="!pb-10"
    >
      <div className="grid grid-cols-1 gap-8 text-left lg:grid-cols-[280px_1fr] lg:gap-14">
        <nav
          aria-label="Feature walkthrough"
          className="lg:sticky lg:top-32"
        >
          <div className="mb-4 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
            <span>Feature map</span>
            <span>{String(activeIndex + 1).padStart(2, "0")} / {String(data.items.length).padStart(2, "0")}</span>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible scrollbar-hide">
            {data.items.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                className={cn(
                  "min-w-[220px] rounded-2xl border px-5 py-4 text-left text-sm font-semibold transition-all duration-200 lg:min-w-0",
                  activeId === item.id
                    ? "border-white/25 bg-white text-black shadow-[0_18px_50px_rgba(255,255,255,0.08)]"
                    : "border-white/[0.08] bg-white/[0.03] text-white/55 hover:border-white/16 hover:bg-white/[0.06] hover:text-white"
                )}
                aria-pressed={activeId === item.id}
              >
                <span className="mr-3 text-xs opacity-45">{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </button>
            ))}
          </div>
        </nav>

        <div className="min-h-[440px]">
          <AnimatePresence mode="wait">
            <motion.article
              key={active.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-6"
            >
              <div className="overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#101010] shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
                <Image
                  src={active.screenshot}
                  alt={`${active.label} interface screenshot`}
                  width={1600}
                  height={1000}
                  sizes="(min-width: 1024px) 860px, 100vw"
                  className="w-full object-cover"
                />
              </div>
              <div className="max-w-2xl rounded-3xl border border-white/[0.08] bg-white/[0.035] p-6">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-200/55">
                  Interaction rationale
                </p>
                <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                  {active.label}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/58">
                  {active.explanation}
                </p>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </ProductSection>
  );
}

