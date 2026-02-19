"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import {
  ArrowLeft,
  ArrowRight,
  Github,
  ExternalLink,
  Code2,
} from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Next Career",
    description:
      "Next Career is a platform designed to connect job seekers with potential employers. Users can browse and explore a wide range of job opportunities based on their skills and interests, while employers can efficiently manage applicants, review their qualifications, and communicate directly with candidates to streamline the hiring process",
    cat: "Web Platform",
    path: "/projects/nc.png",
    techstack: ["Laravel", "Vue.js", "Tailwind", "PostgreSQL"],
    link: "https://github.com/EJ-Itech/NextCareer",
    year: "2025",
  },
  {
    title: "Racitelcom",
    description:
      "The Racitel Payroll Management System streamlines payroll and attendance for Racitelcom Inc., automating salary calculations and importing CSV attendance records to reduce errors and save time",
    cat: "Enterprise Software",
    path: "/projects/payroll-racitel.png",
    techstack: ["Vanilla PHP", "Tailwind", "JavaScript", "MySQL"],
    link: "https://github.com/EJ-Itech/Racitelcom",
    year: "2022",
  },
  {
    title: "Voting System",
    description:
      "The Voting Management System simplifies the election process by letting administrators manage candidates, positions, and track votes efficiently. It provides CRUD operations for easy management, while voters can register quickly and cast their votes through a user-friendly interface, ensuring a smooth and secure voting experience.",
    path: "/projects/voting.png",
    techstack: ["Vanilla PHP", "Bootstrap", "JavaScript", "MySQL"],
    link: "https://github.com/EJ-Itech/Voting-System",
    year: "2025",
  },
  {
    title: "Enrollment & Admission System",
    description:
      "The Admission & Enrollment Management System is a web application that streamlines the admission and enrollment process for educational institutions, simplifying student registration, application tracking, and record management.",
    path: "/projects/bestlink.png",
    techstack: [
      "Vanilla PHP",
      "Bootstrap",
      "CSS",
      "JavaScript",
      "AJAX",
      "MySQL",
    ],
    link: "https://github.com/EJ-Itech/Admission-Enrollment-Management-System",
    year: "2024",
  },
  {
    title: "Real Estate",
    description:
      "The real estate management system is a key sector focused on the buying, selling, and management of residential, commercial, and industrial properties. It plays an important role in economic growth and community development while offering diverse opportunities for investment and innovation in response to changing market demands",
    path: "/projects/realstate.png",
    techstack: ["Vanilla PHP", "CSS", "Bootstrap", "JavaScript", "MySQL"],
    link: "https://github.com/EJ-Itech/RealEase",
    year: "2024",
  },
  {
    title: "Task Us",
    description:
      "Task Us is a user-friendly task management system designed to help teams collaborate effectively and stay organized. It simplifies task tracking, allowing managers and team members to monitor progress and deadlines easily. By streamlining workflows, the system enhances collaboration and boosts overall productivity.",
    path: "/projects/taskus.png",
    techstack: ["Laravel", "CSS", "JavaScript", "AlpineJs", "MySQL"],
    link: "https://github.com/EJ-Itech/TaskUs",
    year: "2025",
  },
  {
    title: "Book Hive",
    description:
      "The Library Management System streamlines library operations by allowing users to browse books and submit requests or inquiries. Administrators can manage records, process requests, generate reports, and post announcements through a centralized dashboard.",
    path: "/projects/library2.png",
    techstack: ["React", "MUI", "Tailwind", "Node", "Express", "MySQL"],
    link: "https://github.com/EJ-Itech/BookHive",
    year: "2025",
  },
  {
    title: "Spendwise",
    description:
      "SpendWise is a financial tracking system designed to help users monitor their savings effectively. It features expense tracking, savings goals, income management, and a dashboard that provides a clear overview of financial activity",
    path: "/projects/spendwise6.png",
    techstack: ["React Native", "Tailwind", "Node", "Express", "PostgreSQL"],
    link: "https://github.com/EJ-Itech/SpendWise",
    year: "2026",
  },
];

export default function ProfessionalShowcase() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 dark:bg-[#050505] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 text-indigo-600 font-mono text-sm mb-4"
          >
            <Code2 size={18} />
            <span className="tracking-[0.2em] uppercase">Project Archive</span>
          </motion.div>
          <div className="flex justify-between items-end">
            <h2 className="text-5xl md:text-7xl font-black tracking-tight dark:text-white">
              Latest <span className="text-gray-400">Works.</span>
            </h2>

            <div className="flex gap-4 mb-2">
              <button
                onClick={() => emblaApi?.scrollPrev()}
                className="p-4 rounded-xl border border-gray-200 dark:border-white/10 dark:text-white hover:bg-white dark:hover:bg-indigo-600 transition-all shadow-sm"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={() => emblaApi?.scrollNext()}
                className="p-4 rounded-xl border border-gray-200 dark:border-white/10 dark:text-white hover:bg-white dark:hover:bg-indigo-600 transition-all shadow-sm"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {projects.map((project, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 px-2">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Side: Mockup Frame (No full-bleed image) */}
                  <div className="lg:col-span-7 relative group">
                    <div className="relative aspect-16/10 bg-gray-200 dark:bg-zinc-900 rounded-3xl p-4 md:p-8 overflow-hidden border border-gray-200 dark:border-white/5 shadow-2xl">
                      {/* Decorative background blobs for the frame */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full" />

                      <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border border-black/10">
                        <Image
                          src={project.path}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Structured Content */}
                  <div className="lg:col-span-5 flex flex-col gap-6 lg:pl-10">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-indigo-600 text-lg">
                        0{index + 1}
                      </span>
                      <div className="h-px w-12 bg-gray-300 dark:bg-zinc-800" />
                      <span className="text-gray-500 uppercase tracking-widest text-xs font-bold">
                        {project.year}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-4xl md:text-5xl font-bold dark:text-white leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techstack.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-1.5 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 text-xs font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-4">
                      <a
                        href={project.link}
                        className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/20"
                      >
                        View Source <Github size={18} />
                      </a>
                      <button className="flex items-center gap-2 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 px-6 py-3 rounded-xl font-bold dark:text-white hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all">
                        Live Demo <ExternalLink size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Pagination */}
        <div className="mt-20 flex items-center justify-between border-t border-gray-200 dark:border-white/5 pt-8">
          <div className="flex gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-1.5 transition-all duration-300 rounded-full ${selectedIndex === i ? "w-12 bg-indigo-600" : "w-4 bg-gray-300 dark:bg-zinc-800"}`}
              />
            ))}
          </div>
          <p className="text-gray-500 font-mono text-sm">
            Scrolling /{" "}
            <span className="text-indigo-600">
              {selectedIndex + 1} of {projects.length}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
