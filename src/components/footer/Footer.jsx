import React from "react";
import styleFooter from "./Footer.module.scss";
import IconSocial from "./iconSocial/IconSocial";

const Footer = () => {
  return (
    <footer className={styleFooter.footer}>
      <div className={styleFooter.footer_container}>
        <p className={styleFooter.footer_container__copiraite}>
          © 2023 Dzmitry Miankou
        </p>
        <IconSocial />
      </div>
    </footer>
  );
};

export default Footer;
