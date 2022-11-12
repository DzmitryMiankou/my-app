import messegDataReducer from "./messegData-reducer";

let store = {
  _state: {
    messeges: { messegData: [], newChanges: "" },
    learningLink: ["Figma", "HTML", "CSS"],
    newCommitChanges: "",
    commitData: [],
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {},
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  disPatch(action) {
    this._state.messeges = messegDataReducer(this._state.messeges, action);
    this._callSubscriber(this._state);

    if (action.type === "COMMIT") {
      this._state.newCommitChanges = action.newCommit;
      this._callSubscriber(this._state);
      console.log(this._state.newCommitChanges);
    } else if (action.type === "ADDCOMMIT") {
      if (this._state.newCommit === "") {
        return;
      }
      let newCommit = {
        id: 5,
        messege: this._state.newCommitChanges,
        like: 23,
      };
      this._state.commitData.push(newCommit);
      this._state.newCommitChanges = "";
      this._callSubscriber(this._state);
      console.log(this._state.commitData);
    }
  },
};

export const commitActin = (text) => ({
  type: "COMMIT",
  newCommit: text,
});
export const addCommitActin = () => ({ type: "ADDCOMMIT" });
export default store;
