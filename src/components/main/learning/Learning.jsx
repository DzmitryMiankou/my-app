import React from "react";
import styleLearning from "./Learning.module.css";
import LearningLink from "./learning_link/Learning_link";

const Learning = (props) => {
  return (
    <div className={styleLearning.about}>
      <h1 className={styleLearning.h1}>Learning</h1>
      <div>
        <LearningLink text="HTML" />
        <LearningLink text="CSS" />
        <LearningLink text="Figma" />
      </div>
    </div>
  );
};

export default Learning;
