"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CaseStudyMeta } from "@/content/case-studies/types";
import { ProductSection } from "../primitives/ProductSection";
import { Reveal } from "../primitives/Reveal";

interface RelatedProjectsSectionProps {
  projects: CaseStudyMeta[];
}

export function RelatedProjectsSection({ projects }: RelatedProjectsSectionProps) {
  if (projects.length === 0) return null;

  return (
    <ProductSection
      variant="dark"
      eyebrow="Keep exploring"
      headline="More case studies."
      align="center"
      className="!pb-28"
    >
      <div className="mx-auto grid max-w-3xl gap-3">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.08}>
            <Link
              href={`/projects/${project.slug}`}
              className="group flex items-center justify-between gap-6 rounded-3xl border border-white/[0.08] bg-white/[0.035] p-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300/20 hover:bg-white/[0.06] md:p-6"
            >
              <div>
                <p className="text-lg font-semibold text-white transition-colors group-hover:text-blue-200">
                  {project.title.split(" ? ")[0]}
                </p>
                <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-white/45">
                  {project.tagline}
                </p>
              </div>
              <ArrowRight className="size-5 shrink-0 text-white/35 transition-all group-hover:translate-x-1 group-hover:text-white" />
            </Link>
          </Reveal>
        ))}
      </div>
    </ProductSection>
  );
}
