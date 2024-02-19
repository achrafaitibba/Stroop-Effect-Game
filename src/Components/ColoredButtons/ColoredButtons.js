import React from "react";
import "./ColoredButtons.css";
const ColoredButtons = ({ col1, col2, col3, col4, isCorrect }) => {
  return (
    <div className="color-buttons">
      <button className="btn"  onClick={()=> { isCorrect(col1)}} style={{ "--btn-color": `${col1}` }} ></button>
      <button className="btn"  onClick={()=> { isCorrect(col2)}} style={{ "--btn-color": `${col2}` }} ></button>
      <button className="btn"  onClick={()=> { isCorrect(col3)}} style={{ "--btn-color": `${col3}` }} ></button>
      <button className="btn"  onClick={()=> { isCorrect(col4)}} style={{ "--btn-color": `${col4}` }} ></button>
    </div>
  );
};

export default ColoredButtons;
