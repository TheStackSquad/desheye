// src/app/skills/page.js
'use client';
import React, { useState, useEffect } from 'react';
import { SkillsPageSkeleton } from '@/components/skeleton';
import { motion } from 'framer-motion';
import ProjectsLayout from '@/components/SkillsUI';
import { slideInPage } from '@/components/motionUtils/animation';

export default function Portfolio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="portfolioUI min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
       <div className="container mx-auto px-4 py-8 md:py-16">
      <motion.div
        variants={slideInPage}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {loading ? <SkillsPageSkeleton /> : <ProjectsLayout />}
      </motion.div>
    </div>
    </div>
  );
}
