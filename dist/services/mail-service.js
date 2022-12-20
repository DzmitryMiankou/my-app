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
exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function sendEmail(to, link) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const transporter = nodemailer_1.default.createTransport({
            host: (_a = process.env.SMTP_HOST) !== null && _a !== void 0 ? _a : '',
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_AUTH,
                pass: process.env.SMTP_PASSWORD,
            },
        });
        try {
            yield transporter.sendMail({
                from: process.env.SMTP_AUTH,
                to,
                subject: "http://localhost:5000",
                text: '',
                html: `<div><h1>Welcome</h1></div>`
            });
        }
        catch (error) {
        }
    });
}
exports.sendEmail = sendEmail;
