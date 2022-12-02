import React, { useState, useEffect } from "react";
import style from "./Header.module.scss";
import Link from "./link/Link.jsx";
import Logo from "./logo/Logo";
import RegistIcon from "./registrIcon/registIcon";
import LangIcon from "./langIcon/langIcon";

const Header = () => {
  const [lang, setLang] = useState(false);
  const clouseList = (e) => {
    if (!e.target.closest(".act")) {
      setLang(false);
    }
  };
  const clousesc = (e) => {
    setLang(false);
  };
  useEffect(() => {
    window.addEventListener("click", clouseList);
    window.addEventListener("scroll", clousesc);
    return () => {
      window.removeEventListener("click", clouseList);
      window.removeEventListener("scroll", clousesc);
    };
  }, []);

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
          <div className={`${style.act} ${"act"}`}>
            <LangIcon onList={() => setLang(!lang)} />
            <ul
              className={style.list}
              style={lang ? { display: "block" } : { display: "none" }}
            >
              <li>Беларуская</li>
              <li>Русский</li>
            </ul>
          </div>
          <Link to="/regist" text={<RegistIcon />}></Link>
        </ul>
      </menu>
    </header>
  );
};

export default Header;
