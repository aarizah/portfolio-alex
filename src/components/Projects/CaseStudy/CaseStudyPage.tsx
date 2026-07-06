import dynamic from "next/dynamic";
import type { CaseStudy } from "@/content/projects/types";
import { getRelatedCaseStudies } from "@/lib/case-studies";
import { CaseStudyExperience } from "./CaseStudyExperience";
import { ProblemSection } from "./sections/ProblemSection";
import { SolutionOverviewSection } from "./sections/SolutionOverviewSection";
import { ResultsSection } from "./sections/ResultsSection";
import { LessonsLearnedSection } from "./sections/LessonsLearnedSection";
import { CTASection } from "./sections/CTASection";
import { RelatedProjectsSection } from "./sections/RelatedProjectsSection";
import { CaseStudyFooter } from "./sections/CaseStudyFooter";

const HeroSection = dynamic(
  () => import("./sections/HeroSection").then((m) => m.HeroSection)
);

const VideoDemoSection = dynamic(
  () => import("./sections/VideoDemoSection").then((m) => m.VideoDemoSection)
);

const ArchitectureSection = dynamic(
  () => import("./sections/ArchitectureSection").then((m) => m.ArchitectureSection)
);

const EngineeringDecisionsSection = dynamic(
  () =>
    import("./sections/EngineeringDecisionsSection").then(
      (m) => m.EngineeringDecisionsSection
    )
);

interface CaseStudyPageProps {
  caseStudy: CaseStudy;
}

export function CaseStudyPage({ caseStudy }: CaseStudyPageProps) {
  const { meta, sections } = caseStudy;
  const related = getRelatedCaseStudies(sections.relatedProjects);
  const displayName = meta.title.split(" — ")[0] ?? meta.title;

  return (
    <CaseStudyExperience projectName={displayName}>
      <HeroSection
        title={meta.title}
        data={sections.hero}
        overview={sections.quickOverview}
        videoDemo={sections.videoDemo}
      />
      {sections.videoDemo.src && <VideoDemoSection data={sections.videoDemo} />}
      <ProblemSection data={sections.problem} />
      <SolutionOverviewSection
        data={sections.solutionOverview}
        walkthrough={sections.featureWalkthrough}
      />
      <ResultsSection data={sections.results} />
      <ArchitectureSection
        data={sections.architecture}
        security={sections.security}
        aiPipeline={sections.aiPipeline}
      />
      <EngineeringDecisionsSection data={sections.engineeringDecisions} />
      <LessonsLearnedSection data={sections.lessonsLearned} />
      <CTASection data={sections.cta} />
      <RelatedProjectsSection copy={sections.relatedSection} projects={related} />
      <CaseStudyFooter />
    </CaseStudyExperience>
  );
}
