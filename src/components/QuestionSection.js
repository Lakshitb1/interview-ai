import React from 'react';
import './QuestionSection.css'; // Create this CSS file for question-section-specific styles

const QuestionSection = () => {
  return (
    <section className="question-section">
      <h2>Question 1 of 10</h2>
      <p>Thanks for coming in, Let's start with your introduction first.</p>
      <div className="interview-pictures">
        <div className="interview-picture">
          <div className="placeholder">Interviewer</div>
          <button className="back-button">Back</button>
        </div>
        <div className="interview-picture">
          <div className="placeholder">Interviewee</div>
          <button className="next-button">Next Question</button>
        </div>
      </div>
    </section>
  );
};

export default QuestionSection;
