import React from "react";
import "./Projects.css";

const projectsData = [
  {
    title: "Restaurant Reservation System",
    description: "A full-stack application for managing restaurant reservations and table assignments.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    link: "https://github.com/Carlosbnyc/starter-restaurant-reservation",
  },
  {
    title: "Personal Portfolio Website",
    description: "A dynamic portfolio site to showcase my work and experience, built with React and TypeScript.",
    tech: ["React", "TypeScript", "CSS"],
    link: "https://github.com/Carlosbnyc/portfolio-website",
  },
  {
    title: "Job Tracker Application",
    description: "A full-stack application to help users organize and track job applications, interviews, and statuses.",
    tech: ["React", "TypeScript", "Redux", "Node.js", "Express", "MongoDB", "JWT Authentication", "Firebase Hosting"],
    link: "https://myjobtrackerapp.web.app/",
  }
];

const Projects: React.FC = () => {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech Used:</strong> {project.tech.join(", ")}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
