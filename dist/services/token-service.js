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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const mySql_1 = require("../MySQL/mySql");
dotenv_1.default.config();
class TokenService {
    generateToken(payLoad) {
        //@ts-ignore
        const accessToken = jsonwebtoken_1.default.sign(payLoad, process.env.SECRET_KEY_ACCESS, { expiresIn: '30m' });
        //@ts-ignore
        const refreshToken = jsonwebtoken_1.default.sign(payLoad, process.env.SECRET_KEY, { expiresIn: '30d' });
        return {
            accessToken,
            refreshToken
        };
    }
    saveToken(email, refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const sqlEm = "SELECT * FROM `createUsers` WHERE `email` LIKE (?)";
            const tokenData = mySql_1.connection.query(sqlEm, email, (err, results, fields) => {
                if (err) {
                    return { er: "екекек" };
                }
                return { jk: "ok" };
            });
            return tokenData;
        });
    }
}
exports.default = new TokenService();
