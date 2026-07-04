import dynamic from "next/dynamic";
import type { CaseStudy } from "@/content/case-studies/types";
import { getRelatedCaseStudies } from "@/lib/case-studies";
import { CaseStudyExperience } from "./CaseStudyExperience";
import { ProblemSection } from "./sections/ProblemSection";
import { SolutionOverviewSection } from "./sections/SolutionOverviewSection";
import { AIPipelineSection } from "./sections/AIPipelineSection";
import { SecuritySection } from "./sections/SecuritySection";
import { ChallengesSection } from "./sections/ChallengesSection";
import { ResultsSection } from "./sections/ResultsSection";
import { LessonsLearnedSection } from "./sections/LessonsLearnedSection";
import { TechStackSection } from "./sections/TechStackSection";
import { CTASection } from "./sections/CTASection";
import { RelatedProjectsSection } from "./sections/RelatedProjectsSection";
import { TechnicalDeepDiveSection } from "./sections/TechnicalDeepDiveSection";
import { CaseStudyFooter } from "./sections/CaseStudyFooter";

const HeroSection = dynamic(
  () => import("./sections/HeroSection").then((m) => m.HeroSection)
);

const VideoDemoSection = dynamic(
  () => import("./sections/VideoDemoSection").then((m) => m.VideoDemoSection)
);

const FeatureWalkthroughSection = dynamic(
  () =>
    import("./sections/FeatureWalkthroughSection").then(
      (m) => m.FeatureWalkthroughSection
    )
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

const ScreenshotsSection = dynamic(
  () => import("./sections/ScreenshotsSection").then((m) => m.ScreenshotsSection)
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
      <VideoDemoSection data={sections.videoDemo} />
      <ProblemSection data={sections.problem} />
      <SolutionOverviewSection data={sections.solutionOverview} />
      <FeatureWalkthroughSection data={sections.featureWalkthrough} />
      <ArchitectureSection data={sections.architecture} />
      {sections.aiPipeline && (
        <AIPipelineSection data={sections.aiPipeline} />
      )}
      <EngineeringDecisionsSection decisions={sections.engineeringDecisions} />
      <SecuritySection cards={sections.security} />
      <ScreenshotsSection data={sections.screenshots} />
      <ChallengesSection steps={sections.challenges} />
      <ResultsSection results={sections.results} />
      <LessonsLearnedSection data={sections.lessonsLearned} />
      <TechStackSection items={sections.techStack} />
      <TechnicalDeepDiveSection
        architecture={sections.architecture}
        aiPipeline={sections.aiPipeline}
        engineeringDecisions={sections.engineeringDecisions}
        security={sections.security}
        challenges={sections.challenges}
        lessonsLearned={sections.lessonsLearned}
      />
      <CTASection data={sections.cta} />
      <RelatedProjectsSection projects={related} />
      <CaseStudyFooter />
    </CaseStudyExperience>
  );
}
