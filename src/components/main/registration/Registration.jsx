import styleRegistration from "./Registration.module.scss";
import React, { useCallback } from "react";
import InputText from "./inputText/InputText";
import { useSelector, useDispatch } from "react-redux";
import { inputActin, registerActin } from "../../redux/register-reducer.ts";

const Registration = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const increaseCounter = useCallback(
    (e) => {
      let text = e.target.value;
      dispatch(inputActin(text));
    },
    [dispatch]
  );
  console.log(state.register);
  const arr = [
    {
      id: "nickNam",
      value: "Nickname",
      placeholder: "Например: Explore23",
      type: "text",
      cr: (e) => increaseCounter(e),
      valPol: state.register.nickName,
    },
    {
      id: "email",
      value: "Email",
      placeholder: "Например: explore@gmail.com",
      type: "email",
    },
    {
      id: "password",
      value: "Password",
      placeholder: "Например: 230cd_3rD",
      type: "password",
    },
  ];

  const formElem = arr.map(({ value, placeholder, id, type, cr, valPol }) => (
    <InputText
      key={id}
      value={value}
      placehold={placeholder}
      id={id}
      type={type}
      createText={cr}
      valPol={valPol}
    />
  ));
  return (
    <form className={styleRegistration.container}>
      <div>{formElem}</div>
      <button className={styleRegistration.button}>Регистрация</button>
    </form>
  );
};

export default Registration;
