import React, { useCallback, useState, useEffect } from "react";
import styleContacts from "./Contacts.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  onPostChangecreateActin,
  addPostcreateActin,
} from "../../redux/messegData-reducer.ts";
import { useHTTP } from "../../../hook/http";
import UserdBlocks from "././users-block/UsersBlock";
import MessagesBlock from "././messages-block/MessagesBlock";
import Dialogues from "././dialogues/Dialogues";

const Contacts = () => {
  const [data, setdata] = useState();
  const { request } = useHTTP();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const requestHandler = async () => {
      try {
        const data = await request("http://localhost:5000/api/users");
        return setdata(data);
      } catch (error) {}
    };
    requestHandler();
  }, [request]);

  const increaseCounter = useCallback(
    (e) => {
      let text = e.target.value;
      dispatch(onPostChangecreateActin(text));
    },
    [dispatch]
  );

  return (
    <div className={styleContacts.messeges}>
      <UserdBlocks data={data} />
      <Dialogues />
      <MessagesBlock
        state={state}
        increaseCounter={increaseCounter}
        dispatch={dispatch}
        addPostcreateActin={addPostcreateActin}
      />
    </div>
  );
};
export default Contacts;
