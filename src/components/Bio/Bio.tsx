import React from "react";
import { motion } from "framer-motion";
import "./Bio.css";

const Bio: React.FC = () => {
  return (
    <motion.div
      className="bio-inner"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="hero-title">
        Hi, I’m <span className="highlighted">Carlos</span>.
      </h1>
      <h2 className="hero-subtitle">Software Engineer & Fintech Innovator</h2>
      <p className="hero-tagline">
        "Building cutting-edge solutions that bridge finance and technology."
      </p>

      <h2 className="about-heading">About Me</h2>
      <h3><strong>Software Engineer & Fintech Innovator</strong></h3>

      <p>
        Based in Williamsburg, Brooklyn, I am a <strong>software engineer and fintech professional</strong> passionate about building technology that enhances financial systems and compliance processes. With a strong foundation in <strong>React, TypeScript, Node.js, and PostgreSQL</strong>, I develop scalable, high-performance applications that bridge the gap between <strong>finance and technology</strong>.
      </p>

      <p>
        My background in <strong>trading operations, regulatory compliance, and digital asset markets</strong> allows me to create secure, automated solutions that streamline complex workflows. I am always looking for new challenges where I can apply <strong>problem-solving, automation, and AI-driven innovations</strong> to the fintech space.
      </p>

      <motion.div className="interests">
        <motion.span whileHover={{ scale: 1.2 }}>🏋️‍♂️ Fitness</motion.span>
        <motion.span whileHover={{ scale: 1.2 }}>💡 Creating Projects</motion.span>
        <motion.span whileHover={{ scale: 1.2 }}>🐶 Spending Time with My Dog</motion.span>
      </motion.div>
    </motion.div>
  );
};

export default Bio;