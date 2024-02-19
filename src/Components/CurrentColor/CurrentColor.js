import React from "react";
import "./CurrentColor.css";
const CurrentColor = ({ currentRandomColor, textColor }) => {
  return (
    <div className="currentColor">
      <header style={{ "--text-color": `${currentRandomColor}` }}>
        {textColor.toUpperCase()}
      </header>
    </div>
  );
};

export default CurrentColor;
