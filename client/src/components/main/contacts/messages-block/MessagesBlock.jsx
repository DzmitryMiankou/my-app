import React, { useState } from "react";
import styleContacts from "./MessagesBlock.module.scss";
import Messeg from "./messeges/Messeg";
import Input from "./input/Input";
import { useSelector, useDispatch } from "react-redux";
import Button from "./button-message/Button";
import { fetchMesseges } from "./../../.././api/dialoguesListUsers";

const MessagesBlock = (props) => {
  const state = useSelector((state) => state.dialogListAPI);
  const dispatch = useDispatch();

  const URL = "ws://127.0.0.1:5000";

  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(new WebSocket(URL));

  React.useEffect(() => {
    ws.onopen = () => {
      console.log("WebSocket Connected");
    };

    ws.onmessage = (e) => {
      const message = JSON.parse(e.data);
      setMessages([message, ...messages]);
    };

    return () => {
      ws.onclose = () => {
        console.log("WebSocket Disconnected");
        setWs(new WebSocket(URL));
      };
    };
  }, [ws.onmessage, ws.onopen, ws.onclose, messages, ws]);

  React.useEffect(() => {
    dispatch(fetchMesseges());
  }, [dispatch]);

  const mapMessegElem = state.messeges.map(
    ({ id, Source_Id, Message, Created_At }) => (
      <Messeg key={id} id={Source_Id} text={Message} date={Created_At} />
    )
  );

  return (
    <div className={styleContacts.container}>
      <ul className={styleContacts.container__messege}>{mapMessegElem}</ul>
      <div className={styleContacts.container__textarea}>
        <Input increaseCounter={props.increaseCounter} state={props.state} />
        <Button dispatch={() => props.dispatch(props.addPostcreateActin())} />
      </div>
    </div>
  );
};

export default MessagesBlock;
