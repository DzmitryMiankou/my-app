"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function AuthMiddleware(req, res, next) {
    const token = req.cookies["refreshToken"];
    if (token) {
        //@ts-ignore
        jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY, (err, decodedToken) => {
            if (err) {
                return res.redirect(307, 'http://localhost:3000/regist');
            }
            else {
                next();
            }
        });
    }
    else {
        return res.redirect(307, 'http://localhost:3000/regist');
    }
}
exports.AuthMiddleware = AuthMiddleware;
;
