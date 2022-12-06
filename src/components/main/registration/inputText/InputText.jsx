import styleInputText from "./InputText.module.scss";
import React from "react";

const InputText = (props) => {
  return (
    <div className={styleInputText.elem__container}>
      <label
        placeholder={props.placeholder}
        className={styleInputText.label}
        htmlFor={props.id}
      >
        {props.value}
      </label>
      <input
        onChange={props.createText}
        placeholder={props.placehold}
        id={props.id}
        type={props.type}
        value={props.valPol}
      />
    </div>
  );
};

export default InputText;
