import React, { useCallback, useState, useEffect } from "react";
import styleContacts from "./Contacts.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  onPostChangecreateActin,
  addPostcreateActin,
} from "../../redux/messegData-reducer.ts";
import { authActin } from "../../redux/auth-reducer.ts";
import { useHTTP } from "../../../hook/http";
import UserdBlocks from "././users-block/UsersBlock";
import MessagesBlock from "././messages-block/MessagesBlock";
import Dialogues from "././dialogues/Dialogues";
import NoRegiste from "./noRegist/NoRegist";
import { memo } from "react";

const Contacts = () => {
  const [getLoad, Louding] = useState();
  const [data, setdata] = useState();
  const { request } = useHTTP();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [auth, setAuth] = useState();
  useEffect(() => {
    const requestHandler = async () => {
      Louding(false);
      try {
        dispatch(authActin(true));
        const data = await request("http://localhost:5000/api/users");
        setAuth(true);
        Louding(true);
        console.log(`Authorization`);
        return setdata(data);
      } catch (error) {
        dispatch(authActin(false));
        setAuth(false);
        Louding(true);
        return console.log(`No authorization ${error}`);
      }
    };
    requestHandler();
  }, [request, dispatch]);

  const increaseCounter = useCallback(
    (e) => {
      let text = e.target.value;
      dispatch(onPostChangecreateActin(text));
    },
    [dispatch]
  );
  if (!getLoad) {
    return (
      <div className={styleContacts.messeges}>
        <h1>Загрузка...</h1>
      </div>
    );
  }
  return auth ? (
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
export default memo(Contacts);
