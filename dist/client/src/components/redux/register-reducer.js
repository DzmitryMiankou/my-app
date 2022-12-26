"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordActin = exports.emailActin = exports.nickNameActin = exports.loginActin = exports.registerActin = void 0;
const INPUT_NAME = "input_register_NAME";
const INPUT_EMAIL = "input_register_EMAIL";
const INPUT_PASSWORD = "input_register_PASSWORD";
const REGISTER = "input_register_REGISTER";
const LOGIN = "input_register_LOGIN";
const initialState = {
    id: null,
    nickName: "",
    email: "",
    password: "",
};
const registerReducer = (state = initialState, action) => {
    let copy;
    switch (action.type) {
        case INPUT_NAME: {
            copy = Object.assign(Object.assign({}, state), { nickName: action.nickName });
            return copy;
        }
        case INPUT_EMAIL: {
            copy = Object.assign(Object.assign({}, state), { email: action.email });
            return copy;
        }
        case INPUT_PASSWORD: {
            copy = Object.assign(Object.assign({}, state), { password: action.password });
            return copy;
        }
        case REGISTER: {
            copy = Object.assign({}, initialState);
            return copy;
        }
        default:
            return state;
    }
};
const registerActin = () => ({ type: REGISTER });
exports.registerActin = registerActin;
const loginActin = () => ({ type: LOGIN });
exports.loginActin = loginActin;
const nickNameActin = (text) => ({
    type: INPUT_NAME,
    nickName: text,
});
exports.nickNameActin = nickNameActin;
const emailActin = (text) => ({
    type: INPUT_EMAIL,
    email: text,
});
exports.emailActin = emailActin;
const passwordActin = (text) => ({
    type: INPUT_PASSWORD,
    password: text,
});
exports.passwordActin = passwordActin;
exports.default = registerReducer;
