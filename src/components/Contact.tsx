"use client";

import { motion } from 'framer-motion';
import { Mail, MapPin, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden w-full">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:48px_48px]" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let&apos;s Build Your AI Solution
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ready to leverage AI for your business? I specialize in turning ambitious ideas into 
            production-ready applications. Let&apos;s discuss how I can help solve your challenges.
          </p>
        </motion.div>

        {/* Trust indicators - CRO Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
            <div className="text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
              Fast
            </div>
            <div className="text-xs text-gray-500">Turnaround Time</div>
          </div>
          <div className="text-center p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
            <div className="text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
              100%
            </div>
            <div className="text-xs text-gray-500">Client Satisfaction</div>
          </div>
          <div className="text-center p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
            <div className="text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
              Modern
            </div>
            <div className="text-xs text-gray-500">Tech Stack</div>
          </div>
          <div className="text-center p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
            <div className="text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
              24h
            </div>
            <div className="text-xs text-gray-500">Response Time</div>
          </div>
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
                    <p className="text-gray-400">your.email@example.com</p>
                    <p className="text-xs text-blue-400 mt-1">Fast response guaranteed</p>
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
                    <p className="text-gray-400">Your City, Country</p>
                    <p className="text-xs text-blue-400 mt-1">Available for remote work</p>
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
                    <p className="text-xs text-green-400 mt-1">✓ Ready to start immediately</p>
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
            <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-sm">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-gray-300">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-gray-300">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-gray-300">
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Describe your project, challenges, and goals. What AI solution are you looking to build?"
                    rows={5}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500 resize-none"
                  />
                </div>

                <div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Get Free Consultation
                  </Button>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    I typically respond within 24 hours
                  </p>
                </div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
