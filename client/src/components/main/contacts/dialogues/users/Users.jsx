import React from "react";
import DeleteDialog from "./delete/DeleteDialog";
import styleUsers from "./Users.module.scss";

const Users = (props) => {
  return (
    <ul>
      <li className={styleUsers.dialogues_list}>
        <p className={styleUsers.dialogues_name}>Dzmitry</p>
        <DeleteDialog />
      </li>
    </ul>
  );
};

export default Users;
