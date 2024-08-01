import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './Layout.css'; // Optional: If you have specific styles for the layout

const Layout = ({ children }) => {
  const location = useLocation();
  const showSidebar = location.pathname === '/interviews'; // Only show sidebar on the InterviewPage

  return (
    <div className="layout-container">
      <Navbar />
      <div className="main-content">
        {showSidebar && <Sidebar />}
        <div className="page-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
