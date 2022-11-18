import React from "react";
import styleWorks from "./Works.module.css";
import Stars from "./stars/Stars";
const Works = () => {
  return (
    <div className={styleWorks.container}>
      <h2 className={styleWorks.text}>Мои работы</h2>
      <h2 className={styleWorks.text}>Работы учеников</h2>
      <div>
        <Stars />
      </div>
    </div>
  );
};

export default Works;
