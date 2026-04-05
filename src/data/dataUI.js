//src/data/dataUI.js

import React from "react";
import Image from "next/image"; // Import the Image component
import { Figma, Music, Zap } from "lucide-react";

export const uiData = {
  header: {
    name: "Desheye",
    title: "Full-Stack Developer, MERN",
    experience: "5+",
    resumeLink: "#", // Placeholder link
  },
  about: {
    heading: "A Little About Me",
    description: `A Fullstack Developer and UI/UX Designer, I have been designing and building user 
interfaces for over a decade.<br>
I have a passion for creating beautiful and intuitive
digital experiences. My work is a blend of creative design and technical development.<br>
<br>
I am always exploring new technologies and frameworks to improve my skills and stay 
updated with the latest trends. I am a detail-oriented person who loves to solve complex 
problems and create user-friendly solutions.<br><br>
I have worked on a variety of projects,
from small business websites to large-scale enterprise applications. 
I love to collaborate with teams and build products that make a difference in people's lives.`,

    // --- UPDATED SKILLS SECTION ---
    skills: [
      { name: "Figma", icon: <Figma size={48} /> },
      {
        name: "JS",
        icon: (
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
            alt="JS"
            width={48}
            height={48}
            className="w-12 h-12"
          />
        ),
      },
      {
        name: "React",
        icon: (
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="React"
            width={48}
            height={48}
            className="w-12 h-12"
          />
        ),
      },
      {
        name: "Node",
        icon: (
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
            alt="Node"
            width={48}
            height={48}
            className="w-12 h-12"
          />
        ),
      },
      {
        name: "MongoDB",
        icon: (
          <Image
            src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
            alt="MongoDB"
            width={48}
            height={48}
            className="w-12 h-12"
          />
        ),
      },
      {
        name: "Framer",
        icon: (
          <Image
            src="https://www.vectorlogo.zone/logos/framer/framer-icon.svg"
            alt="Framer"
            width={48}
            height={48}
            className="w-12 h-12"
          />
        ),
      },
      // --- NEW SKILLS ADDED ---
      {
        name: "Git",
        icon: (
          <Image
            src="https://www.vectorlogo.zone/logos/git-scm/git-icon.svg"
            alt="Git"
            width={48}
            height={48}
            className="w-12 h-12"
          />
        ),
      },
      {
        name: "Tailwind",
        icon: (
          <Image
            src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
            alt="Tailwind"
            width={48}
            height={48}
            className="w-12 h-12"
          />
        ),
      },
      {
        name: "Bootstrap",
        icon: (
          <Image
            src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg"
            alt="Bootstrap"
            width={48}
            height={48}
            className="w-12 h-12"
          />
        ),
      },
      {
        name: "Supabase",
        icon: (
          <Image
            src="https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg"
            alt="Supabase"
            width={48}
            height={48}
            className="w-12 h-12"
          />
        ),
      },
      {
        name: "GoLang",
        icon: (
          <Image
            src="https://www.vectorlogo.zone/logos/golang/golang-icon.svg"
            alt="GoLang"
            width={48}
            height={48}
            className="w-12 h-12"
          />
        ),
      },
      {
        name: "MySQL",
        icon: (
          <Image
            src="https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg"
            alt="MySQL"
            width={48}
            height={48}
            className="w-12 h-12"
          />
        ),
      },
    ],

    // --- NEW HOBBIES SECTION ---
    hobbies: [
      {
        name: "Music Production",
        icon: <Music size={48} className="text-pink-400" />,
        description:
          "I enjoy producing electronic music, which requires patience and a structured, layered approach—skills that directly inform my development process.",
      },
      {
        name: "Anime & Manga",
        icon: <Zap size={48} className="text-red-500" />,
        description:
          "I'm an avid consumer of anime and manga, appreciating complex storytelling and world-building, and I find inspiration for unique UI/UX themes.",
      },
    ],
  },

  services: {
    heading: "What I Do",
    items: [
      {
        title: "Custom Web Design",
        description:
          "A Frontend Developer and UI/UX Designer, I have been designing and building user interfaces for over a decade. I have a passion for creating beautiful and intuitive digital experiences. My work is a blend of creative design and technical development.",
      },
      {
        title: "Responsive Web Design",
        description:
          "A Frontend Developer and UI/UX Designer, I have been designing and building user interfaces for over a decade. I have a passion for creating beautiful and intuitive digital experiences. My work is a blend of creative design and technical development.",
      },
      {
        title: "Website Redesign & Optimization",
        description:
          "A Frontend Developer and UI/UX Designer, I have been designing and building user interfaces for over a decade. I have a passion for creating beautiful and intuitive digital experiences. My work is a blend of creative design and technical development.",
      },
      {
        title: "Web Animation & Interactivity",
        description:
          "A Frontend Developer and UI/UX Designer, I have been designing and building user interfaces for over a decade. I have a passion for creating beautiful and intuitive digital experiences. My work is a blend of creative design and technical development.",
      },
    ],
  },
  experience: {
    heading: "Experience History",

    history: [
      {
        role: "Backend Developer",
        company: "Eventify",
        type: "Contract",
        duration: "Recent",
        link: null,
        tags: ["Go", "PostgreSQL", "Paystack", "REST API", "SQL"],
        bullets: [
          "Architected a high-concurrency Go/PostgreSQL ticketing engine using advisory locks to eliminate race conditions during peak traffic.",
          "Designed and implemented a hybrid search system combining structured database queries with AI-powered suggestions, improving event discovery.",
          "Architected database schema with atomic operations for order state management (pending, completed, failed) with proper transaction handling.",
          "Integrated Paystack webhook verification system for secure payment confirmation with idempotency checks.",
          "Built a scalable search API (/events/search) with intelligent fallback logic, returning AI-generated recommendations when database results are insufficient.",
        ],
      },
      {
        role: "Project Lead",
        company: "JollyBargain",
        type: "Project",
        duration: "Recent",
        link: "https://jolly-bargain-9d66.vercel.app/",
        tags: ["Next.js", "Redux", "MongoDB", "Node.js"],
        bullets: [
          "Spearheaded the technical architecture and managed the full project lifecycle.",
          "Led development of core e-commerce functionalities — dynamic product listings, shopping cart, and streamlined checkout.",
        ],
      },
      {
        role: "Fullstack Developer",
        company: "The Almaaroof Initiative",
        type: "Project",
        duration: "Recent",
        link: "https://ikeja.vercel.app/",
        tags: ["Next.js", "Paystack", "Component Systems"],
        bullets: [
          "Translated government-approved designs into a functional Next.js application prioritising accessibility for all citizens.",
          "Developed and integrated the Paystack payment gateway for secure public-service transactions.",
          "Architected a modular component system ensuring brand consistency across the government's digital platform.",
        ],
      },
      {
        role: "Frontend Developer",
        company: "onFolio SaaS",
        type: "Project",
        duration: "Recent",
        link: "https://onfolio.vercel.app/explore",
        tags: ["Next.js", "Framer Motion", "Component Library"],
        bullets: [
          "Translated high-fidelity mock-ups into a fully functional Next.js application with pixel-perfect design.",
          "Architected and developed a modular component library, significantly accelerating development cycles.",
          "Collaborated with project management to define sprint goals and deliver features on time.",
        ],
      },
      {
        role: "Frontend Developer",
        company: "Freelance",
        type: "Remote",
        duration: "2021 — Present",
        link: null,
        tags: ["React", "Next.js", "Node.js", "Tailwind", "Figma"],
        bullets: [],
      },
    ],

    education: [
      {
        institution: "ALX Software Engineering School",
        credential: "Certificate of Completion",
        duration: "2022 — 2024",
        bullets: [
          "Completed a rigorous, project-based curriculum covering C programming, algorithms, data structures, and system engineering.",
          "Developed a portfolio of full-stack projects demonstrating proficiency in both front-end and back-end development.",
          "Collaborated extensively in a peer-to-peer learning environment, gaining practical experience in code review and collaborative problem-solving.",
        ],
      },
    ],
  },
  featuredWork: {
    heading: "Featured Work",
    projects: [
      {
        title: "JollyBargain E-commerce",
        // 🔑 New Slug property added
        slug: "jollybargain-e-commerce",
        tagline: "Scalable E-commerce with State Management Power",
        description:
          "A feature-rich e-commerce platform built with **Next.js** and **Redux** for robust state management. The focus was on delivering a seamless shopping experience...",
        image: "/img/jollyBargain.png",
        liveLink: "https://jolly-bargain-9d66.vercel.app/",
        githubLink: "https://github.com/TheStackSquad/jollyBargain",
      },
      {
        title: "Bandhit Ticketing Platform",
        // 🔑 New Slug property added
        slug: "bandhit-ticketing-platform",
        tagline: "Full-Stack Event Ticketing & Management",
        description:
          "A comprehensive, full-stack event solution featuring a modern **Next.js** frontend and a dedicated **Express.js backend**...",
        image: "/img/bandhit.png",
        liveLink: "https://bandhit.vercel.app/welcome",
        githubLink: "https://github.com/TheStackSquad/bandhit",
      },
      {
        title: "OnFolio SaaS Template",
        // 🔑 New Slug property added
        slug: "onfolio-saas-template",
        tagline: "Dynamic Template SaaS Application",
        description:
          "A highly functional template for a Software as a Service (SaaS) application developed entirely with **Next.js**...",
        image: "/img/onFolio.png",
        liveLink: "https://onfolio.vercel.app/explore",
        githubLink: "https://github.com/TheStackSquad/onfolio",
      },
      {
        title: "Ikeja Government Portal",
        // 🔑 New Slug property added
        slug: "ikeja-government-portal",
        tagline: "Modernizing Public Sector Web Presence",
        description:
          "A professional government information website developed using **Next.js**...",
        image: "/img/ikeja.png",
        liveLink: "https://ikeja.vercel.app/",
        githubLink: "https://github.com/TheStackSquad/ikeja",
      },
    ],
  },
};