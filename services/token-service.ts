import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { connection } from '../MySQL/mySql';
dotenv.config();
class TokenService {
    generateToken(payLoad: Object) {
        //@ts-ignore
        const accessToken = jwt.sign(payLoad, process.env.SECRET_KEY_ACCESS, { expiresIn: '50m' });
        //@ts-ignore
        const refreshToken = jwt.sign(payLoad, process.env.SECRET_KEY, { expiresIn: '10d' });
        return {
            accessToken,
            refreshToken
        }
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