// src/components/TeamUI.jsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { TeamPageSkeleton } from '@/components/skeleton';
import { fadeInUp,
  slideInPage,
  staggerChildren } from '@/components/motionUtils/animation';

const SkillBadge = ({ skill, level }) => (
  <div className="w-full mb-2">
    <span className="block text-sm font-medium text-gray-700">{skill}</span>
    <div className="w-full h-2 bg-gray-300 rounded">
      <motion.div
        className="h-full bg-blue-500 rounded"
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </div>
  </div>
);

const TeamMemberCard = ({ member }) => (
  <motion.div
    className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
    variants={fadeInUp}
    whileHover={{ y: -5 }}
  >
    <div className="relative">
    <Image
  src={member.image}
  alt={member.name}
  className="rounded-full mx-auto object-cover w-36 h-36"
  width={150}
  height={150}
  loading="lazy"
/>

      <div className="absolute inset-0 bg-black bg-opacity-30 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
        <div className="flex space-x-4">
          {member.social.map((link, index) => {
            const Icon = {
              github: Github,
              linkedin: Linkedin,
              twitter: Twitter
            }[link.platform];

            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500"
              >
                <Icon size={24} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
    <h3 className="mt-4 text-lg font-semibold text-center">{member.name}</h3>
    <p className="text-center text-sm text-gray-500">{member.role}</p>
    <p className="mt-2 text-sm text-gray-600 text-center">{member.bio}</p>
    <div className="mt-4">
      {member.skills.map((skill, index) => (
        <SkillBadge key={index} {...skill} />
      ))}
    </div>
  </motion.div>
);

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Peter Sudai",
      role: "Full Stack Developer",
      bio: "Passionate about creating scalable web applications and solving complex problems with elegant solutions.",
      image: '/asset/img/image1.webp',
      skills: [
        { skill: "Frontend Development", level: 90 },
        { skill: "Backend Development", level: 85 },
        { skill: "Database Design", level: 80 },
        { skill: "Version Control", level: 75 }
      ],
      social: [
        { platform: "github", url: "#" },
        { platform: "linkedin", url: "#" },
        { platform: "twitter", url: "#" }
      ]
    },
    {
      name: "Moyosore",
      role: "UI/UX Designer",
      bio: "Creating intuitive user experiences that delight and engage users.",
      image: '/asset/img/image2.webp',
      skills: [
        { skill: "Design Systems", level: 95 },
        { skill: "Prototyping", level: 90 },
        { skill: "User Research", level: 85 }
      ],
      social: [
        { platform: "linkedin", url: "#" },
        { platform: "twitter", url: "#" }
      ]
    },
    {
      name: "Bryan Sine",
      role: "Backend Engineer",
      bio: "Building robust server-side systems to power modern applications.",
      image: '/asset/img/image3.webp',
      skills: [
        { skill: "API Development", level: 90 },
        { skill: "Database Optimization", level: 85 },
        { skill: "Security", level: 80 }
      ],
      social: [
        { platform: "github", url: "#" },
        { platform: "linkedin", url: "#" },
        { platform: "twitter", url: "#" }
      ]
    },
    {
      name: "Opeyemi Adejo - Phillips",
      role: "Data Scientist",
      bio: "Turning raw data into actionable insights for business growth.",
      image: '/asset/img/moyosoreUi.webp',
      skills: [
        { skill: "Data Analysis ", level: 90 },
        { skill: "Machine Learning", level: 85 },
        { skill: "Visualization", level: 80 }
      ],

      social: [
        { platform: "github", url: "#" },
        { platform: "linkedin", url: "#" },
        { platform: "twitter", url: "#" }
      ]
    },
    // more team members here...
  ];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      variants={slideInPage}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {loading ? (
          <TeamPageSkeleton />
        ) : (
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-3xl font-bold text-gray-800">Meet The Team</h1>
              <p className="text-gray-600 teamUI leading-12 mt-2">
                A group of passionate developers dedicated to crafting exceptional digital experiences.
              </p>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            >
              {teamMembers.map((member, index) => (
                <motion.div variants={fadeInUp} key={index}>
                  <TeamMemberCard member={member} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
