import React from "react";
import { NavLink } from "react-router-dom";
import styleLinc from "./Link.module.css";

const Link = (props) => {
  return (
    <nav>
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
    </nav>
  );
};

export default Link;
