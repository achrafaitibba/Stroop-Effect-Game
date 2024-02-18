import React from "react";
import "./Timer.css"
const Timer = ({timer}) => {
  return <div className="timer">
    <h1 className="timer-value">{timer}</h1>
  </div>;
};

export default Timer;
