import React from "react";
import styleContacts from "./Dialogues.module.scss";
import Users from "./users/Users";

const Dialogues = () => {
  const [data, setdata] = React.useState();

  async function getListUsers() {
    const request = await fetch("http://localhost:5000/api/chat", {
      method: "GET",
      credentials: "include",
      headers: {
        //@ts-ignore
        Authentication: JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    const response = await request.json();
    setdata(response);
  }

  React.useEffect(() => {
    getListUsers();
    // const comInterval = setInterval(getListUsers, 1000);
    //return () => clearInterval(comInterval);
  }, []);

  const formElem =
    data &&
    data.map(({ id, user_id2, nickName, user_id1 }) => (
      <Users
        key={id}
        nickName={nickName}
        user_id2={user_id2}
        id={id}
        user_id1={user_id1}
      />
    ));

  return (
    <div className={styleContacts.dialogs}>
      <p>DIALOGUES</p>
      <ul className={styleContacts.users}>{formElem}</ul>
    </div>
  );
};

export default Dialogues;
