"use client";

import { motion } from 'framer-motion';
import { Brain, Code2, Database, Cloud, Zap } from 'lucide-react';
import { Card } from './ui/card';

interface Skill {
  category: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
  featured?: boolean;
}

const skillCategories: Skill[] = [
  {
    category: 'LLMs, RAG & Prompting',
    icon: <Brain className="h-8 w-8" />,
    skills: ['OpenAI API', 'LangChain / LangGraph', 'RAG pipelines', 'Embeddings + pgvector', 'Prompt engineering', 'Retrieval evaluation'],
    color: 'from-blue-500 to-purple-500',
    featured: true,
  },
  {
    category: 'Backend & APIs',
    icon: <Database className="h-8 w-8" />,
    skills: ['Node.js / NestJS', 'FastAPI', 'PostgreSQL / Prisma', 'MongoDB', 'Auth + RBAC', 'Queues & caching basics'],
    color: 'from-purple-500 to-pink-500',
    featured: true,
  },
  {
    category: 'Frontend',
    icon: <Code2 className="h-8 w-8" />,
    skills: ['Next.js (App Router)', 'React', 'TypeScript', 'Tailwind CSS', 'Designing clear UX for AI flows'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    category: 'Cloud & DevOps',
    icon: <Cloud className="h-8 w-8" />,
    skills: ['Managed cloud platforms (serverless & containers)', 'Docker', 'GitHub Actions', 'CI/CD', 'API gateways & CDN basics', 'Secrets & access fundamentals'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    category: 'Quality, Metrics & Resilience',
    icon: <Zap className="h-8 w-8" />,
    skills: ['Latency & cost tracking', 'Logging/monitoring', 'Testing (unit + integration)', 'Security hygiene', 'Timeouts/retries/circuit breakers'],
    color: 'from-orange-500 to-red-500',
  },
];

export function Skills() {
  return (
    <section className="py-12 bg-black relative overflow-hidden w-full">
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-12 md:px-16 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Full-stack + AI integration: LLM/RAG features, secure APIs, and measurable performance (latency, cost, accuracy) in production-ready apps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className={`p-5 bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group h-full ${category.featured ? 'ring-2 ring-blue-500/20' : ''}`}>
                <div className="mb-3 flex items-center justify-between">
                  <div className={`inline-block p-2.5 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-10`}>
                    <div className={`text-transparent bg-gradient-to-r ${category.color} bg-clip-text`}>
                      {category.icon}
                    </div>
                  </div>
                  {category.featured && (
                    <span className="text-xs px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400">
                      Core Expertise
                    </span>
                  )}
                </div>
                
                <h3 className="mb-3 text-white text-lg">{category.category}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm transition-colors hover:bg-white/10"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
