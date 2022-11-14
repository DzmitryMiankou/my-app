import React from "react";
import {
  onPostChangecreateActin,
  addPostcreateActin,
} from "../../redux/messegData-reducer";
import Contacts from "./Contacts";

const ContactsContainer = (props) => {
  const addPost = () => {
    props.dispatch(addPostcreateActin());
  };

  const onPostChange = (e) => {
    let action = onPostChangecreateActin(e);
    props.dispatch(action);
  };

  return (
    <Contacts
      onPost={onPostChange}
      addPost={addPost}
      messege={props.store.messeges.messegData}
      newMessege={props.store.messeges.newChanges}
    />
  );
};

export default ContactsContainer;
