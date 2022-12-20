import React from "react";
import Svg from "./svg/Svg";
import styleButt from "./Button.module.scss";

const Button = (props) => {
  return (
    <button
      onClick={props.dispatch}
      className={styleButt.container__comment_but}
    >
      <Svg />
    </button>
  );
};

export default Button;
