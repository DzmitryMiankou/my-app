import React from "react";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  star: {
    cursor: "pointer",
  },
});

const Stars = ({ selected = false, onSelect = (f) => f }) => {
  const classes = styles();
  return (
    <div>
      <AiFillStar
        onClick={onSelect}
        className={classes.star}
        color={selected ? "#dc5b24" : "#3788ce"}
        size={"30px"}
      />
    </div>
  );
};

export default Stars;
