import React from "react";
import "./WorkExperience.css";

const experienceData = [
  {
    role: "Principal Compliance Officer",
    company: "tZero Securities LLC",
    period: "Nov 2024 - March 2025 (Position eliminated as part of company-wide layoffs)",
    location: "New York, New York",
    highlights: [
      "Led trade surveillance initiatives to identify and mitigate potential trading violations.",
      "Oversaw regulatory submissions to FINRA, ensuring strict industry compliance.",
      "Conducted risk assessments to proactively address compliance and operational risks."
    ]
  },
  {
    role: "Business Objectives Implementation Associate for Private Wealth (Contractor)",
    company: "Neuberger Berman",
    period: "Sep 2024 - Nov 2024",
    location: "New York, New York",
    highlights: [
      "Collaborated with cross-functional teams to optimize business and operational workflows.",
      "Implemented process improvements that enhanced efficiency in private wealth management.",
      "Led system training sessions to facilitate the adoption of new technology platforms."
    ]
  },
  {
    role: "Execution Services Senior Trade Analyst",
    company: "Fidelity Investments",
    period: "Jun 2022 - Apr 2024",
    location: "Salt Lake City/Boston",
    highlights: [
      "Developed and refined trade monitoring techniques for Fidelity Digital Assets.",
      "Managed relationships with third-party liquidity providers to enhance digital asset trading.",
      "Ensured compliance with SEC and FINRA regulations through rigorous trade surveillance."
    ]
  },
  {
    role: "Managed Accounts Senior Support Specialist",
    company: "Fidelity Investments",
    period: "Mar 2021 - Apr 2022",
    location: "Salt Lake City, Utah",
    highlights: [
      "Enhanced risk management strategies to ensure regulatory compliance for managed accounts.",
      "Conducted in-depth client account reviews to proactively identify and resolve risks.",
      "Developed workflow efficiencies that optimized operational oversight."
    ]
  },
  {
    role: "High Net Worth Representative",
    company: "Fidelity Investments",
    period: "May 2019 - Mar 2021",
    location: "Salt Lake City, Utah",
    highlights: [
      "Provided investment advisory services for high-net-worth clients, specializing in complex trading strategies.",
      "Facilitated client transactions, including options, margin trading, and fixed income investments.",
      "Managed retirement account distributions, ensuring accuracy and compliance with financial regulations."
    ]
  },
  {
    role: "Client Services Representative",
    company: "Morgan Stanley",
    period: "Mar 2019 - May 2019",
    location: "New York, New York",
    highlights: [
      "Executed high-value trades while ensuring compliance with financial regulations.",
      "Resolved complex client inquiries regarding portfolio management and trading strategies.",
      "Monitored client accounts for accuracy and compliance, implementing corrective actions where needed."
    ]
  },
  {
    role: "Software Engineer",
    company: "RealTour",
    period: "2023 - Present",
    highlights: [
      "Developed web applications using React and Java for real estate technology solutions.",
      "Optimized front-end performance to improve user experience and system responsiveness.",
      "Collaborated with investors to integrate data-driven business intelligence tools."
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
