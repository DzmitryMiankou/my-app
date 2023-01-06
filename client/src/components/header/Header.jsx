import React from "react";
import style from "./Header.module.scss";
import Link from "./link/Link.jsx";
import Logo from "./logo/Logo";
import RegistIcon from "./registrIcon/registIcon";
import LangIcon from "./langIcon/langIcon";
import { useAddList } from "../../hook/useAddList";
import { useSelector } from "react-redux";
import SignOut from "./signOut/SignOut";

const Header = () => {
  const state = useSelector((state) => state);
  const [value, add] = useAddList(false, ".act");
  return (
    <header className={style.header}>
      <Logo />
      <menu className={style.menu}>
        <ul className={style.ul}>
          <Link text="О проекте" to="/" />
          <Link text="Примеры" to="/works" />
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
          <div className={style.login}>
            {!state.auth.isAoth ? (
              <Link to="/regist" text={<RegistIcon />}></Link>
            ) : (
              <SignOut />
            )}
          </div>
        </ul>
      </menu>
    </header>
  );
};

export default Header;
