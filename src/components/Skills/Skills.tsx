import React from "react";
import "./Skills.css";

const skillsData = [
  {
    category: "Technical Skills",
    skills: [
      { name: "React", icon: "🔷" },
      { name: "JavaScript (ES6+)", icon: "⚡" },
      { name: "TypeScript (Basic)", icon: "📘" },
      { name: "Node.js & Express", icon: "🌿" },
      { name: "SQL & PostgreSQL", icon: "🐘" },
      { name: "Python (Basic)", icon: "🐍" },
      { name: "Google Firebase", icon: "☁️" }
    ]
  },
  {
    category: "Finance & Compliance",
    skills: [
      { name: "Financial Tech & Trading Systems", icon: "💰" },
      { name: "Blockchain & Crypto", icon: "₿" },
      { name: "Risk Management & Compliance", icon: "📊" },
      { name: "Trade Surveillance & Regulatory Reporting", icon: "📑" }
    ]
  },
  {
    category: "Business & Leadership",
    skills: [
      { name: "Data Analysis & Visualization (Tableau, PitchBook)", icon: "📈" },
      { name: "Project Management & Leadership", icon: "🎯" }
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      {skillsData.map((category, index) => (
        <div key={index} className="skills-category">
          <h3>{category.category}</h3>
          <div className="skills-grid">
            {category.skills.map((skill, i) => (
              <div key={i} className="skill-card">
                <span className="skill-icon">{skill.icon}</span>
                <p className="skill-name">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;