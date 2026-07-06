"use client";

import { BrainCircuit, Database, LockKeyhole, Wrench } from "lucide-react";
import type {
  AIPipelineData,
  ArchitectureData,
  ChallengeStep,
  EngineeringDecision,
  LessonsLearnedData,
  SecurityCard,
} from "@/content/projects/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProductSection } from "../primitives/ProductSection";

interface TechnicalDeepDiveSectionProps {
  architecture: ArchitectureData;
  aiPipeline?: AIPipelineData;
  engineeringDecisions: EngineeringDecision[];
  security: SecurityCard[];
  challenges: ChallengeStep[];
  lessonsLearned: LessonsLearnedData;
}

function SectionLabel({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-200/60">
      {icon}
      {label}
    </span>
  );
}

export function TechnicalDeepDiveSection({
  architecture,
  aiPipeline,
  engineeringDecisions,
  security,
  challenges,
  lessonsLearned,
}: TechnicalDeepDiveSectionProps) {
  return (
    <ProductSection
      id="technical-deep-dive"
      variant="dark"
      eyebrow="Technical appendix"
      headline="More depth, only when you want it."
      subheadline="The main page stays scannable for recruiters. This appendix keeps the implementation details available for technical reviewers."
      align="center"
    >
      <Accordion type="multiple" className="mx-auto grid w-full max-w-5xl gap-3 text-left">
        <AccordionItem value="architecture" className="rounded-3xl border border-white/[0.08] bg-white/[0.035] px-5">
          <AccordionTrigger className="py-5 text-left text-white hover:no-underline">
            <SectionLabel icon={<Database className="size-4" />} label="Architecture notes" />
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-3 pb-5 md:grid-cols-2">
              {architecture.layers.map((layer) => (
                <article key={layer.id} className="rounded-2xl border border-white/[0.06] bg-black/30 p-5">
                  <h3 className="text-base font-semibold text-white">{layer.panel.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/58">{layer.panel.why}</p>
                  <ul className="mt-4 grid gap-2">
                    {layer.panel.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2 text-sm text-white/52">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-300" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {aiPipeline && (
          <AccordionItem value="ai-pipeline" className="rounded-3xl border border-white/[0.08] bg-white/[0.035] px-5">
            <AccordionTrigger className="py-5 text-left text-white hover:no-underline">
              <SectionLabel icon={<BrainCircuit className="size-4" />} label="AI / data flow" />
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-3 pb-5 md:grid-cols-2 lg:grid-cols-3">
                {aiPipeline.blocks.map((block) => (
                  <article key={block.id} className="rounded-2xl border border-white/[0.06] bg-black/30 p-5">
                    <h3 className="text-base font-semibold text-white">{block.label}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/56">{block.content}</p>
                  </article>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        )}

        <AccordionItem value="decisions" className="rounded-3xl border border-white/[0.08] bg-white/[0.035] px-5">
          <AccordionTrigger className="py-5 text-left text-white hover:no-underline">
            <SectionLabel icon={<Wrench className="size-4" />} label="Tradeoffs and decisions" />
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-3 pb-5">
              {engineeringDecisions.map((decision) => (
                <article key={decision.id} className="rounded-2xl border border-white/[0.06] bg-black/30 p-5">
                  <h3 className="text-base font-semibold text-white">{decision.title}</h3>
                  <div className="mt-3 grid gap-3 text-sm leading-relaxed md:grid-cols-2">
                    <p className="text-white/64"><span className="font-semibold text-white/80">Why:</span> {decision.why}</p>
                    <p className="text-white/52"><span className="font-semibold text-white/72">Tradeoff:</span> {decision.tradeoffs}</p>
                    <p className="text-white/52"><span className="font-semibold text-white/72">Alternative:</span> {decision.alternatives}</p>
                    <p className="text-white/52"><span className="font-semibold text-white/72">Rejected:</span> {decision.rejected}</p>
                  </div>
                </article>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="trust" className="rounded-3xl border border-white/[0.08] bg-white/[0.035] px-5">
          <AccordionTrigger className="py-5 text-left text-white hover:no-underline">
            <SectionLabel icon={<LockKeyhole className="size-4" />} label="Trust, constraints, and next iteration" />
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-4 pb-5 lg:grid-cols-3">
              <div className="rounded-2xl border border-white/[0.06] bg-black/30 p-5">
                <h3 className="text-base font-semibold text-white">Security model</h3>
                <ul className="mt-4 grid gap-3">
                  {security.map((card) => (
                    <li key={card.title} className="text-sm leading-relaxed text-white/56">
                      <span className="font-semibold text-white/78">{card.title}:</span> {card.description}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-white/[0.06] bg-black/30 p-5">
                <h3 className="text-base font-semibold text-white">Known constraints</h3>
                <ul className="mt-4 grid gap-3">
                  {challenges.map((step) => (
                    <li key={step.challenge} className="text-sm leading-relaxed text-white/56">
                      <span className="font-semibold text-white/78">{step.challenge}:</span> {step.problem}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-white/[0.06] bg-black/30 p-5">
                <h3 className="text-base font-semibold text-white">Next improvements</h3>
                <ul className="mt-4 grid gap-3">
                  {(lessonsLearned.groups[1]?.items ?? []).map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-relaxed text-white/56">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </ProductSection>
  );
}

