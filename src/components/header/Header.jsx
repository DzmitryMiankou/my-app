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
          <Link text="Обо мне" to="/" />
          <Link text="Портфолио" to="/works" />
          <Link text="Обучение" to="/learning" />
          <Link text="Общение" to="/chat" />
        </ul>
      </menu>
    </header>
  );
};

export default Header;
