import React, { useEffect, useState } from "react";
import moment from "moment";
import ClockStyle from "./Timer.module.scss";

const targetTime = moment("2023-05-23");

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(moment());
  const timeBetween = moment.duration(targetTime.diff(currentTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const arr = [
    { date: timeBetween.days(), text: "Days" },
    { date: timeBetween.hours(), text: "Hours" },
    { date: timeBetween.minutes(), text: "Minutes" },
    { date: timeBetween.seconds(), text: "Seconds" },
  ];

  return (
    <div className={ClockStyle.component}>
      {arr.map(({ date, text }, i) => (
        <React.Fragment key={i}>
          <div className={ClockStyle.containerDate}>
            <p className={ClockStyle.date}>{date}</p>
            <div className={ClockStyle.signature}>
              <p>{text}</p>
            </div>
          </div>
          <div className={ClockStyle.dote}></div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Clock;

/*import React from "react";
import ClockStyle from "./Timer.module.scss";
import moment from "moment";

const Clock = ({ days = 1, hours = 0, minutes = 1, seconds = 3 }) => {
  const [[d, h, m, s], setTime] = React.useState([
    days,
    hours,
    minutes,
    seconds,
  ]);

  const tick = () => {
    if (h === 0 && m === 0 && s === 0 && d === 0) {
      return;
    } else if (h === 0 && m === 0 && s === 0) {
      setTime([d - 1, 23, 59, 59]);
    } else if (m === 0 && s === 0) {
      setTime([d, h - 1, 59, 59]);
    } else if (s === 0) {
      setTime([d, h, m - 1, 59]);
    } else {
      setTime([d, h, m, s - 1]);
    }
  };

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  const arr = [
    { date: d.toString().padStart(2, "0"), text: "Days" },
    { date: h.toString().padStart(2, "0"), text: "Hours" },
    { date: m.toString().padStart(2, "0"), text: "Minutes" },
    { date: s.toString().padStart(2, "0"), text: "Seconds" },
  ];

  return (
    <div className={ClockStyle.component}>
      {arr.map(({ date, text }, i) => (
        <React.Fragment key={i}>
          <div className={ClockStyle.containerDate}>
            <p className={ClockStyle.date}>{date}</p>
            <div className={ClockStyle.signature}>
              <p>{text}</p>
            </div>
          </div>
          <div className={ClockStyle.dote}></div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Clock;*/
