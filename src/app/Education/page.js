// src/app/Education/page.js
'use client';

import React, { useState, useEffect } from 'react';
import { EducationPageSkeleton } from '../components/skeleton';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaBook, FaAward, FaChevronDown } from 'react-icons/fa';
import '../../css/educationPage.css';
import Certificate from '../asset/img/DesheyeCcertificate.webp';

export default function EducationPage() {
  const [showCertificate, setShowCertificate] = useState(false);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  const educationData = {
    school: "ALX Software Engineering",
    period: "2023 - 2024",
    description: "Intensive full-stack software engineering program focusing on practical projects and real-world applications. Learned modern web development technologies and best practices through hands-on experience.",
    highlights: [
      "Developed full-stack applications using React and Node.js",
      "Collaborated with international teams on complex projects",
      "Mastered Git workflow and agile methodologies",
      "Built scalable backend systems with Nodejs"
    ],
    certificateUrl: Certificate
  };

  return (
    <div className="education-page">
      { loading ? <EducationPageSkeleton /> : (
        <div className="education-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="education-header"
        >
          <div className="main-wrap">
            <h1 className="education-title">Educational Journey</h1>
            <div className="education-period">
              <FaBook className="icon" />
              <span>{educationData.period}</span>
            </div>
          </div>

          <motion.div 
            className="education-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="card-header">
              <div className="icon-container">
                <FaAward className="icon" />
              </div>
              <div>
                <h2 className="school-name">{educationData.school}</h2>
                <p className="school-description">{educationData.description}</p>
              </div>
            </div>

            <ul className="highlights">
              {educationData.highlights.map((highlight, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="highlight-item"
                >
                  <div className="highlight-marker" />
                  {highlight}
                </motion.li>
              ))}
            </ul>

            <motion.button
              className="certificate-toggle"
              onClick={() => setShowCertificate(!showCertificate)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {showCertificate ? 'Hide Certificate' : 'View Certificate'}
              <FaChevronDown 
                className={`chevron-icon ${showCertificate ? 'rotated' : ''}`}
              />
            </motion.button>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: showCertificate ? 'auto' : 0,
                opacity: showCertificate ? 1 : 0
              }}
              className="certificate-container"
            >
              <Image
                src={educationData.certificateUrl}
                alt="ALX Certificate"
                className="certificate-image"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      )}
      
    </div>
  );
}
