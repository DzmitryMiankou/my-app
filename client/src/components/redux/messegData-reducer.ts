const ADD_POST = "ADDPOST";
const NEW_POST = "NEWPOST";

type InitialStateType = {
  messegData: (string | { id: number; messege: string; })[],
  newChanges: string,
}
const initialState: InitialStateType = {
  messegData: [],
  newChanges: "",
};
const messegDataReducer = (state = initialState, action: any): InitialStateType => {
  let copy;
  switch (action.type) {
    case NEW_POST: {
      copy = { ...state, newChanges: action.newChange };
      return copy;
    }
    case ADD_POST:
      if (state.newChanges === "") {
        return state;
      }
      copy = {
        ...state,
        messegData: [
          ...state.messegData,
          {
            id: 5,
            messege: state.newChanges,
          },
        ],
        newChanges: "",
      };
      return copy;
    default:
      return state;
  }
};
type addPostcreateActinType = {
  type: typeof ADD_POST
};
type onPostChangecreateActinType = {
  type: typeof NEW_POST,
  newChange: string
};
export const addPostcreateActin = (): addPostcreateActinType => ({ type: ADD_POST });

export const onPostChangecreateActin = (text: string): onPostChangecreateActinType => ({
  type: NEW_POST,
  newChange: text,
});
export default messegDataReducer;
