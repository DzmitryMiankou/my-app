import { getDialogListActin, getMessegesActin } from "../redux/action.ts";
import io from "socket.io-client";
const socket = io.connect("http://localhost:5000");

export const fetchDialogUsers = () => {
  return async function (dispatch) {
    try {
      const request = await fetch("http://localhost:5000/api/chat", {
        method: "GET",
        credentials: "include",
        headers: {
          Authentication: JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      const response = await request.json();
      dispatch(getDialogListActin(response));
    } catch (error) {
      console.log(error);
      return;
    }
  };
};

export const fetchMesseges = () => {
  return async function (dispatch) {
    try {
      const f = JSON.parse(localStorage.getItem("dialogues")).idDialogues;
      socket.emit("user", { message: f });
      socket.on("user", (data) => {
        dispatch(getMessegesActin(data));
      });
    } catch (error) {
      console.log(error);
    }
  };
  /*
  return async function (dispatch) {
    try {
      const request = await fetch("http://localhost:5000/api/messegeId", {
        method: "GET",
        credentials: "include",
        headers: {
          Authentication: JSON.parse(localStorage.getItem("user")).accessToken,
          DialoguesId: JSON.parse(localStorage.getItem("dialogues"))
            .idDialogues,
        },
      });
      const response = await request.json();
      dispatch(getMessegesActin(response));
    } catch (error) {
      console.log(error);
      return;
    }*/
};
