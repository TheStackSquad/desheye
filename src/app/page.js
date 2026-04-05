// src/app/page.js
"use client";

import { motion } from "framer-motion";
import AboutCta from "@/components/home/aboutCTA";
import ExperienceCta from "@/components/home/experienceCTA";
import ProjectsShowcase from "@/components/home/projectShowcase";
import {
  gridVariants,
  leftGridVariants,
  rightGridVariants,
} from "@/animation/homeAnimate";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EEEAF4] p-4 md:p-8 lg:p-12">
      <motion.div
        variants={gridVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1400px] mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left column */}
          <motion.div
            variants={leftGridVariants}
            className="space-y-6 lg:space-y-8"
          >
            <AboutCta />
            <ExperienceCta />
          </motion.div>

          {/* Right column */}
          <motion.div variants={rightGridVariants} className="h-full">
            <ProjectsShowcase />
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}