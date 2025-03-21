import React, { useEffect,useState } from "react";
import "./SideBar.css";
import { slide as Menu } from "react-burger-menu";
import { GiHamburgerMenu } from "react-icons/gi"; // ✅ Futuristic burger menu icon
import { IoClose } from "react-icons/io5"; // ✅ Sleek close button

interface SideBarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarMenu: React.FC<SideBarProps> = ({ isOpen, setIsOpen }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };


    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // ✅ Close menu after clicking a section
    }
  };

  // 💻 DESKTOP VERSION (Fixed Sidebar)
  if (!isMobile) {
    return (
      <nav className="sidebar-menu desktop">
        <div className="profile-section">
          <img
            src="/images/Headshot.jpeg"
            alt="Profile Headshot"
            className="profile-pic"
          />
        </div>
        <ul className="menu-items">
          <li onClick={() => scrollToSection("bio")}>About Me</li>
          <li onClick={() => scrollToSection("skills")}>Skills</li>
          <li onClick={() => scrollToSection("projects")}>Projects</li>
          <li onClick={() => scrollToSection("education")}>Education</li>
          <li onClick={() => scrollToSection("finra")}>FINRA Licenses</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>
      </nav>
    );
  }

  // 📱 MOBILE VERSION using react-burger-menu
  return (
    <>
    <Menu
  right
  isOpen={isOpen}
  onStateChange={({ isOpen }) => setIsOpen(isOpen)}
  className={`mobile-menu ${isOpen ? "menu-open" : ""}`}
  customBurgerIcon={isOpen ? false : <GiHamburgerMenu size={35} color="#00e6ff" className="neon-menu-icon" />}
  customCrossIcon={
    <button className="custom-close-button" onClick={() => setIsOpen(false)}>
      <IoClose size={35} color="#00e6ff" className="custom-close-icon" />
    </button>
  }
  
>
        <div className="profile-section">
          <img
            src="/images/Headshot.jpeg"
            alt="Profile Headshot"
            className="profile-pic"
          />
        </div>
        <a onClick={() => scrollToSection("bio")}>About Me</a>
        <a onClick={() => scrollToSection("skills")}>Skills</a>
        <a onClick={() => scrollToSection("projects")}>Projects</a>
        <a onClick={() => scrollToSection("education")}>Education</a>
        <a onClick={() => scrollToSection("finra")}>FINRA Licenses</a>
        <a onClick={() => scrollToSection("contact")}>Contact</a>
      </Menu>
    </>
  );
};

export default SidebarMenu;

