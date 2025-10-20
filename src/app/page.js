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
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8 lg:p-12">
      <motion.div
        variants={gridVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1400px] mx-auto"
      >
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column */}
          <motion.div
            variants={leftGridVariants}
            className="space-y-6 lg:space-y-8"
          >
            {/* Top Left - About CTA */}
            <AboutCta />

            {/* Bottom Left - Experience CTA */}
            <ExperienceCta />
          </motion.div>

          {/* Right Column */}
          <motion.div variants={rightGridVariants} className="h-full">
            {/* Projects Showcase */}
            <ProjectsShowcase />
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
