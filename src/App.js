import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InterviewPage from './pages/InterviewPage';
import ProfilePage from './pages/ProfilePage'; // Import ProfilePage
import Navbar from './components/Navbar'; // Ensure Navbar is imported
import './App.css';

function App() {
  return (
    <Router>
      <RenderWithNavbar />
    </Router>
  );
}

function RenderWithNavbar() {
  const location = useLocation();

  const showNavbar = location.pathname === '/' || location.pathname === '/interviews';

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/interviews" element={<InterviewPage />} />
        <Route path="/profile" element={<ProfilePage />} /> {/* Add route for ProfilePage */}
      </Routes>
    </>
  );
}

export default App;
