const ADD_POST = "ADDPOST";
const NEW_POST = "NEWPOST";
let initialState = {
  messegData: [],
  newChanges: "",
};

const messegDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        messege: state.newChanges,
        like: 23,
      };
      state.messegData.push(newPost);
      state.newChanges = "";
      return state;
    case NEW_POST:
      state.newChanges = action.newChange;
      return state;
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
