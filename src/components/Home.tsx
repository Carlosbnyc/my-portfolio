import { useState } from "react"; 
import SideBar from "./SideBar/SideBar";
import ParticlesBackground from "./ParticlesBackground";
import Bio from "./Bio/Bio";
import Skills from "./Skills/Skills";
import WorkExperience from "./WorkExperience/WorkExperience";
import Projects from "./Projects/Projects";
import Education from "./Education/Education";
import FinraLicenses from "./FINRALicenses/FinraLicenses";
import Contact from "./Contact/Contact";
import "./Home.css";


const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className={`home-layout ${isSidebarOpen ? "sidebar-open" : ""}`}>
      {/* Background Effect */}
      <ParticlesBackground />

      {/* Sidebar */}
      <SideBar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Content */}
      <main className="content">
        <section id="bio">
          <Bio />
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