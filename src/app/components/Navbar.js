"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Effect to handle glassmorphism effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Stack", href: "#services" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/75 dark:bg-gray-900/75 backdrop-blur-md py-3 shadow-sm border-b border-gray-200/50 dark:border-gray-800/50"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#hero" className="group flex items-center gap-2">
            <div className="h-9 w-9 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold group-hover:rotate-12 transition-transform duration-300">
              I
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              I-Tech<span className="text-indigo-600">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center bg-gray-100/80 dark:bg-gray-800/50 rounded-full px-1.5 py-1 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-all rounded-full hover:bg-white dark:hover:bg-gray-700 hover:shadow-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="ml-4 px-6 py-2.5 bg-gray-900 dark:bg-indigo-600 text-white text-sm font-semibold rounded-full hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-all active:scale-95 shadow-md hover:shadow-indigo-500/20"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="md:hidden p-2 text-gray-600 dark:text-gray-300 focus:outline-none"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-0.5 w-full bg-current transform transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`h-0.5 w-full bg-current transition-all duration-200 ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 w-full bg-current transform transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 w-full py-3 bg-indigo-600 text-white text-center font-semibold rounded-xl"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
