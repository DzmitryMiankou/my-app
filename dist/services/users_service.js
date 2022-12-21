"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mySql_1 = require("../MySQL/mySql");
const postSQL = "INSERT INTO `createUsers` VALUES (?, ?, ?, ?);";
class UsersService {
    registration(id, nickName, email, hashPassword) {
        mySql_1.connection.query(postSQL, [id, nickName, email, hashPassword], (err, result) => {
            if (err) {
                throw Error(err);
            }
            else {
                let a = "ok";
                console.log("OK");
                return a;
            }
        });
    }
}
exports.default = new UsersService();
