import { BrainCircuit, ChevronRight } from "lucide-react";
import type { AIPipelineData } from "@/content/case-studies/types";
import { ProductSection } from "../primitives/ProductSection";
import { Reveal } from "../primitives/Reveal";

interface AIPipelineSectionProps {
  data: AIPipelineData;
}

export function AIPipelineSection({ data }: AIPipelineSectionProps) {
  return (
    <ProductSection
      id="ai-pipeline"
      variant="gradient"
      eyebrow="AI flow"
      headline="From raw input to useful output."
      subheadline="A good AI case study explains the pipeline, not just the model name."
      align="center"
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {data.blocks.map((block, index) => (
          <Reveal key={block.id} delay={index * 0.08}>
            <article className="relative h-full rounded-3xl border border-white/[0.08] bg-white/[0.04] p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/25 hover:bg-white/[0.065]">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-black/30">
                  <BrainCircuit className="size-5 text-blue-300" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white">{block.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{block.content}</p>
              {index < data.blocks.length - 1 && (
                <ChevronRight className="absolute -right-3 top-1/2 hidden size-6 -translate-y-1/2 text-white/20 xl:block" />
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </ProductSection>
  );
}
