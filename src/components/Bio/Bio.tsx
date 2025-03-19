import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Bio.css";

const typingTexts = [
  "Software Engineer & Fintech Innovator...",
  "Building Scalable Financial Systems...",
  "Passionate About Automation & AI...",
];

const Bio: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const yPos = useTransform(scrollYProgress, [0, 1], ["0px", "-50px"]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (charIndex < typingTexts[textIndex].length) {
        setDisplayText((prev) => prev + typingTexts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setDisplayText("");
          setCharIndex(0);
          setTextIndex((prev) => (prev + 1) % typingTexts.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [charIndex, textIndex]);

  return (
    <motion.section
      className="bio-section"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2 whileHover={{ scale: 1.1, color: "#ef233c" }}>About Me</motion.h2>
      <p className="typing-effect">{displayText}</p>

      <motion.p whileHover={{ scale: 1.05 }}>
        Based in Williamsburg, Brooklyn, I am a **software engineer and fintech professional** passionate about
        building technology that enhances financial systems and compliance processes. With a strong foundation in 
        **React, TypeScript, Node.js, and PostgreSQL**, I develop scalable, high-performance applications that bridge 
        the gap between **finance and technology**.
      </motion.p>

      <motion.p whileHover={{ scale: 1.05 }}>
        My background in **trading operations, regulatory compliance, and digital asset markets** allows me to create
        secure, automated solutions that streamline complex workflows. I am always looking for new challenges where 
        I can apply **problem-solving, automation, and AI-driven innovations** to the fintech space.
      </motion.p>

      <motion.div className="interests" style={{ y: yPos }}>
        <motion.span whileHover={{ scale: 1.2 }}>🏋️‍♂️ Fitness</motion.span>
        <motion.span whileHover={{ scale: 1.2 }}>💡 Creating Projects</motion.span>
        <motion.span whileHover={{ scale: 1.2 }}>🐶 Spending Time with My Dog</motion.span>
      </motion.div>
    </motion.section>
  );
};

export default Bio;