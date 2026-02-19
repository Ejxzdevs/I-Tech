"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("idle");

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("sending");

    // Use environment variables for EmailJS configuration
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        setStatus("success");
        form.current.reset();
        setTimeout(() => setStatus("idle"), 5000);
      },
      (error) => {
        console.error("EmailJS Error:", error.text);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      },
    );
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden bg-gray-900 dark:bg-indigo-950/50 rounded-[2.5rem] shadow-2xl border border-white/5"
        >
          {/* Animated Background Accents */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side: Value Proposition */}
            <div className="p-8 md:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10 bg-white/5 backdrop-blur-md">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase text-indigo-400 bg-indigo-400/10 rounded-full border border-indigo-400/20">
                  Available for new projects
                </span>

                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
                  Ready to scale <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-blue-300">
                    your business?
                  </span>
                </h2>

                <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
                  We Are iTech. We don&apos;t just build apps; we build growth
                  engines. Let&apos;s turn your vision into a digital reality.
                </p>

                <div className="flex items-center gap-5 group cursor-pointer">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all duration-300 group-hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-indigo-400 uppercase font-black tracking-widest mb-1">
                      Email us
                    </p>
                    <p className="text-white font-semibold text-lg">
                      itech@gmail.com
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side: The Form */}
            <div className="p-8 md:p-16">
              <motion.form
                ref={form}
                onSubmit={sendEmail}
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
                      Name
                    </label>
                    <input
                      name="name"
                      required
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-white transition-all placeholder:text-gray-600"
                    />
                  </div>

                  {/* Subject Dropdown */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
                      Subject
                    </label>
                    <select
                      name="title"
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-gray-400 transition-all appearance-none cursor-pointer"
                    >
                      <option className="bg-gray-900">Web Development</option>
                      <option className="bg-gray-900">Mobile App</option>
                      <option className="bg-gray-900">
                        Mobile & Web Development
                      </option>
                      <option className="bg-gray-900">Design & Drafting</option>
                    </select>
                  </div>
                </div>

                {/* Message - Increased rows to 6 for better layout balance */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    placeholder="What are we building?"
                    rows={6}
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-white transition-all placeholder:text-gray-600 resize-none"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-5 font-black uppercase tracking-[0.2em] text-xs rounded-2xl transition-all shadow-xl flex items-center justify-center gap-3 group ${
                    status === "success"
                      ? "bg-green-600 shadow-green-600/20"
                      : status === "error"
                        ? "bg-red-600 shadow-red-600/20"
                        : "bg-indigo-600 hover:bg-indigo-500 shadow-indigo-600/20"
                  } text-white`}
                >
                  {status === "idle" && "Start Project"}
                  {status === "sending" && "Sending..."}
                  {status === "success" && "Message Sent!"}
                  {status === "error" && "Try Again"}

                  {status === "idle" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  )}
                </motion.button>
              </motion.form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
