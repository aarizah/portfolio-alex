export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectPreview {
  slug: string;
  title: string;
  description: string;
  image: string;
  status: string;
  metrics: ProjectMetric[];
  technologies: string[];
  github?: string;
  demo?: string;
}
