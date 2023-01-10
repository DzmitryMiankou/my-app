import React, { useState } from "react";
import styleContacts from "./MessagesBlock.module.scss";
import Messeg from "./messeges/Messeg";
import Input from "./input/Input";
import { useSelector, useDispatch } from "react-redux";
import Button from "./button-message/Button";
import { io } from "socket.io-client";
const socket = io.connect("http://localhost:5000", {
  withCredentials: true,
  transports: ["websocket", "polling"],
});

const MessagesBlock = (props) => {
  const state2 = useSelector((state) => state.messeges.newChanges);
  const [get, setState] = useState([]);
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
    socket.once("chat message", (data) => {
      setState([data]);
    });
  };

  React.useEffect(() => {
    const dataD = JSON.parse(localStorage.getItem("dialogues"));
    const dataD1 = JSON.parse(localStorage.getItem("user")).userData;
    try {
      socket.emit(
        "mess",
        JSON.stringify({
          dialogId: dataD.idDialogues,
          userId: dataD.user_id2,
          id: dataD1.id,
        })
      );
      socket.once("mess", (data) => {
        setState((get) => [...get, data]);
        console.log(data);
      });
      return () => socket.off("mess");
    } catch (error) {
      console.log(error);
    }
  }, []);

  const mapMesseg =
    get[0] &&
    get[0].map(({ id, Source_Id, Message, Created_At }) => (
      <Messeg key={id} id={Source_Id} text={Message} date={Created_At} />
    ));

  return (
    <div className={styleContacts.container}>
      <ul className={styleContacts.container__messege}>{mapMesseg}</ul>
      <div className={styleContacts.container__textarea}>
        <Input increaseCounter={props.increaseCounter} state={props.state} />
        <Button dispatch={set} />
      </div>
    </div>
  );
};

export default MessagesBlock;
//() => props.dispatch(props.addPostcreateActin())
