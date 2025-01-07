//src/app/page.js
'use client'
import React, { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';
import { motion } from 'framer-motion';
import { fadeInUp,
  slideInPage,
  staggerChildren
} from '../motionUtils/animation';
import LeftColumn from '../components/leftColumn';
import RightColumn from '../components/rightColumn';
import { HomePageSkeleton } from './skeleton';
import '../../css/Home.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [loading, setLoading] = useState(true);
  const skills = [
    { percentage: 90, label: 'Frontend', description: 'React, Next.js, and more' },
    { percentage: 85, label: 'Backend', description: 'Node.js, Express, MongoDB' },
    { percentage: 80, label: 'Version Control', description: 'GitHub, Git' },
    { percentage: 70, label: 'Design', description: 'Figma, Adobe XD' },
  ];

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
   <motion.div
      className={`portfolio-page ${inter.className}`}
      variants={slideInPage}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      { loading ? (
        <HomePageSkeleton />
      ) : (
        <main className="main-content">
        <motion.div
          className="content-grid"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp}>
              <LeftColumn />
          </motion.div>
          <motion.div variants={fadeInUp}>
              <RightColumn skills={skills} />
          </motion.div>
        </motion.div>
      </main>
      )}
      
    </motion.div>
  );
}