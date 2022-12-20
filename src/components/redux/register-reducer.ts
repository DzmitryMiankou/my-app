
const INPUT_NAME = "input_register_NAME";
const INPUT_EMAIL = "input_register_EMAIL";
const INPUT_PASSWORD = "input_register_PASSWORD";
const REGISTER = "input_register_REGISTER";
const LOGIN = "input_register_LOGIN";

type InitialStateType = {
  id: number | null,
  nickName: string,
  email: string,
  password: string,
  isAoth: boolean,
}

type PropertyPostType = {
  method: string;
  headers: {
    Accept: string;
    "Content-Type": string;
  };
  body: string;
  credentials: any;
}


const initialState: InitialStateType = {
  id: null,
  nickName: "",
  email: "",
  password: "",
  isAoth: false,
}

const registerReducer = (state = initialState, action: any) => {
  let copy;
  const { nickName, email, password } = state;
  const data = {
    nickName: nickName,
    email: email,
    password: password,
  };
  const propertyPost: PropertyPostType = {
    method: 'POST',
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(data),
    credentials: 'include',
  }
  switch (action.type) {
    case INPUT_NAME: {
      copy = { ...state, nickName: action.nickName };
      return copy;
    }
    case INPUT_EMAIL: {
      copy = { ...state, email: action.email };
      return copy;
    }
    case INPUT_PASSWORD: {
      copy = { ...state, password: action.password };
      return copy;
    }
    case REGISTER: {
      async function postRegistr() {
        if (email === "" || password === "" || nickName === "") {
          return console.log("Поля должны быть заполнены");
        }
        try {
          const response = await fetch('http://localhost:5000/api/auth', propertyPost)
          const user = await response.json();
          if (user.message === undefined) {
            localStorage.setItem("UserData", JSON.stringify(user.userData));
            console.log("Операция прошла успешно");
            return;
          } else {
            console.log(user.message.errors[0]["msg"]);
            return;
          }
        } catch (error) {
          console.log(error);
        }
      }
      postRegistr();
      copy = { ...initialState };
      return copy;
    }
    case LOGIN: {
      async function postLogin() {
        if (email === "" || password === "") {
          return console.log("Поля должны быть заполнены");
        }
        try {
          const response = await fetch('http://localhost:5000/api/login', propertyPost)
          const user = await response.json();
          if (user.message === undefined) {
            localStorage.setItem("UserData", JSON.stringify(user.userData));
            console.log("Операция прошла успешно");
            return;
          } else {
            console.log(user.message.errors[0]["msg"]);
            return;
          }
        } catch (error) {
          console.log(error);
        }
      }
      postLogin();
      return copy = { ...state };
    }
    default:
      return state;
  }
};
type loginActionType = {
  type: typeof LOGIN
};
type registerActionType = {
  type: typeof REGISTER
};
type nickNameActinType = {
  type: typeof INPUT_NAME,
  nickName: string
};
type emailActinType = {
  type: typeof INPUT_EMAIL,
  email: string
};
type passwordActinType = {
  type: typeof INPUT_PASSWORD,
  password: string
};
export const registerActin = (): registerActionType => ({ type: REGISTER });
export const loginActin = (): loginActionType => ({ type: LOGIN });
export const nickNameActin = (text: string): nickNameActinType => ({
  type: INPUT_NAME,
  nickName: text,
});
export const emailActin = (text: string): emailActinType => ({
  type: INPUT_EMAIL,
  email: text,
});
export const passwordActin = (text: string): passwordActinType => ({
  type: INPUT_PASSWORD,
  password: text,
});

export default registerReducer;
