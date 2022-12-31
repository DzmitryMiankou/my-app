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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mySql_1 = require("../MySQL/mySql");
const token_service_1 = __importDefault(require("../services/token-service"));
const $searchIdNickNameSQL = "SELECT id, nickName FROM `createUsers`";
const $createDialoguesSQL = "INSERT INTO `userDialogues` VALUES (?, ?, ?, ?);";
class useController {
    usersList(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                mySql_1.connection.query($searchIdNickNameSQL, (err, results, fields) => {
                    return res.json(results);
                });
            }
            catch (error) {
                res.status(Number(process.env.NUMBER_500))
                    .json({ message: process.env.MESSAGE_500 });
            }
        });
    }
    createDialogues(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const now = new Date().toJSON();
                const dateTime = new Date(now);
                const refreshToken = yield req.cookies["refreshToken"];
                if (!refreshToken)
                    return console.log("No refresh token");
                const validRefreshToken = token_service_1.default.validateRefreshToken(refreshToken);
                if (!validRefreshToken)
                    return console.log("noRefresh");
                const data = {
                    id: validRefreshToken["id"],
                    nickName: validRefreshToken["nickName"],
                    email: validRefreshToken["email"],
                };
                mySql_1.connection.query($createDialoguesSQL, [null, data.id, req.body.id, dateTime], (err, results, fields) => {
                    if (err)
                        return console.log(err);
                });
                return res.status(201).json({ messeges: "Good" });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = new useController();
