import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.jwt;

    if (!token) {
        req.cookies.user = null;
        next();
    } else {
        try {
            const decoded: any = jwt.verify(token, process.env.JWT_SUPER_SECRET);
            req.cookies.user = decoded;
            next();
        } catch (err) {
            req.cookies.user = null;
            next();
        }
    }
};
