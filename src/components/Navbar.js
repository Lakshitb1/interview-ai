import React from 'react';
import './Navbar.css'; // Create this CSS file for navbar-specific styles

const Navbar = () => {
  return (
    <header className="navbar">
      <img src="logo.png" alt="Logo" className="logo" />
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/dashboard">My Dashboard</a>
        <a href="/interviews">Interviews</a>
        <a href="/about">About Us</a>
        <a href="/faqs">FAQs</a>
      </nav>
      <div className="profile-icon">
        <img src="profile-icon.png" alt="Profile" />
      </div>
    </header>
  );
};

export default Navbar;
