import React from 'react';
import Sidebar from '../components/Sidebar';
import QuestionSection from '../components/QuestionSection';
import './InterviewPage.css';

const InterviewPage = () => {
  return (
    <div className="interview-page">
      <Sidebar />
      <QuestionSection />
    </div>
  );
};

export default InterviewPage;
