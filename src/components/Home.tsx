import React from "react";
import "./Home.css";
import WorkExperience from "./WorkExperience/WorkExperience";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import AboutMe from "./AboutMe/AboutMe";
import Education from "./Education/Education";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <img src="/images/Headshot.jpeg" className="profile-pic" alt="Carlos Bowyer" />
        <h1 className="title">Carlos Debora-Bowyer</h1>
        <p className="subtitle">Full Stack Developer | Investments Operations & Compliance Professional</p>
        <a href="#contact" className="cta-button">Contact Me</a>
      </section>

      {/* About Me Section */}
      <AboutMe />

      {/* Skills Section */}
      <Skills />

      {/* Work Experience Section */}
      <WorkExperience />

      {/* Projects Section */}
      <Projects />

      {/* Education Section */}
      <Education />

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default Home;

