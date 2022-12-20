import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export function AuthMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies["accessToken"];
    if (token) {
        //@ts-ignore
        jwt.verify(token, process.env.SECRET_KEY_ACCESS, (err: any, decodedToken: any) => {
            if (err) {
                console.log(err.message);
                return res.redirect(307, 'http://localhost:3000/regist');
            } else {
                console.log(decodedToken);
                next();
            }
        });
    } else {
        return res.redirect(307, 'http://localhost:3000/regist');
    }
};