export type ProjectStatus =
  | "Production"
  | "Live"
  | "Internal"
  | "Research"
  | "Prototype";

export interface RecruiterShortcut {
  label: string;
  summary: string;
}

export interface CaseStudyMeta {
  slug: string;
  title: string;
  tagline: string;
  status: ProjectStatus;
  ogImage: string;
  recruiterShortcut: RecruiterShortcut;
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
  eyebrow: string;
  headline: string;
  lead: string;
  supportingParagraphs: string[];
  insightLabel: string;
  insightHelper: string;
  bridgeBefore: string;
  bridgeAfter: string;
  illustration?: string;
}

export interface SolutionCard {
  title: string;
  description: string;
}

export interface SolutionOverviewData {
  eyebrow: string;
  headline: string;
  subheadline: string;
  capabilitiesLabel: string;
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

export interface ArchitectureData {
  eyebrow: string;
  headline: string;
  subheadline: string;
  defaultTab?: "overview" | "c4" | "security" | "workflows" | "data" | "deployment";
  systemOverview: ArchitectureSystemOverview;
  c4Model: ArchitectureC4Model;
  security: ArchitectureDetailGroup;
  coreWorkflows: ArchitectureWorkflowGroup;
  dataModel: ArchitectureDataModel;
  deployment: ArchitectureDeployment;
}

export interface ArchitectureDetailItem {
  id: string;
  label: string;
  description: string;
  technologies?: string[];
}

export interface ArchitectureFlowNode {
  id: string;
  label: string;
  description: string;
  technologies?: string[];
}

export interface ArchitectureTableColumns {
  layer: string;
  role: string;
  stack: string;
}

export interface ArchitectureSystemOverview {
  title: string;
  description: string;
  nodes: ArchitectureFlowNode[];
  tableColumns: ArchitectureTableColumns;
  technologies: string[];
}

export interface ArchitectureC4Model {
  title: string;
  description: string;
  src?: string;
  alt: string;
}

export interface ArchitectureDetailGroup {
  title: string;
  description: string;
  items: ArchitectureDetailItem[];
}

export interface ArchitectureWorkflow {
  id: string;
  label: string;
  description: string;
  steps: ArchitectureDetailItem[];
}

export interface ArchitectureWorkflowGroup {
  title: string;
  description: string;
  workflows: ArchitectureWorkflow[];
}

export interface ArchitectureDataModel {
  title: string;
  description: string;
  src?: string;
  alt: string;
}

export interface DeploymentService {
  name: string;
  tech: string;
}

export interface DeploymentEnvironment {
  label: string;
  heading?: string;
  services: DeploymentService[];
}

export interface DeploymentPipelineStep {
  label: string;
}

export interface ArchitectureDeployment {
  title: string;
  description: string;
  hosting: string;
  environments: DeploymentEnvironment[];
  pipelineTitle?: string;
  pipeline?: DeploymentPipelineStep[];
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

export interface EngineeringDecisionsData {
  eyebrow: string;
  labels: {
    why: string;
    tradeoff: string;
    alternative: string;
    rejected: string;
  };
  items: EngineeringDecision[];
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
  description?: string;
}

export interface ImpactStoryStep {
  label: string;
  body: string;
}

export interface ResultsData {
  eyebrow: string;
  headline: string;
  subheadline: string;
  impactStory: ImpactStoryStep[];
  supportingLabel: string;
  metrics: ResultCard[];
  proofChallenge?: ChallengeStep;
}

export interface LessonGroup {
  title: string;
  description: string;
  items: string[];
}

export interface LessonsLearnedData {
  eyebrow: string;
  groups: LessonGroup[];
}

export interface TechStackItem {
  name: string;
}

export interface CTAData {
  eyebrow: string;
  headline: string;
  subheadline: string;
  githubLabel: string;
  demoLabel: string;
  contactLabel: string;
  contactHref: string;
}

export interface RelatedSectionData {
  eyebrow: string;
  headline: string;
}

export interface CaseStudySections {
  hero: HeroData;
  quickOverview: QuickOverviewData;
  videoDemo: VideoDemoData;
  problem: ProblemData;
  solutionOverview: SolutionOverviewData;
  featureWalkthrough: FeatureWalkthroughData;
  results: ResultsData;
  architecture: ArchitectureData;
  aiPipeline?: AIPipelineData;
  engineeringDecisions: EngineeringDecisionsData;
  security: SecurityCard[];
  screenshots: ScreenshotsData;
  lessonsLearned: LessonsLearnedData;
  techStack: TechStackItem[];
  cta: CTAData;
  relatedSection: RelatedSectionData;
  relatedProjects: string[];
}

export interface CaseStudy {
  meta: CaseStudyMeta;
  sections: CaseStudySections;
}
