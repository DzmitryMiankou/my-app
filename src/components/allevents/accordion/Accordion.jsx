import React from "react";
import AccordionStyle from "./Accordion.module.scss";
import img1 from "../../../img/1.png";

const Accordion = () => {
  const arr = [
    { name: "Hawaiian party", img: img1 },
    { name: "Mafia party" },
    { name: "Party" },
    { name: "Party on the beach" },
    { name: "Home Security" },
    { name: "Network Design & Implementation" },
    { name: "System Design & Engineering" },
    { name: "Client Care Plans" },
  ];
  return (
    <div className={AccordionStyle.component}>
      {arr.map(({ name, img }, i) => (
        <React.Fragment key={i}>
          <button className={AccordionStyle.container}>
            <h3 className={AccordionStyle.text}>{name}</h3>
            <>{img ? <img src={img} alt="img" /> : <></>}</>
          </button>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Accordion;
