import React from "react";
import styleDeleteDialog from "./DeleteDialog.module.scss";
import SvgDelete from "./svg/SvgDelete";

const DeleteDialog = (props) => {
  return (
    <button className={styleDeleteDialog.button}>
      <SvgDelete />
    </button>
  );
};

export default DeleteDialog;
