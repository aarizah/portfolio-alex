"use client";

import { motion } from 'framer-motion';

const stats = [
  {
    value: "3",
    label: "End-to-end AI builds",
    colors: "from-blue-500/10 to-purple-500/10 border-blue-500/30",
    textColors: "from-blue-400 to-purple-400"
  },
  {
    value: "LLM/RAG",
    label: "Focus area",
    colors: "from-green-500/10 to-emerald-500/10 border-green-500/30",
    textColors: "from-green-400 to-emerald-400"
  },
  {
    value: "Full stack",
    label: "Front + backend + cloud",
    colors: "from-purple-500/10 to-pink-500/10 border-purple-500/30",
    textColors: "from-purple-400 to-pink-400"
  },
  {
    value: "HW + CV",
    label: "Embedded prototype",
    colors: "from-orange-500/10 to-red-500/10 border-orange-500/30",
    textColors: "from-orange-400 to-red-400"
  }
];

export function StatsBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-4"
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`bg-gradient-to-br ${stat.colors} rounded-xl p-4 backdrop-blur-sm text-center border`}
        >
          <div className={`text-xl md:text-2xl bg-gradient-to-r ${stat.textColors} bg-clip-text text-transparent mb-1`}>
            {stat.value}
          </div>
          <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
        </div>
      ))}
    </motion.div>
  );
}
