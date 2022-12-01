import styleRegistration from "./Registration.module.css";
import React from "react";
import InputText from "./inputText/InputText";

const Registration = () => {
  const arr = [
    { id: "nickNam", value: "Nickname", placeholder: "Например: Explore23" },
    { id: "email", value: "Email", placeholder: "Например: explore@gmail.com" },
    { id: "password", value: "Password", placeholder: "Например: 230cd_3rD" },
  ];

  const formElem = arr.map(({ value, placeholder, id }) => (
    <InputText key={id} value={value} placehold={placeholder} id={id} />
  ));
  return (
    <div>
      <form className={styleRegistration.container}>
        <div>{formElem}</div>
        <button className={styleRegistration.button}>Регистрация</button>
      </form>
    </div>
  );
};

export default Registration;
