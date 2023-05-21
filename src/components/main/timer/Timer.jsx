import React, { useEffect, useState } from "react";
import moment from "moment";
import ClockStyle from "./Timer.module.scss";
import { motion } from "framer-motion";

const anim = {
  hidden: {
    y: -30,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const targetTime = moment("2023-05-31"); //31.05.2023

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
    { date: timeBetween.days(), text: "Days", dots: ":" },
    { date: timeBetween.hours(), text: "Hours", dots: ":" },
    { date: timeBetween.minutes(), text: "Minutes", dots: ":" },
    { date: timeBetween.seconds(), text: "Seconds" },
  ];

  return (
    <motion.div
      className={ClockStyle.component}
      initial="hidden"
      whileInView="visible"
    >
      {arr.map(({ date, text, dots }, i) => (
        <React.Fragment key={i}>
          <motion.div
            className={ClockStyle.containerDate}
            variants={anim}
            transition={{ ease: "linear", duration: 0.4, delay: 1 }}
          >
            <p className={ClockStyle.date}>{`${date}`}</p>
            <div className={ClockStyle.signature}>
              <p>{text}</p>
            </div>
          </motion.div>
          <motion.p
            className={ClockStyle.date}
            variants={anim}
            transition={{ ease: "linear", duration: 0.4, delay: 1 }}
          >
            {dots}
          </motion.p>
          <div className={ClockStyle.dote}></div>
        </React.Fragment>
      ))}
    </motion.div>
  );
};

export default Clock;
