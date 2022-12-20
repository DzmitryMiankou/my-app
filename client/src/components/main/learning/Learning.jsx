import React from "react";
import styleLearning from "./Learning.module.scss";
//import LearningLink from "./learning_link/Learning_link";
import { commitActin, addCommitActin } from "../../redux/commitData-reducer";

const Learning = (props) => {
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
        <div className={styleLearning.container__list}>
          <div className="container__text">
            <h1 className={styleLearning.h1}>Обучение для детей</h1>
          </div>
        </div>
      </div>
      <div className={styleLearning.section}>
        <div>
          <h3>Протатипируй и программируй легко, красочно и увлекательно</h3>
          <p className={styleLearning.section__text}>
            На этой странице Вы можете ознакомиться с основными возможностями
            HTML, CSS. Попробуйте создать макет сайта с помощью Figma. Для
            начала обучения вам потребуется скачать и установить программу для
            прототипирования сайтов и редактор кода.
          </p>
        </div>
        <div className={styleLearning.comment}>
          <textarea
            onChange={ch}
            placeholder="напишите комментарий"
            className={styleLearning.comment_text}
            value={props.newCommit}
          />
          <button className={styleLearning.button} onClick={add}>
            отправить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Learning;
