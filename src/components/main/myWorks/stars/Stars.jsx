import React from "react";
import { GrStar } from "@react-icons/all-files/gr/GrStar";
import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  star: {
    cursor: "pointer",
  },
});

const Stars = ({ selected, onSelect = (f) => f }) => {
  const classes = styles();
  return (
    <div>
      <GrStar
        onClick={onSelect}
        className={classes.star}
        color={selected ? "#dc5b24" : "#235178"}
        size={"20px"}
      />
    </div>
  );
};

export default Stars;
