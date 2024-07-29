import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import QuestionSection from '../components/QuestionSection';
import './InterviewPage.css'; // Create this CSS file for InterviewPage-specific styles

const InterviewPage = () => {
  return (
    <div className="container">
      <Navbar />
      <main className="main-content">
        <Sidebar />
        <QuestionSection />
      </main>
    </div>
  );
};

export default InterviewPage;
