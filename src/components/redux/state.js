let renderRoot;

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

export default state;
