import React from "react";
import DeleteDialog from "./delete/DeleteDialog";
import styleUsers from "./Users.module.scss";

const Users = ({ nickName, id, user_id2, user_id1 }) => {
  const data = JSON.parse(localStorage.getItem("user")).userData.id;

  const setLocalStore = () => {
    let userdd = user_id2;
    user_id2 === data ? (userdd = user_id1) : (userdd = user_id2);
    const res = {
      idDialogues: id,
      nickName: nickName,
      user_id2: userdd,
    };
    localStorage.setItem("dialogues", JSON.stringify(res));
  };

  const a = JSON.parse(localStorage.getItem("dialogues")).nickName;

  return (
    <li
      id={`nick_${user_id2}`}
      data-toggle="tab"
      className={
        a !== nickName
          ? styleUsers.dialogues_list
          : styleUsers.dialogues_list_active
      }
    >
      <p onClick={setLocalStore} className={styleUsers.dialogues_name}>
        {nickName}
      </p>
      <DeleteDialog />
    </li>
  );
};

export default Users;
