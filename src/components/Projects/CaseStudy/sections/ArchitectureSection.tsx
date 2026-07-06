"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BrainCircuit, CheckCircle2, GitBranch, ShieldCheck } from "lucide-react";
import type { AIPipelineData, ArchitectureData, SecurityCard } from "@/content/projects/types";
import { ProductSection } from "../primitives/ProductSection";
import { Reveal } from "../primitives/Reveal";
import { cn } from "@/components/ui/utils";

interface ArchitectureSectionProps {
  data: ArchitectureData;
  security: SecurityCard[];
  aiPipeline?: AIPipelineData;
}

export function ArchitectureSection({
  data,
  security = [],
  aiPipeline,
}: ArchitectureSectionProps) {
  const [activeId, setActiveId] = useState(data.layers[0]?.id ?? "");
  const activeLayer = data.layers.find((layer) => layer.id === activeId) ?? data.layers[0];
  const pipelineBlocks = aiPipeline?.blocks.slice(0, 4) ?? [];

  return (
    <ProductSection
      id="architecture"
      variant="spotlight"
      eyebrow={data.eyebrow}
      align="center"
      containerClassName="max-w-[1120px]"
    >
      <div className="grid gap-6 text-left lg:grid-cols-[340px_1fr] lg:gap-8">
        <div className="rounded-[2rem] border border-white/[0.08] bg-black/38 p-4 md:p-5">
          <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-white/70">
            <GitBranch className="size-4 text-blue-200" />
            {data.layersNavLabel}
          </div>
          <div className="grid gap-2">
            {data.layers.map((layer, index) => {
              const active = activeId === layer.id;
              return (
                <button
                  key={layer.id}
                  type="button"
                  onClick={() => setActiveId(layer.id)}
                  onMouseEnter={() => setActiveId(layer.id)}
                  onFocus={() => setActiveId(layer.id)}
                  className={cn(
                    "grid grid-cols-[34px_1fr] items-center gap-3 rounded-2xl border px-3 py-3 text-left transition-all",
                    active
                      ? "border-white/28 bg-white text-black"
                      : "border-white/[0.07] bg-white/[0.025] text-white/55 hover:bg-white/[0.055] hover:text-white"
                  )}
                  aria-pressed={active}
                >
                  <span
                    className={cn(
                      "flex size-8 items-center justify-center rounded-full text-xs font-bold",
                      active ? "bg-black text-white" : "bg-white/8 text-white/38"
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold">{layer.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <motion.article
          key={activeLayer?.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.24 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.045] p-6 md:p-8"
        >
          <div className="absolute right-0 top-0 size-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-blue-500/12 blur-3xl" />
          {activeLayer && (
            <div className="relative z-10">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-200/55">
                {data.selectedLayerLabel}
              </p>
              <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                {activeLayer.panel.title}
              </h3>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/62 md:text-lg">
                {activeLayer.panel.why}
              </p>
              <ul className="mt-7 grid gap-3 md:grid-cols-3">
                {activeLayer.panel.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 rounded-2xl border border-white/[0.06] bg-black/24 p-4 text-sm leading-relaxed text-white/62"
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-blue-200" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.article>
      </div>

      {(security.length > 0 || pipelineBlocks.length > 0) && (
        <Reveal>
          <div className="mt-8 grid gap-4 text-left md:grid-cols-2">
            {security.length > 0 && (
              <details className="group rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-5 open:bg-white/[0.04]">
                <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-semibold text-white">
                  <ShieldCheck className="size-4 text-emerald-200" /> {data.securityPanelTitle}
                </summary>
                <div className="mt-5 grid gap-3">
                  {security.slice(0, 4).map((card) => (
                    <div key={card.title} className="rounded-2xl border border-white/[0.06] bg-black/24 p-3">
                      <p className="text-sm font-semibold text-white">{card.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-white/48">{card.description}</p>
                    </div>
                  ))}
                </div>
              </details>
            )}

            {pipelineBlocks.length > 0 && (
              <details className="group rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-5 open:bg-white/[0.04]">
                <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-semibold text-white">
                  <BrainCircuit className="size-4 text-blue-200" /> {data.aiFlowPanelTitle}
                </summary>
                <div className="mt-5 grid gap-3">
                  {pipelineBlocks.map((block, index) => (
                    <div key={block.id} className="rounded-2xl border border-white/[0.06] bg-black/24 p-3">
                      <p className="text-sm font-semibold text-white">
                        {String(index + 1).padStart(2, "0")} · {block.label}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-white/48">{block.content}</p>
                    </div>
                  ))}
                </div>
              </details>
            )}
          </div>
        </Reveal>
      )}
    </ProductSection>
  );
}
