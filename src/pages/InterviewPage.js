import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import QuestionSection from '../components/QuestionSection';
import './InterviewPage.css';

const InterviewPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  return (
    <div className="interview-page">
      <Sidebar 
        currentQuestionIndex={currentQuestionIndex} 
        setCurrentQuestionIndex={setCurrentQuestionIndex}
      />
      <QuestionSection 
        currentQuestionIndex={currentQuestionIndex}
        setCurrentQuestionIndex={setCurrentQuestionIndex}
      />
    </div>
  );
};

export default InterviewPage;