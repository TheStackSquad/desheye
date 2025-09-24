//src/data/dataUI.js

import React from "react";
import Image from "next/image"; // Import the Image component
import { Figma } from "lucide-react";

export const uiData = {
  header: {
    name: "Desheye",
    title: "Full-Stack Developer, MERN",
    experience: "5+",
    resumeLink: "#", // Placeholder link
  },
  about: {
    heading: "A Little About Me",
    description:
      "A Fullstack Developer and UI/UX Designer, I have been designing and building user interfaces for over a decade. I have a passion for creating beautiful and intuitive digital experiences. My work is a blend of creative design and technical development. I am always exploring new technologies and frameworks to improve my skills and stay updated with the latest trends. I am a detail-oriented person who loves to solve complex problems and create user-friendly solutions. I have worked on a variety of projects, from small business websites to large-scale enterprise applications. I love to collaborate with teams and build products that make a difference in people's lives.",
    skills: [
      { name: "Figma", icon: <Figma size={48} /> },
      {
        name: "JS",
        icon: (
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
            alt="JS"
            width={48} // Add explicit width
            height={48} // Add explicit height
            className="w-12 h-12" // Tailwind classes can still be used for sizing
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
        name: "GSAP",
        icon: (
          <Image
            src="https://www.vectorlogo.zone/logos/greensock/greensock-icon.svg"
            alt="GSAP"
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
        title: "ZeroScope",
        tagline: "DESIGN. DEVELOP. CONQUER.",
        description:
          "A Frontend Developer and UI/UX Designer, I have been designing and building user interfaces for over a decade. I have a passion for creating beautiful and intuitive digital experiences. My work is a blend of creative design and technical development.",
        image:
          "https://placehold.co/800x600/131728/FFFFFF?text=Project+ZeroScope",
      },
      {
        title: "Project B",
        tagline: "CREATE. INNOVATE. REPEAT.",
        description:
          "Another exciting project demonstrating my skills in web development and design. I focused on creating an intuitive user experience with modern technologies. The goal was to build a scalable and maintainable application.",
        image: "https://placehold.co/800x600/131728/FFFFFF?text=Project+Beta",
      },
      {
        title: "Project C",
        tagline: "CODE. LAUNCH. SUCCEED.",
        description:
          "A personal project to explore new a framework and design patterns. I built a dynamic website with interactive features and a responsive layout. The project was a great learning experience.",
        image: "https://placehold.co/800x600/131728/FFFFFF?text=Project+Gamma",
      },
    ],
  },
};