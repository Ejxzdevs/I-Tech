"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Database,
  CloudFog,
  PenTool,
  ChevronRight,
} from "lucide-react";

export default function Hero() {
  const corePillars = [
    {
      name: "Frontend & Mobile",
      icon: <Code2 className="w-4 h-4" />,
      color: "text-blue-500",
    },
    {
      name: "Backend & Databases",
      icon: <Database className="w-4 h-4" />,
      color: "text-emerald-500",
    },
    {
      name: "Design & Drafting",
      icon: <PenTool className="w-4 h-4" />,
      color: "text-orange-500",
    },
    {
      name: "Cloud & Deployment",
      icon: <CloudFog className="w-4 h-4" />,
      color: "text-purple-500",
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 lg:pt-52 lg:pb-32 px-6 overflow-hidden bg-white dark:bg-[#030712]"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[600px] opacity-20 blur-[120px] pointer-events-none bg-gradient-to-tr from-indigo-500 via-purple-500 to-blue-600" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Availability Badge */}
        <motion.div {...fadeInUp} className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-gray-50 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
              Now accepting Q1 projects
            </span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          {...fadeInUp}
          className="text-6xl md:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.95]"
        >
          Building the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-400">
            Digital Edge.
          </span>
        </motion.h1>

        {/* Brand Statement */}
        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-12 leading-relaxed"
        >
          We are{" "}
          <span className="text-gray-900 dark:text-white font-bold">Itech</span>
          . A multidisciplinary studio transforming complex logic into seamless,
          high-performance digital solutions.
        </motion.p>

        {/* NEW: Core Expertise Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16"
        >
          {corePillars.map((pillar) => (
            <div
              key={pillar.name}
              className="group flex flex-col items-center p-6 rounded-2xl bg-gray-50/50 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800 hover:border-indigo-500/50 transition-all duration-300"
            >
              <div
                className={`${pillar.color} mb-3 group-hover:scale-110 transition-transform`}
              >
                {pillar.icon}
              </div>
              <span className="text-sm font-bold text-gray-700 dark:text-gray-300 whitespace-nowrap">
                {pillar.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA Actions */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {/* Primary CTA: Start Project */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-10 py-4 bg-indigo-600 text-white font-bold rounded-xl overflow-hidden shadow-xl shadow-indigo-500/25 transition-all flex items-center gap-2"
          >
            {/* Shine Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine" />

            <span className="relative z-10 flex items-center gap-2">
              Start Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </motion.a>

          {/* Secondary CTA: View Case Studies */}
          <a
            href="#projects"
            className="group flex items-center gap-2 px-10 py-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/40 backdrop-blur-md text-gray-700 dark:text-gray-300 font-bold transition-all hover:border-indigo-500/50 hover:bg-white dark:hover:bg-gray-800 hover:shadow-2xl hover:shadow-indigo-500/10"
          >
            View Case Studies
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 group-hover:text-indigo-500 transition-all duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
