const DIALOGUSERS = "GET_LIST_DIALOGUSERS";
const MESSEGESGROUP = "GET_MESSEGESGROUP";// not 
const MESSEGES = "GET_MESSEGES";

type InitialStateType = {
    list: any,
    messeges: any,
}
const initialState: InitialStateType = {
    list: [],
    messeges: [],
}

const getDialogListUsersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case DIALOGUSERS: {
            return { ...state, list: action.payload }
        }
        case MESSEGESGROUP: {
            return { ...state }
        }
        case MESSEGES: {
            return { ...state, messeges: action.payload }
        }
        default:
            return state;
    }
};

export default getDialogListUsersReducer;

