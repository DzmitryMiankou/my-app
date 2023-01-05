"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DIALOGUSERS = "GET_LIST_DIALOGUSERS";
const MESSEGESGROUP = "GET_MESSEGESGROUP"; // not 
const MESSEGES = "GET_MESSEGES";
const USERS = "GET_USERS";
const KEY = "GET_KEY";
const initialState = {
    list: [],
    messeges: [],
    users: [],
    key: [],
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
        case USERS: {
            return Object.assign(Object.assign({}, state), { users: action.payload });
        }
        case KEY: {
            return Object.assign(Object.assign({}, state), { key: action.payload });
        }
        default:
            return state;
    }
};
exports.default = getDialogListUsersReducer;
