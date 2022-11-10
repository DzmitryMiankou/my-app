import React from "react";
import styleContacts from "./Contacts.module.css";
import Messeg from "./messeges/Messeg";
import { onPostChangecreateActin, addPostcreateActin } from "../../redux/state";

const Contacts = (props) => {
  const messegElem = props.messege.map((m) => <Messeg text={m.messege} />);
  const newPostElem = React.createRef();

  const addPost = () => {
    props.disPatch(addPostcreateActin());
    newPostElem.current.value = "";
  };

  const onPostChange = () => {
    let text = newPostElem.current.value;
    props.disPatch(onPostChangecreateActin(text));
  };

  return (
    <div className={styleContacts.container}>
      <div className={styleContacts.container__comment}>
        <textarea
          ref={newPostElem}
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
  );
};

export default Contacts;
