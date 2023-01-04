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
exports.fetchDialogUsers = void 0;
const action_1 = require("../redux/action");
const fetchDialogUsers = () => {
    return function (dispatch) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = yield fetch("http://localhost:5000/api/chat", {
                method: "GET",
                credentials: "include",
                headers: {
                    //@ts-ignore
                    Authentication: JSON.parse(localStorage.getItem("user")).accessToken,
                },
            });
            const response = yield request.json();
            dispatch((0, action_1.getDialogListActin)(response));
        });
    };
};
exports.fetchDialogUsers = fetchDialogUsers;
