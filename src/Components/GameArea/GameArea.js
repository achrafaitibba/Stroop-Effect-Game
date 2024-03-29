import React, { useEffect, useState } from "react";
import CurrentColor from "../CurrentColor/CurrentColor";
import Timer from "../Timer/Timer";
import ColoredButtons from "../ColoredButtons/ColoredButtons";
import Score from "../Score/Score";
import ControlButtons from "../ControlButtons/ControlButtons";
import TimeOutModal from "../Modal/TimeOutModal";
import "./GameArea.css";

/** Bugs to fix hh
 * -timeout doesn't decrease if clicking fast answers
 * -when modal "block" = wait till replay clicked then generate random color/text
 * -after time is out, clicking replay doesn't generate random color/text
 */

const GameArea = () => {
  const colors = ["red", "blue", "yellow", "white"];
  const time = 5;
  const [currentRandomColor, setCurrentRandomColor] = useState(
    colors[Math.floor(Math.random() * 4)]
  );
  const [textColor, setTextColor] = useState(
    colors[Math.floor(Math.random() * 4)]
  );
  const [timer, setTimer] = useState(time);
  const [score, setScore] = useState(0);
  const [personalRecord, setPersonalRecord] = useState(0);
  const [display, setDisplay] = useState("none");
  const [timeOutMessage, setTimeOutMessage] = useState("");
  let myTimeOut = null;
  useEffect(() => {
    myTimeOut = setTimeout(timeSetter, 1000);
  }, [timer]);

  function timeSetter() {
    if (timer > 0) {
      setTimer(timer - 1);
    } else {
      setTimeOutMessage("Timeout, play faster !!");
      setDisplay("block");
      checkPersonalRecord(score);
      setScore(0);
    }
  }

  function isCorrect(chosenColor) {
    if (currentRandomColor === chosenColor) {
      console.log(
        "Correct> " +
          "chosenColor :" +
          chosenColor +
          " /correct Answer: " +
          currentRandomColor
      );
      let sc = score + 1;
      basicChanges(sc);
      setTimer(time);
    } else {
      console.log(
        "Incorrect> " +
          "chosenColor :" +
          chosenColor +
          " /correct Answer: " +
          currentRandomColor
      );
      checkPersonalRecord(score);
      basicChanges(0);
      setTimeOutMessage("Incorrect answer");
      setDisplay("block");
    }
  }
  function basicChanges(sc) {
    setScore(sc);
    setCurrentRandomColor(colors[Math.floor(Math.random() * 4)]);
    setTextColor(colors[Math.floor(Math.random() * 4)]);
    clearTimeout(myTimeOut);
  }
  function checkPersonalRecord(gameScore) {
    if (gameScore > personalRecord) {
      setPersonalRecord(gameScore);
    }
  }

  function reset() {
    setPersonalRecord(0);
    basicChanges(0);
    setTimer(time);
  }

  return (
    <div className="container">
      <div className="game">
        <CurrentColor
          currentRandomColor={currentRandomColor}
          textColor={textColor}
        ></CurrentColor>
        <Timer timer={timer}></Timer>
        <ColoredButtons
          isCorrect={isCorrect}
          col1={colors[0]}
          col2={colors[1]}
          col3={colors[2]}
          col4={colors[3]}
        ></ColoredButtons>
        <Score scoreValue={score} personalRecord={personalRecord}></Score>
        <ControlButtons reset={reset}></ControlButtons>
      </div>
      <TimeOutModal
        timeOutMessage={timeOutMessage}
        setDisplay={setDisplay}
        display={display}
        setTimer={setTimer}
        time={time}
      ></TimeOutModal>
    </div>
  );
};
export default GameArea;
