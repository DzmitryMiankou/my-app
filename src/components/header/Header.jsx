import React from "react";
import style from "./Header.module.css";
import Link from "./link/Link.jsx";
import Logo from "./logo/Logo";

const Header = () => {
  return (
    <header className={style.header}>
      <div>
        <Logo />
      </div>
      <menu className={style.menu}>
        <ul className={style.ul}>
          <Link text="About" to="/about" />
          <Link text="Learning" to="/learning" />
          <Link text="My works" to="/works" />
          <Link text="Contacts" to="/contacts" />
        </ul>
      </menu>
    </header>
  );
};

export default Header;
