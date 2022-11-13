import messegDataReducer from "./messegData-reducer";
import commitDataReducer from "./commitData-reducer";

let store = {
  _state: {
    messeges: { messegData: [], newChanges: "" },
    learningLink: ["Figma", "HTML", "CSS"],
    commit: { newCommitChanges: "", commitData: [] },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {},
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.messeges = messegDataReducer(this._state.messeges, action);
    this._state.commit = commitDataReducer(this._state.commit, action);
    this._callSubscriber(this._state);
  },
};

export default store;
