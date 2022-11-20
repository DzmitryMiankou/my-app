import React from "react";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  star: {
    color: "#c9d1d9",
    cursor: "pointer",
    "&:hover": {
      color: "#dc5b24",
    },
  },
});

const Stars = () => {
  const classes = styles();
  return (
    <div>
      <AiFillStar className={classes.star} size={"30px"} />
    </div>
  );
};

export default Stars;
