import styleRegistration from "./Registration.module.scss";
import React from "react";
import InputText from "./inputText/InputText";

const Registration = () => {
  const arr = [
    {
      id: "nickNam",
      value: "Nickname",
      placeholder: "Например: Explore23",
      type: "text",
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

  const formElem = arr.map(({ value, placeholder, id, type }) => (
    <InputText
      key={id}
      value={value}
      placehold={placeholder}
      id={id}
      type={type}
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
