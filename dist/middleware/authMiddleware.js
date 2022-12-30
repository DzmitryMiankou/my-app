"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function AuthMiddleware(req, res, next) {
    const accessToken = req.headers.authentication;
    if (accessToken) {
        //@ts-ignore
        jsonwebtoken_1.default.verify(accessToken, process.env.SECRET_KEY_ACCESS, (err, decodedToken) => {
            if (err) {
                return res.redirect(401, 'http://localhost:3000/regist');
            }
            else {
                next();
            }
        });
    }
    else {
        return res.redirect(401, 'http://localhost:3000/regist');
    }
}
exports.AuthMiddleware = AuthMiddleware;
;
