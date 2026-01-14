import { Project } from './types';

export const projects: Project[] = [
  {
    title: "AI Internal Knowledge Copilot — RAG Pipeline",
    description: "Citation-grounded answers from legal and internal documents with a RAG pipeline tuned for relevance.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    markdownFile: "legal-copilot.md",
    metrics: [
      { label: "MVP Delivery", value: "3 weeks" },
      { label: "Retrieval Quality", value: "95% relevance" },
      { label: "Response Time", value: "80% faster" }
    ],
    technologies: ["TypeScript", "Next.js", "Node.js", "NestJS", "PostgreSQL", "Prisma", "LangChain", "OpenAI"],
    github: "https://github.com/aarizah/AI-Enterprise-Knowledge-Assistant",
    demo: "https://github.com/aarizah/AI-Enterprise-Knowledge-Assistant#demo"
  },
  {
    title: "AI Caloric Estimator — CV + Embedded Prototype",
    description: "Hardware + CV system that fuses image and weight data to estimate calories with far lower error than manual tracking.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    markdownFile: "caloric-estimator.md",
    metrics: [
      { label: "Error Reduction", value: "90% improvement" },
      { label: "Accuracy", value: "~10% error" },
      { label: "Processing", value: "Sub-3 seconds" }
    ],
    technologies: ["ESP32-S3", "C++", "FreeRTOS", "OpenAI API", "Node.js", "Express", "TypeScript"],
    github: "https://github.com/aarizah/FoodTracking"
  },
  {
    title: "ChatterBox — Real-Time Team Chat",
    description: "Slack/Discord-style web app with authentication, channels, and real-time messaging.",
    image: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80",
    markdownFile: "chatterbox.md",
    metrics: [
      { label: "Message Delivery", value: "<100ms" },
      { label: "Uptime", value: "99.9%" },
      { label: "Concurrent Users", value: "1000+" }
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "WebSockets", "JWT", "bcrypt", "Argon2"],
    github: "https://github.com/aarizah/chatterApp"
  },
];
