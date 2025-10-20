//src/app/work/[id]/page.js

"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
//import { useParams } from 'next/navigation';

// For canvas testing, we simulate these:
const mockSlug = "jollybargain-e-commerce";
const useParams = () => ({ id: mockSlug });

import { uiData } from "@/data/dataUI";

import { ArrowLeft, ExternalLink, Github, Tag } from "lucide-react";

// Animation variants for staggered appearance
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 15, stiffness: 100 },
  },
};

export default function ProjectPage() {
  const params = useParams();
  const slug = params.id;

  // Find the project data based on the slug using useMemo for optimization
  const project = useMemo(() => {
    return uiData.featuredWork.projects.find(
      (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
    );
  }, [slug]);

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen p-8 bg-gray-50">
        <div className="text-center p-10 bg-white rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold text-red-600 mb-4">
            404 - Project Not Found
          </h1>
          <p className="text-gray-600">
            The project with ID &quot;{slug}&quot; could not be located.
          </p>
          <Link href="/">
            <button className="mt-6 text-indigo-600 hover:text-indigo-800 transition-colors flex items-center gap-2 mx-auto">
              <ArrowLeft className="w-5 h-5" /> Back to Home
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // --- Project is Found, Render Details ---
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="max-w-[1400px] mx-auto p-4 md:p-8 lg:p-12 min-h-screen bg-gray-50"
    >
      {/* Back Button */}
      <motion.div variants={itemVariants} className="mb-8">
        <Link href="/">
          <button className="text-gray-600 hover:text-indigo-600 transition-colors flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" /> Back to Work
          </button>
        </Link>
      </motion.div>

      {/* Header and Tagline */}
      <div className="text-center mb-12">
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-3"
        >
          {project.title}
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-xl text-indigo-600 font-medium tracking-wide flex items-center justify-center gap-3"
        >
          <Tag className="w-5 h-5" /> {project.tagline}
        </motion.p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (Image and Description) */}
        <div className="lg:col-span-2 space-y-8">
          {/* Main Image */}
          <motion.div
            variants={itemVariants}
            className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gray-200"
          >
            <div className="w-full h-full flex flex-col items-center justify-center">
              <span className="text-4xl">💻</span>
              <p className="mt-2 text-gray-600">Project Screenshot / Mockup</p>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            variants={itemVariants}
            className="p-6 md:p-10 bg-white rounded-3xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Project Overview
            </h2>
            <p
              className="text-lg text-gray-700 leading-relaxed"
              // Using dangerouslySetInnerHTML to render bold markdown (**text**) from the data source
              dangerouslySetInnerHTML={{
                __html: project.description.replace(
                  /\*\*([^*]+)\*\*/g,
                  "<strong>$1</strong>"
                ),
              }}
            />
          </motion.div>
        </div>

        {/* Right Column (Details and Links) */}
        <div className="lg:col-span-1 space-y-6">
          {/* Links Section */}
          <motion.div
            variants={itemVariants}
            className="p-6 bg-white rounded-3xl shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
              Links
            </h3>
            <div className="space-y-3">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-indigo-50 hover:bg-indigo-100 rounded-xl transition-colors font-medium text-indigo-700"
              >
                <span>View Live Project</span>
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors font-medium text-gray-700"
              >
                <span>Source Code (GitHub)</span>
                <Github className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Technology/Stack Placeholder */}
          <motion.div
            variants={itemVariants}
            className="p-6 bg-white rounded-3xl shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
              Key Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "Redux", "Tailwind CSS", "Express.js", "MongoDB"]
                .slice(0, 5)
                .map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 text-sm font-semibold rounded-full bg-blue-100 text-blue-800"
                  >
                    {tech}
                  </span>
                ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer CTA */}
      <motion.div variants={itemVariants} className="mt-16 text-center">
        <a href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-lg font-bold text-white bg-indigo-600 hover:bg-indigo-700 px-10 py-4 rounded-full shadow-xl transition-all"
          >
            Discuss Your Project
          </motion.button>
        </a>
      </motion.div>
    </motion.div>
  );
}
