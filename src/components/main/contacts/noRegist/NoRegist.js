import React from "react";
import NoRegistStyle from "./NoRegist.module.scss";

function NoRegiste() {
  return (
    <div className={NoRegistStyle.container}>
      <h1 className={NoRegistStyle.text}>Вы не авторизованы</h1>
      <div className={NoRegistStyle.background}></div>
    </div>
  );
}

export default NoRegiste;
