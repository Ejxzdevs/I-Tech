"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });

  const [scrollProgress, setScrollProgress] = useState(0);

  // Update progress bar
  const onScroll = useCallback((emblaApi) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll(emblaApi);
    emblaApi.on("reInit", onScroll);
    emblaApi.on("scroll", onScroll);
  }, [emblaApi, onScroll]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  const projects = [
    {
      title: "Commercial Complex Layout",
      cat: "AutoCAD & Planning",
      color: "from-slate-700 to-slate-900",
    },
    {
      title: "NexTrade Enterprise",
      cat: "E-Commerce",
      color: "from-indigo-600 to-violet-700",
    },
    {
      title: "SwiftPay Fintech",
      cat: "Mobile App",
      color: "from-orange-400 to-rose-500",
    },
    {
      title: "Industrial Engine Blueprint",
      cat: "Technical Drafting",
      color: "from-blue-600 to-cyan-700",
    },
    {
      title: "NeuralCanvas AI",
      cat: "Web Application",
      color: "from-fuchsia-500 to-pink-500",
    },
    {
      title: "LuxeStay Booking",
      cat: "UI/UX Design",
      color: "from-amber-400 to-yellow-600",
    },
  ];

  return (
    <section id="projects" className="py-24 dark:bg-gray-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header with Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter uppercase">
              Featured <span className="text-indigo-600">Cases</span>
            </h2>
            <p className="text-gray-500 mt-2 font-medium">
              From technical blueprints to digital interfaces.
            </p>
          </motion.div>

          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              className="p-4 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-indigo-600 hover:text-white transition-all dark:text-white group"
            >
              <ArrowLeft
                size={20}
                className="group-active:-translate-x-1 transition-transform"
              />
            </button>
            <button
              onClick={scrollNext}
              className="p-4 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-indigo-600 hover:text-white transition-all dark:text-white group"
            >
              <ArrowRight
                size={20}
                className="group-active:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>

        {/* Embla Viewport */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          ref={emblaRef}
        >
          <div className="flex gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_40%] min-w-0"
              >
                <div className="group relative h-125 rounded-[2.5rem] overflow-hidden bg-gray-200 dark:bg-gray-900 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20">
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-90 group-hover:scale-105 transition-transform duration-700`}
                  />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-10 flex flex-col justify-end text-white z-10">
                    <span className="text-xs font-black uppercase tracking-[0.3em] mb-3 text-white/70">
                      {project.cat}
                    </span>
                    <h3 className="text-3xl font-bold mb-6 leading-tight">
                      {project.title}
                    </h3>

                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="#"
                      className="flex items-center justify-center gap-3 w-fit bg-white text-black px-8 py-4 rounded-2xl font-bold text-sm hover:bg-black hover:text-white transition-all"
                    >
                      View Project Details
                    </motion.a>
                  </div>

                  {/* Decorative Number */}
                  <div className="absolute top-10 right-10 text-white/10 text-8xl font-black select-none group-hover:text-white/20 transition-colors">
                    0{index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Dynamic Status Bar */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="h-1 w-64 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-indigo-600"
              style={{ width: `${scrollProgress}%` }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            />
          </div>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            Slide to Navigate
          </span>
        </div>
      </div>
    </section>
  );
}
