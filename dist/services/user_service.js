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
const mySql_1 = __importDefault(require("../MySQL/mySql"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const postSQL = "INSERT INTO `createUsers` VALUES (?, ?, ?, ?);";
const sqlEm = "SELECT * FROM `createUsers` WHERE `email` LIKE (?)";
const generateAccessToken = (id, roles = 'user') => {
    const payLoad = {
        id,
        roles,
    };
    return jsonwebtoken_1.default.sign(payLoad, "KONSTANTY_KALINOWSKI", { expiresIn: '24h' });
};
class UserService {
    registration(id, nickName, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const dadeUser = [id, nickName, email, password];
            mySql_1.default.query(postSQL, dadeUser, (err) => {
                if (err) {
                    throw new Error(`Такой пользователь сущетсвует ${err.message}`);
                }
            });
        });
    }
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            mySql_1.default.query(sqlEm, email, (err, results, fields) => {
                if (err) {
                    throw new Error("ошибка");
                }
                if (results.length === 0) {
                    throw new Error("На эту почто зарезервирован пользователь");
                }
                const fromSqlPass = (results[0]["password"]);
                const validPassword = bcrypt_1.default.compareSync(password, fromSqlPass);
                if (!validPassword) {
                    throw new Error("Пароль не совпал");
                }
                const tokin = generateAccessToken(results[0]["id"], "user");
                return tokin;
            });
        });
    }
}
exports.default = new UserService();
