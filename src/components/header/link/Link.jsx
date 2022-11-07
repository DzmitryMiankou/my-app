import React from "react";
import { NavLink } from "react-router-dom";
import styleLinc from "./Link.module.css";

const Link = (props) => {
  return (
    <nav>
      <div className={styleLinc.container}>
        <NavLink
          to={props.to}
          style={({ isActive }) => ({
            color: isActive ? "#b7410e" : "#c9d1d9",
          })}
        >
          {props.text}
        </NavLink>
      </div>
    </nav>
  );
};

export default Link;
