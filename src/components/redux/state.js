let state = {
  messegData: [
    {
      id: 1,
      messege: "How are you?",
      like: 11,
    },
    {
      id: 2,
      messege: "Nice!",
      like: 21,
    },
    {
      id: 3,
      messege: "What's you name?",
      like: 2,
    },
  ],
};

export const addPost = (newMessege) => {
  let newPost = {
    id: 5,
    messege: newMessege,
    like: 23,
  };
  state.messegData.push(newPost);
};

export default state;
