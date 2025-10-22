// src/app/work/[slug]/page.js

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { uiData } from "@/data/dataUI";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Tag,
  Star,
  Code2,
} from "lucide-react";

const projects = uiData.featuredWork.projects;

export default function ProjectPage({ params }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const slug = params.slug;
  // const project = projects.find((p) => p.slug === slug);

  // Refactoring the lookup to log each check
  const project = projects.find((p, index) => {
    // 2. Log the slug property from the data object for comparison
    console.log(
      `  [${index}] Comparing project slug: '${p.slug}' against '${slug}'`
    );
    return p.slug === slug;
  });
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  console.log("--- ProjectPage Lookup Start ---");
  console.log(`URL Parameter Slug: '${slug}'`);
  console.log(`Total Projects in Data: ${projects.length}`);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Project Not Found
          </h1>
          <Link href="/">
            <button className="text-indigo-600 hover:text-indigo-700 font-semibold">
              ← Back
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // Enhanced animation variants
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 20, stiffness: 100 },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", damping: 20, stiffness: 100 },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", damping: 20, stiffness: 100 },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", damping: 20, stiffness: 100 },
    },
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      className="max-w-[1400px] mx-auto p-4 md:p-8 lg:p-12 min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50/30"
    >
      {/* Back Button with enhanced styling */}
      <motion.div variants={slideInLeft} className="mb-12">
        <Link href="/">
          <motion.button
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-600 hover:text-indigo-600 transition-all flex items-center gap-2 font-semibold group bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back
          </motion.button>
        </Link>
      </motion.div>

      {/* Hero Section with animated header */}
      <div className="text-center mb-16">
        <motion.div
          variants={slideUp}
          className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
        >
          <Star className="w-4 h-4 fill-indigo-700" />
          Featured Project
        </motion.div>

        <motion.h1
          variants={slideUp}
          className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r
          from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent leading-tight mb-4"
        >
          {project.title}
        </motion.h1>

        <motion.p
          variants={slideUp}
          className="text-xl md:text-2xl text-gray-600 font-medium max-w-3xl mx-auto flex items-center justify-center gap-3 flex-wrap"
        >
          <Tag className="w-5 h-5 text-indigo-600" />
          {project.tagline}
        </motion.p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Main Image with parallax effect */}
          <motion.div
            variants={scaleIn}
            className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl
            bg-gradient-to-br from-indigo-100 to-purple-100 group"
          >
            <Image
              src={project.image || "/placeholder.jpg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 66vw"
              priority
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Description Card */}
          <motion.div
            variants={slideUp}
            className="p-8 md:p-12 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full" />
              <h2 className="text-3xl font-bold text-gray-900">
                Project Overview
              </h2>
            </div>
            <div
              className="text-lg text-gray-700 leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{
                __html: project.description.replace(
                  /\*\*([^*]+)\*\*/g,
                  "<strong class='text-indigo-700 font-semibold'>$1</strong>"
                ),
              }}
            />
          </motion.div>
        </div>

        {/* Right Column - Sticky Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Links Card */}
          <motion.div
            variants={slideInRight}
            className="p-6 bg-white rounded-3xl shadow-xl border border-gray-100 sticky top-8"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <ExternalLink className="w-5 h-5 text-indigo-600" />
              Project Links
            </h3>
            <div className="space-y-3">
              <motion.a
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-xl transition-all font-semibold text-white shadow-lg hover:shadow-xl group"
              >
                <span>View Live Project</span>
                <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-gray-900 hover:bg-gray-800 rounded-xl transition-all font-semibold text-white shadow-lg hover:shadow-xl group"
              >
                <span>Source Code</span>
                <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </motion.a>
            </div>
          </motion.div>

          {/* Technologies Card */}
          <motion.div
            variants={slideInRight}
            className="p-6 bg-white rounded-3xl shadow-xl border border-gray-100"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-indigo-600" />
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Next.js",
                "Redux",
                "Tailwind CSS",
                "Express.js",
                "MongoDB",
              ].map((tech, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 text-sm font-bold rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 cursor-default hover:shadow-md transition-shadow"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div variants={slideUp} className="text-center py-12">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s Build Something Amazing
          </h3>
          <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can bring your
            ideas to life.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Start a Conversation
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
