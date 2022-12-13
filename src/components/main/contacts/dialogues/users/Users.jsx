import React from "react";
import styleUsers from "./Users.module.scss";
import imgUsers from "./icon_users.png";

/*import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  p: {
    color: "red",
  },
});*/

const Users = (props) => {
  return (
    <ul className={styleUsers.list}>
      <li className={styleUsers.list__string}>
        <a className={styleUsers.list__string_elem} href="#3">
          <img className={styleUsers.elem_img} src={imgUsers} alt="png" />
          <p>Norman</p>
        </a>
      </li>
      <li className={styleUsers.list__string}>
        <a className={styleUsers.list__string_elem} href="#3">
          <img className={styleUsers.elem_img} src={imgUsers} alt="png" />
          <p>Otton</p>
        </a>
      </li>
    </ul>
  );
};

export default Users;
