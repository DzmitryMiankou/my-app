import React from "react";
import ToEventStyle from "./ToEvent.module.scss";
import ArrowRight from "./arrow-right.svg";
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

const ToEvent = () => {
  return (
    <motion.div
      className={ToEventStyle.component}
      initial="hidden"
      whileInView="visible"
      variants={anim}
      transition={{ ease: "linear", duration: 0.5, delay: 1.6 }}
    >
      <p className="text">Check our event page when you wait:</p>
      <a
        href="https://developer.mozilla.org/ru/"
        target="_blank"
        className={ToEventStyle.button}
        rel="noreferrer"
      >
        <p>Go to the event</p> <img src={ArrowRight} alt="logo" />
      </a>
    </motion.div>
  );
};

export default ToEvent;
