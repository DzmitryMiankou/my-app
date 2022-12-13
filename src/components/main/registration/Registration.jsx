import styleRegistration from "./Registration.module.scss";
import React, { useCallback, useState } from "react";
import InputText from "./inputText/InputText";
import { useSelector, useDispatch } from "react-redux";
import {
  nickNameActin,
  emailActin,
  passwordActin,
  registerActin,
} from "../../redux/register-reducer.ts";
import { useHTTP } from "./../../../hook/http.js";

const Registration = (props) => {
  const [add, setAdd] = useState(true);
  const { request } = useHTTP();
  const state = useSelector((state) => state.register);
  const dispatch = useDispatch();
  const [get, set] = useState();
  const increaseCounter = useCallback(
    (e, a) => {
      let text = e.target.value;
      dispatch(a(text));
      set("");
    },
    [dispatch]
  );

  const toButton = async () => {
    const { nickName, email, password } = state;
    if (nickName === "" || email === "" || password === "") {
      return set("Поля должны быть заполнены");
    }

    const data = {
      nickName: nickName,
      email: email,
      password: password,
    };
    try {
      const response = await request(
        "http://localhost:5000/api/auth",
        "POST",
        JSON.stringify(data),
        { "Content-Type": "application/json" }
      );
      set(response.message.errors[0]["msg"]);
    } catch (error) {
      console.log(error);
    }
    dispatch(registerActin());
  };

  const toLogin = async () => {
    const { nickName, email, password } = state;
    if (email === "" || password === "") {
      return set("email и password обязательны для заполнения");
    }

    const data = {
      nickName: nickName,
      email: email,
      password: password,
    };
    try {
      const response = await request(
        "http://localhost:5000/api/login",
        "POST",
        JSON.stringify(data),
        { "Content-Type": "application/json" }
      );
      if (response.message === undefined) {
        set("Операция прошла успешно");
        dispatch(registerActin());
        return;
      }
      set(response.message.errors[0]["msg"]);
    } catch (error) {
      console.log(error);
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
  const reg = () => {
    setAdd(!add);
    set("");
  };

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
      <p className={styleRegistration.error}>{get}</p>
      <>{formElem}</>
      <div className={styleRegistration.button_container}>
        <p onClick={reg} className={styleRegistration.p}>
          {add ? "Зарегистрироваться" : "Войти"}
        </p>
        <div>
          {!add ? (
            <button
              type="reset"
              onClick={toButton}
              className={styleRegistration.button}
            >
              регистрация
            </button>
          ) : (
            <button
              type="reset"
              onClick={toLogin}
              className={styleRegistration.button_signIn}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                <path d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
              </svg>
              <p>войти</p>
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default Registration;
