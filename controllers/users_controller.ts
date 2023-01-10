import dotenv from 'dotenv';
dotenv.config();
import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator/src/validation-result';
import { connection } from '../MySQL/mySql';
import TokenService from '../services/token-service';
import { v4 as uuidv4, v4 } from 'uuid';
import { sendEmail } from '../services/mail-service';


const $searchEmailSQL = "SELECT * FROM `users` WHERE `email` LIKE (?);";
const $searchRefreshSQL = "SELECT * FROM `user_refresh_token` WHERE `us_id` LIKE (?);"
const $createUsersSQL = "INSERT INTO `users` VALUES (?, ?, ?, ?, ?);";
const $createRefreshSQL = "INSERT INTO `user_refresh_token` VALUES (?, ?);";
const $updadaRefreshSQL = "UPDATE `user_refresh_token` SET `RefreshToken` = ?  WHERE  `us_id` = ?;";



class useController {

    async auth(req: Request, res: Response, next: NextFunction) {
        try {
            const err = validationResult(req);
            if (!err.isEmpty()) {
                return res.status(Number(process.env.NUMBER_400)).json({ message: err });
            }
            const { id, nickName, email, password } = req.body;
            const hashPassword = await bcrypt.hash(password, 3);
            const generId = v4();
            connection.query($createUsersSQL, [id, nickName, email, hashPassword, generId],
                (err, result) => {
                    if (err) {
                        res.status(Number(process.env.NUMBER_400))
                            .json({ message: { errors: [{ msg: process.env.MESSAGE_400_BAD_EMAIL }] } });
                    }
                    const usId = result.insertId;
                    const accessToken = TokenService.generateToken({ id: usId, roles: "user" }).accessToken;
                    const refreshToken = TokenService.generateToken({ id: generId, roles: "user" }).refreshToken;
                    connection.query($createRefreshSQL, [usId, refreshToken],
                        (err, result) => {
                            if (err) {
                                console.log(err);
                                return;
                            }
                            //console.log(result);

                        });

                    //await sendEmail(email, nickName);//////////////////////////////////
                    return res.cookie("refreshToken", refreshToken, {
                        httpOnly: true,
                        maxAge: 1296000000,//15 days
                        secure: true,
                        sameSite: 'none'
                    }).status(200).json({ userData: { usId }, "accessToken": accessToken });

                });

        } catch (error) {
            res.status(Number(process.env.NUMBER_500))
                .json({ message: process.env.MESSAGE_500 });
        }
    }


    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const err = validationResult(req);
            if (!err.isEmpty()) {
                return res.status(Number(process.env.NUMBER_400))
                    .json({ message: err });
            }

            const { email, password } = req.body;
            connection.query($searchEmailSQL, email, (err, results, fields) => {
                if (err) {
                    return res.status(Number(process.env.NUMBER_500))
                        .json({ error: err });
                }
                if (results.length === 0) {
                    return res.status(Number(process.env.NUMBER_404))
                        .json({ message: { errors: [{ msg: process.env.MESSAGE_404_NOT_USER }] } });
                }
                const fromSqlPass = (results[0]["password"]);
                const validPassword = bcrypt.compareSync(password, fromSqlPass);
                if (!validPassword) {
                    return res.status(Number(process.env.NUMBER_400))
                        .json({ message: { errors: [{ msg: process.env.MESSAGE_400_BAD_PASSWORD }] } });
                }
                const generId = v4();
                const data = {
                    id: results[0]["id"],
                    nickName: results[0]["nickName"],
                    email: results[0]["email"],
                }
                const accessToken = TokenService.generateToken({ id: data.id, roles: "user" }).accessToken;
                const refreshToken = TokenService.generateToken({ id: data.id, nickName: data.nickName, email: data.email, id_4: generId, roles: "user" }).refreshToken;
                connection.query($updadaRefreshSQL, [refreshToken, data.id],
                    (err, result) => {
                        if (err) return console.log(err);
                        console.log(`OK -- UPDATA refresh token`);
                    });
                return res.cookie("refreshToken", refreshToken, {
                    httpOnly: true,
                    maxAge: 1296000000,//15 days
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
        try {
            const refreshToken = await req.cookies["refreshToken"];
            const validRefreshToken = TokenService.validateRefreshToken(refreshToken);
            if (!validRefreshToken) return console.log("noLogout");
            connection.query($updadaRefreshSQL, [null, validRefreshToken["id"]],
                (err, result) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    console.log(`OK-- DELETE refresh token`);
                });
            res.clearCookie("refreshToken", {
                secure: true,
                sameSite: "none",
            }).status(200).json("Вы вышли");
        } catch (error) {
            console.log(error)
        }
    }


    async refresh(req: Request, res: Response, next: NextFunction) {
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
            const generId = v4();
            connection.query($searchRefreshSQL, [data.id],
                (err, result) => {
                    if (err) return console.log(err);
                    if (result[0]["RefreshToken"] !== refreshToken) return console.log("noDataBase");
                    if (result[0]["RefreshToken"] === refreshToken) {
                        const accessToken = TokenService.generateToken({ id: data.id, roles: "user" }).accessToken;
                        const refreshToken = TokenService.generateToken({ id: data.id, nickName: data.nickName, email: data.email, id_4: generId, roles: "user" }).refreshToken;
                        connection.query($updadaRefreshSQL, [refreshToken, data.id],
                            (err, result) => {
                                if (err) {
                                    console.log(err);
                                    return;
                                }
                                console.log(`OK -- UPDATA refresh token`);

                            });
                        return res.cookie("refreshToken", refreshToken, {
                            httpOnly: true,
                            maxAge: 1296000000,//15 days
                            secure: true,
                            sameSite: 'none'
                        }).status(200).json({ userData: { ...data }, "accessToken": accessToken });
                    }
                });
        } catch (error) {
            console.log(error);
        }
    }

    async activate(activateLink: string) {
        try {

        } catch (error) {

        }
    }
}


export default new useController();
