import React, { useEffect, useState } from "react";
import moment from "moment";
import ClockStyle from "./Timer.module.scss";
import { motion } from "framer-motion";
import { useResize } from "../../../hook/resizeWindHook";

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

const targetTime = moment("2023-08-31"); //31.05.2023

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(moment());
  const timeBetween = moment.duration(targetTime.diff(currentTime));

  const sizeWindiw = useResize();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const arr = [
    {
      date: timeBetween.days(),
      text: sizeWindiw.width <= 600 ? "DD" : "Days",
      dots: ":",
    },
    {
      date: timeBetween.hours(),
      text: sizeWindiw.width <= 600 ? "HH" : "Hours",
      dots: ":",
    },
    {
      date: timeBetween.minutes(),
      text: sizeWindiw.width <= 600 ? "MM" : "Minutes",
      dots: ":",
    },
    {
      date: timeBetween.seconds(),
      text: sizeWindiw.width <= 600 ? "SS" : "Seconds",
    },
  ];

  return (
    <motion.div
      className={ClockStyle.component}
      initial="hidden"
      whileInView="visible"
      variants={anim}
      transition={{ ease: "linear", duration: 0.4, delay: 1 }}
    >
      {arr.map(({ date, text, dots }, i) => (
        <React.Fragment key={i}>
          <div className={ClockStyle.containerDate}>
            <p className={ClockStyle.date}>{`${date}`}</p>
            <div className={ClockStyle.signature}>
              <p>{text}</p>
            </div>
          </div>
          <p className={ClockStyle.date}>{dots}</p>
        </React.Fragment>
      ))}
    </motion.div>
  );
};

export default Clock;
