import React from "react";

import styleMesseg from "./Messeg.module.scss";

const Messeg = (props) => {
  const hi = () => alert(props.text);
  return (
    <div onClick={hi} className={styleMesseg.container}>
      <div id={props.id} className={styleMesseg.container__list}>
        <li className={styleMesseg.container__list_messeg}>
          <p>{props.text}</p>
        </li>
      </div>
    </div>
  );
};

export default Messeg;
