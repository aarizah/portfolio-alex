import type { CaseStudy } from "./types";
import { legalCopilot } from "./legal-copilot/content";
import { caloricEstimator } from "./caloric-estimator/content";
import { chatterbox } from "./chatterbox/content";

const caseStudies: Record<string, CaseStudy> = {
  [caloricEstimator.meta.slug]: caloricEstimator,
  [legalCopilot.meta.slug]: legalCopilot
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
