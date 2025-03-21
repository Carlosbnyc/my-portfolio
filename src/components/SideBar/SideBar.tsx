import React, { useState } from "react";
import "./SideBar.css";

const SidebarMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close menu after clicking on mobile
    }
  };

  const toggleSidebar = () => {
    setIsOpen(prevState => !prevState);
  };

  interface SideBarProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }

  return (
<nav className={`sidebar-menu ${isOpen ? "open" : ""}`}>
      {/* Mobile Toggle Button */}
      <div className="profile-section">
        <img src="/images/Headshot.jpeg" alt="Profile Headshot" className="profile-pic" />
      </div>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        &#9776; {/* Hamburger icon */}
      </button>

      <ul>
        <li onClick={() => scrollToSection("bio")}>About Me</li>
        <li onClick={() => scrollToSection("skills")}>Skills</li>
        <li onClick={() => scrollToSection("projects")}>Projects</li>
        <li onClick={() => scrollToSection("education")}>Education</li>
        <li onClick={() => scrollToSection("finra")}>FINRA Licenses</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>
    </nav>
  );
};

export default SidebarMenu;