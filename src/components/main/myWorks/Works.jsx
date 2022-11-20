import React from "react";
import styleWorks from "./Works.module.css";
import Stars from "./stars/Stars";
import Jpg from "../../../img/20zs01.jpg";
const Works = () => {
  const stars = [];
  stars.length = 5;
  const createStars = [...stars];
  const copyStar = createStars.map((e, i) => <Stars key={i} />);
  const df = () => {
    alert("hi");
  };
  return (
    <div className={styleWorks.container}>
      <h2 className={styleWorks.text}>Мои работы</h2>
      <img src={Jpg} alt="jpg" width="50%" />
      <div onClick={df} className={styleWorks.stars}>
        {copyStar}
      </div>
      <h2 className={styleWorks.text}>Работы учеников</h2>
    </div>
  );
};

export default Works;
