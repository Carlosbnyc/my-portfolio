import React from "react";
import "./WorkExperience.css";

const experienceData = [
  {
    role: "Principal Compliance Officer",
    company: "tZero Securities LLC",
    period: "Nov 2024 - March 2025 (Position eliminated as part of company-wide layoffs)",
    location:"New York, New York",
    highlights: [
      "Streamlined trade surveillance to identify potential trading violations",
      "Orchestrated regulatory submissions to FINRA, ensuring industry compliance",
      "Conducted comprehensive risk assessments to mitigate potential conflicts of interest"
    ]
  },
  {
    role: "Execution Services Senior Trade Analyst",
    company: "Fidelity Investments",
    period: "Jun 2022 - Apr 2024",
    location:"Salt Lake City/Boston",
    highlights: [
      "Pioneered operational processes and trade monitoring techniques in Fidelity Digital Assets' nascent stage",
      "Enhanced trading platform for Bitcoin and Ethereum through third-party liquidity provider relationship management",
      "Ensured regulatory compliance and risk management via diligent trade surveillance"
    ]
  },
  {
    role: "Software Engineer",
    company: "RealTour",
    period: "2023 - Present",
    highlights: [
      "Developed web applications using React and Java for the real estate industry",
      "Optimized front-end performance and enhanced user experience",
      "Worked with investors to improve business intelligence features"
    ]
  }
];

const WorkExperience: React.FC = () => {
  return (
    <section className="work-experience">
      <h2>Work Experience</h2>
      <div className="timeline">
        {experienceData.map((job, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <h3>{job.role}</h3>
              <h4>{job.company} - {job.period}</h4>
              <ul>
                {job.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;