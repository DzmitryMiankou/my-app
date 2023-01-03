import { connection } from '../MySQL/mySql';
import { Request, Response, NextFunction } from 'express';
import TokenService from '../services/token-service';

const $searchIdNickNameSQL = "SELECT id, nickName FROM `createUsers`";
const $searchDialoguesSQL = "SELECT userDialogues.id, user_id1, nickName, user_id2 FROM `userDialogues` \
 INNER JOIN `createUsers` ON (userDialogues.user_id2 = createUsers.id) WHERE `user_id1` = ?;";
const $searchDialoguesUserSQL = "SELECT * FROM `userDialogues` WHERE `user_id1` LIKE ? AND `user_id2` LIKE ?;";
const $createDialoguesSQL = "INSERT INTO `userDialogues` VALUES (?, ?, ?, ?);";
const $createMessegesSQL = "INSERT INTO `userMessage` VALUES (?, ?, ?, ?, ?, ?);";

class useController {
    async usersList(req: Request, res: Response, next: NextFunction) {
        try {
            connection.query($searchIdNickNameSQL, (err, results, fields) => {
                return res.json(results);
            });
        } catch (error) {
            res.status(Number(process.env.NUMBER_500))
                .json({ message: process.env.MESSAGE_500 });
        }
    }


    async createDialogues(req: Request, res: Response, next: NextFunction) {
        try {
            const now = new Date().toJSON();
            const dateTime = new Date(now);
            const refreshToken = await req.cookies["refreshToken"];
            if (!refreshToken) return console.log("No refresh token");
            const validRefreshToken = TokenService.validateRefreshToken(refreshToken);
            if (!validRefreshToken) return console.log("noRefresh");
            const data = {
                id: validRefreshToken["id"],
                nickName: validRefreshToken["nickName"],
                email: validRefreshToken["email"],
            }
            if (data.id === req.body.id) return res.status(400).json({ messeges: "Вы пытаетесь создать диалог с самим собой" });
            connection.query($searchDialoguesUserSQL, [data.id, req.body.id], (err, results, fields) => {
                if (err) return console.log(err);
                if (results.length > 0) {
                    return res.status(400).json({ messeges: "Такой диалог уже существет" });
                } else {
                    connection.query($createDialoguesSQL, [null, data.id, req.body.id, dateTime], (err, results, fields) => {
                        if (err) return console.log(err);
                    });
                    return res.status(201).json({ messeges: "Диалог создан" });
                }
            });

        } catch (error) {
            console.log(error);
        }
    }


    async getDialogues(req: Request, res: Response, next: NextFunction) {
        try {
            const refreshToken = await req.cookies["refreshToken"];
            if (!refreshToken) return console.log("No refresh token");
            const validRefreshToken = TokenService.validateRefreshToken(refreshToken);
            if (!validRefreshToken) return console.log("noRefresh");
            const data = {
                id: validRefreshToken["id"],
                nickName: validRefreshToken["nickName"],
                email: validRefreshToken["email"],
            }
            connection.query($searchDialoguesSQL, data.id, (err, results, fields) => {
                if (err) return console.log(err);
                return res.status(200).json(results);
            });
        } catch (error) {
            console.log(error);
        }
    }


    async createMesseges(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(req.body.messegData[0]);
            const refreshToken = await req.cookies["refreshToken"];
            if (!refreshToken) return console.log("No refresh token");
            const validRefreshToken = TokenService.validateRefreshToken(refreshToken);
            if (!validRefreshToken) return console.log("noRefresh");
            const data = {
                id: validRefreshToken["id"],
                nickName: validRefreshToken["nickName"],
                email: validRefreshToken["email"],
            }
            const now = new Date().toJSON();
            const dateTime = new Date(now);
            connection.query($createMessegesSQL, [null, req.body.dialogId, data.id, req.body.userId, req.body.messegData[0], dateTime], (err, results, fields) => {
                if (err) return console.log(err);
                return res.status(200).json(results);
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export default new useController();