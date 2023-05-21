import React, { useRef } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import "@fontsource/poppins";
import Vector1 from "./Vector1.svg";
import Vector2 from "./Vector2.svg";
import Allevents from "./components/allevents/Allevents";
import { motion } from "framer-motion";

const anim = {
  hidden: {
    y: -120,
    x: -40,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    x: 0,
    opacity: 1,
  }),
};

const anim2 = {
  hidden: {
    y: -120,
    x: 50,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    x: 0,
    opacity: 1,
  }),
};

function App() {
  const titleRef = useRef(null);
  return (
    <motion.div className="App" initial="hidden" whileInView="visible">
      <motion.img
        src={Vector1}
        className="vector1"
        alt="logo"
        variants={anim}
        transition={{ ease: "linear", duration: 0.5, delay: 0.3 }}
      />
      <motion.img
        src={Vector2}
        className="vector2"
        alt="logo"
        variants={anim2}
        transition={{ ease: "linear", duration: 0.5, delay: 0.3 }}
      />
      <Header />
      <Main />
      <Footer refs={titleRef} />
      <div ref={titleRef} className="allevents">
        <Allevents />
      </div>
    </motion.div>
  );
}

export default App;
