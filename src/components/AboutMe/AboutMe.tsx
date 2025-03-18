import React from "react";
import "./AboutMe.css";

const AboutMe: React.FC = () => {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <p>
        I am a highly skilled financial professional and full-stack engineer with over 6 years of experience
        in trading operations, compliance, and financial technology. My expertise lies in bridging the gap
        between finance and technology by leveraging software development to enhance trading operations,
        compliance frameworks, and financial systems.
      </p>
      <p>
        With a deep understanding of SEC & FINRA regulations and digital asset markets, I specialize in
        both frontend and backend development. I have experience working with React, JavaScript, Node.js,
        Express, and PostgreSQL, building scalable and efficient fintech solutions. Additionally, I have
        worked with Google Firebase for cloud-based applications and have foundational knowledge of Python
        and TypeScript, allowing me to adapt to modern development environments and workflows.
      </p>
    </section>
  );
};

export default AboutMe;