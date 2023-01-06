import React from "react";
import styleMesseg from "./Messeg.module.scss";

const Messeg = ({ text, id, Created_At, Source_Id }) => {
  const idUser = JSON.parse(localStorage.getItem("user")).userData.id;

  return (
    <div
      id={`nick_${id}`}
      style={
        idUser === id
          ? {
              backgroundColor: "#323138",
              marginLeft: "auto",
              borderRadius: `15px 0px 15px 15px`,
            }
          : { backgroundColor: "#1d1d21", borderRadius: `0px 15px 15px 15px` }
      }
      className={styleMesseg.container}
    >
      <li className={styleMesseg.container__list_messeg}>
        <p>{text}</p>
        <p className={styleMesseg.nickName}>{id}</p>
        <p className={styleMesseg.date}>06. 01. 2022</p>
      </li>
    </div>
  );
};

export default Messeg;
