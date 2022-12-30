import React from "react";
import styleSign from "./SignOut.module.scss";
import { useDispatch } from "react-redux";
import { authActin } from "./../.././redux/auth-reducer.ts";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toAuth = async (e) => {
    const a = window.confirm(
      "Эта страница просит Вас подтвердить, что вы хотите уйти."
    );
    if (!a) return;
    localStorage.removeItem("user");
    //window.location.reload();
    await fetch("http://localhost:5000/api/logoutUsers", {
      method: "GET",
      credentials: "include",
    });
    dispatch(authActin(false));
    return navigate("/");
  };

  return (
    <button onClick={toAuth} className={styleSign.container}>
      <p>Выйти</p>
      <svg width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
        <path d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
        <path d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
      </svg>
    </button>
  );
};

export default SignOut;
