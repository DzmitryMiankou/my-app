import React from "react";
import { NavLink } from "react-router-dom";
import styleLinc from "./Link.module.scss";

const Link = (props) => {
  return (
    <div className={styleLinc.link}>
      <NavLink
        to={props.to}
        className={({ isActive }) =>
          isActive ? `${styleLinc.active}` : `${styleLinc.link}`
        }
      >
        {props.text}
      </NavLink>
    </div>
  );
};

export default Link;
