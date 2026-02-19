"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-indigo-600 uppercase bg-indigo-50 dark:bg-indigo-900/30 rounded-full"
          >
            Our Identity
          </motion.span>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight"
          >
            We are <span className="text-indigo-600">ITECH</span>
          </motion.h2>

          {/* Bio Paragraphs */}
          <div className="space-y-6 max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              A multidisciplinary collective of engineers and designers
              dedicated to turning complex technical challenges into elegant,
              high-impact digital and physical solutions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed"
            >
              By merging technical precision with creative intuition, we help
              businesses scale through robust backend architectures, immersive
              front-end interfaces, and professional architectural drafting. Our
              philosophy is simple: **Build for the future, design for the
              user.**
            </motion.p>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 border-y border-gray-200 dark:border-gray-800 py-10 w-full"
          >
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-bold text-indigo-600">
                2+
              </span>
              <span className="mt-2 text-sm font-medium text-gray-500 uppercase tracking-widest">
                Years of Innovation
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-bold text-indigo-600">
                50+
              </span>
              <span className="mt-2 text-sm font-medium text-gray-500 uppercase tracking-widest">
                Projects Delivered
              </span>
            </div>

            <div className="flex flex-col items-center col-span-2 md:col-span-1 border-t md:border-t-0 pt-8 md:pt-0 border-gray-200 dark:border-gray-800">
              <span className="text-4xl md:text-5xl font-bold text-indigo-600">
                100%
              </span>
              <span className="mt-2 text-sm font-medium text-gray-500 uppercase tracking-widest">
                Client Satisfaction
              </span>
            </div>
          </motion.div>

          {/* CTA/Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12"
          >
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 text-base font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-lg shadow-indigo-200 dark:shadow-none"
            >
              Work With Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
