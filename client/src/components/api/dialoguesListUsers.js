import {
  getDialogListActin,
  getMessegesActin,
  getUsersActin,
  getKEYActin,
} from "../redux/action.ts";

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
            ?.idDialogues,
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

export const fetchUsers = () => {
  return async function (dispatch) {
    try {
      const request = await fetch("http://localhost:5000/api/users", {
        method: "GET",
        headers: {
          Authentication: JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      const response = await request.json();
      dispatch(getUsersActin(response));
    } catch (error) {
      console.log(error);
      return;
    }
  };
};

export const fetchKey = () => {
  return async function (dispatch) {
    async function key() {
      const request = await fetch("http://localhost:5000/api/key", {
        method: "GET",
        headers: {
          Authentication: JSON.parse(localStorage.getItem("user")).accessToken,
        },
        credentials: "include",
      });
      return request;
    }
    const request = await key();
    if (request.status === 401) {
      refresh(key, dispatch);
    }
    const response = await request.json();
    dispatch(getKEYActin(response));
  };
};

async function refresh(callback, dispatch) {
  const refreshrequest = await fetch("http://localhost:5000/api/refresh", {
    method: "GET",
    credentials: "include",
  });
  const response = await refreshrequest.json();
  localStorage.setItem("user", JSON.stringify(response));
  const request = await callback();
  const responseNew = await request.json();
  dispatch(getKEYActin(responseNew));
}
