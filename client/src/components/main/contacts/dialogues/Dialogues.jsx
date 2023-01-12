import React from "react";
import styleContacts from "./Dialogues.module.scss";
import Users from "./users/Users";
import { useSelector, useDispatch } from "react-redux";
import { fetchDialogUsers } from "./../../.././api/dialoguesListUsers";

const Dialogues = () => {
  const state = useSelector((state) => state.dialogListAPI);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchDialogUsers());
  }, [dispatch]);

  const mapDialoguesUsers =
    state.list &&
    state.list.map(({ id_d, nickName, user_id1, user_id2 }, i) => (
      <Users
        key={i}
        id_d={id_d}
        nickName={nickName}
        user_id2={user_id2}
        user_id1={user_id1}
      />
    ));

  return (
    <div className={styleContacts.dialogs}>
      <p>DIALOGUES</p>
      <ul className={styleContacts.users}>{mapDialoguesUsers}</ul>
    </div>
  );
};

export default Dialogues;
