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
exports.getUsers = void 0;
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    function getListUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const request = yield fetch("http://localhost:5000/api/users", {
                method: "GET",
                headers: {
                    //@ts-ignore
                    Authentication: JSON.parse(localStorage.getItem("user")).accessToken,
                }
            });
            return request;
        });
    }
    const request = yield getListUsers();
    if (request.status === 401) {
        const refreshrequest = yield fetch("http://localhost:5000/api/refresh", {
            method: "GET",
            credentials: "include",
        });
        const response = yield refreshrequest.json();
        localStorage.setItem("user", JSON.stringify(response));
        const request = yield getListUsers();
        return yield request.json();
    }
    return yield request.json();
});
exports.getUsers = getUsers;
