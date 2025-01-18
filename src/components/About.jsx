'use client';
import React, { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';
import { motion } from 'framer-motion';
import LeftColumn from './leftColumn';
import RightColumn from './rightColumn';
import { HomePageSkeleton } from '@/components/skeleton';

const inter = Inter({ subsets: ['latin'] });

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function About() {
  const [loading, setLoading] = useState(true);
  const skills = [
    { percentage: 90, label: 'Frontend', description: 'React, Next.js, and more' },
    { percentage: 85, label: 'Backend', description: 'Node.js, Express, MongoDB' },
    { percentage: 80, label: 'Version Control', description: 'GitHub, Git' },
    { percentage: 70, label: 'Design', description: 'Figma, Adobe XD' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className={`min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 ${inter.className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
    >
      {loading ? (
        <HomePageSkeleton />
      ) : (
        <main className="w-full pt-16 px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-7xl mx-auto"
            variants={containerVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg shadow-gray-200/50 p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <LeftColumn />
              </motion.div>
              
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg shadow-gray-200/50 p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <RightColumn skills={skills} />
              </motion.div>
            </div>
          </motion.div>
        </main>
      )}
    </motion.div>
  );
}