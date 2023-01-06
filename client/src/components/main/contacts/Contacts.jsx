import React, { useCallback } from "react";
import styleContacts from "./Contacts.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  onPostChangecreateActin,
  addPostcreateActin,
} from "../../redux/messegData-reducer.ts";
import UserdBlocks from "././users-block/UsersBlock";
import MessagesBlock from "././messages-block/MessagesBlock";
import Dialogues from "././dialogues/Dialogues";
import { fetchUsers, fetchKey } from "./../.././api/dialoguesListUsers";
import NoRegiste from "./noRegist/NoRegist";

const Contacts = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchKey());
  }, [dispatch]);

  const increaseCounter = useCallback(
    (e) => {
      let text = e.target.value;
      dispatch(onPostChangecreateActin(text));
    },
    [dispatch]
  );

  return !state.auth.isAoth ? (
    <NoRegiste />
  ) : (
    <div className={styleContacts.messeges}>
      <h1>
        <span>ваше имя: </span>
        {JSON.parse(localStorage.getItem("user"))?.userData?.nickName}
      </h1>
      <UserdBlocks data={state.dialogListAPI.users} />
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

/*if (!getLoad)
    return (
      <div className={styleContacts.messeges}>
        <h1>Загрузка...</h1>
      </div>
    );*/
