import React from "react";
import { motion } from "framer-motion";
import "./Bio.css";

const Bio: React.FC = () => {
  return (
    <motion.section
      className="bio-section"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>About Me</h2>
      <p>
        <strong>Software Engineer & Fintech Innovator...</strong>
      </p>
      <p>
        Based in Williamsburg, Brooklyn, I am a <strong>software engineer and fintech professional</strong> passionate about
        building technology that enhances financial systems and compliance processes. With a strong foundation in 
        <strong>React, TypeScript, Node.js, and PostgreSQL</strong>, I develop scalable, high-performance applications that bridge 
        the gap between <strong>finance and technology</strong>.
      </p>
      <p>
        My background in <strong>trading operations, regulatory compliance, and digital asset markets</strong> allows me to create
        secure, automated solutions that streamline complex workflows. I am always looking for new challenges where 
        I can apply <strong>problem-solving, automation, and AI-driven innovations</strong> to the fintech space.
      </p>

      {/* Interest Section - Fixing Spacing and Readability */}
      <motion.div className="interests">
        <motion.span whileHover={{ scale: 1.2 }}>🏋️‍♂️ Fitness</motion.span>
        <motion.span whileHover={{ scale: 1.2 }}>💡 Creating Projects</motion.span>
        <motion.span whileHover={{ scale: 1.2 }}>🐶 Spending Time with My Dog</motion.span>
      </motion.div>
    </motion.section>
  );
};

export default Bio;