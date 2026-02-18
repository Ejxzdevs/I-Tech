"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Techstack from "./components/Techstack";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Project />
        <Techstack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
