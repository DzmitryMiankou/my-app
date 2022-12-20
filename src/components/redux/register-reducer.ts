
const NAME = "register_NAME";
const EMAIL = "register_EMAIL";
const PASSWORD = "register_PASSWORD";
const REGISTER = "register_REGISTER";
const LOGIN = "register_LOGIN";

type InitialStateType = {
  id: number | null,
  nickName: string,
  email: string,
  password: string,
  isAoth: boolean,
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
  switch (action.type) {
    case NAME: {
      copy = { ...state, nickName: action.nickName };
      return copy;
    }
    case EMAIL: {
      copy = { ...state, email: action.email };
      return copy;
    }
    case PASSWORD: {
      copy = { ...state, password: action.password };
      return copy;
    }
    case REGISTER: {
      copy = { ...initialState };
      return copy;
    }
    case LOGIN: {
      async function postLogin() {
        const { email, password } = state;
        if (email === "" || password === "") {
          return console.log("Поля должны быть заполнены");
        }
        const data = {
          email: email,
          password: password,
        };
        try {
          const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: { Accept: "application/json", "Content-Type": "application/json" },
            body: JSON.stringify(data),
            credentials: "include",
          })
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
      return state;
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
  type: typeof NAME,
  nickName: string
};
type emailActinType = {
  type: typeof EMAIL,
  email: string
};
type passwordActinType = {
  type: typeof PASSWORD,
  password: string
};
export const registerActin = (): registerActionType => ({ type: REGISTER });
export const loginActin = (): loginActionType => ({ type: LOGIN });
export const nickNameActin = (text: string): nickNameActinType => ({
  type: NAME,
  nickName: text,
});
export const emailActin = (text: string): emailActinType => ({
  type: EMAIL,
  email: text,
});
export const passwordActin = (text: string): passwordActinType => ({
  type: PASSWORD,
  password: text,
});

export default registerReducer;
