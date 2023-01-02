import React from "react";
import styleDeleteDialog from "./DeleteDialog.module.scss";
import SvgDelete from "./svg/SvgDelete";

const DeleteDialog = (props) => {
  const hi = () => {
    window.confirm("Вы точно желаете удалить диалог?");
  };
  return (
    <button onClick={hi} className={styleDeleteDialog.button}>
      <SvgDelete />
    </button>
  );
};

export default DeleteDialog;
