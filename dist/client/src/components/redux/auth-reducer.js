"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authActin = void 0;
const AUTH = "AUTH";
const initialState = {
    isAoth: true,
};
const authReducer = (state = initialState, action) => {
    let copy;
    switch (action.type) {
        case AUTH: {
            copy = Object.assign(Object.assign({}, state), { isAoth: action.inAuth });
            return copy;
        }
        default:
            return state = Object.assign({}, initialState);
    }
};
const authActin = (inAuth) => ({
    type: AUTH,
    inAuth,
});
exports.authActin = authActin;
exports.default = authReducer;
