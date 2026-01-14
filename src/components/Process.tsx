"use client";

import { motion } from 'framer-motion';
import { Target, Lightbulb, Code, Rocket, BarChart } from 'lucide-react';

interface Step {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  deliverables: string[];
}

const steps: Step[] = [
  {
    number: "01",
    icon: <Target className="h-8 w-8" />,
    title: "Discovery & Strategy",
    description: "Understanding your business problem and defining success metrics.",
    deliverables: ["Problem analysis", "Data assessment", "ROI projection", "Project roadmap"],
  },
  {
    number: "02",
    icon: <Lightbulb className="h-8 w-8" />,
    title: "AI Solution Design",
    description: "Architecting the optimal ML/AI approach for your specific use case.",
    deliverables: ["Technical architecture", "Model selection", "Data pipeline design", "Integration plan"],
  },
  {
    number: "03",
    icon: <Code className="h-8 w-8" />,
    title: "Development & Training",
    description: "Building, training, and fine-tuning AI models alongside full-stack development.",
    deliverables: ["Model development", "API creation", "Frontend interface", "Testing & validation"],
  },
  {
    number: "04",
    icon: <Rocket className="h-8 w-8" />,
    title: "Deployment & Integration",
    description: "Launching the solution to production with proper infrastructure and monitoring.",
    deliverables: ["Cloud deployment", "System integration", "Performance optimization", "Documentation"],
  },
  {
    number: "05",
    icon: <BarChart className="h-8 w-8" />,
    title: "Optimization & Support",
    description: "Continuous monitoring, improvement, and support for maximum ROI.",
    deliverables: ["Performance monitoring", "Model retraining", "Feature updates", "Ongoing support"],
  },
];

export function Process() {
  return (
    <section className="py-12 bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden w-full">
      <div />
      
      <div className="max-w-6xl mx-auto px-12 md:px-16 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            How I Work
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A proven process for delivering AI solutions that actually work in production.
            From initial consultation to ongoing optimization.
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative">
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[60px] top-[120px] w-0.5 h-20 bg-gradient-to-b from-blue-500/50 to-purple-500/50 hidden md:block" />
                )}

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  {/* Step number and icon */}
                  <div className="md:col-span-2 flex flex-col items-center md:items-start">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/30 flex items-center justify-center backdrop-blur-sm">
                        <div className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                          {step.icon}
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-xs text-white shadow-lg">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-10">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                      <h3 className="text-white mb-3">{step.title}</h3>
                      <p className="text-gray-400 mb-4">{step.description}</p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {step.deliverables.map((deliverable) => (
                          <div
                            key={deliverable}
                            className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 rounded-lg px-3 py-2"
                          >
                            <span className="text-blue-400">✓</span>
                            {deliverable}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="text-3xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              4-12 weeks
            </div>
            <div className="text-gray-400 text-sm">Typical Project Timeline</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="text-3xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-gray-400 text-sm">Production-Ready Code</div>
          </div>
          
          <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="text-3xl bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
              Ongoing
            </div>
            <div className="text-gray-400 text-sm">Support & Optimization</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
