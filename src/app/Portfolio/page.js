// src/app/skills/page.js
'use client';
import React, { useState, useEffect } from 'react';
import { SkillsPageSkeleton } from '../components/skeleton';
import { motion } from 'framer-motion';
import ProjectsLayout from '../components/ProjectsLayout';
import { slideInPage } from '../motionUtils/animation';

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
    <motion.div
      variants={slideInPage}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
     {loading ? <SkillsPageSkeleton /> : <ProjectsLayout />}
    </motion.div>
  );
}
