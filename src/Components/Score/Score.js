import React from "react";
import "./Score.css";

const Score = ({ scoreValue, personalRecord }) => {
  return (
    <div className="score-container">
      <h1>
        Score: <span>{scoreValue}</span>
      </h1>
      <p>
        Personal Record: <span> {personalRecord}</span>{" "}
      </p>
    </div>
  );
};

export default Score;
