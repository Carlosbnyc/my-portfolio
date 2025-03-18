import React from "react";
import "./Education.css";

const educationData = [
  {
    degree: "Certificate in Software Engineering",
    institution: "Chegg Skills, New York City",
    period: "Jan 2024 - Sep 2024",
    details: "Completed an intensive software engineering program focusing on full-stack development, including React, Node.js, and PostgreSQL."
  },
  {
    degree: "Completed Credits Toward Bachelor's in Financial Planning",
    institution: "University of Utah",
    period: "2018 - 2022",
    details: "Earned credits in finance and business courses with a strong foundation in financial planning and investment management. Currently exploring opportunities to pursue a Computer Science degree to further enhance my technical expertise."
  }
];

const Education: React.FC = () => {
  return (
    <section className="education-section">
      <h2>Education</h2>
      <div className="education-list">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.degree}</h3>
            <p><strong>{edu.institution}</strong></p>
            <p>{edu.period}</p>
            <p>{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;