let store = {
  _state: {
    messegData: [],
    newChanges: "",
    id: null,
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {},
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  disPatch(action) {
    if (action.type === "ADDPOST") {
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
    } else if (action.type === "NEWPOST") {
      this._state.newChanges = action.newChange;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostcreateActin = () => {
  return {
    type: "ADDPOST",
  };
};

export const onPostChangecreateActin = (text) => {
  return {
    type: "NEWPOST",
    newChange: text,
  };
};

export default store;
