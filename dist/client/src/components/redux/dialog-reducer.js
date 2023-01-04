"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DIALOGUSERS = "GET_LIST_DIALOGUSERS";
const MESSEGESGROUP = "GET_MESSEGESGROUP"; // not 
const MESSEGES = "GET_MESSEGES";
const initialState = {
    list: [],
    messeges: [],
};
const getDialogListUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case DIALOGUSERS: {
            return Object.assign(Object.assign({}, state), { list: action.payload });
        }
        case MESSEGESGROUP: {
            return Object.assign({}, state);
        }
        case MESSEGES: {
            return Object.assign(Object.assign({}, state), { messeges: action.payload });
        }
        default:
            return state;
    }
};
exports.default = getDialogListUsersReducer;
