import React from "react";
import ToEventStyle from "./ToEvent.module.scss";
import ArrowRight from "./arrow-right.svg";

const ToEvent = () => {
  return (
    <div className={ToEventStyle.component}>
      <p className="text">Check our event page when you wait:</p>
      <button className={ToEventStyle.button}>
        <p>Go to the event</p> <img src={ArrowRight} alt="logo" />
      </button>
    </div>
  );
};

export default ToEvent;
