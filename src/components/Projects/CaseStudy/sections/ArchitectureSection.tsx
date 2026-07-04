"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, GitBranch } from "lucide-react";
import type { ArchitectureData } from "@/content/case-studies/types";
import { ProductSection } from "../primitives/ProductSection";
import { cn } from "@/components/ui/utils";

interface ArchitectureSectionProps {
  data: ArchitectureData;
}

export function ArchitectureSection({ data }: ArchitectureSectionProps) {
  const [activeId, setActiveId] = useState(data.layers[0]?.id ?? "");
  const activeLayer = data.layers.find((layer) => layer.id === activeId) ?? data.layers[0];
  const activeIndex = Math.max(0, data.layers.findIndex((layer) => layer.id === activeId));

  return (
    <ProductSection
      id="architecture"
      variant="spotlight"
      eyebrow="Architecture"
      headline="Make the invisible system visible."
      subheadline="Each layer has a responsibility. Click through the stack to see the tradeoffs, boundaries, and engineering intent."
      align="center"
    >
      <div className="grid grid-cols-1 gap-8 text-left lg:grid-cols-[1fr_0.92fr] lg:gap-12 lg:items-stretch">
        <div className="rounded-[2rem] border border-white/[0.08] bg-black/40 p-4 md:p-6">
          <div className="mb-6 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-white/55">
              <GitBranch className="size-4 text-blue-300" />
              System layers
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30">
              {String(activeIndex + 1).padStart(2, "0")} / {String(data.layers.length).padStart(2, "0")}
            </span>
          </div>

          <div className="flex flex-col gap-0">
            {data.layers.map((layer, index) => {
              const active = activeId === layer.id;

              return (
                <div key={layer.id} className="flex flex-col">
                  <button
                    type="button"
                    onClick={() => setActiveId(layer.id)}
                    onMouseEnter={() => setActiveId(layer.id)}
                    onFocus={() => setActiveId(layer.id)}
                    className={cn(
                      "group grid grid-cols-[42px_1fr_auto] items-center gap-4 rounded-2xl border px-4 py-4 text-left transition-all duration-200 md:px-5 md:py-5",
                      active
                        ? "border-white/30 bg-white text-black shadow-[0_18px_70px_rgba(255,255,255,0.10)]"
                        : "border-white/[0.08] bg-white/[0.035] text-white/65 hover:border-white/18 hover:bg-white/[0.06] hover:text-white"
                    )}
                    aria-pressed={active}
                  >
                    <span
                      className={cn(
                        "flex size-10 items-center justify-center rounded-full text-xs font-bold",
                        active ? "bg-black text-white" : "bg-white/8 text-white/45 group-hover:bg-white/12"
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-semibold">{layer.label}</span>
                    <span
                      className={cn(
                        "h-px w-8 transition-all",
                        active ? "bg-black/40" : "bg-white/18 group-hover:w-12 group-hover:bg-white/45"
                      )}
                    />
                  </button>
                  {index < data.layers.length - 1 && (
                    <div className="ml-[38px] h-6 w-px bg-gradient-to-b from-white/22 to-white/5" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <motion.aside
          key={activeLayer?.id}
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.28 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.045] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:p-8"
        >
          <div className="absolute right-0 top-0 size-56 translate-x-1/3 -translate-y-1/3 rounded-full bg-blue-500/14 blur-3xl" />
          {activeLayer && (
            <div className="relative z-10">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-200/55">
                Active layer
              </p>
              <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                {activeLayer.panel.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/60">
                {activeLayer.panel.why}
              </p>

              <ul className="mt-7 grid gap-3">
                {activeLayer.panel.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 rounded-2xl border border-white/[0.06] bg-black/28 p-4 text-sm leading-relaxed text-white/70"
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-blue-300" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.aside>
      </div>
    </ProductSection>
  );
}
