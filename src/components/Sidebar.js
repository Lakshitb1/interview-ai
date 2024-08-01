import React from 'react';
import './Sidebar.css';

const Sidebar = ({ currentQuestionIndex, setCurrentQuestionIndex }) => {
  const handleQuestionClick = (index) => {
    setCurrentQuestionIndex(index);
  };

  return (
    <aside className="sidebar">
      <a href="/interviews" className="back-link">
        ← Back to interviews
      </a>
      <div className="progress">
        <p>{currentQuestionIndex + 1}/10</p>
        <p>Practice - Level 1</p>
      </div>
      <ul className="question-list">
        {[...Array(10)].map((_, index) => (
          <li key={index}>
            <button
              onClick={() => handleQuestionClick(index)}
              className={currentQuestionIndex === index ? 'active' : ''}
            >
              Question {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;