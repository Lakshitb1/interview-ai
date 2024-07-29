import React from 'react';
import './Sidebar.css'; // Create this CSS file for sidebar-specific styles

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <a href="/interviews" className="back-link">
        ← Back to interviews
      </a>
      <div className="progress">
        <p>1/10</p>
        <p>Practice - Level 1</p>
      </div>
      <ul className="question-list">
        {Array.from({ length: 10 }, (_, i) => (
          <li key={i}>
            <button>Question {i + 1}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
