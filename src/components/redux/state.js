import { renderRoot } from "../../render";

let state = {
  messegData: [],
  newChanges: "",
};

export let addPost = (newMessege) => {
  let newPost = {
    id: 5,
    messege: newMessege,
    like: 23,
  };
  state.messegData.push(newPost);
  renderRoot(state);
};

export let upDateChange = (newChange) => {
  state.newChanges = newChange;
  renderRoot(state);
};

export default state;
