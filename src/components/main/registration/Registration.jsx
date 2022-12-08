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
  const state = useSelector((state) => state.register);
  const dispatch = useDispatch();
  const increaseCounter = useCallback(
    (e, a) => {
      let text = e.target.value;
      dispatch(a(text));
    },
    [dispatch]
  );
  const toButton = () => {
    const { nickName, email, password } = state;
    if (nickName === "") {
      return;
    } else if (email === "") {
      return;
    } else if (password === "" || password.length < 6) {
      return;
    }
    dispatch(registerActin());
  };
  const arr = [
    {
      id: "nickName",
      value: "Nickname",
      placeholder: "Например: Explore23",
      type: "text",
      cr: (e) => increaseCounter(e, nickNameActin),
      valPol: state.nickName,
    },
    {
      id: "email",
      value: "Email",
      placeholder: "Например: explore@gmail.com",
      type: "email",
      cr: (e) => increaseCounter(e, emailActin),
      valPol: state.email,
    },
    {
      id: "password",
      value: "Password",
      placeholder: "Например: 230cd_3rD",
      type: "password",
      cr: (e) => increaseCounter(e, passwordActin),
      valPol: state.password,
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
        onClick={toButton}
        className={styleRegistration.button}
      >
        Регистрация
      </button>
    </form>
  );
};

export default Registration;
