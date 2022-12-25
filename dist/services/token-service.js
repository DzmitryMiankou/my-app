"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
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
    /* async saveToken(email: string, refreshToken: string) {
         const sqlEm = "SELECT * FROM `createUsers` WHERE `email` LIKE (?)";
         const tokenData = connection.query(sqlEm, email, (err, results, fields) => {
             if (err) {
                 return { er: "екекек" }
             }
             return { jk: "ok" };
         })
         return tokenData;
     }*/
    validateAccessToken(token) {
        try {
            //@ts-ignore
            const userToken = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY_ACCESS);
            return userToken;
        }
        catch (error) {
            return null;
        }
    }
    validateRefreshToken(token) {
        try {
            //@ts-ignore
            const userToken = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
            return userToken;
        }
        catch (error) {
            return null;
        }
    }
}
exports.default = new TokenService();
