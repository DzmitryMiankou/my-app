export const addPostcreateActin = () => ({ type: "ADDPOST" });

export const onPostChangecreateActin = (text) => ({
  type: "NEWPOST",
  newChange: text,
});

const messegDataReducer = (state, action) => {
  switch (action.type) {
    case "ADDPOST":
      let newPost = {
        id: 5,
        messege: state.newChanges,
        like: 23,
      };
      state.messegData.push(newPost);
      state.newChanges = "";
      return state;
    case "NEWPOST":
      state.newChanges = action.newChange;
      return state;
    default:
      return state;
  }
};

export default messegDataReducer;
