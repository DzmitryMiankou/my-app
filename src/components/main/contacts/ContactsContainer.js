import React from "react";

import {
  onPostChangecreateActin,
  addPostcreateActin,
} from "../../redux/messegData-reducer";
import Contacts from "./Contacts";

const ContactsContainer = (props) => {
  const addPost = () => {
    props.disPatch(addPostcreateActin());
  };

  const onPostChange = (e) => {
    let text = e.target.value;
    props.disPatch(onPostChangecreateActin(text));
  };
  return <Contacts onPost={onPostChange} />;
};

export default ContactsContainer;
