import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import logo from "../buttun.svg";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <Box sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </Box>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Modal({ text }) {
  const [open, setOpen] = React.useState(false);
  const [get, set] = React.useState("");

  const regEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const postEmail = async (email) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email }),
    };
    const response = await fetch("https://reqres.in/api/posts", requestOptions);
    if (!response.ok) {
      return console.log("ok");
    }
    console.log("no");
  };

  const handleClickOpen = () => {
    const test = regEmail.test(text);
    if (text === "") {
      set(["ERROR", "You haven't entered anything"]);
      return setOpen(true);
    }
    if (test === false) {
      set(["ERROR", "You have entered the wrong data"]);
      return setOpen(true);
    }
    postEmail(text);
    set([
      "SUCCESS!",
      " You have successfully subscribed to the email newsletter",
    ]);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton sx={{ padding: "0" }} onClick={handleClickOpen}>
        <img src={logo} alt="line" />
      </IconButton>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{
          width: "300px",
          margin: "auto",
        }}
      >
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          ></BootstrapDialogTitle>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Poppins",
              color: "#162c4e",
              fontWeight: 700,
              fontSize: "36px",
            }}
          >
            {get[0]}
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Poppins",
            }}
          >
            {get[1]}
          </Typography>
          <Button
            autoFocus
            onClick={handleClose}
            sx={{
              textAlign: "center",
              fontFamily: "Poppins",
              backgroundColor: "#1d4169",
              borderRadius: "40px",
              color: "white",
              padding: "10px 25%",
              marginBottom: "40px",
              "&:hover": {
                backgroundColor: "#162c4e",
              },
            }}
          >
            Close
          </Button>
        </DialogContent>
      </BootstrapDialog>
    </>
  );
}
