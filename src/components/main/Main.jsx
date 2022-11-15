import React from "react";
import styleMain from "./Main.module.css";

const Main = () => {
  return (
    <div className={styleMain.about}>
      <h1 className={styleMain.h1}>
        Проект преподавателя истории не об истории
      </h1>
      <details>
        <summary>Details</summary>
        <div className={styleMain.list}>
          <a className={styleMain.list_link} href="#3">
            education
          </a>
          <a className={styleMain.list_link} href="#3">
            interests
          </a>
        </div>
      </details>
    </div>
  );
};

export default Main;
