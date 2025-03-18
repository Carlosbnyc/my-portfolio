import React from "react";
import "./Projects.css";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  futureFeatures: string[];
}

const projectsData: Project[] = [
  {
    title: "Job Tracker Application",
    description:
      "A full-stack application designed to help users track and manage job applications, interview schedules, and application statuses in an organized manner.",
    tech: [
      "React",
      "TypeScript",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT Authentication",
      "Firebase Hosting",
    ],
    link: "https://myjobtrackerapp.web.app/",
    github: "https://github.com/Carlosbnyc/job-tracker",
    futureFeatures: [
      "Automated notifications for interview reminders and follow-ups",
      "Advanced analytics to provide insights on application trends",
      "Resume and cover letter template integration for quick application submissions",
    ],
  },
  {
    title: "Restaurant Reservation System",
    description:
      "A full-stack application for managing restaurant reservations and table assignments, improving operational efficiency for restaurant staff.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    link: "https://github.com/Carlosbnyc/starter-restaurant-reservation",
    github: "https://github.com/Carlosbnyc/starter-restaurant-reservation",
    futureFeatures: [
      "Automated customer notifications for reservation confirmations and reminders",
      "Online reservation system with user authentication",
      "Table turnover and peak hours analytics dashboard",
    ],
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A dynamic and responsive portfolio showcasing my professional work, projects, and technical expertise.",
    tech: ["React", "TypeScript", "CSS"],
    link: "https://mypersonalwebsitecarlos.web.app/",
    github: "https://github.com/Carlosbnyc/my-portfolio",
    futureFeatures: [
      "Integrated blog section for writing technical and industry-related articles",
      "Project filtering by technology, category, or date",
      "Secure contact form with CAPTCHA to prevent spam",
    ],
  },
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
            <p>
              <strong>Tech Used:</strong> {project.tech.join(", ")}
            </p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Live Project
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </a>
            <div className="future-features">
              <h4>Planned Features:</h4>
              <ul>
                {project.futureFeatures.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;