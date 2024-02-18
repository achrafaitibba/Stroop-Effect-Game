import React, { useEffect, useState } from "react";
import CurrentColor from "../CurrentColor/CurrentColor";
import Timer from "../Timer/Timer";
import ColoredButtons from "../ColoredButtons/ColoredButtons";
import Score from "../Score/Score";
import ControlButtons from "../ControlButtons/ControlButtons";
import TimeOutModal from "../Modal/TimeOutModal";

import "./GameArea.css";
const GameArea = () => {
  const colors = ["red", "blue", "yellow", "white"];
  const [currentRandomColor, setCurrentRandomColor] = useState(
    colors[Math.floor(Math.random() * 4)]
  );
  const [timer, setTimer] = useState(10);
  const [chosenColor, setChosenColor] = useState(
    colors[Math.floor(Math.random() * 4)]
  );
  const [score, setScore] = useState(0);
  const [personalRecord, setPersonalRecord] = useState(0);
  const [display, setDisplay] = useState();

  useEffect(() => {}, [chosenColor]);
  return (
    <div className="container">
      <div className="game">
        <CurrentColor currentRandomColor={currentRandomColor}></CurrentColor>
        <Timer timer={timer}></Timer>
        <ColoredButtons
          col1={colors[0]}
          col2={colors[1]}
          col3={colors[2]}
          col4={colors[3]}
          setChosenColor={setChosenColor}
        ></ColoredButtons>
        <Score scoreValue={score} personalRecord={personalRecord}></Score>
        <ControlButtons></ControlButtons>
      </div>
      <TimeOutModal display={`${display}`}></TimeOutModal>
    </div>
  );
};
//
export default GameArea;
