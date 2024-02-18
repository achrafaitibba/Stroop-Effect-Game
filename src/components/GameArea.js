import React from "react";
import CurrentColor from "./CurrentColor";
import Timer from "./Timer";
import Buttons from "./Buttons";
import Score from "./Score";
import ControlButtons from "./ControlButtons";

const GameArea = () => {
  return (
    <div>
      <CurrentColor></CurrentColor>
      <Timer></Timer>
      <Buttons></Buttons>
      <Score></Score>
      <ControlButtons></ControlButtons>
    </div>
  );
};

export default GameArea;
