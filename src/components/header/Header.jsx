import React from "react";
import style from "./Header.module.css";
import Link from "./link/Link.jsx";

const Header = () => {
  return (
    <header className={style.header}>
      <menu className={style.menu}>
        <ul className={style.ul}>
          <Link text="About" to="/about" />
          <Link text="My works" to="/works" />
          <Link text="Prices" to="/prices" />
          <Link text="Contacts" to="/contacts" />
        </ul>
      </menu>
    </header>
  );
};

export default Header;
