import styleMain from "./Main.module.css";
import { Link } from "react-router-dom";
import React from "react";

const Main = () => {
  return (
    <div className={styleMain.vo}>
      <div className={styleMain.about}>
        <h1 className={styleMain.h1}>
          Проект преподавателя истории не об истории
        </h1>
        <Link className={styleMain.link} to="/learning">
          Обучаться
        </Link>
      </div>
      <div className={styleMain.mainBackGraund}></div>
    </div>
  );
};

export default Main;
