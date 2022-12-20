"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onPostChangecreateActin = exports.addPostcreateActin = void 0;
const ADD_POST = "ADDPOST";
const NEW_POST = "NEWPOST";
const initialState = {
    messegData: [],
    newChanges: "",
};
const messegDataReducer = (state = initialState, action) => {
    let copy;
    switch (action.type) {
        case NEW_POST: {
            copy = Object.assign(Object.assign({}, state), { newChanges: action.newChange });
            return copy;
        }
        case ADD_POST:
            if (state.newChanges === "") {
                return state;
            }
            copy = Object.assign(Object.assign({}, state), { messegData: [
                    ...state.messegData,
                    {
                        id: 5,
                        messege: state.newChanges,
                    },
                ], newChanges: "" });
            return copy;
        default:
            return state;
    }
};
const addPostcreateActin = () => ({ type: ADD_POST });
exports.addPostcreateActin = addPostcreateActin;
const onPostChangecreateActin = (text) => ({
    type: NEW_POST,
    newChange: text,
});
exports.onPostChangecreateActin = onPostChangecreateActin;
exports.default = messegDataReducer;
