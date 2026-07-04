import type { CaseStudy, CaseStudyMeta } from "@/content/case-studies/types";
import {
  getAllCaseStudies,
  getAllCaseStudySlugs,
  getCaseStudyFromRegistry,
} from "@/content/case-studies/registry";

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return getCaseStudyFromRegistry(slug);
}

export function getAllSlugs(): string[] {
  return getAllCaseStudySlugs();
}

export function getRelatedCaseStudies(slugs: string[]): CaseStudyMeta[] {
  return slugs
    .map((slug) => getCaseStudyFromRegistry(slug)?.meta)
    .filter((meta): meta is CaseStudyMeta => meta !== undefined);
}

export function getCaseStudyPreviews() {
  return getAllCaseStudies().map((cs) => ({
    slug: cs.meta.slug,
    title: cs.meta.title,
    description: cs.meta.tagline,
    image: cs.meta.ogImage,
    status: cs.meta.status,
    metrics: cs.sections.results.slice(0, 3).map((r) => ({
      label: r.label,
      value: r.value,
    })),
    technologies: cs.sections.techStack.map((t) => t.name),
    github: cs.sections.cta.github,
    demo: cs.sections.cta.demo,
  }));
}
