import React from "react";
import style from "./Header.module.css";
import Link from "./link/Link.jsx";
import Logo from "./logo/Logo";
import { GrLanguage } from "@react-icons/all-files/gr/GrLanguage";

const Header = () => {
  const styleLang = () => {
    alert("hi");
  };
  return (
    <header className={style.header}>
      <div>
        <Logo />
      </div>
      <menu className={style.menu}>
        <ul className={style.ul}>
          <Link text="О проекте" to="/" />
          <Link text="Портфолио" to="/works" />
          <Link text="Обучение" to="/learning" />
          <Link text="Общение" to="/chat" />
          <GrLanguage
            onClick={styleLang}
            size={"25px"}
            className={style.lang}
          />
          <ul className={style.lang_list} style={{ display: "none" }}>
            <li>Беларуская</li>
            <li>Русский</li>
          </ul>
        </ul>
      </menu>
    </header>
  );
};

export default Header;
