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
const $searchDialoguesSQL = "SELECT userDialogues.id, user_id1, nickName, user_id2 FROM `userDialogues` \
 INNER JOIN `createUsers` ON (userDialogues.user_id2 = createUsers.id) WHERE `user_id1` = ?;";
const $searchDialoguesUserSQL = "SELECT * FROM `userDialogues` WHERE `user_id1` LIKE ? AND `user_id2` LIKE ?;";
const $createDialoguesSQL = "INSERT INTO `userDialogues` VALUES (?, ?, ?, ?);";
const $createMessegesSQL = "INSERT INTO `userMessage` VALUES (?, ?, ?, ?, ?, ?);";
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
                if (data.id === req.body.id)
                    return res.status(400).json({ messeges: "Вы пытаетесь создать диалог с самим собой" });
                mySql_1.connection.query($searchDialoguesUserSQL, [data.id, req.body.id], (err, results, fields) => {
                    if (err)
                        return console.log(err);
                    if (results.length > 0) {
                        return res.status(400).json({ messeges: "Такой диалог уже существет" });
                    }
                    else {
                        mySql_1.connection.query($createDialoguesSQL, [null, data.id, req.body.id, dateTime], (err, results, fields) => {
                            if (err)
                                return console.log(err);
                        });
                        return res.status(201).json({ messeges: "Диалог создан" });
                    }
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getDialogues(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
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
                mySql_1.connection.query($searchDialoguesSQL, data.id, (err, results, fields) => {
                    if (err)
                        return console.log(err);
                    return res.status(200).json(results);
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    createMesseges(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body.messegData[0]);
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
                const now = new Date().toJSON();
                const dateTime = new Date(now);
                mySql_1.connection.query($createMessegesSQL, [null, req.body.dialogId, data.id, req.body.userId, req.body.messegData[0], dateTime], (err, results, fields) => {
                    if (err)
                        return console.log(err);
                    return res.status(200).json(results);
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = new useController();
