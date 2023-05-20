import React from "react";
import HeaderStyle from "./Header.module.scss";
import logo from "../../Logo.svg";

const Header = () => {
  return (
    <header className={HeaderStyle.component}>
      <a href="/">
        <img src={logo} className={HeaderStyle.logo} alt="logo" />
      </a>
    </header>
  );
};

export default Header;
