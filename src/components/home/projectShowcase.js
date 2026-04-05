// src/components/home/projectsShowcase.js


"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { uiData } from "@/data/dataUI";
import {
  containerStagger,
  cardStaggerVariants,
  textStaggerVariants,
} from "@/animation/homeAnimate";

const projects = uiData.featuredWork.projects;

// Accent colours per project index (matches redesign preview)
const ACCENTS = [
  { from: "#4f3adb", to: "#1a1040", text: "#a78bfa" }, // violet
  { from: "#1d4db5", to: "#0f1a2e", text: "#60a5fa" }, // blue
  { from: "#c23a00", to: "#1a0a00", text: "#fb923c" }, // orange
  { from: "#0d6e5a", to: "#0a1a14", text: "#34d399" }, // teal
];

// ── Single project card ───────────────────────────────────────────────────────
const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);
  const accent = ACCENTS[index % ACCENTS.length];
  const href = `/work/${project.slug}`;

  return (
    <Link href={href} className="block group">
      <motion.div
        variants={cardStaggerVariants}
        whileHover={{ y: -4 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="bg-white rounded-3xl overflow-hidden border border-gray-100
          hover:border-[#7B5CF0]/20 hover:shadow-2xl hover:shadow-violet-100/60
          transition-all duration-500 relative"
      >
        {/* Image */}
        <div
          className="relative w-full aspect-video overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${accent.to}, ${accent.from})`,
          }}
        >
          {project.image ? (
            <>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700
                  group-hover:scale-105 group-hover:brightness-105"
                sizes="(max-width: 640px) 100vw, 50vw"
                priority={index === 0}
              />
              {/* Hover overlay */}
              <AnimatePresence>
                {hovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/50
                      via-transparent to-transparent flex items-end justify-center pb-4"
                  >
                    <span
                      className="flex items-center gap-2 text-white text-sm font-semibold
                      font-cinzel tracking-wide"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Details
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span
                className="font-cinzel font-bold text-2xl tracking-widest"
                style={{ color: accent.text }}
              >
                {project.title
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 3)}
              </span>
            </div>
          )}

          {/* Index badge */}
          <div
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90
            backdrop-blur-sm flex items-center justify-center shadow-md"
          >
            <span className="text-xs font-bold text-[#7B5CF0] font-cinzel">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Text + CTA */}
        <div className="p-5 sm:p-6">
          <h4
            className="text-xl font-extrabold text-gray-900 leading-tight mb-1
            group-hover:text-[#7B5CF0] transition-colors duration-300 font-cinzel
            tracking-tight"
          >
            {project.title}
          </h4>
          <p className="text-sm text-gray-500 mb-5 leading-relaxed">
            {project.tagline}
          </p>

          {/* CTA bar */}
          <div
            className="relative overflow-hidden rounded-full bg-[#0D0F1A] text-white
            px-5 py-3 flex items-center justify-between"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-[#FF4D00] to-[#7B5CF0]"
              initial={{ x: "-100%" }}
              animate={{ x: hovered ? "0%" : "-100%" }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            />
            <span className="relative z-10 text-sm font-semibold font-cinzel tracking-wide">
              View Project
            </span>
            <motion.div
              animate={{ x: hovered ? 4 : 0 }}
              transition={{ duration: 0.25 }}
              className="relative z-10"
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

// ── Main component ────────────────────────────────────────────────────────────
export default function ProjectsShowcase() {
  return (
    <motion.div
      variants={containerStagger}
      initial="hidden"
      animate="visible"
      className="flex flex-col h-full min-h-[600px] bg-[#F8F7FF] rounded-[2rem]
        p-4 md:p-8 overflow-hidden"
    >
      {/* Header */}
      <motion.div variants={textStaggerVariants} className="mb-8">
        <div className="flex items-center gap-3 mb-1.5">
          <motion.div
            className="w-1 h-8 rounded-full bg-gradient-to-b from-[#FF4D00] to-[#7B5CF0]"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.45 }}
          />
          <h3
            className="text-3xl sm:text-4xl font-extrabold text-gray-900
            font-cinzel tracking-tight"
          >
            {uiData.featuredWork.heading}
          </h3>
        </div>
        <p className="text-gray-400 text-sm ml-4 font-medium">
          Explore my recent portfolio showcasing innovative solutions
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerStagger}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-6"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </motion.div>
    </motion.div>
  );
}
