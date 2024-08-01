import React from 'react';
import './QuestionSection.css';

const questions = [
  "Thanks for coming in, Let's start with your introduction first.",
  "What are your greatest strengths?",
  "What do you consider to be your weaknesses?",
  "Why do you want to work for our company?",
  "Where do you see yourself in five years?",
  "Tell me about a challenge you've faced at work, and how you dealt with it.",
  "How do you handle stress and pressure?",
  "Describe a time when you had to work as part of a team.",
  "What motivates you?",
  "Do you have any questions for me about the company or the role?"
];

const QuestionSection = ({ currentQuestionIndex, setCurrentQuestionIndex }) => {
  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % 10);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex - 1 + 10) % 10);
  };

  return (
    <section className="question-section">
      <h2>Question {currentQuestionIndex + 1} of 10</h2>
      <p>{questions[currentQuestionIndex]}</p>
      <div className="interview-pictures">
        <div className="interview-picture">
          <div className="placeholder">Interviewer</div>
          <button className="back-button" onClick={handlePreviousQuestion}>Back</button>
        </div>
        <div className="interview-picture">
          <div className="placeholder">Interviewee</div>
          <button className="next-button" onClick={handleNextQuestion}>Next Question</button>
        </div>
      </div>
    </section>
  );
};

export default QuestionSection;