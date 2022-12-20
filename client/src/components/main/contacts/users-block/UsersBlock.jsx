import React from "react";
import styleUsers from "./UsersBlock.module.scss";
import UsersList from "./users-list/Users-list";

const UsersBlock = (props) => {
  const formElem =
    props.data &&
    props.data.map(({ id, nickName }) => (
      <UsersList key={id} nickName={nickName} id={id} />
    ));
  return (
    <div className={styleUsers.users_container}>
      <p>USERS</p>
      <div className={styleUsers.users_list}>
        <ul className={styleUsers.messeges_list}>{formElem}</ul>
      </div>
    </div>
  );
};

export default UsersBlock;
