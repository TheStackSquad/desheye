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
      className="relative flex flex-col justify-between min-h-[450px]
      sm:min-h-[500px] lg:min-h-[550px] bg-gradient-to-br from-amber-700
      via-orange-600 to-rose-600 rounded-[2rem] p-6 sm:p-8 md:p-7 lg:p-3 overflow-hidden"
    >
      {/* Enhanced gradient overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

      {/* TOP SECTION */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full z-10 gap-6 sm:gap-4 md:gap-6">
        {/* CTA Button */}
        <Link href="/about" className="w-full sm:w-auto">
          <motion.button
            variants={textStaggerVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden bg-white text-gray-900 px-8 py-4 sm:px-6 sm:py-3 md:px-8 md:py-3.5 rounded-full font-medium flex items-center justify-center gap-2 transition-all duration-300 w-full sm:w-auto sm:min-w-[160px] shadow-lg hover:shadow-xl"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 translate-y-full group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 group-hover:text-white group-focus:text-white transition-colors duration-300 text-base sm:text-sm md:text-base font-semibold">
              Learn More
            </span>
            <ArrowRight className="w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5 relative z-10 group-hover:text-white group-focus:text-white transition-colors duration-300" />
          </motion.button>
        </Link>

        {/* Role & Stack - Desktop & Mobile Responsive */}
        <motion.div variants={textStaggerVariants} className="w-full sm:w-auto">
          {/* Desktop Layout (md and up) */}
          <div className="hidden md:block text-right space-y-4">
            <div className="space-y-0.5">
              <motion.p
                variants={textStaggerVariants}
                className="text-white text-sm lg:text-base font-semibold"
              >
                Lead Dev for
              </motion.p>
              <motion.p
                variants={textStaggerVariants}
                className="text-white text-sm lg:text-base font-semibold"
              >
                Stacc Sessions
              </motion.p>
            </div>
            <div className="space-y-0.5">
              <motion.p
                variants={textStaggerVariants}
                className="text-white/90 text-xs lg:text-sm font-medium"
              >
                Full Stack Developer
              </motion.p>
              <motion.p
                variants={textStaggerVariants}
                className="text-white/90 text-xs lg:text-sm font-medium"
              >
                MERN & Golang
              </motion.p>
            </div>
            <motion.div variants={textStaggerVariants} className="pt-1">
              <motion.p
                variants={textStaggerVariants}
                className="text-white/80 text-xs lg:text-sm font-medium"
              >
                Lagos, Nigeria 🇳🇬
              </motion.p>
            </motion.div>
          </div>

          {/* Mobile & Tablet Layout (below md) */}
          <div className="md:hidden space-y-3">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
              <div className="space-y-1">
                <motion.p
                  variants={textStaggerVariants}
                  className="text-white text-base sm:text-sm font-semibold"
                >
                  Lead Dev for Stacc Sessions
                </motion.p>
                <motion.p
                  variants={textStaggerVariants}
                  className="text-white/90 text-sm font-medium"
                >
                  Full Stack Dev • MERN & Golang
                </motion.p>
              </div>
              <motion.div
                variants={textStaggerVariants}
                className="sm:text-right"
              >
                <motion.p
                  variants={textStaggerVariants}
                  className="text-white/80 text-sm font-medium"
                >
                  Lagos, Nigeria 🇳🇬
                </motion.p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM SECTION */}
      <div
        className="flex flex-col sm:flex-row justify-content: space-between items-start sm:items-end w-full z-10
      gap-3 sm:gap-2 md:gap-2 W-full"
      >
        {/* Name & Icon */}
        <motion.div
          variants={textStaggerVariants}
          className="flex items-center gap-2 sm:gap-5 md:gap-2 lg:gap-4"
        >
          <motion.div variants={textStaggerVariants} className="flex-shrink-0">
            <Code2 className="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white drop-shadow-lg" />
          </motion.div>
          <motion.h2
            variants={textStaggerVariants}
            className="text-6xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-none tracking-tight"
          >
            Desheye
          </motion.h2>
        </motion.div>

        {/* Optional: Add a decorative element on desktop */}
        <motion.div
          variants={textStaggerVariants}
          className="hidden lg:flex items-end gap-2 text-white/40"
        >
          <div className="w-16 h-px bg-white/40"></div>
          <span className="text-xs font-medium tracking-wider uppercase">
            Portfolio
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
