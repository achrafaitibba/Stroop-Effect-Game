import React from "react";
import "./CurrentColor.css";
const CurrentColor = ({ currentRandomColor }) => {
  return (
    <div className="currentColor">
      <header style={{ "--text-color": `${currentRandomColor}` }}>
        {currentRandomColor.toUpperCase()}
      </header>
    </div>
  );
};

export default CurrentColor;
