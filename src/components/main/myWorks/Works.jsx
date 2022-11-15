import React from "react";
import styleWorks from "./Works.module.css";

const Works = () => {
  return (
    <div className={styleWorks.container}>
      <h2 className={styleWorks.text}>Мои работы</h2>
      <h2 className={styleWorks.text}>Работы учеников</h2>
    </div>
  );
};

export default Works;
