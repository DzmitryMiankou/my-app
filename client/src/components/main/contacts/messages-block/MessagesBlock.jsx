import React from "react";
import styleContacts from "./MessagesBlock.module.scss";
import Messeg from "./messeges/Messeg";
import Input from "./input/Input";
import Button from "./button-message/Button";

const MessagesBlock = (props) => {
  const [get, set] = React.useState();
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
    set(response);
  }

  React.useEffect(() => {
    getMesseges();
  }, []);

  const messegElem =
    get &&
    get.map((m, i) => <Messeg key={i} id={m.Source_Id} text={m.Message} />);

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
