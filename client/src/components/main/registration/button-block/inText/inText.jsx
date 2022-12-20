import styleinText from "./inText.module.scss";
import React from "react";
import Svg from "./svg/Svg";

const InText = (props) => {
  return (
    <div className={styleinText.button_inText}>
      <Svg />
      <p>войти</p>
    </div>
  );
};

export default InText;
