import React from "react";
import MainText from "./mainText/MainText";
import Clock from "./timer/Timer";
import ToEvent from "./toEvent/ToEvent";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  component: {
    display: "grid",
    gap: "20px",
  },
});

const Main = () => {
  const classes = useStyles();
  return (
    <main className={classes.component}>
      <MainText />
      <Clock />
      <ToEvent />
    </main>
  );
};

export default Main;
