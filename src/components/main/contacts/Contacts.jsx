import React from "react";
import styleContacts from "./Contacts.module.css";
import Messeg from "./messeges/Messeg";

const Contacts = (props) => {
  const messegElem = props.messege.map((m) => <Messeg text={m.messege} />);
  const newPostElem = React.createRef();

  const addPost = () => {
    let text = newPostElem.current.value;
    props.toRedux(text);
    newPostElem.current.value = "";
  };

  const onPostChange = (e) => {
    props.upDate(e);
  };

  return (
    <div className={styleContacts.container}>
      <div className={styleContacts.container__comment}>
        <textarea
          ref={newPostElem}
          onChange={(event) => onPostChange(event.target.value)}
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
