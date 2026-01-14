"use client";

import { motion } from 'framer-motion';
import { Mail, MapPin, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

export function Contact() {
  return (
    <section id="contact" className="py-12 bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden w-full">
      <div className="" />
      
      <div className="max-w-5xl mx-auto px-12 md:px-16 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let&apos;s Ship Your Next AI Feature
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ready to integrate LLMs or ship a RAG copilot? I turn ideas into production-ready apps with clear metrics on latency, cost, and accuracy.
          </p>
        </motion.div>



        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <Card className="p-6 bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-white">Email</h3>
                    <p className="text-gray-400">arizah2020@gmail.com</p>
                    <p className="text-xs text-blue-400 mt-1">Replies within 24h</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-white">Location</h3>
                    <p className="text-gray-400">Colombia · Remote-first (USA/EU overlap)</p>
                    <p className="text-xs text-blue-400 mt-1">Open to travel when needed</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-white">Availability</h3>
                    <p className="text-gray-400">Accepting new projects</p>
                    <p className="text-xs text-green-400 mt-1">✓ Ready to start now</p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-sm text-center">
              <div className="space-y-6">
                <h3 className="text-2xl text-white">Get in touch</h3>
                <p className="text-gray-400 max-w-xl mx-auto">
                  Prefer to keep things simple — reach out via email or visit my profiles. I typically reply within 24 hours.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
                  <Button asChild className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=arizah2020@gmail.com
">Email: arizah2020@gmail.com</a>
                  </Button>

                  <Button asChild variant="outline" className="w-full sm:w-auto">
                    <a href="https://linkedin.com/in/alex-ariza-herrera" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </Button>

                  <Button asChild variant="outline" className="w-full sm:w-auto">
                    <a href="https://github.com/aarizah" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
