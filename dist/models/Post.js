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
const mySql_1 = require("../MySQL/mySql");
class Post {
    constructor(id, nickName, email, password) {
        this.id = id;
        this.nickName = nickName;
        this.email = email;
        this.password = password;
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(this.nickName);
            const postSQL = `INSERT INTO createUsers 
        VALUES (
            '${this.id}', 
            '${this.nickName}', 
            '${this.email}', 
            '${this.password}'
            )`;
            const newUser = mySql_1.connection.query(postSQL);
            return newUser;
        });
    }
    static findAll() {
    }
}
exports.default = Post;
