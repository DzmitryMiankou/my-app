import styleButtonBlock from "./ButtonBlock.module.scss";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHTTP } from "./../../../.././hook/http";
import InText from "./inText/inText";

const ButtonBlock = (props) => {
  const { request } = useHTTP();
  const state = useSelector((state) => state.register);
  const dispatch = useDispatch();

  const toButton = async () => {
    const { nickName, email, password } = state;
    if (nickName === "" || email === "" || password === "") {
      return props.set("Поля должны быть заполнены");
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
      props.set(response.message.errors[0]["msg"]);
    } catch (error) {
      console.log(error);
    }
    dispatch(props.registerActin());
  };

  const toLogin = async () => {
    const { nickName, email, password } = state;
    if (email === "" || password === "") {
      return props.set("email и password обязательны для заполнения");
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
        props.set("Операция прошла успешно");
        dispatch(props.registerActin());
        return;
      }
      props.set(response.message.errors[0]["msg"]);
    } catch (error) {
      console.log(error);
    }
    dispatch(props.registerActin());
  };
  const reg = () => {
    props.setAdd(!props.add);
    props.set("");
  };
  return (
    <div className={styleButtonBlock.button_container}>
      <p onClick={reg} className={styleButtonBlock.p}>
        {props.add ? "Зарегистрироваться" : "Войти"}
      </p>
      <div>
        {!props.add ? (
          <button
            type="reset"
            onClick={toButton}
            className={styleButtonBlock.button}
          >
            регистрация
          </button>
        ) : (
          <button
            type="reset"
            onClick={toLogin}
            className={styleButtonBlock.button_signIn}
          >
            <InText />
          </button>
        )}
      </div>
      <p className={styleButtonBlock.error}>{props.get}</p>
    </div>
  );
};

export default ButtonBlock;
