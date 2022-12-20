import React from "react";
import styleWorks from "./Works.module.scss";
import Stars from "./stars/Stars";
import Jpg from "../../../img/20zs01.jpg";
import { useState } from "react";
const Works = () => {
  const stars = [];
  stars.length = 5;
  const createStars = [...stars];

  const [selectedStars = 0, setSelectedStars] = useState();

  const copyStar = createStars.map((e, i) => (
    <Stars
      selected={selectedStars > i}
      key={i}
      onSelect={() => setSelectedStars(i + 1)}
    />
  ));

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
