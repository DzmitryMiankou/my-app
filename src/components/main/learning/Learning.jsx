import React from "react";
import styleLearning from "./Learning.module.css";
import LearningLink from "./learning_link/Learning_link";
import { commitActin, addCommitActin } from "../../redux/commitData-reducer";

const a = { learningLink: ["Figma", "HTML", "CSS"] };

const Learning = (props) => {
  const linkText = a.learningLink.map((m) => <LearningLink text={m} />);

  const add = () => {
    props.disPatch(addCommitActin());
  };

  const ch = (e) => {
    let text = e.target.value;
    props.disPatch(commitActin(text));
  };
  return (
    <div className={styleLearning.blok}>
      <div className={styleLearning.container}>
        <div className="container__list">
          <div className="container__text">
            <h1 className={styleLearning.h1}>Learning</h1>
          </div>
          <div>{linkText}</div>
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
      <div className={styleLearning.section}>
        <div>
          <h3>HTML: HyperText Markup Language</h3>
          <p className={styleLearning.section__text}>
            HTML (HyperText Markup Language) is the most basic building block of
            the Web. It defines the meaning and structure of web content. Other
            technologies besides HTML are generally used to describe a web
            page's appearance/presentation (CSS) or functionality/behavior
            (JavaScript). "Hypertext" refers to links that connect web pages to
            one another, either within a single website or between websites.
            Links are a fundamental aspect of the Web. By uploading content to
            the Internet and linking it to pages created by other people, you
            become an active participant in the World Wide Web.
          </p>
        </div>
        <div className={styleLearning.comment}>
          <textarea
            onChange={ch}
            placeholder="enter your commit"
            className={styleLearning.comment_text}
            value={props.newCommit}
          />
          <button className={styleLearning.button} onClick={add}>
            Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Learning;
