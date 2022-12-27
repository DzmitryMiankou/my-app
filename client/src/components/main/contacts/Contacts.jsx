import React, { useCallback, useState } from "react";
import styleContacts from "./Contacts.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  onPostChangecreateActin,
  addPostcreateActin,
} from "../../redux/messegData-reducer.ts";
import { authActin } from "../../redux/auth-reducer.ts";
import UserdBlocks from "././users-block/UsersBlock";
import MessagesBlock from "././messages-block/MessagesBlock";
import Dialogues from "././dialogues/Dialogues";
import NoRegiste from "./noRegist/NoRegist";
import { memo } from "react";
import { getUsers } from "../.././api/usersAPI.ts";

const Contacts = () => {
  const [getLoad, Louding] = useState();
  const [data, setdata] = useState();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [auth, setAuth] = useState();

  React.useEffect(() => {
    const requestHandler = async () => {
      Louding(false);
      try {
        const data = await getUsers();
        setdata(data);
        setAuth(true);
        Louding(true);
        dispatch(authActin(true));
      } catch (error) {
        dispatch(authActin(false));
        setAuth(false);
        Louding(true);
      }
    };
    requestHandler();
  }, [dispatch]);

  const increaseCounter = useCallback(
    (e) => {
      let text = e.target.value;
      dispatch(onPostChangecreateActin(text));
    },
    [dispatch]
  );

  if (!getLoad)
    return (
      <div className={styleContacts.messeges}>
        <h1>Загрузка...</h1>
      </div>
    );

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
