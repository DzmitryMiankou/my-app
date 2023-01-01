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
    data.map(({ id, user_id2, nickName }) => (
      <Users key={id} nickName={nickName} />
    ));

  return (
    <div className={styleContacts.dialogs}>
      <p>DIALOGUES</p>
      <div className={styleContacts.users}>{formElem}</div>
    </div>
  );
};

export default Dialogues;
