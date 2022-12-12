import React from "react";

const UsersList = (props) => {
  const on = () => {
    alert(props.id);
  };
  return (
    <li>
      <p onClick={on} id={props.id}>
        {props.nickName}
      </p>
    </li>
  );
};

export default UsersList;
