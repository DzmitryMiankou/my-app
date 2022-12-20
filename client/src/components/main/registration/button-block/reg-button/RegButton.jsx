import styleButtonBlock from "./RegButton.module.scss";
import React from "react";

const RegButton = (props) => {
  return (
    <button onClick={props.toAuth} className={styleButtonBlock.button}>
      регистрация
    </button>
  );
};

export default RegButton;
