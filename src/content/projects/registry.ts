import type { CaseStudy } from "./types";
import { legalCopilot } from "./legal-copilot/content";
import { caloricEstimator } from "./caloric-estimator/content";
import { chatterbox } from "./chatterbox/content";

const caseStudies: Record<string, CaseStudy> = {
  [legalCopilot.meta.slug]: legalCopilot,
  [caloricEstimator.meta.slug]: caloricEstimator,
  [chatterbox.meta.slug]: chatterbox,
};

export function getCaseStudyFromRegistry(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}

export function getAllCaseStudySlugs(): string[] {
  return Object.keys(caseStudies);
}

export function getAllCaseStudies(): CaseStudy[] {
  return Object.values(caseStudies);
}
