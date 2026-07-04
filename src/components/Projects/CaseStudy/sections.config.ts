export interface CaseStudySectionConfig {
  id: string;
  label: string;
  shortLabel?: string;
}

export const CASE_STUDY_NAV_SECTIONS: CaseStudySectionConfig[] = [
  { id: "overview", label: "Overview", shortLabel: "01" },
  { id: "demo", label: "Demo", shortLabel: "02" },
  { id: "problem", label: "Problem", shortLabel: "03" },
  { id: "solution", label: "Solution", shortLabel: "04" },
  { id: "walkthrough", label: "Product", shortLabel: "05" },
  { id: "architecture", label: "Architecture", shortLabel: "06" },
  { id: "ai-pipeline", label: "AI Flow", shortLabel: "07" },
  { id: "engineering", label: "Decisions", shortLabel: "08" },
  { id: "security", label: "Security", shortLabel: "09" },
  { id: "screenshots", label: "Screens", shortLabel: "10" },
  { id: "challenges", label: "Challenges", shortLabel: "11" },
  { id: "results", label: "Impact", shortLabel: "12" },
  { id: "lessons", label: "Lessons", shortLabel: "13" },
  { id: "stack", label: "Stack", shortLabel: "14" },
  { id: "technical-deep-dive", label: "Deep Dive", shortLabel: "15" },
  { id: "explore", label: "Next", shortLabel: "16" },
];
