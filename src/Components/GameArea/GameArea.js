import React from "react";
import CurrentColor from "../CurrentColor/CurrentColor";
import Timer from "../Timer/Timer";
import Buttons from "../Buttons/Buttons";
import Score from "../Score/Score";
import ControlButtons from "../ControlButtons/ControlButtons";

const GameArea = () => {
  return (
    <div>
      <CurrentColor></CurrentColor>
      <Timer></Timer>
      <Buttons></Buttons>
      <Score></Score>
      <ControlButtons></ControlButtons>
      Hello from Game Area
    </div>
  );
};

export default GameArea;
