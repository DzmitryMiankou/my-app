import React from "react";
import DeleteDialog from "./delete/DeleteDialog";
import styleUsers from "./Users.module.scss";

const Users = ({ nickName, id, user_id2 }) => {
  const res = {
    idDialogues: id,
    nickName: nickName,
    user_id2: user_id2,
  };
  const dff = () => {
    localStorage.setItem("dialogues", JSON.stringify(res));
  };
  return (
    <ul>
      <li className={styleUsers.dialogues_list}>
        <p onClick={dff} className={styleUsers.dialogues_name}>
          {nickName}
        </p>
        <DeleteDialog />
      </li>
    </ul>
  );
};

export default Users;
