// src/components/home/projectsShowcase.js
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Assuming you've corrected the import path based on the previous error:
import { uiData } from "@/data/dataUI";
import {
  containerStagger,
  cardStaggerVariants,
  textStaggerVariants,
} from "@/animation/homeAnimate";

// Use the projects array from the imported data
const projects = uiData.featuredWork.projects;

// --- Project Card Component ---
const ProjectCard = ({ project, index }) => {
  // Construct the slug page link (assuming project title is converted to a slug)
  // For a simple ID-based system, we'll use the index for demonstration,
  // but a unique ID from the data would be better in production.
  const slug = project.title.toLowerCase().replace(/\s+/g, "-");
  const href = `/work/${slug}`;

  // NOTE: If your slug page uses a numerical ID, replace 'slug' with a unique ID from your project data.

  return (
    <Link href={href}>
      <motion.div
        key={index}
        variants={cardStaggerVariants}
        whileHover={{ scale: 1.02 }} // Subtle card lift
        whileTap={{ scale: 0.98 }}
        className="block bg-white rounded-3xl p-4 h-[400px] sm:p-6 shadow-xl hover:shadow-2xl 
        transition-all duration-300 overflow-hidden group"
      >
        {/* Project Image */}
        <div className="relative w-full h-[200px]  lg:h-[200px] sm:h-64 rounded-xl overflow-hidden mb-4">
          {/* Using a placeholder since the image is likely not available in this environment */}
          <div className="w-full h-[200px]  lg:h-[300px] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            {/* If using a real image, uncomment this: */}
            <Image 
               src={project.image} 
               alt={project.title} 
               fill 
               className="object-cover transition-transform duration-500 group-hover:scale-105"
             />
            <span className="text-gray-500 text-sm">{project.title} Image</span>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-1 mb-6">
          <h4 className="text-lg font-extrabold text-gray-900 leading-tight">
            {project.title}
          </h4>
          <p className="text-sm text-gray-600 font-medium">{project.tagline}</p>
        </div>

        {/* CTA Button (using the provided animated style) */}
        <motion.button
          variants={textStaggerVariants}
          // Reset card-level animation on button focus/hover for clarity
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 1 }}
          className="relative overflow-hidden bg-gray-900 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all duration-300 focus:outline-none"
        >
          {/* Animated background - Use colors relevant to a portfolio/work theme (e.g., blue/indigo) */}
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 translate-x-full group-hover:translate-x-0 group-focus:translate-x-0 transition-transform duration-300 ease-out" />

          {/* Button content */}
          <span className="relative z-10 group-hover:text-white group-focus:text-white transition-colors duration-300">
            View Project
          </span>
          <ArrowRight className="w-4 h-4 relative z-10 group-hover:text-white group-focus:text-white transition-colors duration-300" />
        </motion.button>
      </motion.div>
    </Link>
  );
};

// --- Main Component ---
export default function ProjectsShowcase() {
  return (
    <motion.div
      variants={containerStagger}
      // Stack layout for both viewports, using space-y for separation
      className="flex flex-col h-full min-h-[600px] bg-gray-50 rounded-[2rem] p-6 md:p-8 overflow-hidden"
    >
      {/* Header */}
      <motion.div variants={textStaggerVariants} className="mb-8">
        <h3 className="text-3xl font-extrabold text-gray-900">
          {uiData.featuredWork.heading}
        </h3>
        <p className="text-gray-600">A glimpse into my recent portfolio.</p>
      </motion.div>

      {/* Project Cards (Stacked in a column) */}
      <div className="flex flex-col space-y-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      {/* Final "See All" CTA */}
      <div className="mt-10 flex justify-center">
        <Link href="/work">
          <motion.button
            variants={textStaggerVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-200 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-300 transition-colors flex items-center gap-2"
          >
            See All Work
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}
