// src/components/home/projectsShowcase.js

"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useState } from "react";

import { uiData } from "@/data/dataUI";
import {
  containerStagger,
  cardStaggerVariants,
  textStaggerVariants,
} from "@/animation/homeAnimate";

const projects = uiData.featuredWork.projects;

// --- Enhanced Project Card Component ---
const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const slug = project.title.toLowerCase().replace(/\s+/g, "-");
 const href = `/work/${project.slug}`;
  const hasImage = project.image && project.image !== "";

  return (
    <Link href={href} className="block group">
      <motion.div
        variants={cardStaggerVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.02, y: -4 }}
        whileTap={{ scale: 0.98 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl hover:shadow-2xl 
                transition-all duration-500 overflow-hidden h-full relative
                border border-gray-100 hover:border-indigo-200"
      >
        {/* Animated gradient background on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={false}
        />

        {/* Content wrapper with relative positioning */}
        <div className="relative z-10">
          {/* Project Image Container with enhanced effects */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-gray-100 to-gray-200">
            {hasImage ? (
              <>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index === 0}
                />

                {/* Overlay on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 via-transparent to-transparent flex items-end justify-center pb-4"
                >
                  <span className="text-white font-semibold text-sm flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    View Details
                  </span>
                </motion.div>
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100">
                <span className="text-indigo-600 text-sm font-semibold">
                  {project.title} Preview
                </span>
              </div>
            )}

            {/* Project number badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
            >
              <span className="text-sm font-bold text-indigo-600">
                {String(index + 1).padStart(2, "0")}
              </span>
            </motion.div>
          </div>

          {/* Text Content with stagger animation */}
          <motion.div
            className="space-y-2 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-2xl font-extrabold text-gray-900 leading-tight group-hover:text-indigo-600 transition-colors duration-300">
              {project.title}
            </h4>
            <p className="text-sm text-gray-600 font-medium leading-relaxed">
              {project.tagline}
            </p>
          </motion.div>

          {/* Enhanced CTA Button */}
          <motion.div className="relative overflow-hidden bg-gray-900 text-white px-6 py-3.5 rounded-full font-semibold flex items-center justify-between gap-3 transition-all duration-300 group/button">
            {/* Animated gradient background */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
              initial={{ x: "-100%" }}
              animate={{ x: isHovered ? "0%" : "-100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />

            {/* Button content */}
            <span className="relative z-10 text-sm">View Project</span>
            <motion.div
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="w-4 h-4 relative z-10" />
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative corner accent */}
        <motion.div
          className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full"
          initial={false}
        />
      </motion.div>
    </Link>
  );
};

// --- Main Component ---
export default function ProjectsShowcase() {
  return (
    <motion.div
      variants={containerStagger}
      initial="hidden"
      animate="visible"
      className="flex flex-col h-full min-h-[600px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-[2rem] p-4 md:p-8 overflow-hidden"
    >
      {/* Header with enhanced styling */}
      <motion.div variants={textStaggerVariants} className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <motion.div
            className="w-1 h-8 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.5 }}
          />
          <h3 className="text-4xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            {uiData.featuredWork.heading}
          </h3>
        </div>
        <p className="text-gray-600 text-lg ml-4">
          Explore my recent portfolio showcasing innovative solutions
        </p>
      </motion.div>

      {/* Project Cards Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerStagger}
        className="flex flex-col space-y-6 mb-8"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </motion.div>

      {/* Enhanced "See All" CTA */}
      <motion.div
        variants={textStaggerVariants}
        className="mt-auto pt-8 flex justify-center"
      >
        <Link href="/work">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center gap-3 group"
          >
            <span className="relative z-10">See All Work</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5 relative z-10" />
            </motion.div>

            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
