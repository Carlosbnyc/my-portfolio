import React from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>Interested in working together? Let's connect!</p>
      <div className="contact-info">
        <p>Email: <a href="mailto:bowyercarlos@gmail.com">carlos@carlosnyc.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/carlosbowyer" target="_blank" rel="noopener noreferrer">linkedin.com/in/carlosbowyer</a></p>
        <p>GitHub: <a href="https://github.com/Carlosbnyc" target="_blank" rel="noopener noreferrer">github.com/Carlosbnyc</a></p>
      </div>
    </section>
  );
};

export default Contact;
