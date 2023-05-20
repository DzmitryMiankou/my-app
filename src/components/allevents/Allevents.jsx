import React from "react";
import AlleventsStyle from "./Allevents.module.scss";
import Accordion from "./accordion/Accordion";

const Allevents = () => {
  return (
    <div className={AlleventsStyle.component}>
      <h2 className={AlleventsStyle.mainText}>All Events</h2>
      <Accordion />
    </div>
  );
};

export default Allevents;
