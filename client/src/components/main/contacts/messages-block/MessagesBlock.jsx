import React from "react";
import styleContacts from "./MessagesBlock.module.scss";
import Messeg from "./messeges/Messeg";
import Input from "./input/Input";
import { useSelector, useDispatch } from "react-redux";
import Button from "./button-message/Button";
import { fetchMesseges } from "./../../.././api/dialoguesListUsers";

const MessagesBlock = (props) => {
  const state = useSelector((state) => state.dialogListAPI);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchMesseges());
  }, [dispatch]);
  console.log(state.messeges.Created_At);
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
