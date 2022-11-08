import React from "react";
import styleLearning from "./Learning.module.css";
import LearningLink from "./learning_link/Learning_link";

const Learning = (props) => {
  return (
    <div className={styleLearning.container}>
      <div className="container_list">
        <div className="container_text">
          <h1 className={styleLearning.h1}>Learning</h1>
        </div>
        <div>
          <LearningLink text="Figma" />
          <LearningLink text="CSS" />
          <LearningLink text="HTML" />
        </div>
      </div>
      <div>
        <ul>
          <li>list ihiuhuhiu iuh9hjuh9n</li>
          <li>list oijiuhiu iohjiojijiojj iojjiojoi</li>
          <li>trgtrgtrgtrg g4tg45g9l ytntn </li>
          <li>list rynhry</li>
          <li>list ryrrrr r6hrh6r</li>
          <li>list</li>
        </ul>
      </div>
    </div>
  );
};

export default Learning;
