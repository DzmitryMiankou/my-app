let store = {
  _state: {
    messegData: [],
    newChanges: "",
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {},
  addPost() {
    if (this._state.newChanges === "") {
      return;
    }
    let newPost = {
      id: 5,
      messege: this._state.newChanges,
      like: 23,
    };
    this._state.messegData.push(newPost);
    this.upDateChange("");
    this._callSubscriber(this._state);
  },
  upDateChange(newChange) {
    this._state.newChanges = newChange;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;

/*let renderRoot;

let state = {
  messegData: [],
  newChanges: "",
};

export const addPost = () => {
  if (state.newChanges === "") {
    return;
  }
  let newPost = {
    id: 5,
    messege: state.newChanges,
    like: 23,
  };
  state.messegData.push(newPost);
  upDateChange("");
  renderRoot();
};

export const upDateChange = (newChange) => {
  state.newChanges = newChange;
  renderRoot();
};

export let subscribe = (observer) => {
  renderRoot = observer;
};

export default state;*/
