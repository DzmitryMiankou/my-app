import React from "react";
import styleLearning from "./Learning.module.css";
import LearningLink from "./learning_link/Learning_link";

const Learning = (props) => {
  return (
    <div className={styleLearning.container}>
      <div className="container__list">
        <div className="container__text">
          <h1 className={styleLearning.h1}>Learning</h1>
        </div>
        <div>
          <LearningLink text="Figma" />
          <LearningLink text="CSS" />
          <LearningLink text="HTML" />
        </div>
      </div>
      <div>
        <ul className={styleLearning.list__container}>
          <li>What is CSS?</li>
          <li>How CSS is structured</li>
          <li>How CSS works</li>
          <li>CSS styling text</li>
          <li>Styling lists</li>
          <li>Web fonts</li>
        </ul>
      </div>
    </div>
  );
};

export default Learning;
