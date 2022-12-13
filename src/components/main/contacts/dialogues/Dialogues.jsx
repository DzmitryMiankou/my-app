import React from "react";
import styleContacts from "./Dialogues.module.scss";
import Users from "./users/Users";

const Dialogues = () => {
  return (
    <div className={styleContacts.dialogs}>
      <p>DIALOGUES</p>
      <div className={styleContacts.users}>
        <Users />
      </div>
    </div>
  );
};

export default Dialogues;
