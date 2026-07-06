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
  { id: "results", label: "Impact", shortLabel: "05" },
  { id: "architecture", label: "Architecture", shortLabel: "06" },
  { id: "engineering", label: "Decisions", shortLabel: "07" },
  { id: "lessons", label: "Lessons", shortLabel: "08" },
];
