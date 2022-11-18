import React from "react";
import styleWorks from "./Works.module.css";
import Stars from "./stars/Stars";
import Jpg from "../../../img/20zs01.jpg";
const Works = () => {
  let createArray = [1, 2, 3, 4, 5];
  const copyStar = createArray.map((e, i) => <Stars key={i} />);

  return (
    <div className={styleWorks.container}>
      <h2 className={styleWorks.text}>Мои работы</h2>
      <img src={Jpg} alt="jpg" width="50%" />
      <div className={styleWorks.stars}>{copyStar}</div>
      <h2 className={styleWorks.text}>Работы учеников</h2>
    </div>
  );
};

export default Works;
