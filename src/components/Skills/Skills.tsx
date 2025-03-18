import React from "react";
import "./Skills.css";

const skillsData = [
  { name: "React", icon: "🔷" },
  { name: "TypeScript", icon: "📘" },
  { name: "JavaScript (ES6+)", icon: "⚡" },
  { name: "Node.js & Express", icon: "🌿" },
  { name: "SQL & PostgreSQL", icon: "🐘" },
  { name: "Financial Tech & Trading Systems", icon: "💰" },
  { name: "Blockchain & Crypto", icon: "₿" },
];

const Skills: React.FC = () => {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <span className="skill-icon">{skill.icon}</span>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
