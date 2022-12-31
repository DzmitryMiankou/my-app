import React from "react";
import styleContacts from "./Dialogues.module.scss";
import Users from "./users/Users";

const Dialogues = () => {
  React.useEffect(() => {
    async function getListUsers() {
      const request = await fetch("http://localhost:5000/api/chat", {
        method: "GET",
        headers: {
          //@ts-ignore
          Authentication: JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      const response = await request.json();
      console.log(response);
    }
    getListUsers();
  });
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
