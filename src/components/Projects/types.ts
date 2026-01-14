export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
  markdownFile: string;
  metrics: ProjectMetric[];
  technologies: string[];
  github?: string;
  demo?: string;
}
