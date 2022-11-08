import React, { Component } from "react";
import styleLearningLink from "./Learning_link.module.css";

class Learning_link extends Component {
  render() {
    return (
      <ul className={styleLearningLink.container}>
        <li className={styleLearningLink.list}>
          <a className={styleLearningLink.link} href="#3">
            {this.props.text}
          </a>
        </li>
      </ul>
    );
  }
}

export default Learning_link;
