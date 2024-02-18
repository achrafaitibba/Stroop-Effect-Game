import React from "react";
import "./ColoredButtons.css";
const ColoredButtons = ({ col1, col2, col3, col4, setChosenColor }) => {
  return (
    <div className="color-buttons">
      <button className="btn" style={{ "--btn-color": `${col1}` }} onClick={()=> setChosenColor(col1)}></button>
      <button className="btn" style={{ "--btn-color": `${col2}` }} onClick={()=> setChosenColor(col2)}></button>
      <button className="btn" style={{ "--btn-color": `${col3}` }} onClick={()=> setChosenColor(col3)}></button>
      <button className="btn" style={{ "--btn-color": `${col4}` }} onClick={()=> setChosenColor(col4)}></button>
    </div>
  );
};

export default ColoredButtons;
