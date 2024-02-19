import jwt, { JsonWebTokenError, JwtPayload } from "jsonwebtoken"

export default async function isAuthenticated(token: string): Promise<boolean> {
    try {
        jwt.verify(token, process.env.JWT_SUPER_SECRET);
        return true;
    } catch (JsonWebTokenError) {
        return false;
    }
}