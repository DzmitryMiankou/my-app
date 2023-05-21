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
