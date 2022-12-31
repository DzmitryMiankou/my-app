import React from "react";

const UsersList = ({ id, nickName }) => {
  const on = async () => {
    await fetch("http://localhost:5000/api/dialogues", {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authentication: JSON.parse(localStorage.getItem("user")).accessToken,
      },
      body: JSON.stringify({ id: id, nickName: nickName }),
    });
  };
  return (
    <li>
      <p onClick={on}>{nickName}</p>
    </li>
  );
};

export default UsersList;
