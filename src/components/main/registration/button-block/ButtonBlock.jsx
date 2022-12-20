import React from "react";
import styleButtonBlock from "./ButtonBlock.module.scss";
import Choose from "./choose/Choose";
import InSign from "./in-Sign/InSign";
import RegButton from "./reg-button/RegButton";

const ButtonBlock = (props) => {
  const register = async (e) => {
    e.preventDefault();
    props.dispatch(props.registerActin());
  };

  const toLogin = (e) => {
    e.preventDefault();
    props.dispatch(props.loginActin());
  };

  const reg = () => {
    props.setAdd(!props.add);
    props.set("");
  };
  return (
    <div className={styleButtonBlock.button_container}>
      <Choose add={props.add} reg={reg} />
      <>
        {!props.add ? (
          <RegButton toButton={register} />
        ) : (
          <InSign toLogin={toLogin} />
        )}
      </>
      <p className={styleButtonBlock.error}>{props.get}</p>
    </div>
  );
};

export default ButtonBlock;
