import React from 'react';
import '../../css/projectCard.css'; // Import the custom CSS file

const ProjectCard = ({ title, description, tags, githubUrl, vercelUrl }) => {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
      </div>

      <div className="project-card-tags">
        {tags.map((tag) => (
          <span key={tag} className="project-card-tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="project-card-links">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-link github-link"
        >
          GitHub
        </a>
        <a
          href={vercelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-link demo-link"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
