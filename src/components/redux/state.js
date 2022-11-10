let store = {
  _state: {
    messegData: [],
    newChanges: "",
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  _callSubscriber() {},
  disPatch(action) {
    if (action.type === "addPost") {
      if (this._state.newChanges === "") {
        return;
      }
      let newPost = {
        id: 5,
        messege: this._state.newChanges,
        like: 23,
      };
      this._state.messegData.push(newPost);
      this._state.newChanges = "";
      this._callSubscriber(this._state);
    } else if (action.type === "newPost") {
      this._state.newChanges = action.newChange;
      this._callSubscriber(this._state);
      console.log(this._state.newChanges);
    }
  },
};

export default store;
