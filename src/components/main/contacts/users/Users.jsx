import React from "react";
import styleUsers from "./Users.module.css";
import imgUsers from "./icon_users.png";

const Users = (props) => {
  return (
    <ul className={styleUsers.list}>
      <li className={styleUsers.list__string}>
        <a className={styleUsers.list__string_elem} href="#3">
          <img className={styleUsers.elem_img} src={imgUsers} alt="png" />
          <p>Hari</p>
        </a>
      </li>
      <li className={styleUsers.list__string}>
        <a className={styleUsers.list__string_elem} href="#3">
          <img className={styleUsers.elem_img} src={imgUsers} alt="png" />
          <p>David</p>
        </a>
      </li>
    </ul>
  );
};

export default Users;
