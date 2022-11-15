const ADD_POST = "ADDPOST";
const NEW_POST = "NEWPOST";
let initialState = {
  messegData: [],
  newChanges: "",
};
const messegDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_POST: {
      let newState = { ...state };
      newState.newChanges = action.newChange;
      return newState;
    }
    case ADD_POST:
      if (state.newChanges === "") {
        return state;
      }
      let newPost = {
        id: 5,
        messege: state.newChanges,
        like: 23,
      };
      let newState = { ...state };
      newState.messegData = [...state.messegData];
      newState.messegData.push(newPost);
      newState.newChanges = "";
      return newState;
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
