import { Router } from "express";
const router = Router();
import users_controller from "../controllers/users_controller";
import { check } from "express-validator";
import { AuthMiddleware } from "../middleware/authMiddleware";

router.get('/users', AuthMiddleware, users_controller.usersList);
router.post('/auth', [
    check('name', 'Имя не может быть пустым').isEmpty(),
    check('password', 'Длинна от 6 и до 13').isLength({ min: 6, max: 13 }),
    check('email', 'Некоректный адрес почты').normalizeEmail().isEmail(),
], users_controller.auth);
router.post('/login', [
    check('password', 'Длинна от 6 и до 13').isLength({ min: 6, max: 13 }),
    check('email', 'Некоректный адрес почты').normalizeEmail().isEmail(),
], users_controller.login);
router.post('/logout', users_controller.logout);
export default router;
