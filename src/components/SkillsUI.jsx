'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
//eslint-disable-next-line
import { Mail, ExternalLink, Github } from 'lucide-react';

const SkillsUI = () => {
  const projects = [
    {
      title: "Food Delivery App",
      description: "Fullstack app that connects vendors and users. Upload cart, and secure payment features. Powered by Redux, it ensures efficient state management, real-time updates, and a responsive interface for an exceptional meal-ordering experience.",
      tags: ["React.js", "Redux", "MongoDB"],
      githubUrl: "https://github.com/TheStackSquad/desh-food-logistic-app",
      vercelUrl: "https://desh-food-logistic-app.vercel.app/",
    },
    {
      title: "A Portfolio Project",
      description: "Showcasing sleek modern UI design with captivating animations, built using Next.js and Framer Motion. A seamless blend of performance and aesthetics for a standout portfolio experience.",
      tags: ["Next.js", "Framer Motion", "Modern UI"],
      githubUrl: "https://github.com/TheStackSquad/desheye",
      vercelUrl: "https://desheye-thestacksquads-projects.vercel.app/"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with drag-and-drop interface and team features.",
      tags: ["Next.js", "Prisma", "tRPC"],
      githubUrl: "https://github.com/username/project3",
      vercelUrl: "https://project3.vercel.app",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            My Projects
          </motion.h1>
          <motion.p 
            className="max-w-2xl mx-auto text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            A collection of my recent work in web development. Each project demonstrates 
            different aspects of my technical skills and problem-solving approach.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Interested in working together?
          </h2>
          <a
            href="mailto:thefelainme@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-full hover:bg-purple-700 transition-colors duration-200"
          >
            <Mail className="w-5 h-5 mr-2" />
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsUI;