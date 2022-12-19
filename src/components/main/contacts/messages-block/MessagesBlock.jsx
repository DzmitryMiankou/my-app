import React from "react";
import styleContacts from "./MessagesBlock.module.scss";
import Messeg from "./messeges/Messeg";
import Input from "./input/Input";
import Button from "./button-message/Button";

const MessagesBlock = (props) => {
  const messegElem = props.state.messeges.messegData.map((m, i) => (
    <Messeg key={i} text={m.messege} />
  ));

  return (
    <div className={styleContacts.container}>
      <ul className={styleContacts.container__messege}>{messegElem}</ul>
      <div className={styleContacts.container__textarea}>
        <Input increaseCounter={props.increaseCounter} state={props.state} />
        <Button dispatch={() => props.dispatch(props.addPostcreateActin())} />
      </div>
    </div>
  );
};

export default MessagesBlock;
