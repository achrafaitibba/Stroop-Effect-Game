import React from "react";
import "./TimeOutModal.css";
const TimeOutModal = ({display}) => {
  return (
    <div className="modal" style={{"--display-modal": `${display}`}}>
      <div className="bg"></div>
      <div className="content">
        <h1>Timeout play faster !!</h1>
        <button className="btn replay">Replay</button>
      </div>
    </div>
  );
};

export default TimeOutModal;
