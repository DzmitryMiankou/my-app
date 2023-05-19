import React from "react";
import FooterStyle from "./Footer.module.scss";
import TextArea from "./textArea/TextArea";

const Footer = () => {
  return (
    <footer className={FooterStyle.component}>
      <TextArea />
    </footer>
  );
};

export default Footer;
