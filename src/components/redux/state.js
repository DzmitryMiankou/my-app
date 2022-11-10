import { renderRoot } from "../../render";

let state = {
  messegData: [],
  newChanges: "",
};

export let addPost = () => {
  let a = state.newChanges;
  if (a === "") {
    return;
  }
  let newPost = {
    id: 5,
    messege: a,
    like: 23,
  };
  state.messegData.push(newPost);
  upDateChange("");
  renderRoot(state);
  console.log(state);
};

export let upDateChange = (newChange) => {
  state.newChanges = newChange;
  renderRoot(state);
};

export default state;
