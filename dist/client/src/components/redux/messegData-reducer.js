"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onPostChangecreateActin = exports.addPostcreateActin = void 0;
const ADD_POST = "ADDPOST";
const NEW_POST = "NEWPOST";
const initialState = {
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
            //@ts-ignore
            const dataD = JSON.parse(localStorage.getItem("dialogues"));
            function getListUsers() {
                return __awaiter(this, void 0, void 0, function* () {
                    const request = yield fetch("http://localhost:5000/api/messeges", {
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
                });
            }
            getListUsers();
            copy = Object.assign({}, initialState);
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
