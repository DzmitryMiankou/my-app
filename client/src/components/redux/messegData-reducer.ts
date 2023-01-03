const ADD_POST = "ADDPOST";
const NEW_POST = "NEWPOST";

type InitialStateType = {
  newChanges: string,
}
const initialState: InitialStateType = {
  newChanges: "",
};
const messegDataReducer = (state = initialState, action: any): InitialStateType => {
  let copy;
  switch (action.type) {
    case NEW_POST: {
      copy = { ...state, newChanges: action.newChange };
      return copy;
    }
    case ADD_POST:
      if (state.newChanges === "") {
        return state;
      }
      //@ts-ignore
      const dataD = JSON.parse(localStorage.getItem("dialogues"));
      async function getListUsers() {
        const request = await fetch("http://localhost:5000/api/messeges", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            //@ts-ignore
            Authentication: JSON.parse(localStorage.getItem("user")).accessToken,
          },
          body: JSON.stringify({ dialogId: dataD.idDialogues, userId: dataD.user_id2, messegData: [state.newChanges] }),
          credentials: "include",
        });
        return request;
      }
      getListUsers();
      copy = {
        ...initialState
      };
      return copy;
    default:
      return state;
  }
};
type addPostcreateActinType = {
  type: typeof ADD_POST
};
type onPostChangecreateActinType = {
  type: typeof NEW_POST,
  newChange: string
};
export const addPostcreateActin = (): addPostcreateActinType => ({ type: ADD_POST });

export const onPostChangecreateActin = (text: string): onPostChangecreateActinType => ({
  type: NEW_POST,
  newChange: text,
});
export default messegDataReducer;
