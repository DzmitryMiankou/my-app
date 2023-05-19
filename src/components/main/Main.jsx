import React from "react";
import MainStyle from "./Main.module.scss";
import MainText from "./mainText/MainText";
import Clock from "./timer/Timer";
import ToEvent from "./toEvent/ToEvent";

const Main = () => {
  return (
    <main className={MainStyle.component}>
      <MainText />
      <Clock />
      <ToEvent />
    </main>
  );
};

export default Main;
