import React from "react";
import styleContacts from "./Contacts.module.css";
import Messeg from "./messeges/Messeg";
import Users from "./users/Users";
import {
  onPostChangecreateActin,
  addPostcreateActin,
} from "../../redux/messegData-reducer";

const Contacts = (props) => {
  const messegElem = props.messege.map((m, i) => (
    <Messeg key={i} text={m.messege} />
  ));

  const addPost = () => {
    props.disPatch(addPostcreateActin());
  };

  const onPostChange = (e) => {
    let text = e.target.value;
    props.disPatch(onPostChangecreateActin(text));
  };

  return (
    <div className={styleContacts.messeges}>
      <div className={styleContacts.container}>
        <div className={styleContacts.container__comment}>
          <textarea
            onChange={onPostChange}
            placeholder="enter your message"
            className={styleContacts.container__comment_text}
            value={props.newMessege}
          />
          <button
            onClick={addPost}
            className={styleContacts.container__comment_but}
          >
            comment
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
