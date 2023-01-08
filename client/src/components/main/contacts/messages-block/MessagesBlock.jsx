import React, { useState } from "react";
import styleContacts from "./MessagesBlock.module.scss";
import Messeg from "./messeges/Messeg";
import Input from "./input/Input";
import { useSelector, useDispatch } from "react-redux";
import Button from "./button-message/Button";
import io from "socket.io-client";

const port = "http://localhost:5000";
const socket = io.connect(port);

const MessagesBlock = (props) => {
  const state2 = useSelector((state) => state.messeges.newChanges);
  const [mes, setmes] = React.useState();

  React.useEffect(() => {
    socket.on("connect", (data) => {
      console.log("ok");
    });
  }, []);

  const set = () => {
    const dataD = JSON.parse(localStorage.getItem("dialogues"));
    const dataD1 = JSON.parse(localStorage.getItem("user")).userData;
    socket.emit(
      "chat message",
      JSON.stringify({
        dialogId: dataD.idDialogues,
        userId: dataD.user_id2,
        messegData: state2,
        id: dataD1.id,
      })
    );
    socket.on("chat message", (data) => {
      setmes(data);
    });
  };

  React.useEffect(() => {
    const dataD = JSON.parse(localStorage.getItem("dialogues"));
    const dataD1 = JSON.parse(localStorage.getItem("user")).userData;
    socket.emit(
      "mess",
      JSON.stringify({
        dialogId: dataD.idDialogues,
        userId: dataD.user_id2,
        id: dataD1.id,
      })
    );
    socket.on("mess", (data) => {
      setmes(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket, mes]);

  const mapMessegElem =
    mes &&
    mes.map(({ id, Source_Id, Message, Created_At }) => (
      <Messeg key={id} id={Source_Id} text={Message} date={Created_At} />
    ));

  return (
    <div className={styleContacts.container}>
      <ul className={styleContacts.container__messege}>{mapMessegElem}</ul>
      <div className={styleContacts.container__textarea}>
        <Input increaseCounter={props.increaseCounter} state={props.state} />
        <Button dispatch={set} />
      </div>
    </div>
  );
};

export default MessagesBlock;
//() => props.dispatch(props.addPostcreateActin())
