import { renderRoot } from "../../render";

let state = {
  messegData: [],
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

export default state;
