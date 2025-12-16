export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
  problem: string;
  solution: string;
  result: string;
  metrics: ProjectMetric[];
  technologies: string[];
  github?: string;
  demo?: string;
}
