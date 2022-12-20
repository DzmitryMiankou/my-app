import React from "react";
import styleInput from "./Input.module.scss";

const Input = (props) => {
  return (
    <textarea
      onChange={props.increaseCounter}
      placeholder="напишите сообщение"
      className={styleInput.container__comment_text}
      value={props.state.messeges.newChanges}
    />
  );
};

export default Input;
