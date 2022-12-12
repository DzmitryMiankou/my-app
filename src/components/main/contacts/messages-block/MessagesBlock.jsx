import React from "react";
import styleContacts from "./MessagesBlock.module.scss";
import Messeg from "./messeges/Messeg";

const MessagesBlock = (props) => {
  const messegElem = props.state.messeges.messegData.map((m, i) => (
    <Messeg key={i} text={m.messege} />
  ));

  return (
    <div className={styleContacts.container}>
      <ul className={styleContacts.container__messege}>{messegElem}</ul>
      <div className={styleContacts.container__textarea}>
        <textarea
          onChange={props.increaseCounter}
          placeholder="напишите сообщение"
          className={styleContacts.container__comment_text}
          value={props.state.messeges.newChanges}
        />
        <button
          onClick={() => props.dispatch(props.addPostcreateActin())}
          className={styleContacts.container__comment_but}
        >
          отправить
        </button>
      </div>
    </div>
  );
};

export default MessagesBlock;
