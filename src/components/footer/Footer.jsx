import React from "react";
import FooterStyle from "./Footer.module.scss";
import TextArea from "./textArea/TextArea";
import ToScroll from "./toScroll/ToScroll";

const Footer = ({ refs }) => {
  return (
    <footer className={FooterStyle.component}>
      <div className={FooterStyle.container}>
        <TextArea />
        <ToScroll refs={refs} />
      </div>
    </footer>
  );
};

export default Footer;
