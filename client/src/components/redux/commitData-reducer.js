const COMMIT = "COMMIT";
const ADD_COMMIT = "ADDCOMMIT";

let initialState = { commitData: [], newCommitChanges: "" };

const commitDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMIT:
      state.newCommitChanges = action.newCommit;
      return state;
    case ADD_COMMIT:
      let newCommit = {
        id: 5,
        messege: state.newCommitChanges,
        like: 23,
      };
      state.commitData.push(newCommit);
      state.newCommitChanges = "";
      return state;
    default:
      return state;
  }
};

export default commitDataReducer;
export const commitActin = (text) => ({
  type: COMMIT,
  newCommit: text,
});
export const addCommitActin = () => ({ type: ADD_COMMIT });
