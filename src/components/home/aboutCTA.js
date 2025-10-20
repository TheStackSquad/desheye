// src/components/home/aboutCta.js
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";
import { textStaggerVariants, containerStagger } from "@/animation/homeAnimate";

export default function AboutCta() {
  return (
    <motion.div
      variants={containerStagger}
      // Use flex-col and justify-between for primary layout control.
      // Removed fixed height; now it's content-driven or uses min-h.
      className="relative flex flex-col justify-between min-h-[400px] bg-gradient-to-br from-amber-600 via-orange-500 to-rose-500 rounded-[2rem] p-6 md:p-10 overflow-hidden"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

      {/* ========================================================== */}
      {/* 1. TOP SECTION: CTA (Left) and Role/Stack (Right)         */}
      {/* Uses flex justify-between to push elements to the corners. */}
      {/* ========================================================== */}
      <div className="flex justify-between items-start w-full z-10">
        {/* TOP-LEFT: Learn More Button (CTA) */}
        <Link href="/about">
          <motion.button
            variants={textStaggerVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden bg-white text-gray-900 px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all duration-300"
          >
            {/* Animated background */}
            <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 translate-y-full group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-300 ease-out" />

            {/* Button content */}
            <span className="relative z-10 group-hover:text-white group-focus:text-white transition-colors duration-300">
              Learn More
            </span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:text-white group-focus:text-white transition-colors duration-300" />
          </motion.button>
        </Link>

        {/* TOP-RIGHT: Role & Stack */}
        <motion.div
          variants={textStaggerVariants}
          className="text-right space-y-1"
        >
          {/* Mobile vs. Desktop text alignment is handled here */}
          <div className="hidden md:block">
            <p className="text-white text-sm font-medium">Lead Dev for</p>
            <p className="text-white text-sm font-medium">Stacc Sessions</p>
            <p className="text-white/80 text-xs mt-3">Full Stack Developer</p>
            <p className="text-white/80 text-xs">MERN & Golang</p>
          </div>
          <div className="md:hidden">
            <p className="text-white/90 text-sm font-medium">
              Lead Dev for Stacc Sessions
            </p>
            <p className="text-white/80 text-xs">Full Stack Dev</p>
            <p className="text-white/80 text-xs">MERN & Golang</p>
          </div>
        </motion.div>
      </div>

      {/* ========================================================== */}
      {/* 2. BOTTOM SECTION: Name/Icon (Left) and Location (Right)   */}
      {/* Uses flex justify-between to push elements to the corners. */}
      {/* ========================================================== */}
      <div className="flex justify-between items-end w-full mt-10 z-10">
        {/* BOTTOM-LEFT: Name (Icon + Text) */}
        <motion.div
          variants={textStaggerVariants}
          className="flex items-center gap-4"
        >
          <Code2 className="w-8 h-8 text-white" />
          <h2 className="text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
            Desheye
          </h2>
        </motion.div>

        {/* BOTTOM-RIGHT: Location */}
        <motion.div variants={textStaggerVariants} className="text-right">
          <p className="text-white/70 text-xs md:text-sm">Lagos, Nigeria 🇳🇬</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
