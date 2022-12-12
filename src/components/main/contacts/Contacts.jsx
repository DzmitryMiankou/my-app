import React, { useCallback, useState, useEffect } from "react";
import styleContacts from "./Contacts.module.scss";
import Messeg from "./messeges/Messeg";
import Users from "./users/Users";
import { useSelector, useDispatch } from "react-redux";
import {
  onPostChangecreateActin,
  addPostcreateActin,
} from "../../redux/messegData-reducer.ts";
import { useHTTP } from "../../../hook/http";
import UserdBlocks from "././users-block/UsersBlock";

const Contacts = () => {
  const [data, setdata] = useState();
  const { request } = useHTTP();

  useEffect(() => {
    const requestHandler = async () => {
      try {
        const data = await request("http://localhost:5000/api/users");
        return setdata(data);
      } catch (error) {}
    };
    requestHandler();
  }, [request]);

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
          <ul className={styleContacts.container__messege}>{messegElem}</ul>
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
      </div>
      <div className={styleContacts.dialogs}>
        <p>DIALOGUES</p>
        <div className={styleContacts.users}>
          <Users />
        </div>
      </div>
      <UserdBlocks data={data} />
    </div>
  );
};

export default Contacts;
