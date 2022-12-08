const NAME = "NAME";
const EMAIL = "EMAIL";
const PASSWORD = "PASSWORD";
const REGISTER = "REGISTER";

type InitialStateType = {
  id: number | null,
  nickName: string,
  email: string,
  password: string,
}

const initialState: InitialStateType = {
  id: null,
  nickName: "",
  email: "",
  password: "",
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

      const data = {
        "nickName": state.nickName,
        "email": state.email,
        "password": state.password
      };
      fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).catch((error) => {
        console.error('Error:', error);
      });
      copy = initialState;
      return copy;
    }
    default:
      return state;
  }
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