import { connection } from '../MySQL/mySql';
import { Request, Response, NextFunction } from 'express';
import TokenService from '../services/token-service';

const $searchIdNickNameSQL = "SELECT id, nickName FROM `createUsers`";
const $createDialoguesSQL = "INSERT INTO `userDialogues` VALUES (?, ?, ?, ?);";
const $searchDialoguesSQL = "SELECT userDialogues.id, user_id1, nickName, user_id2 FROM `userDialogues` \
 INNER JOIN `createUsers` ON (userDialogues.user_id2 = createUsers.id) WHERE `user_id1` = ?;";


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
            connection.query($createDialoguesSQL, [null, data.id, req.body.id, dateTime], (err, results, fields) => {
                if (err) return console.log(err);

            });

            return res.status(201).json({ messeges: "Good" });
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
}

export default new useController();