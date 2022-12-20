const INPUT_NAME = "input_register_NAME";
const INPUT_EMAIL = "input_register_EMAIL";
const INPUT_PASSWORD = "input_register_PASSWORD";
const REGISTER = "input_register_REGISTER";
const LOGIN = "input_register_LOGIN";
export type InitialStateType = {
  id: number | null,
  nickName: string,
  email: string,
  password: string,
  isAoth: boolean,
  errorMessage: string
}
const initialState: InitialStateType = {
  id: null,
  nickName: "",
  email: "",
  password: "",
  isAoth: false,
  errorMessage: "",
}

const registerReducer = (state = initialState, action: any) => {
  let copy;

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
      copy = { ...initialState };
      return copy;
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
