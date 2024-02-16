import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import {IUser, User} from "../models/User";

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.jwt;

    if (!token) {
        req.user = null;
        res.send("no");
    } else {
        try {
            const decoded: any = jwt.verify(token, process.env.JWT_SUPER_SECRET);
            console.log(decoded);
            const user: IUser | null = await User.findById(decoded.id);
            if (!user) res.send("500 something bad happened in verifyToken guyz")
            req.user = user;
            next();
        } catch (err) {
            res.send("no");
        }
    }
};
