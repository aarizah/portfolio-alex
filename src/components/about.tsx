"use client";

import { motion } from 'framer-motion';
import { Brain, Zap, Shield } from 'lucide-react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden w-full">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Why Work With Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Specialized expertise in AI/ML integration with a track record of building production-ready solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image/Profile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-20" />
              <Card className="relative bg-white/5 border-white/10 backdrop-blur-sm p-8">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center mb-6">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop"
                    alt="AI Engineer Profile"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                {/* Quick stats - Focus on value, not timeline */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                      100%
                    </div>
                    <div className="text-xs text-gray-400">Project Success Rate</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                      Fast
                    </div>
                    <div className="text-xs text-gray-400">Delivery Focused</div>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Right side - Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Main value prop */}
            <div className="space-y-4">
              <h3 className="text-2xl text-white">
                AI Engineer who delivers production-ready solutions
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I specialize in transforming complex AI concepts into practical, scalable applications. 
                My expertise spans the entire development lifecycle—from integrating cutting-edge LLMs 
                to deploying robust full-stack systems that users love.
              </p>
              <p className="text-gray-300 leading-relaxed">
                What sets me apart is my ability to bridge the gap between AI/ML potential and 
                real-world implementation. I don&apos;t just build features—I engineer intelligent 
                solutions that solve actual business problems and deliver measurable results.
              </p>
            </div>

            {/* Core strengths */}
            <div className="space-y-4 pt-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-lg border border-blue-500/20">
                  <Brain className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white mb-1">AI/ML Specialist</h4>
                  <p className="text-gray-400 text-sm">
                    Deep expertise in LLMs, RAG systems, and AI model integration. I stay current 
                    with the latest developments to leverage the best tools for each project.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-lg border border-purple-500/20">
                  <Zap className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white mb-1">Full-Stack Excellence</h4>
                  <p className="text-gray-400 text-sm">
                    End-to-end development expertise ensures your AI features are wrapped in 
                    polished, performant applications that scale.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-lg border border-green-500/20">
                  <Shield className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <h4 className="text-white mb-1">Proven Track Record</h4>
                  <p className="text-gray-400 text-sm">
                    Every project in my portfolio demonstrates real-world problem solving with 
                    documented results and live deployments.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Unique differentiator */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-gray-300">
                <span className="text-blue-400">💡 My approach:</span> I combine rapid prototyping 
                with production-grade practices. You get speed without sacrificing quality, 
                innovation without unnecessary complexity.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
