import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export function AuthMiddleware(req: Request, res: Response, next: NextFunction) {
    const accessToken = req.headers.authentication;
    if (accessToken) {
        //@ts-ignore
        jwt.verify(accessToken, process.env.SECRET_KEY_ACCESS, (err: any, decodedToken: any) => {
            if (err) {
                return res.redirect(401, 'http://localhost:3000/regist');
            } else {
                next();
            }
        });
    } else {
        return res.redirect(401, 'http://localhost:3000/regist');
    }
};