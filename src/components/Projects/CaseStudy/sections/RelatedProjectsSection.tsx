"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CaseStudyMeta, RelatedSectionData } from "@/content/projects/types";
import { ProductSection } from "../primitives/ProductSection";
import { Reveal } from "../primitives/Reveal";

interface RelatedProjectsSectionProps {
  copy: RelatedSectionData;
  projects: CaseStudyMeta[];
}

function shortTitle(title: string) {
  const normalized = title
    .replace(/\u00e2\u20ac[\u201c\u201d]|\u00c3\u00a2\u00e2\u201a\u00ac\u00e2\u20ac[\u009c\u009d]|[–—]/g, "—")
    .replace(/\s+-\s+/g, " — ");
  const [name] = normalized.split(/\s+(?:—|–|-)\s+/, 2);
  return name || normalized;
}

export function RelatedProjectsSection({ copy, projects }: RelatedProjectsSectionProps) {
  if (projects.length === 0) return null;

  return (
    <ProductSection
      variant="dark"
      eyebrow={copy.eyebrow}
      headline={copy.headline}
      align="center"
      className="!pb-28"
    >
      <div className="mx-auto grid max-w-3xl gap-3">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.08}>
            <Link
              href={`/projects/${project.slug}`}
              className="group flex items-center justify-between gap-6 rounded-3xl border border-purple-300/[0.10] bg-white/[0.035] p-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-pink-300/25 hover:bg-white/[0.06] md:p-6"
            >
              <div>
                <p className="text-lg font-semibold text-white transition-colors group-hover:text-purple-100">
                  {shortTitle(project.title)}
                </p>
                <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-white/45">
                  {project.tagline}
                </p>
              </div>
              <ArrowRight className="size-5 shrink-0 text-white/35 transition-all group-hover:translate-x-1 group-hover:text-pink-200" />
            </Link>
          </Reveal>
        ))}
      </div>
    </ProductSection>
  );
}