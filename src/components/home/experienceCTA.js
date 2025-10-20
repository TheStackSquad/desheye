// src/components/home/ExperienceCta.js

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { uiData } from "@/data/dataUI"; 
import { textStaggerVariants, containerStagger } from "@/animation/homeAnimate";

// Component to represent a single skill in the grid
const SkillCard = ({ name, icon }) => (
  <motion.div
    variants={textStaggerVariants}
    whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.08)" }}
    whileTap={{ scale: 0.98 }}
    className="flex flex-col items-center justify-center p-3 sm:p-4 border
    border-gray-100 rounded-xl bg-white transition-all duration-300 cursor-pointer text-center"
  >
    {/* Icon is pre-sized in uiData, so we just render it */}
    <div className="mb-2">{icon}</div> 
    <p className="text-xs font-semibold text-gray-700 mt-1">{name}</p>
  </motion.div>
);

export default function SkillCta() {
  const skillsToShow = uiData.about.skills.slice(0, 16); 

  return (
    <motion.div
      variants={containerStagger}
      className="relative flex flex-col h-[650px] lg:h-[630px] bg-gray-50 bg-gray-300 rounded-[2rem] p-6  py-9 mb-5 md:p-8 overflow-hidden"
    >
      {/* Title/Header */}
      <div className="mb-8 flex items-center gap-3">
        <Zap className="w-6 h-6 text-indigo-600" />
        <h2 className="text-2xl font-bold text-gray-900">Core Tech Stack</h2>
      </div>


      <div
        className="grid grid-cols-3 sm:grid-cols-4 gap-3 md:gap-4 flex-grow"
      >
        {skillsToShow.map((skill, index) => (
          // Add a check to ensure we don't go over 16 items for the 4x4 constraint
          // The index check is optional since we slice the data, but good for safety
          <SkillCard key={index} name={skill.name} icon={skill.icon} />
        ))}
        {/* Fill remaining slots with a placeholder if fewer than 16 */}
        {Array.from({ length: 16 - skillsToShow.length }).map((_, index) => (
            <div key={`placeholder-${index}`} className="hidden sm:block p-3 sm:p-4 rounded-xl bg-gray-100/50"></div>
        ))}
      </div>

      {/* --- */}

      {/* CTA Button at the bottom */}
      <div className="mt-8 mb-5 h-[150px] flex justify-center">
        <Link href="/skills">
          <motion.button
            variants={textStaggerVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/30"
          >
            See More Skills
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}
