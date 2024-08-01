import React from 'react';
import './ScoresPage.css';

const scores = [
  { label: "Speech", value: 75 },
  { label: "Body Language", value: 85 },
  { label: "Overall Performance", value: 80 },
];

const getColor = (score) => {
  if (score >= 85) return 'green'; // Highest scores
  if (score >= 75) return 'orange'; // Mid-range scores
  return 'red'; // Lower scores
};

const ScoresPage = () => {
  return (
    <div className="scores-page">
      <h2 className="scores-title">Interview Scores</h2>
      <div className="scores-container">
        {scores.map((score, index) => (
          <div className="score-card" key={index}>
            <div
              className="circle"
              style={{
                background: `conic-gradient(${getColor(score.value)} ${score.value}%, #333333 ${score.value}%)`,
              }}
            >
              <div className="score-text">{`${score.value}%`}</div>
            </div>

            <p className="score-label">{score.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScoresPage;

