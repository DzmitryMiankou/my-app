import React from "react";
import AccordionDetailsStyle from "./AccordionDetails.module.scss";
import { Box } from "@mui/material";

const AccordionDetails = ({ active, name, img, listNumber, date }) => {
  return (
    <Box
      sx={{
        width: active === name ? "50vw" : "0px",
        backgroundImage: `url(${img})`,
        transition: "1s ease",
      }}
    >
      <div
        className={AccordionDetailsStyle.outside}
        style={{
          visibility: active === name ? "visible" : "hidden",
          transitionDuration: "1s",
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
