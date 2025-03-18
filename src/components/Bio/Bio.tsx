import React from "react";
import "./Bio.css";

const Bio: React.FC = () => {
  return (
    <section className="bio-section">
      <h2>Who I Am</h2>
      <p>
        Based in Williamsburg, Brooklyn, I am a **software engineer and fintech innovator** with a passion for building 
        technology that streamlines complex financial systems. My work bridges **finance, automation, and software development**, 
        allowing me to create impactful solutions in **trading operations, compliance, and digital assets**.
      </p>
      <p>
        Outside of work, I’m dedicated to **fitness, creating new projects, and spending time with my dog**. 
        I thrive on pushing boundaries, whether it's optimizing a trading system, designing intuitive applications, 
        or exploring new ideas that challenge conventional thinking.
      </p>
      <p>
        I believe in the power of **technology to drive efficiency and transformation**—and I’m always looking for new 
        challenges where I can bring innovative ideas to life.
      </p>
    </section>
  );
};

export default Bio;