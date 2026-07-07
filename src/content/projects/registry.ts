import type { CaseStudy } from "./types";
import { clinicHc } from "./clinic-hc/content";
import { sgrMga } from "./sgr-mga/content";
import { legalCopilot } from "./legal-copilot/content";
import { localRag } from "./local-rag/content";
import { caloricEstimator } from "./caloric-estimator/content";

const caseStudies: Record<string, CaseStudy> = {
  [clinicHc.meta.slug]: clinicHc,
  [sgrMga.meta.slug]: sgrMga,
  [legalCopilot.meta.slug]: legalCopilot,
  [localRag.meta.slug]: localRag,
  [caloricEstimator.meta.slug]: caloricEstimator,
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
