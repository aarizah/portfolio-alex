"use client";

import { CheckCircle2, Lightbulb, Wrench } from "lucide-react";
import type { LessonsLearnedData } from "@/content/projects/types";
import { ProductSection } from "../primitives/ProductSection";
import { Reveal } from "../primitives/Reveal";

const groupIcons = [CheckCircle2, Wrench, Lightbulb];

interface LessonsLearnedSectionProps {
  data: LessonsLearnedData;
}

export function LessonsLearnedSection({ data }: LessonsLearnedSectionProps) {
  return (
    <ProductSection
      id="lessons"
      variant="dark"
      eyebrow={data.eyebrow}
      align="center"
      containerClassName="max-w-[940px]"
    >
      <Reveal>
        <div className="grid gap-4 text-left">
          {data.groups.map((group, index) => {
            const Icon = groupIcons[index] ?? Lightbulb;

            return (
              <article
                key={group.title}
                className="rounded-[2rem] border border-white/[0.08] bg-white/[0.03] p-5 md:p-6"
              >
                <div className="grid gap-5 md:grid-cols-[190px_1fr] md:items-start">
                  <div>
                    <div className="mb-4 flex size-10 items-center justify-center rounded-2xl border border-white/10 bg-black/30">
                      <Icon className="size-4 text-blue-200" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/42">{group.description}</p>
                  </div>
                  <ul className="grid gap-3">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-2xl border border-white/[0.06] bg-black/20 p-4 text-sm leading-relaxed text-white/60"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </Reveal>
    </ProductSection>
  );
}
