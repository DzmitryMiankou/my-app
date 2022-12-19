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
import NoRegiste from "./noRegist/NoRegist";

const Contacts = () => {
  const [data, setdata] = useState();
  const { request } = useHTTP();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [auth, setAuth] = useState();
  useEffect(() => {
    const requestHandler = async () => {
      try {
        const data = await request("http://localhost:5000/api/users");
        setAuth(false);
        return setdata(data);
      } catch (error) {
        setAuth(true);
        console.log(`No authorization ${error}`);
      }
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

  return !auth ? (
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
  ) : (
    <NoRegiste />
  );
};
export default Contacts;
