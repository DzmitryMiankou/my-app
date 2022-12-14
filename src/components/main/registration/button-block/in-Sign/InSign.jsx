import styleButtonBlock from "./InSign.module.scss";
import React from "react";
import InText from "./../inText/inText";

const InSign = (props) => {
  return (
    <button
      type="reset"
      onClick={props.toLogin}
      className={styleButtonBlock.button_signIn}
    >
      <InText />
    </button>
  );
};

export default InSign;
