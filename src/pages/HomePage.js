import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGetStartedClick = () => {
    navigate('/profile'); // Navigate to the profile page
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Our AI-Powered Video Interview Simulation Platform</h1>
      </header>
      <div className="home-content">
        <div className="section intro">
          <h2>Introduction</h2>
          <p>
            Our AI-powered video interview simulation platform aims to provide an interactive environment where users can practice their interview skills.
          </p>
        </div>
        <div className="section target-audience">
          <h2>Target Audience</h2>
          <ul>
            <li>Job seekers</li>
            <li>Career coaches</li>
            <li>Recruitment agencies</li>
            <li>HR departments</li>
          </ul>
        </div>
        <div className="section unique-features">
          <h2>Unique Features</h2>
          <p>
            The platform leverages advanced AI technologies to analyze facial expressions, speech patterns, and body language in real-time, offering instant, objective feedback on key soft skills using SoTA LLMs.
          </p>
        </div>
      </div>
      <footer className="home-footer">
        <button className="get-started-button" onClick={handleGetStartedClick}>Get Started</button>
      </footer>
    </div>
  );
};

export default HomePage;
