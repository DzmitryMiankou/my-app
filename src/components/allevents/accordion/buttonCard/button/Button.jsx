import React from "react";
import ButtonStyle from "./Button.module.scss";
import { createUseStyles } from "react-jss";

const initStyle = {
  blockFilter: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    "@media screen and (max-width: 1320px)": {
      display: "block",
      paddingLeft: "20px",
    },
  },
};

const useStyles = createUseStyles({
  block: {
    ...initStyle.blockFilter,
  },
  blockActive: {
    ...initStyle.blockFilter,
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.6684874633447129) 0%, rgba(0,0,4,0.7469188358937324) 24%, rgba(22,44,78,1) 85%)",
    "@media screen and (max-width: 1320px)": {
      ...initStyle.blockFilter["@media screen and (max-width: 1320px)"],
      background:
        "linear-gradient(266deg, rgba(0,0,0,0.7273109927564776) 0%, rgba(0,0,4,0.8673670151654411) 60%, rgba(22,44,78,0.9261905445772058) 95%)",
      backdropFilter: "grayscale(100%)",
    },
  },
  butt: {
    borderLeft: "white solid 4px",
    backgroundColor: "var(--blue-main-color)",
    minWidth: "80px",
    display: "flex",
    justifyContent: "center",
    backgroundImage: (img) => img,
    backgroundSize: "120vw",
    zIndex: 3,
    textAlign: "start",
    "@media screen and (max-width: 1320px)": {
      borderLeft: "none",
      borderBottom: "white solid 2px",
      minHeight: "40px",
      backgroundSize: "100%",
      ackgroundRepeat: "no-repeat",
      backgroundPositionY: "30%",
    },
  },
});

const ButtonEl = ({ name, id, active, img }) => {
  const classes = useStyles(active !== name ? `url("${img}")` : "none");
  return (
    <button className={classes.butt}>
      <div className={active !== name ? classes.blockActive : classes.block}>
        <h3 className={ButtonStyle.text}>
          <span>{`0${id + 1} `}</span>
          {name}
        </h3>
      </div>
    </button>
  );
};

export default ButtonEl;
