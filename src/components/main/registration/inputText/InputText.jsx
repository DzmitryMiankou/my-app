import styleInputText from "./InputText.module.css";
import React from "react";

const InputText = (props) => {
  return (
    <div>
      <div className={styleInputText.elem__container}>
        <label
          placeholder={props.placeholder}
          className={styleInputText.label}
          htmlFor={props.id}
        >
          {props.value}
        </label>
        <input placeholder={props.placehold} id={props.id} type="text" />
      </div>
    </div>
  );
};

export default InputText;
