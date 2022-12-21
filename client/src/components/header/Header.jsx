import React from "react";
import style from "./Header.module.scss";
import Link from "./link/Link.jsx";
import Logo from "./logo/Logo";
import RegistIcon from "./registrIcon/registIcon";
import LangIcon from "./langIcon/langIcon";
import { useAddList } from "../../hook/useAddList";
import { useSelector } from "react-redux";

const Header = () => {
  const state = useSelector((state) => state);
  const [value, add] = useAddList(false, ".act");
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
          <Link text="Общаться" to="/chat" />
          <div className={`${style.act} ${"act"}`}>
            <LangIcon onList={add} />
            <ul
              className={style.list}
              style={value ? { display: "block" } : { display: "none" }}
            >
              <li>Беларуская</li>
              <li>Русский</li>
            </ul>
          </div>
          <>
            {!state.auth.isAoth ? (
              <Link to="/regist" text={<RegistIcon />}></Link>
            ) : (
              <div>Выйти</div>
            )}
          </>
        </ul>
      </menu>
    </header>
  );
};

export default Header;
