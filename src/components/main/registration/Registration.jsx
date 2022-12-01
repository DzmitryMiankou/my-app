import styleRegistration from "./Registration.module.css";
import React from "react";

const Registration = () => {
  return (
    <div>
      <form className={styleRegistration.container}>
        <div className={styleRegistration.elem__container}>
          <label className={styleRegistration.label} htmlFor="nickName">
            Nickname
          </label>
          <input placeholder="Например: Explore23" id="nickName" type="text" />
        </div>
        <div className={styleRegistration.elem__container}>
          <label className={styleRegistration.label} htmlFor="email">
            Email
          </label>
          <input
            placeholder="Например: explore@gmail.com"
            id="email"
            type="text"
          />
        </div>
        <div className={styleRegistration.elem__container}>
          <label
            placeholder="Например: explore@gmail.com"
            className={styleRegistration.label}
            htmlFor="password"
          >
            Password
          </label>
          <input placeholder="Например: 230cd_3rD" id="password" type="text" />
        </div>
        <div
          placeholder="Например: explore@gmail.com"
          className={styleRegistration.elem__container}
        >
          <button className={styleRegistration.button}>Регистрация</button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
