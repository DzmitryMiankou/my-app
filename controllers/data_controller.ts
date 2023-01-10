import { connection } from '../MySQL/mySql';
import { Request, Response, NextFunction } from 'express';
import TokenService from '../services/token-service';

const $searchIdNickNameSQL = "SELECT id, nickName FROM `users`";
const $searchDialoguesUserSQL = "SELECT * FROM `userDialogues` WHERE `user_id1` LIKE ? && `user_id2` LIKE ? \
|| `user_id1` LIKE ? && `user_id2` LIKE ?;";
//const $searchDialoguesSQL = `SELECT userDialogues.id, user_id1, nickName, user_id2 FROM userDialogues \
//JOIN createUsers ON (userDialogues.user_id1 = createUsers.id) WHERE user_id1 = ? || user_id2  = ?;`;
const $searchMessegesSQL = "SELECT * FROM `userMessage` WHERE `id_d` = ?;";
const $createDialoguesSQL = "INSERT INTO `userDialogues` VALUES (?, ?, ?, ?);";
const $createMessegesSQL = "INSERT INTO `userMessage` VALUES (?, ?, ?, ?, ?, ?);";

const $searchDialoguesSQL =
    `SELECT userDialogues.id, user_id1, nickName, user_id2
     FROM userDialogues 
     JOIN users
     ON users.id =
     CASE
     WHEN user_id1 = ?
     THEN userDialogues.user_id2 
     ELSE userDialogues.user_id1 
     END
     WHERE user_id1 = ? || user_id2  = ?;`;

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
            connection.query($searchDialoguesUserSQL, [data.id, req.body.id, req.body.id, data.id], (err, results, fields) => {
                if (err) return console.log(err);
                if (results.length > 0) {
                    return res.status(400).json({ messeges: "Такой диалог уже существет" });
                } else {
                    connection.query($createDialoguesSQL, [null, data.id, req.body.id, dateTime], (err, results, fields) => {
                        if (err) return console.log(err);
                    })
                }
                return res.status(201).json({ messeges: "Диалог создан" });

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

            connection.query($searchDialoguesSQL, [data.id, data.id, data.id], (err, results, fields) => {
                if (err) return console.log(err);
                return res.status(200).json(results);
            });
        } catch (error) {
            console.log(error);
        }
    }


    async createMesseges(req: Request, res: Response, next: NextFunction) {
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


    async searchMesseges(req: Request, res: Response, next: NextFunction) {
        try {
            const idDialogues = req.headers.dialoguesid;
            connection.query($searchMessegesSQL, idDialogues, (err, results, fields) => {
                if (err) return console.log(err);
                //console.log(results);
                return res.status(200).json(results);
            });
        } catch (error) {
            console.log(error);
        }
    }


    async key(req: Request, res: Response, next: NextFunction) {
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
            return res.status(200).json(data);
        } catch (error) {
            console.log(error);
        }
    }
}

export default new useController();