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
          <input id="nickName" type="text" />
        </div>
        <div className={styleRegistration.elem__container}>
          <label className={styleRegistration.label} htmlFor="email">
            Email
          </label>
          <input id="email" type="text" />
        </div>
        <div className={styleRegistration.elem__container}>
          <label className={styleRegistration.label} htmlFor="password">
            Password
          </label>
          <input id="password" type="text" />
        </div>
      </form>
    </div>
  );
};

export default Registration;
