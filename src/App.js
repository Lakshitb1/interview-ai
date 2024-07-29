import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import InterviewPage from './pages/InterviewPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Ensure Navbar is included here */}
      <div className="app-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/interviews" element={<InterviewPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
