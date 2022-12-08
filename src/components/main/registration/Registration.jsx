import styleRegistration from "./Registration.module.scss";
import React, { useCallback } from "react";
import InputText from "./inputText/InputText";
import { useSelector, useDispatch } from "react-redux";
import {
  nickNameActin,
  emailActin,
  passwordActin,
  registerActin,
} from "../../redux/register-reducer.ts";

const Registration = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const increaseCounter = useCallback(
    (e, a) => {
      let text = e.target.value;
      dispatch(a(text));
    },
    [dispatch]
  );
  const arr = [
    {
      id: "nickName",
      value: "Nickname",
      placeholder: "Например: Explore23",
      type: "text",
      cr: (e) => increaseCounter(e, nickNameActin),
      valPol: state.register.nickName,
    },
    {
      id: "email",
      value: "Email",
      placeholder: "Например: explore@gmail.com",
      type: "email",
      cr: (e) => increaseCounter(e, emailActin),
      valPol: state.register.email,
    },
    {
      id: "password",
      value: "Password",
      placeholder: "Например: 230cd_3rD",
      type: "password",
      cr: (e) => increaseCounter(e, passwordActin),
      valPol: state.register.password,
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
      <>{formElem}</>
      <button
        type="reset"
        onClick={() => dispatch(registerActin())}
        className={styleRegistration.button}
      >
        Регистрация
      </button>
    </form>
  );
};

export default Registration;
