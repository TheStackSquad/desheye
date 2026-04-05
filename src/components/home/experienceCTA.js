// src/components/home/ExperienceCta.js

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { uiData } from "@/data/dataUI";
import { textStaggerVariants, containerStagger } from "@/animation/homeAnimate";

const SkillCard = ({ name, icon }) => (
  <motion.div
    variants={textStaggerVariants}
    whileHover={{ scale: 1.06, y: -2 }}
    whileTap={{ scale: 0.97 }}
    className="flex flex-col items-center justify-center p-3 sm:p-4
      rounded-2xl bg-white border border-gray-100
      hover:border-[#7B5CF0]/30 hover:shadow-lg hover:shadow-violet-100
      transition-all duration-300 cursor-pointer text-center group"
  >
    <div className="mb-2 opacity-90 group-hover:opacity-100 transition-opacity">
      {icon}
    </div>
    <p
      className="text-[11px] font-semibold text-gray-600 group-hover:text-[#7B5CF0]
      font-cinzel tracking-wide transition-colors duration-200"
    >
      {name}
    </p>
  </motion.div>
);

export default function SkillCta() {
  const skillsToShow = uiData.about.skills.slice(0, 12);

  return (
    <motion.div
      variants={containerStagger}
      className="relative flex flex-col bg-[#F5F3FF] rounded-[2rem]
        p-6 py-8 md:p-8 mb-5 overflow-hidden"
      style={{ minHeight: "580px" }}
    >
      {/* Subtle violet glow top-right */}
      <div
        className="pointer-events-none absolute -top-20 -right-16 w-64 h-64
        rounded-full bg-[#7B5CF0]/10 blur-[60px]"
      />

      {/* Header */}
      <div className="relative z-10 mb-7 flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#7B5CF0] to-[#FF4D00]
          flex items-center justify-center flex-shrink-0"
        >
          <Zap className="w-4 h-4 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900 font-cinzel tracking-tight">
            Core Tech Stack
          </h2>
          <p className="text-xs text-gray-400 mt-0.5">
            Tools I build with daily
          </p>
        </div>
      </div>

      {/* Skills grid – 3 cols mobile, 4 cols sm+ */}
      <div className="relative z-10 grid grid-cols-3 sm:grid-cols-4 gap-3 flex-1">
        {skillsToShow.map((skill, i) => (
          <SkillCard key={i} name={skill.name} icon={skill.icon} />
        ))}
        {Array.from({ length: 12 - skillsToShow.length }).map((_, i) => (
          <div
            key={`ph-${i}`}
            className="hidden sm:block rounded-2xl bg-white/50"
          />
        ))}
      </div>

      {/* CTA */}
      <div className="relative z-10 mt-8 flex justify-center">
        <Link href="/skills">
          <motion.button
            variants={textStaggerVariants}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group relative overflow-hidden bg-[#0D0F1A] text-white
              px-8 py-4 rounded-full font-cinzel text-sm font-semibold
              tracking-wide flex items-center gap-2.5 shadow-xl
              shadow-gray-900/20 transition-shadow duration-300
              hover:shadow-gray-900/40"
          >
            <span
              className="absolute inset-0 bg-gradient-to-r from-[#FF4D00] to-[#7B5CF0]
              opacity-0 group-hover:opacity-100 transition-opacity duration-400"
            />
            <span className="relative z-10">See More Skills</span>
            <ArrowRight
              className="w-4 h-4 relative z-10 group-hover:translate-x-0.5
              transition-transform duration-200"
            />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}