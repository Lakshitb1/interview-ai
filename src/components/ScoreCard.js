import React from 'react';
import './ScoreCard.css';

const ScoreCard = ({ title, score, circular }) => {
  const getColor = (score) => {
    if (score >= 85) return 'green'; // Highest scores
    if (score >= 75) return 'orange'; // Mid-range scores
    return 'red'; // Lower scores
  };


  return (
    <div className="score-card">
      <h2>{title}</h2>
      {circular ? (
        <div className="circle" style={{ borderColor: getColor(score) }}>
          <p>{score}</p>
        </div>
      ) : (
        <p>{score}</p>
      )}
    </div>
  );
};

export default ScoreCard;
