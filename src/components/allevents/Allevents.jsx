import React from "react";
import AlleventsStyle from "./Allevents.module.scss";
import Accordion from "./accordion/Accordion";
import { motion } from "framer-motion";

const anim = {
  hidden: {
    y: -80,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 0.36,
  }),
};

const Allevents = () => {
  return (
    <motion.div
      className={AlleventsStyle.component}
      initial="hidden"
      whileInView="visible"
    >
      <motion.h2
        className={AlleventsStyle.mainText}
        variants={anim}
        transition={{ ease: "linear", duration: 0.7, delay: 0.5 }}
      >
        All Events
      </motion.h2>
      <Accordion />
    </motion.div>
  );
};

export default Allevents;
