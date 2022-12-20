import styleButtonBlock from "./ButtonBlock.module.scss";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHTTP } from "./../../../.././hook/http";
import Choose from "./choose/Choose";
import InSign from "./in-Sign/InSign";
import RegButton from "./reg-button/RegButton";

const ButtonBlock = (props) => {
  const { request } = useHTTP();
  const state = useSelector((state) => state.register);
  const dispatch = useDispatch();

  const { nickName, email, password } = state;
  const data = {
    nickName: nickName,
    email: email,
    password: password,
  };
  const toButton = async (e) => {
    e.preventDefault();

    if (nickName === "" || email === "" || password === "") {
      return props.set("Поля должны быть заполнены");
    }

    try {
      const response = await request(
        "http://localhost:5000/api/auth",
        "POST",
        JSON.stringify(data),
        { "Content-Type": "application/json" }
      );
      await props.set(response.message.errors[0]["msg"]);
    } catch (error) {
      console.log(error);
    }
    dispatch(props.registerActin());
  };

  const toLogin = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      return props.set("email и password обязательны для заполнения");
    }
    try {
      const response = await request(
        "http://localhost:5000/api/login",
        "POST",
        JSON.stringify(data),
        { Accept: "application/json", "Content-Type": "application/json" },
        "include"
      );
      if (response.message === undefined) {
        localStorage.setItem("Token", response.accessToken);
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
      <Choose add={props.add} reg={reg} />
      <div>
        {!props.add ? (
          <RegButton toButton={toButton} />
        ) : (
          <InSign toLogin={toLogin} />
        )}
      </div>
      <p className={styleButtonBlock.error}>{props.get}</p>
    </div>
  );
};

export default ButtonBlock;
