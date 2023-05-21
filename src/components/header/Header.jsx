import React from "react";
import HeaderStyle from "./Header.module.scss";
import logo from "../../Logo.svg";
import { motion } from "framer-motion";

const anim = {
  hidden: {
    y: -70,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
  }),
};

const Header = () => {
  return (
    <motion.header
      className={HeaderStyle.component}
      initial="hidden"
      whileInView="visible"
    >
      <motion.a
        href="/"
        variants={anim}
        transition={{ ease: "linear", duration: 0.4 }}
      >
        <img src={logo} className={HeaderStyle.logo} alt="logo" />
      </motion.a>
    </motion.header>
  );
};

export default Header;
