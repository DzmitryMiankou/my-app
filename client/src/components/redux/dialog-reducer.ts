const DIALOGUSERS = "GET_LIST_DIALOGUSERS";
const MESSEGESGROUP = "GET_MESSEGESGROUP";// not 
const MESSEGES = "GET_MESSEGES";
const USERS = "GET_USERS";
const KEY = "GET_KEY";

type InitialStateType = {
    list: any,
    messeges: any,
    users: any,
    key: any,
};
const initialState: InitialStateType = {
    list: [],
    messeges: [],
    users: [],
    key: [],
};

const getDialogListUsersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case DIALOGUSERS: {
            return { ...state, list: action.payload };
        }
        case MESSEGESGROUP: {
            return { ...state }
        }
        case MESSEGES: {
            return { ...state, messeges: action.payload };
        }
        case USERS: {
            return { ...state, users: action.payload };
        }
        case KEY: {
            return { ...state, key: action.payload };
        }
        default:
            return state;
    };
};

export default getDialogListUsersReducer;

