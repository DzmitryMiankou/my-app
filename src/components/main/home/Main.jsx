import styleMain from "./Main.module.scss";
import { Link } from "react-router-dom";
import React from "react";
import News from "./news/News";

const Main = () => {
  return (
    <div className={styleMain.container}>
      <div className={styleMain.about}>
        <h1 className={styleMain.h1}>
          Проект преподавателя истории не об истории
        </h1>
        <Link className={styleMain.link} to="/learning">
          Обучаться
        </Link>
      </div>
      <div className={styleMain.mainBackGraund}></div>
      <News />
    </div>
  );
};

export default Main;
