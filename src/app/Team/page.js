//src/app/Team/page.js
'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { TeamPageSkeleton } from '../components/skeleton';
import { fadeInUp,
  slideInPage,
  staggerChildren
} from '../motionUtils/animation';
import '../../css/TeamPage.css';


// Import images with variable names
import DesheyeImage from '../asset/img/image1.webp';
import member2 from '../asset/img/image2.webp';
import  member3 from '../asset/img/image3.webp';
import  member4 from '../asset/img/moyosoreUi.webp';

const SkillBadge = ({ skill, level }) => (
  <div className="skill-badge">
    <span className="skill-name">{skill}</span>
    <div className="skill-bar-background">
      <motion.div 
        className="skill-bar-foreground"
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </div>
  </div>
);

const TeamMemberCard = ({ member }) => (
  <motion.div 
    className="team-member-card"
    variants={fadeInUp}
    whileHover={{ y: -5 }}
  >
    <div className="team-member-content">
      <div className="image-container">
      <Image 
  src={member.image} 
  alt={member.name} 
  className="member-image" 
  width={150} 
  height={150} 
/>

        <div className="image-overlay" />
        <div className="social-links">
          {member.social.map((link, index) => {
            const Icon = {
              github: FaGithub,
              linkedin: FaLinkedin,
              twitter: FaTwitter
            }[link.platform];
            
            return (
              <a 
                key={index}
                href={link.url}
                className="social-link"
              >
                <Icon className="social-icon" />
              </a>
            );
          })}
        </div>
      </div>
      
      <h3 className="member-name">{member.name}</h3>
      <p className="member-role">{member.role}</p>
      <p className="member-bio">{member.bio}</p>
      
      <div className="skills-container">
        {member.skills.map((skill, index) => (
          <SkillBadge key={index} {...skill} />
        ))}
      </div>
    </div>
  </motion.div>
);

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Peter Sudai",
      role: "Full Stack Developer",
      bio: "Passionate about creating scalable web applications and solving complex problems with elegant solutions.",
      image: DesheyeImage,
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
      image: member2,
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
      image: member3,
      skills: [
        { skill: "API Development", level: 90 },
        { skill: "Database Optimization", level: 85 },
        { skill: "Security", level: 80 }
      ],
      social: [
        { platform: "github", url: "#" },
        { platform: "linkedin", url: "#" }
      ]
    },
    {
      name: "Opeyemi Adejo-Bello",
      role: "Data Scientist",
      bio: "Turning raw data into actionable insights for business growth.",
      image: member4,
      skills: [
        { skill: "Data Analysis ", level: 90 },
        { skill: "Machine Learning", level: 85 },
        { skill: "Visualization", level: 80 }
      ],
      social: [
        { platform: "github", url: "#" },
        { platform: "twitter", url: "#" }
      ]
    }
  ];

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
  <div className="team-page">
      {loading ? (
        <TeamPageSkeleton />
      ) : (
        <div className="team-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="team-header"
          >
            <h1 className="team-title">Meet The Team</h1>
            <p className="team-description">
              A group of passionate developers dedicated to crafting exceptional digital experiences.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            className="team-grid"
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
