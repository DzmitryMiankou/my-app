"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const express_validator_1 = require("express-validator");
const authMiddleware_1 = require("../middleware/authMiddleware");
const users_controller_1 = __importDefault(require("../controllers/users_controller"));
const data_controller_1 = __importDefault(require("../controllers/data_controller"));
router.post('/auth', [
    (0, express_validator_1.check)('name', 'Имя не может быть пустым').isEmpty(),
    (0, express_validator_1.check)('password', 'Длинна от 6 и до 13').isLength({ min: 6, max: 13 }),
    (0, express_validator_1.check)('email', 'Некоректный адрес почты').normalizeEmail().isEmail(),
], users_controller_1.default.auth);
router.post('/login', [
    (0, express_validator_1.check)('password', 'Длинна от 6 и до 13').isLength({ min: 6, max: 13 }),
    (0, express_validator_1.check)('email', 'Некоректный адрес почты').normalizeEmail().isEmail(),
], users_controller_1.default.login);
router.post('/logout', users_controller_1.default.logout);
router.post('/activate/:link', users_controller_1.default.activate);
router.get('/refresh', users_controller_1.default.refresh);
router.get('/users', authMiddleware_1.AuthMiddleware, data_controller_1.default.usersList);
exports.default = router;
