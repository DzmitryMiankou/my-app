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
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const bcrypt_1 = __importDefault(require("bcrypt"));
const validation_result_1 = require("express-validator/src/validation-result");
const mySql_1 = require("../MySQL/mySql");
const token_service_1 = __importDefault(require("../services/token-service"));
const uuid_1 = require("uuid");
const sqlEm = "SELECT * FROM `createUsers` WHERE `email` LIKE (?);";
const postSQL = "INSERT INTO `createUsers` VALUES (?, ?, ?, ?, ?);";
const RefreshSQL = "INSERT INTO `userRefreshToken` VALUES (?, ?);";
const updadaRefreshSQL = "UPDATE `userRefreshToken` SET `RefreshToken` = ?  WHERE  `us_id` = ?;";
const searchRefreshSQL = "SELECT `RefreshToken`  FROM `userRefreshToken`;";
class useController {
    auth(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const err = (0, validation_result_1.validationResult)(req);
                if (!err.isEmpty()) {
                    return res.status(Number(process.env.NUMBER_400)).json({ message: err });
                }
                const { id, nickName, email, password } = req.body;
                const hashPassword = yield bcrypt_1.default.hash(password, 3);
                const generId = (0, uuid_1.v4)();
                mySql_1.connection.query(postSQL, [id, nickName, email, hashPassword, generId], (err, result) => {
                    if (err) {
                        res.status(Number(process.env.NUMBER_400))
                            .json({ message: { errors: [{ msg: process.env.MESSAGE_400_BAD_EMAIL }] } });
                    }
                    const usId = result.insertId;
                    const accessToken = token_service_1.default.generateToken({ id: usId, roles: "user" }).accessToken;
                    const refreshToken = token_service_1.default.generateToken({ id: generId, roles: "user" }).refreshToken;
                    mySql_1.connection.query(RefreshSQL, [usId, refreshToken], (err, result) => {
                        if (err) {
                            console.log(err);
                            return;
                        }
                        //console.log(result);
                    });
                    //await sendEmail(email, nickName);//////////////////////////////////
                    return res.cookie("refreshToken", refreshToken, {
                        httpOnly: true,
                        maxAge: 2592000000,
                        secure: true,
                        sameSite: 'none'
                    }).status(200).json({ userData: { usId }, "accessToken": accessToken });
                });
            }
            catch (error) {
                res.status(Number(process.env.NUMBER_500))
                    .json({ message: process.env.MESSAGE_500 });
            }
        });
    }
    login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const err = (0, validation_result_1.validationResult)(req);
                if (!err.isEmpty()) {
                    return res.status(Number(process.env.NUMBER_400))
                        .json({ message: err });
                }
                const { email, password } = req.body;
                mySql_1.connection.query(sqlEm, email, (err, results, fields) => {
                    if (err) {
                        return res.status(Number(process.env.NUMBER_500))
                            .json({ error: err });
                    }
                    if (results.length === 0) {
                        return res.status(Number(process.env.NUMBER_404))
                            .json({ message: { errors: [{ msg: process.env.MESSAGE_404_NOT_USER }] } });
                    }
                    const fromSqlPass = (results[0]["password"]);
                    const validPassword = bcrypt_1.default.compareSync(password, fromSqlPass);
                    if (!validPassword) {
                        return res.status(Number(process.env.NUMBER_400))
                            .json({ message: { errors: [{ msg: process.env.MESSAGE_400_BAD_PASSWORD }] } });
                    }
                    const generId = (0, uuid_1.v4)();
                    const accessToken = token_service_1.default.generateToken({ id: results[0]["id"], roles: "user" }).accessToken;
                    const refreshToken = token_service_1.default.generateToken({ id: results[0]["id"], id_4: generId, roles: "user" }).refreshToken;
                    const data = {
                        id: results[0]["id"],
                        nickName: results[0]["nickName"],
                        email: results[0]["email"],
                    };
                    mySql_1.connection.query(updadaRefreshSQL, [refreshToken, data.id], (err, result) => {
                        if (err)
                            return console.log(err);
                        console.log(`OK -- UPDATA refresh token`);
                    });
                    return res.cookie("refreshToken", refreshToken, {
                        httpOnly: true,
                        maxAge: 2592000000,
                        secure: true,
                        sameSite: 'none'
                    }).status(200).json({ userData: Object.assign({}, data), "accessToken": accessToken });
                });
            }
            catch (error) {
                res.status(Number(process.env.NUMBER_500))
                    .json({ message: { errors: [{ msg: process.env.MESSAGE_500 }] } });
            }
        });
    }
    logout(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const refreshToken = yield req.cookies["refreshToken"];
            const validRefreshToken = token_service_1.default.validateRefreshToken(refreshToken);
            if (!validRefreshToken)
                return console.log("no");
            mySql_1.connection.query(updadaRefreshSQL, [null, validRefreshToken["id"]], (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(`OK-- DELETE refresh token`);
            });
            res.clearCookie("refreshToken", {
                secure: true,
                sameSite: "none",
            }).status(200).json("Вы вышли");
        });
    }
    refresh(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const refreshToken = yield req.cookies["refreshToken"];
                if (!refreshToken)
                    return console.log("No refresh token");
                const validRefreshToken = token_service_1.default.validateRefreshToken(refreshToken);
                if (!validRefreshToken)
                    return console.log("no");
                mySql_1.connection.query(searchRefreshSQL, (err, result) => {
                    if (err)
                        return console.log(err);
                    if (result[0]["RefreshToken"] !== refreshToken)
                        return console.log("no");
                    if (result[0]["RefreshToken"] === refreshToken) {
                        /* const generId = v4();
                         const accessToken = TokenService.generateToken({ id: validRefreshToken["id"], roles: "user" }).accessToken;
                         const refreshToken = TokenService.generateToken({ id: generId, roles: "user" }).refreshToken;
                         connection.query(updadaRefreshSQL, [refreshToken, validRefreshToken["id"]],
                             (err, result) => {
                                 if (err) {
                                     console.log(err);
                                     return;
                                 }
                                 console.log(`OK -- UPDATA refresh token`);
 
                             });
                         console.log(validRefreshToken);*/
                        console.log("yes");
                        return res.status(200);
                    }
                });
                /*
                            
                            
                            const data = {
                                id: results[0]["id"],
                                nickName: results[0]["nickName"],
                                email: results[0]["email"],
                            }
                            connection.query(updadaRefreshSQL, [refreshToken, data.id],
                                (err, result) => {
                                    if (err) {
                                        console.log(err);
                                        return;
                                    }
                                    console.log(`OK -- UPDATA refresh token`);
                
                                });
                            return res.cookie("refreshToken", refreshToken, {
                                httpOnly: true,
                                maxAge: 2592000000,//30 days
                                secure: true,
                                sameSite: 'none'
                            }).status(200).json({ userData: { ...data }, "accessToken": accessToken });
                
                        });*/
            }
            catch (error) {
            }
        });
    }
    activate(activateLink) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (error) {
            }
        });
    }
}
exports.default = new useController();
