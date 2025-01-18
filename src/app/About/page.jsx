'use client'

import React from 'react';
import { motion } from 'framer-motion';
import LeftColumn from '@/components/leftColumn';
import RightColumn from '@/components/rightColumn';

export default function About() {
  const skills = [
    { percentage: 90, label: 'Frontend', description: 'React, Next.js, and more' },
    { percentage: 85, label: 'Backend', description: 'Node.js, Express, MongoDB' },
    { percentage: 80, label: 'Version Control', description: 'GitHub, Git' },
    { percentage: 70, label: 'Design', description: 'Figma, Adobe XD' },
  ];

  return (
    <div className="aboutUI min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 md:gap-8 max-w-7xl mx-auto"
        >
          <div className="w-full">
            <LeftColumn />
          </div>
          <div className="w-full">
            <RightColumn skills={skills} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}