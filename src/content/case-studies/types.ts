export type ProjectStatus = "Production" | "Live" | "Research" | "Prototype";

export interface CaseStudyMeta {
  slug: string;
  title: string;
  tagline: string;
  status: ProjectStatus;
  ogImage: string;
}

export interface HeroData {
  tagline: string;
  status: ProjectStatus;
  stack: string[];
  backgroundImage: string;
  backgroundVideo?: string;
  github?: string;
  demo?: string;
}

export interface QuickOverviewData {
  role: string;
  duration: string;
  status: ProjectStatus;
  users: string;
  country: string;
  domain: string;
  cloud: string;
  tech: string;
}

export interface VideoChapter {
  time: number;
  label: string;
}

export interface VideoDemoData {
  src?: string;
  poster: string;
  chapters: VideoChapter[];
}

export interface ProblemData {
  paragraphs: string[];
  illustration?: string;
}

export interface SolutionCard {
  title: string;
  description: string;
}

export interface SolutionOverviewData {
  cards: SolutionCard[];
}

export interface WalkthroughItem {
  id: string;
  label: string;
  screenshot: string;
  explanation: string;
}

export interface FeatureWalkthroughData {
  items: WalkthroughItem[];
}

export interface ArchitectureLayer {
  id: string;
  label: string;
  panel: {
    title: string;
    why: string;
    bullets: string[];
  };
}

export interface ArchitectureData {
  layers: ArchitectureLayer[];
}

export interface AIPipelineBlock {
  id: string;
  label: string;
  content: string;
}

export interface AIPipelineData {
  blocks: AIPipelineBlock[];
}

export interface EngineeringDecision {
  id: string;
  title: string;
  why: string;
  tradeoffs: string;
  alternatives: string;
  rejected: string;
}

export interface SecurityCard {
  title: string;
  description: string;
}

export interface ScreenshotsData {
  desktop: string[];
  tablet: string[];
  mobile: string[];
}

export interface ChallengeStep {
  challenge: string;
  problem: string;
  decision: string;
  result: string;
}

export interface ResultCard {
  label: string;
  value: string;
}

export interface LessonsLearnedData {
  wentWell: string[];
  wouldImprove: string[];
  learned: string[];
}

export interface TechStackItem {
  name: string;
}

export interface CTAData {
  github?: string;
  demo?: string;
  contactHref: string;
}

export interface CaseStudySections {
  hero: HeroData;
  quickOverview: QuickOverviewData;
  videoDemo: VideoDemoData;
  problem: ProblemData;
  solutionOverview: SolutionOverviewData;
  featureWalkthrough: FeatureWalkthroughData;
  architecture: ArchitectureData;
  aiPipeline?: AIPipelineData;
  engineeringDecisions: EngineeringDecision[];
  security: SecurityCard[];
  screenshots: ScreenshotsData;
  challenges: ChallengeStep[];
  results: ResultCard[];
  lessonsLearned: LessonsLearnedData;
  techStack: TechStackItem[];
  cta: CTAData;
  relatedProjects: string[];
}

export interface CaseStudy {
  meta: CaseStudyMeta;
  sections: CaseStudySections;
}
