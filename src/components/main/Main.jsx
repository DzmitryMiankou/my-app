import React from "react";
import styleMain from "./Main.module.css";

const Main = () => {
  return (
    <div className={styleMain.about}>
      <h1 className={styleMain.h1}>
        Проект преподавателя истории не об истории
      </h1>
      <a className={styleMain.link} href="/learning">
        Обучаться
      </a>
    </div>
  );
};

export default Main;
