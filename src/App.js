import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InterviewPage from './pages/InterviewPage';
import ProfilePage from './pages/ProfilePage';
import ScoresPage from './pages/ScoresPage'; // Import ScoresPage
import Navbar from './components/Navbar';
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

  // Show Navbar only on specific paths
  const showNavbar = ['/', '/interviews', '/profile', '/scores'].includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/interviews" element={<InterviewPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/scores" element={<ScoresPage />} /> {/* Route for ScoresPage */}
        {/* Add more routes here if needed */}
      </Routes>
    </>
  );
}

export default App;
