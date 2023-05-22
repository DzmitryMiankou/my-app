import React from "react";
import MainTextStyle from "./MainText.module.scss";
import { motion } from "framer-motion";

const anim = {
  hidden: {
    y: -30,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 0.36,
  },
};

const anim2 = {
  hidden: {
    ...anim.hidden,
  },
  visible: {
    ...anim.visible,
    opacity: 1,
  },
};

const MainText = () => {
  return (
    <motion.div
      className={MainTextStyle.mainTextContainer}
      initial="hidden"
      whileInView="visible"
    >
      <motion.h1
        className={MainTextStyle.mainText}
        variants={anim}
        transition={{ ease: "linear", duration: 0.4, delay: 0.6 }}
      >
        Under Construction
      </motion.h1>
      <motion.p
        className={MainTextStyle.text}
        variants={anim2}
        transition={{ ease: "linear", duration: 0.4, delay: 0.6 }}
      >
        We're making lots of improvements and will be back soon
      </motion.p>
    </motion.div>
  );
};

export default MainText;
