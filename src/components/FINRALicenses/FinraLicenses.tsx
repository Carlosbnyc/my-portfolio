import React from "react";
import "./FinraLicenses.css";

const licensesData = [
  {
    name: "Series 7",
    description: "General Securities Representative Exam - Authorizes the holder to sell a broad range of securities products, including stocks, bonds, options, and investment company products."
  },
  {
    name: "Series 24",
    description: "General Securities Principal Exam - Qualifies the holder to supervise and manage securities operations, including compliance and regulatory responsibilities."
  },
  {
    name: "Series 63",
    description: "Uniform Securities Agent State Law Exam - Covers state securities regulations and is required for securities agents operating within state jurisdictions."
  },
  {
    name: "Series 66",
    description: "Uniform Combined State Law Exam - A combination of Series 63 and 65, enabling the holder to act as an investment advisor and securities agent."
  }
];

const FinraLicenses: React.FC = () => {
  return (
    <section className="finra-licenses-section">
      <h2>FINRA Licenses & Certifications</h2>
      <p>As a licensed financial professional, I have obtained multiple FINRA certifications, demonstrating expertise in securities trading, compliance, and investment advising.</p>
      <div className="licenses-list">
        {licensesData.map((license, index) => (
          <div key={index} className="license-item">
            <h3>{license.name}</h3>
            <p>{license.description}</p>
          </div>
        ))}
      </div>
      <p>For more details, visit my <a href="https://brokercheck.finra.org/firm/summary/316189" target="_blank" rel="noopener noreferrer">FINRA BrokerCheck Profile</a>.</p>
    </section>
  );
};

export default FinraLicenses;
