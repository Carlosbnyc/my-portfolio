import React from "react";
import "./Home.css";
import WorkExperience from "./WorkExperience/WorkExperience";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import AboutMe from "./AboutMe/AboutMe";
import Education from "./Education/Education";
import FinraLicenses from "../components/FINRALicenses/FinraLicenses";
import Bio from "./Bio/Bio";
import SidebarMenu from "../components/SideBar/SideBar";


const Home: React.FC = () => {
  return (
    <div className="home-container">
      <SidebarMenu />
      <main className="content">
        <section id="bio">
          <Bio />
        </section>
        <section id="aboutme">
          <AboutMe />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="workexperience">
          <WorkExperience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="finra">
          <FinraLicenses />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};
export default Home;

