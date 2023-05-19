import React from "react";
import MainTextStyle from "./MainText.module.scss";

const MainText = () => {
  return (
    <div className={MainTextStyle.mainTextContainer}>
      <h1 className={MainTextStyle.mainText}>Under Construction</h1>
      <p className="text">
        We're making lots of improvements and will be back soon
      </p>
    </div>
  );
};

export default MainText;
