import React from "react";
import DeleteDialog from "./delete/DeleteDialog";
import styleUsers from "./Users.module.scss";

const Users = ({ nickName, id, user_id2, user_id1 }) => {
  const data = JSON.parse(localStorage.getItem("user")).userData.id;

  const dff = () => {
    let userdd = user_id2;
    if (user_id2 === data) {
      userdd = user_id1;
    } else {
      userdd = user_id2;
    }
    const res = {
      idDialogues: id,
      nickName: nickName,
      user_id2: userdd,
    };
    localStorage.setItem("dialogues", JSON.stringify(res));
  };
  return (
    <li className={styleUsers.dialogues_list}>
      <p onClick={dff} className={styleUsers.dialogues_name}>
        {nickName}
      </p>
      <DeleteDialog />
    </li>
  );
};

export default Users;
