import React from "react";
import "./SideBar.css";

interface SideBarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBar: React.FC<SideBarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <div className={`sidebar-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#bio">🏠 Bio</a></li>
          <li><a href="#skills">🛠 Skills</a></li>
          <li><a href="#workexperience">💼 Work Experience</a></li>
          <li><a href="#projects">📁 Projects</a></li>
          <li><a href="#education">🎓 Education</a></li>
          <li><a href="#finra">📜 FINRA Licenses</a></li>
          <li><a href="#contact">📧 Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;