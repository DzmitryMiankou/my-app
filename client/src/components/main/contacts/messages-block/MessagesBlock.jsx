import React from "react";
import styleContacts from "./MessagesBlock.module.scss";
import Messeg from "./messeges/Messeg";
import Input from "./input/Input";
import Button from "./button-message/Button";

const MessagesBlock = (props) => {
  async function getMesseges() {
    const request = await fetch("http://localhost:5000/api/messegeId", {
      method: "GET",
      credentials: "include",
      headers: {
        //@ts-ignore
        Authentication: JSON.parse(localStorage.getItem("user")).accessToken,
        DialoguesId: JSON.parse(localStorage.getItem("dialogues")).idDialogues,
      },
    });
    const response = await request.json();
    console.log(response);
  }

  React.useEffect(() => {
    getMesseges();
  }, []);

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
