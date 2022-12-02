import React, { useState, useEffect } from "react";
import style from "./Header.module.scss";
import Link from "./link/Link.jsx";
import Logo from "./logo/Logo";
import { NavLink } from "react-router-dom";

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
          <div className="act">
            <svg
              onClick={() => setLang(!lang)}
              className={style.lang}
              width="25"
              height="25"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
              <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
            </svg>
            <ul
              className={style.list}
              style={lang ? { display: "block" } : { display: "none" }}
            >
              <li>Беларуская</li>
              <li>Русский</li>
            </ul>
          </div>
          <NavLink to="/regist">
            <svg
              className={style.reg}
              width="25"
              height="25"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
            </svg>
          </NavLink>
        </ul>
      </menu>
    </header>
  );
};

export default Header;
