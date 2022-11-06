import React from "react";
import style from "./Header.module.css";
import Link from "./link/Link.jsx";

const Header = () => {
  return (
    <header className={style.header}>
      <menu className={style.menu}>
        <ul className={style.ul}>
          <Link text="About" />
          <Link text="My works" />
          <Link text="Prices" />
          <Link text="Contacts" />
        </ul>
      </menu>
    </header>
  );
};

export default Header;
