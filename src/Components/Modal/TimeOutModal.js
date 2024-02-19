import React from "react";
import "./TimeOutModal.css";
const TimeOutModal = ({ setDisplay, display, setTimer, time, timeOutMessage, replay }) => {
  return (
    <div className="modal" style={{ "--display-modal": `${display}` }}>
      <div className="bg"></div>
      <div className="content">
        <h1>{timeOutMessage}</h1>
        <button
          className="btn replay"
          onClick={() => {
            setTimer(time);
            setDisplay("none");
          }}
        >
          Replay
        </button>
      </div>
    </div>
  );
};

export default TimeOutModal;
