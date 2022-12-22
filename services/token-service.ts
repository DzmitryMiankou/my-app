import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { connection } from '../MySQL/mySql';
dotenv.config();
class TokenService {
    generateToken(payLoad: Object) {
        //@ts-ignore
        const accessToken = jwt.sign(payLoad, process.env.SECRET_KEY_ACCESS, { expiresIn: '30m' });
        //@ts-ignore
        const refreshToken = jwt.sign(payLoad, process.env.SECRET_KEY, { expiresIn: '30d' });
        return {
            accessToken,
            refreshToken
        }
    }
    async saveToken(email: string, refreshToken: string) {
        const sqlEm = "SELECT * FROM `createUsers` WHERE `email` LIKE (?)";
        const tokenData = connection.query(sqlEm, email, (err, results, fields) => {
            if (err) {
                return { er: "екекек" }
            }
            return { jk: "ok" };
        })
        return tokenData;
    }


    validateAccessToken(token: string) {
        try {
            //@ts-ignore
            const userToken = jwt.verify(token, process.env.SECRET_KEY_ACCESS);
            return userToken;
        } catch (error) {
            return null;
        }
    }


    validateRefreshToken(token: string) {
        try {
            //@ts-ignore
            const userToken = jwt.verify(token, process.env.SECRET_KEY);
            return userToken;
        } catch (error) {
            return null;
        }
    }
}


export default new TokenService();    