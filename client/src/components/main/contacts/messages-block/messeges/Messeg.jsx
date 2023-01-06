import React from "react";
import styleMesseg from "./Messeg.module.scss";

const Messeg = ({ text, id, Created_At }) => {
  const hi = () => alert(text);

  return (
    <div id={`nick_${id}`} onClick={hi} className={styleMesseg.container}>
      <li className={styleMesseg.container__list_messeg}>
        <p>{text}</p>
        <p className={styleMesseg.nickName}>{id}</p>
        <p className={styleMesseg.date}>06. 01. 2022</p>
      </li>
    </div>
  );
};

export default Messeg;
