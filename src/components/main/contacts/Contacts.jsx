import React from "react";
import styleContacts from "./Contacts.module.css";
import Messeg from "./messeges/Messeg";
import Users from "./users/Users";

const Contacts = (props) => {
  const messegElem = props.messege.messegData.map((m, i) => (
    <Messeg key={i} text={m.messege} />
  ));

  const addPost = () => {
    props.addPost();
  };

  const onPostChange = (e) => {
    let text = e.target.value;
    props.onPost(text);
  };

  return (
    <div className={styleContacts.messeges}>
      <div className={styleContacts.container}>
        <div className={styleContacts.container__comment}>
          <textarea
            onChange={onPostChange}
            placeholder="напишите сообщение"
            className={styleContacts.container__comment_text}
            value={props.messege.newChanges}
          />
          <button
            onClick={addPost}
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
