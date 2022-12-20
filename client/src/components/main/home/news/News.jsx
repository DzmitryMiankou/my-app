import styleNews from "./News.module.scss";
import React from "react";
import css from "./../../../.././img/new/css.png";

const News = () => {
  return (
    <div className={styleNews.container}>
      <img src={css} alt="css" />
    </div>
  );
};

export default News;
