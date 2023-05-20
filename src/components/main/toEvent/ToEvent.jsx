import React from "react";
import ToEventStyle from "./ToEvent.module.scss";
import ArrowRight from "./arrow-right.svg";

const ToEvent = () => {
  return (
    <div className={ToEventStyle.component}>
      <p className="text">Check our event page when you wait:</p>
      <a
        href="https://developer.mozilla.org/ru/"
        target="_blank"
        className={ToEventStyle.button}
        rel="noreferrer"
      >
        <p>Go to the event</p> <img src={ArrowRight} alt="logo" />
      </a>
    </div>
  );
};

export default ToEvent;
