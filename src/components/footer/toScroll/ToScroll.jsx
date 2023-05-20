import React from "react";
import FooterStyle from "./ToScroll.module.scss";
import Svg from "../../../img/arrow-right.svg";

const ToScroll = ({ refs }) => {
  const handleClick = () => {
    refs.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button onClick={handleClick} className={FooterStyle.toScroll}>
      <p>Other Events</p>
      <img className={FooterStyle.svg} src={Svg} alt="svg" />
    </button>
  );
};

export default ToScroll;
