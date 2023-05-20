import React from "react";
import AccordionStyle from "./Accordion.module.scss";
import img1 from "../../../img/1.png";
import ButtonCard from "./buttonCard/ButtonCard";

const Accordion = () => {
  const arr = [
    { name: "Hawaiian party", img: img1, date: "22.02.2023" },
    { name: "Mafia party", img: img1, date: "13.02.2022" },
    { name: "Party", img: img1, date: "10.05.2023" },
    { name: "Party on the beach", img: img1, date: "03.01.2023" },
    { name: "Home Security", img: img1, date: "13.02.2023" },
    { name: "Network Design & Implementation", img: img1, date: "16.09.2024" },
    { name: "System Design & Engineering", img: img1, date: "25.03.2023" },
    { name: "Client Care Plans", img: img1, date: "01.01.2024" },
  ];
  return (
    <ul className={AccordionStyle.component}>
      <ButtonCard arr={arr} oneElement={arr[0].name} />
    </ul>
  );
};

export default Accordion;
