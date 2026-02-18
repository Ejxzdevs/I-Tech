"use client";

import { motion } from "framer-motion";
import {
  Layout,
  Database,
  CloudRain,
  PenTool,
  ArrowUpRight,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Frontend & Mobile",
      icon: <Layout className="w-6 h-6" />,
      description:
        "Crafting immersive user interfaces and high-performance mobile experiences with a focus on responsiveness.",
      skills: [
        "React",
        "Next.js",
        "Vue.js",
        "React Native",
        "TypeScript",
        "CSS/TW/BS",
      ],
      color: "from-blue-500/20",
    },
    {
      title: "Backend & Databases",
      icon: <Database className="w-6 h-6" />,
      description:
        "Architecting robust server-side logic and optimized database schemas for scalable applications.",
      skills: [
        "Node.js",
        "Laravel",
        "Vanilla PHP",
        "NoSQL/Firebase/MongoDB",
        "SQL/PostgreSQL/Supabase",
        "Redis",
      ],
      color: "from-emerald-500/20",
    },
    {
      title: "Cloud & Deployment",
      icon: <CloudRain className="w-6 h-6" />,
      description: "Deploying secure, high-availability cloud infrastructure.",
      skills: ["Vercel", "Render", "Hostinger"],
      color: "from-purple-500/20",
    },
    {
      title: "Design & Drafting",
      icon: <PenTool className="w-6 h-6" />,
      description:
        "Merging technical precision with creative design for architectural drafts and digital branding.",
      skills: ["AutoCAD", "Photoshop", "Illustrator", "Canva"],
      color: "from-orange-500/20",
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-gray-50 dark:bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Technical <span className="text-indigo-600">Expertise</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-4 text-lg text-gray-600 dark:text-gray-400"
            >
              Solving complex problems through clean code and intuitive design.
              Turning your vision into scalable digital reality.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hidden md:block text-sm font-mono text-gray-400 uppercase tracking-widest"
          >
            // Full Stack Solutions
          </motion.div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-8 hover:shadow-xl transition-all duration-300"
            >
              {/* Gradient Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-2xl bg-gray-50 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-300 dark:text-gray-600 group-hover:text-indigo-500 transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 border border-transparent group-hover:border-indigo-500/30 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
