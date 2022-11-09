import { renderRoot } from "../../render";

let state = {
  messegData: [],
  newChanges: "",
};

export let addPost = () => {
  let a = state.newChanges;
  let newPost = {
    id: 5,
    messege: a,
    like: 23,
  };
  state.messegData.push(newPost);
  state.newChanges = "";
  renderRoot(state);
  console.log(state);
};

export let upDateChange = (newChange) => {
  state.newChanges = newChange;
  renderRoot(state);
};

export default state;
