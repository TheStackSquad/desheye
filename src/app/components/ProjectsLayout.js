//src/app/components/ProjectLayout.js
import React from 'react';
import  ProjectCard from './ProjectCard';
import '../../css/projectLayout.css'; // Import the custom CSS

const ProjectsLayout = () => {
  const projects = [
    {
      title: "Food Delivery App",
      description: " Fullstack app that connects vendors and users. Upload cart, and secure payment features. Powered by Redux, it ensures efficient state management, real-time updates, and a responsive interface for an exceptional meal-ordering experience.",
      tags: ["React.js", "Redux", "MongoDB"],
      githubUrl: "https://github.com/TheStackSquad/food-delivery-app",
      vercelUrl: "https://food-delivery-app-delta-two.vercel.app/",
    },
    {
      "title": "A Portfolio Project",
      "description": "Showcasing sleek modern UI design with captivating animations, built using Next.js and Framer Motion. A seamless blend of performance and aesthetics for a standout portfolio experience.",
      "tags": ["Next.js", "Framer Motion", "Modern UI"],
      "githubUrl": "https://github.com/TheStackSquad/desheye",
      "vercelUrl": "https://desheye-thestacksquads-projects.vercel.app/"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with drag-and-drop interface and team features.",
      tags: ["Next.js", "Prisma", "tRPC"],
      githubUrl: "https://github.com/username/project3",
      vercelUrl: "https://project3.vercel.app",
    },
  ];

  return (
    <div className="project-layout">
    <main className="project-container">
      <div className="project-header">
        <h1 className="header-title">My Projects</h1>
        <p className="header-description">
          A collection of my recent work in web development. Each project demonstrates 
          different aspects of my technical skills and problem-solving approach.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card-container">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>

      <div className="project-contact">
        <h2 className="contact-title">Interested in working together?</h2>
        <a
          href="mailto:thefelainme@gmail.com"
          className="contact-button"
        >
          Get in Touch
        </a>
      </div>
    </main>
  </div>
  );
};


export default ProjectsLayout;



