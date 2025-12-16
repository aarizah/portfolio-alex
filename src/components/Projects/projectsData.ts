import { Project } from './types';

export const projects: Project[] = [
  {
    title: "Legal Copilot & Internal Knowledge Assistants",
    description: "Citation-grounded answers from legal and internal documents with a RAG pipeline tuned for relevance.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    problem: "Legal and operations teams needed fast, source-linked answers from private corp/legal docs without manual search.",
    solution: "Shipped an end-to-end MVP (Next.js + Node/NestJS + PostgreSQL/Prisma) in 3 weeks. Built ingestion with structured metadata and adaptive chunking, plus a RAG workflow to ground LLM outputs with citations.",
    result: "Delivered citation-grounded responses, reduced hallucinations via metadata + chunking strategy, and set up auth + environments for iterative releases.",
    metrics: [
      { label: "MVP Delivery", value: "3 weeks" },
      { label: "Retrieval Quality", value: "Structured metadata + adaptive chunking" },
      { label: "Answering", value: "Source-cited responses" }
    ],
    technologies: ["TypeScript", "Next.js", "Node.js", "NestJS", "PostgreSQL", "Prisma", "LangChain", "OpenAI", "Cloud (serverless & managed databases)"],
    github: "https://github.com/aarizah/AI-Enterprise-Knowledge-Assistant"
  },
  {
    title: "AI Caloric Estimator — CV + Embedded Prototype",
    description: "Hardware + CV system that fuses image and weight data to estimate calories with far lower error than manual tracking.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    problem: "Manual calorie tracking was highly inaccurate (often >100% error) and impractical for everyday meals.",
    solution: "Built an ESP32-S3 device with camera + load cell, FreeRTOS/C++ client, and OpenAI API + Node/Express backend to fuse image + weight signals for calorie estimation.",
    result: "Reduced estimation error from >100% to ~10% on non-complex meals by combining CV and weight data.",
    metrics: [
      { label: "Error After Fusion", value: "~10% (down from >100%)" },
      { label: "Signals Used", value: "Image + weight" },
      { label: "Stack", value: "ESP32-S3 + OpenAI API" }
    ],
    technologies: ["ESP32-S3", "C++/FreeRTOS", "OpenAI API", "Node.js", "Express", "TypeScript"],
    github: "https://github.com/aarizah/FoodTracking"
  },
  {
    title: "ChatterBox — Real-Time Team Chat",
    description: "Slack/Discord-style web app with authentication, channels, and real-time messaging.",
    image: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80",
    problem: "Teams needed persistent, authenticated channels with real-time delivery and message history.",
    solution: "Built React + TypeScript front end with Node/Express + MongoDB backend, WebSockets for live messaging, and JWT + bcrypt/Argon2 for auth.",
    result: "Delivered reliable, real-time messaging with persisted history and secure auth flows.",
    metrics: [
      { label: "Delivery", value: "Real-time via WebSockets" },
      { label: "Auth", value: "JWT + bcrypt/Argon2" },
      { label: "Persistence", value: "Channel history stored" }
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "WebSockets", "JWT", "bcrypt", "Argon2"],
    github: "https://github.com/aarizah/chatterApp"
  },
];
