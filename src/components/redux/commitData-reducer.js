export const commitActin = (text) => ({
  type: "COMMIT",
  newCommit: text,
});
export const addCommitActin = () => ({ type: "ADDCOMMIT" });

let initialState = { newCommitChanges: "", commitData: [] };

const commitDataReducer = (state = initialState, action) => {
  if (action.type === "COMMIT") {
    state.newCommitChanges = action.newCommit;
  } else if (action.type === "ADDCOMMIT") {
    let newCommit = {
      id: 5,
      messege: state.newCommitChanges,
      like: 23,
    };
    state.commitData.push(newCommit);
    state.newCommitChanges = "";
  }

  return state;
};

export default commitDataReducer;
