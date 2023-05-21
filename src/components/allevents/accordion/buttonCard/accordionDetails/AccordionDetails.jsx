import React from "react";
import AccordionDetailsStyle from "./AccordionDetails.module.scss";
import { Box } from "@mui/material";

const AccordionDetails = ({ active, name, img, listNumber, date }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: active === name ? "50vw" : "0px",
        backgroundImage: `url(${img})`,
        transition: "width 1s ease",
        backgroundRepeat: "no-repeat",
        backgroundSize: "51vw",
        backgroundPosition: "center",
        "@media screen and (max-width: 1320px)": {
          transition: "height 1s ease",
          height: active === name ? "40vh" : "0px",
          width: "90vw",
          backgroundSize: "90vw",
          backgroundPositionY: "0px",
        },
      }}
    >
      <div
        className={AccordionDetailsStyle.outside}
        style={{
          transitionDuration: "1s",
          visibility: active === name ? "visible" : "hidden",
          zIndex: active === name ? "1" : "0",
        }}
      >
        <div className={AccordionDetailsStyle.number}>{listNumber}</div>
        <p>{name}</p>
        <time>{date}</time>
        <a
          href="https://developer.mozilla.org/ru/"
          target="_blank"
          className={AccordionDetailsStyle.morebutton}
          rel="noreferrer"
        >
          More information
        </a>
      </div>
    </Box>
  );
};

export default AccordionDetails;
