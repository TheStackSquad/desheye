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
      interfaces for over a decade. I have a passion for creating beautiful and intuitive 
      digital experiences. My work is a blend of creative design and technical development.
      I am always exploring new technologies and frameworks to improve my skills and stay 
      updated with the latest trends. I am a detail-oriented person who loves to solve complex 
      problems and create user-friendly solutions. I have worked on a variety of projects,
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
        role: "Frontend Developer",
        company: "Freelance",
        type: "Remote",
        duration: "2021 to Present",
      },
      {
        role: "Frontend Developer",
        company: "Tech Solutions Inc.",
        type: "Remote",
        duration: "January 2018 to June 2021",
      },
      {
        role: "Jr Frontend Developer",
        company: "Web Studio",
        type: "Remote",
        duration: "January 2016 to June 2018",
      },
      {
        role: "Jr Frontend Developer",
        company: "Web Studio",
        type: "Remote",
        duration: "January 2015 to June 2016",
      },
    ],
  },
  featuredWork: {
    heading: "Featured Work",
    projects: [
      {
        title: "JollyBargain E-commerce",
        tagline: "Scalable E-commerce with State Management Power",
        description:
          "A feature-rich e-commerce platform built with **Next.js** and **Redux** for robust state management. The focus was on delivering a seamless shopping experience, demonstrating expertise in building scalable, component-based applications with advanced front-end logic.",
        image: "/img/jollyBargain.png", // Assuming /img is the web-accessible path
        liveLink: "https://jolly-bargain-9d66.vercel.app/",
        githubLink: "https://github.com/TheStackSquad/jollyBargain",
      },
      {
        title: "Bandhit Ticketing Platform",
        tagline: "Full-Stack Event Ticketing & Management",
        description:
          "A comprehensive, full-stack event solution featuring a modern **Next.js** frontend and a dedicated **Express.js backend**. This project showcases proficiency in developing secure APIs, integrating front-end with backend services, and handling complex user authentication flows.",
        image: "/img/bandhit.png",
        liveLink: "https://bandhit.vercel.app/welcome",
        githubLink: "https://github.com/TheStackSquad/bandhit",
      },
      {
        title: "OnFolio SaaS Template",
        tagline: "Dynamic Template SaaS Application",
        description:
          "A highly functional template for a Software as a Service (SaaS) application developed entirely with **Next.js**. It demonstrates rapid development capability, routing architecture, and building reusable UI components necessary for modern subscription-based products.",
        image: "/img/onFolio.png",
        liveLink: "https://onfolio.vercel.app/explore",
        githubLink: "https://github.com/TheStackSquad/onfolio",
      },
      {
        title: "Ikeja Government Portal",
        tagline: "Modernizing Public Sector Web Presence",
        description:
          "A professional government information website developed using **Next.js**. This project emphasizes design accessibility, performance optimization, and responsive design, ensuring a fast and intuitive experience for citizens accessing public sector information.",
        image: "/img/ikeja.png",
        liveLink: "https://ikeja.vercel.app/",
        githubLink: "https://github.com/TheStackSquad/ikeja",
      },
    ],
  },
};