"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const mysql_1 = __importDefault(require("mysql"));
exports.connection = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'пеу',
    database: 'explore',
    insecureAuth: true,
    port: 3306
});
exports.connection.connect((err) => {
    if (err) {
        console.log('Database connection error :' + err);
        return;
    }
});
