const NAME = "NAME";
const REGISTER = "REGISTER";

type InitialStateType = {
    id:number | null,
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
const registerReducer = (state=initialState, action: any) => {
  let copy;
  switch (action.type) {
    case NAME: {
      copy = { ...state, nickName: action.nickName };
      return copy;
    }
    case REGISTER:
      return copy;
    default:
      return state;
  }
}
type registerActionType = {
  type: typeof REGISTER
};
type inputActinType = {
  type: typeof NAME,
  nickName: string
};
export const registerActin = (): registerActionType => ({ type: REGISTER });

export const inputActin = (text: string): inputActinType => ({
  type: NAME,
  nickName: text,
});
export default registerReducer;