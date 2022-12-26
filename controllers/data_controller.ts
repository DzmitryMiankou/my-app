import { connection } from '../MySQL/mySql';
const sqls = "SELECT id, nickName FROM `createUsers`";
import { Request, Response, NextFunction } from 'express';
class useController {
    async usersList(req: Request, res: Response, next: NextFunction) {
        const refreshheaders = req.headers.authorisation;
        try {
            connection.query(sqls, (err, results, fields) => {
                return res.json(results);
            });
        } catch (error) {
            res.status(Number(process.env.NUMBER_500))
                .json({ message: process.env.MESSAGE_500 })
        }
    }
}
export default new useController();