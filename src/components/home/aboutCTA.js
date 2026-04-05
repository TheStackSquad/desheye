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
        sm:min-h-[500px] lg:min-h-[550px] rounded-[2rem] p-6 sm:p-8 md:p-7 lg:p-8
        overflow-hidden bg-[#0D0F1A]"
    >
      {/* ── Ambient glow blobs ─────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-24 -right-20 w-80 h-80 rounded-full
          bg-[#7B5CF0]/20 blur-[80px]"
        />
        <div
          className="absolute -bottom-16 -left-12 w-64 h-64 rounded-full
          bg-[#FF4D00]/15 blur-[70px]"
        />
      </div>

      {/* ── Subtle grid texture ───────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── TOP SECTION ──────────────────────────────────── */}
      <div
        className="relative z-10 flex flex-col sm:flex-row justify-between
        items-start sm:items-center w-full gap-6 sm:gap-4"
      >
        {/* CTA button */}
        <Link href="/about" className="w-full sm:w-auto">
          <motion.button
            variants={textStaggerVariants}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="group relative overflow-hidden bg-white/8 border border-white/15
              text-white px-8 py-3.5 rounded-full font-cinzel text-sm font-semibold
              tracking-wide flex items-center justify-center gap-2
              w-full sm:w-auto hover:border-white/30 transition-colors duration-300"
          >
            <span
              className="absolute inset-0 bg-gradient-to-r from-[#FF4D00]/20 to-[#7B5CF0]/20
              opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative z-10">Learn More</span>
            <ArrowRight
              className="w-4 h-4 relative z-10 group-hover:translate-x-0.5
              transition-transform duration-200"
            />
          </motion.button>
        </Link>

        {/* Role / stack info */}
        <motion.div variants={textStaggerVariants} className="w-full sm:w-auto">
          {/* Desktop */}
          <div className="hidden md:block text-right space-y-3">
            <div>
              <p className="text-white text-sm font-semibold font-cinzel tracking-wide">
                Lead Dev for
              </p>
              <p className="text-white text-sm font-semibold font-cinzel tracking-wide">
                Stacc Sessions
              </p>
            </div>
            <div>
              <p className="text-white/50 text-xs font-medium">
                Full Stack Developer
              </p>
              <p className="text-white/50 text-xs font-medium">
                MERN &amp; Golang
              </p>
            </div>
            <p className="text-white/35 text-xs tracking-wider">
              Lagos, Nigeria 🇳🇬
            </p>
          </div>

          {/* Mobile */}
          <div className="md:hidden space-y-1">
            <p className="text-white text-sm font-semibold font-cinzel">
              Lead Dev · Stacc Sessions
            </p>
            <p className="text-white/50 text-sm">
              Full Stack Dev · MERN &amp; Golang
            </p>
            <p className="text-white/35 text-xs">Lagos, Nigeria 🇳🇬</p>
          </div>
        </motion.div>
      </div>

      {/* ── BOTTOM SECTION ───────────────────────────────── */}
      <div
        className="relative z-10 flex flex-col sm:flex-row justify-between
        items-start sm:items-end w-full gap-3"
      >
        <motion.div
          variants={textStaggerVariants}
          className="flex items-center gap-3"
        >
          <Code2 className="w-10 h-10 lg:w-12 lg:h-12 text-[#FF4D00] flex-shrink-0" />
          <h2
            className="font-cinzel text-6xl sm:text-5xl lg:text-7xl xl:text-8xl
            font-bold text-white leading-none tracking-tight"
          >
            Desheye
          </h2>
        </motion.div>

        <motion.div
          variants={textStaggerVariants}
          className="hidden lg:flex items-end gap-3"
        >
          <div className="w-14 h-px bg-gradient-to-r from-[#FF4D00] to-[#7B5CF0]" />
          <span className="text-white/30 text-xs font-cinzel tracking-widest uppercase">
            Portfolio
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}