import styleMain from "./Main.module.css";
import { Link } from "react-router-dom";
import React from "react";
import mainBackGraund from "../../img/mainBackGraund.svg";

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
      <div>
        <img
          className={styleMain.mainBackGraund}
          src={mainBackGraund}
          alt="svg"
        />
      </div>
    </div>
  );
};

export default Main;
