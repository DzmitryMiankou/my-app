import React from "react";
import styleLearningLink from "./Learning_link.module.css";

const Learning_link = (props) => {
  return (
    <ul className={styleLearningLink.container}>
      <li className={styleLearningLink.list}>
        <a className={styleLearningLink.link} href="#3">
          {props.text}
        </a>
      </li>
    </ul>
  );
};

export default Learning_link;
