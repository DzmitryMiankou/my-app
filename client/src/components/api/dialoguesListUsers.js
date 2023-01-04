import { getDialogListActin, getMessegesActin } from "../redux/action.ts";

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
    }
  };
};
