const ADD_POST = "ADDPOST";
const NEW_POST = "NEWPOST";
let initialState = {
  messegData: [],
  newChanges: "",
};
const messegDataReducer = (state = initialState, action) => {
  let copy;
  switch (action.type) {
    case NEW_POST: {
      copy = { ...state, newChanges: action.newChange };
      return copy;
    }
    case ADD_POST:
      console.log(state);
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

export const addPostcreateActin = () => ({ type: ADD_POST });

export const onPostChangecreateActin = (text) => ({
  type: NEW_POST,
  newChange: text,
});
export default messegDataReducer;
