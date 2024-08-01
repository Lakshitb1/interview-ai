import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css'; // Create this CSS file for navbar-specific styles

const Navbar = () => {
  return (
    <header className="navbar">
      <img src="logo.png" alt="Logo" className="logo" />
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">My Dashboard</Link>
        <Link to="/interviews">Interviews</Link>
        <Link to="/about">About Us</Link>
        <Link to="/faqs">FAQs</Link>
      </nav>
      <div className="profile-icon">
        <Link to="/profile"> {/* Wrap the profile icon with Link */}
          <img src="profile-icon.png" alt="Profile" />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
