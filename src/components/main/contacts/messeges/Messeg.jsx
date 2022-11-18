import React from "react";
import styleMesseg from "./Messeg.module.css";

const Messeg = (props) => {
  const hi = () => alert("hi");
  return (
    <div onClick={hi} className={styleMesseg.container}>
      <ul className={styleMesseg.container__list}>
        <li className={styleMesseg.container__list_messeg}>
          <p>{props.text}</p>
        </li>
      </ul>
    </div>
  );
};

export default Messeg;
