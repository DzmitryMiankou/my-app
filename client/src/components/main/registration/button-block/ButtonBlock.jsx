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

  async function response(endPoint) {
    return await request(
      endPoint,
      "POST",
      JSON.stringify({ ...state }),
      { Accept: "application/json", "Content-Type": "application/json" },
      "include"
    );
  }
  const { nickName, email, password } = state;
  const toAuth = async (e) => {
    e.preventDefault();
    if (nickName === "" || email === "" || password === "") {
      return props.set("Поля должны быть заполнены");
    }
    try {
      const res = await response("http://localhost:5000/api/auth");
      localStorage.setItem("user", JSON.stringify(res));
      props.set(res.message.errors[0]["msg"]);
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
      const res = await response("http://localhost:5000/api/login");
      if (res.message === undefined) {
        localStorage.setItem("user", JSON.stringify(res));
        props.set("Операция прошла успешно");
        dispatch(props.registerActin());
        return;
      }
      props.set(res.message.errors[0]["msg"]);
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
          <RegButton toAuth={toAuth} />
        ) : (
          <InSign toLogin={toLogin} />
        )}
      </div>
      <p className={styleButtonBlock.error}>{props.get}</p>
    </div>
  );
};

export default ButtonBlock;
