"use client";

import { motion } from 'framer-motion';
import { MessageSquare, TrendingUp, FileSearch, Brain, BarChart3, Workflow } from 'lucide-react';
import { Card } from './ui/card';

interface Solution {
  icon: React.ReactNode;
  title: string;
  description: string;
  examples: string[];
  color: string;
}

const solutions: Solution[] = [
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Internal Copilots & Semantic Search",
    description: "RAG copilots that answer from your docs with citations, filters, and relevance tuning.",
    examples: ["Legal/ops assistants", "Knowledge bases with sources", "Semantic search over internal data"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FileSearch className="h-6 w-6" />,
    title: "Document Automation",
    description: "OCR + LLM pipelines to ingest, chunk, extract, and validate structured data from files.",
    examples: ["Contract review", "Invoice/PO parsing", "Doc summarization with sources"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Workflow className="h-6 w-6" />,
    title: "AI-Powered Operations",
    description: "Classification, routing, and automation using LLMs with guardrails and retries.",
    examples: ["Ticket triage", "Email intents", "Smart routing + human-in-the-loop"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Product AI Features",
    description: "LLM add-ons for SaaS: draft generation, recommendations, or insight summaries tied to your data.",
    examples: ["Contextual recommendations", "LLM-driven editors", "Insight cards for dashboards"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Quality, Cost & Observability",
    description: "Measure accuracy, latency (p95), and token spend with logging, tracing, and eval sets.",
    examples: ["p95 latency budgets", "Token cost dashboards", "Retrieval/LLM evals"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Deployments that Ship",
    description: "Deployment on managed platforms with CI/CD and secrets management, focused on reliable rollouts and conversion-safe releases.",
    examples: ["API-first delivery", "Staging/prod parity", "Minimal cloud footprint"],
    color: "from-pink-500 to-rose-500",
  },
];

export function AISolutions() {
  return (
    <section className="py-12 bg-black relative overflow-hidden w-full">
      {/* Background effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-12 md:px-16 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI Solutions I Build
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Production-ready LLM/RAG features shipped end-to-end. Frontend + backend + cloud, with metrics on latency, cost, and accuracy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full group">
                <div className="mb-4">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${solution.color} bg-opacity-10`}>
                    <div className={`text-transparent bg-gradient-to-r ${solution.color} bg-clip-text`}>
                      {solution.icon}
                    </div>
                  </div>
                </div>
                
                <h3 className="mb-3 text-white">{solution.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{solution.description}</p>
                
                <div className="space-y-2">
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Use Cases:</div>
                  <ul className="space-y-1">
                    {solution.examples.map((example) => (
                      <li key={example} className="text-sm text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl backdrop-blur-sm">
            <p className="text-gray-300 mb-4">
              Don&apos;t see what you need? I build custom AI solutions for unique business challenges.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-white transition-all duration-300"
            >
              Discuss Your AI Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
