import dotenv from 'dotenv';
dotenv.config();
import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator/src/validation-result';
import { connection } from '../MySQL/mySql';
import TokenService from '../services/token-service';
import { v4 as uuidv4, v4 } from 'uuid';
import { sendEmail } from '../services/mail-service';

const sqlEm = "SELECT * FROM `createUsers` WHERE `email` LIKE (?)";
const postSQL = "INSERT INTO `createUsers` VALUES (?, ?, ?, ?, ?);";
const RefreshSQL = "INSERT INTO `userRefreshToken` VALUES (?, ?);";
const updadaRefreshSQL = "UPDATE `userRefreshToken` SET `RefreshToken` = ?  WHERE  `us_id` = ?; "



class useController {
    async auth(req: Request, res: Response, next: NextFunction) {
        try {
            const err = validationResult(req);
            if (!err.isEmpty()) {
                return res.status(Number(process.env.NUMBER_400)).json({ message: err })
            }
            const { id, nickName, email, password } = req.body;
            const hashPassword = await bcrypt.hash(password, 3);
            const generId = v4();
            connection.query(postSQL, [id, nickName, email, hashPassword, generId],
                (err, result) => {
                    if (err) {
                        res.status(Number(process.env.NUMBER_400))
                            .json({ message: { errors: [{ msg: process.env.MESSAGE_400_BAD_EMAIL }] } })
                    }
                    const usId = result.insertId;
                    const accessToken = TokenService.generateToken({ id: usId, roles: "user" }).accessToken;
                    const refreshToken = TokenService.generateToken({ id: generId, roles: "user" }).refreshToken;
                    connection.query(RefreshSQL, [usId, refreshToken],
                        (err, result) => {
                            if (err) {
                                console.log(err);
                                return;
                            }
                            console.log(result);

                        });

                    //await sendEmail(email, nickName);//////////////////////////////////
                    return res.cookie("refreshToken", refreshToken, {
                        httpOnly: true,
                        maxAge: 2592000000,//30 dayss
                        secure: true,
                        sameSite: 'none'
                    }).status(200).json({ userData: { usId }, token: { "accessToken": accessToken, "refreshToken": refreshToken } });

                });

        } catch (error) {
            res.status(Number(process.env.NUMBER_500))
                .json({ message: process.env.MESSAGE_500 })
        }
    }


    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const err = validationResult(req);
            if (!err.isEmpty()) {
                return res.status(Number(process.env.NUMBER_400))
                    .json({ message: err })
            }

            const { email, password } = req.body;
            connection.query(sqlEm, email, (err, results, fields) => {
                if (err) {
                    return res.status(Number(process.env.NUMBER_500))
                        .json({ error: err });
                }
                if (results.length === 0) {
                    return res.status(Number(process.env.NUMBER_404))
                        .json({ message: { errors: [{ msg: process.env.MESSAGE_404_NOT_USER }] } });
                }
                const fromSqlPass = (results[0]["password"]);
                const validPassword = bcrypt.compareSync(password, fromSqlPass)
                if (!validPassword) {
                    return res.status(Number(process.env.NUMBER_400))
                        .json({ message: { errors: [{ msg: process.env.MESSAGE_400_BAD_PASSWORD }] } });
                }
                const generId = v4();
                const accessToken = TokenService.generateToken({ id: results[0]["id"], roles: "user" }).accessToken;
                const refreshToken = TokenService.generateToken({ id: generId, roles: "user" }).refreshToken;
                const data = {
                    id: results[0]["id"],
                    nickName: results[0]["nickName"],
                    email: results[0]["email"],
                }
                connection.query(updadaRefreshSQL, [refreshToken, data.id],
                    (err, result) => {
                        if (err) {
                            console.log(err);
                            return;
                        }
                        console.log(`ok`);

                    });
                return res.cookie("refreshToken", refreshToken, {
                    httpOnly: true,
                    maxAge: 2592000000,//30 days
                    secure: true,
                    sameSite: 'none'
                }).status(200).json({ userData: { ...data }, "accessToken": accessToken });

            });
        } catch (error) {
            res.status(Number(process.env.NUMBER_500))
                .json({ message: { errors: [{ msg: process.env.MESSAGE_500 }] } });
        }
    }

    async logout(req: Request, res: Response, next: NextFunction) {
        res.clearCookie("refreshToken", {
            secure: true,
            sameSite: "none",
        }).status(200).json("Вы вышли");
    }

    async activate(activateLink: string) {
        try {

        } catch (error) {

        }
    }
}


export default new useController();
