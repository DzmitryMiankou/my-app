import React, { useCallback } from "react";
import styleContacts from "./Contacts.module.css";
import Messeg from "./messeges/Messeg";
import Users from "./users/Users";
import { useSelector, useDispatch } from "react-redux";
import {
  onPostChangecreateActin,
  addPostcreateActin,
} from "../../redux/messegData-reducer";

const Contacts = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const increaseCounter = useCallback(
    (e) => {
      let text = e.target.value;
      dispatch(onPostChangecreateActin(text));
    },
    [dispatch]
  );

  const messegElem = state.messeges.messegData.map((m, i) => (
    <Messeg key={i} text={m.messege} />
  ));

  return (
    <div className={styleContacts.messeges}>
      <div className={styleContacts.container}>
        <div className={styleContacts.container__comment}>
          <textarea
            onChange={increaseCounter}
            placeholder="напишите сообщение"
            className={styleContacts.container__comment_text}
            value={state.messeges.newChanges}
          />
          <button
            onClick={() => dispatch(addPostcreateActin())}
            className={styleContacts.container__comment_but}
          >
            отправить
          </button>
        </div>

        <div className={styleContacts.container__messege}>{messegElem}</div>
      </div>
      <div className={styleContacts.users}>
        <Users />
      </div>
    </div>
  );
};

export default Contacts;
