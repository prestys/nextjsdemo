import { User, IUser } from "../../models/User";
import { Request, Response } from "express";
import {comparePasswords, hashPassword} from "../../util/PasswordHelper"
import jwt from "jsonwebtoken";
import isAuthenticated from "../../util/isAuthenticated";

const UserController = {
    create: async (req: Request, res: Response): Promise<void> => {
        try {
            const { email, password } = req.body;
            const hashedPassword = await hashPassword(password);
            const user = await User.create<IUser>({
                email,
                password: hashedPassword
            });
            console.log("User created!");
            res.status(200).json(user);
        } catch (error: any){
            res.status(500).json({ error: error.message });
        }
    },
    login: async (req: Request, res: Response) => {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send({code: 400, message: "Bad Request"});
        }

        const user: IUser | null = await User.findOne({ email });

        if (!user)
            return res.status(401).send({code: 401, message: "Incorrect username or password"});

        if (!await comparePasswords(password, user?.password)) {
            return res.status(401).json({code: 401, message: "Incorrect username or password"});
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SUPER_SECRET);
        res.cookie("jwt", token, { httpOnly: true });
        res.status(200).json({code: 201, message: "Authenticated"})
    },
    verify: async (req: Request, res: Response) => {
        try {
            const userAuthenticated = await isAuthenticated(req.cookies.jwt);
            res.status(200).json({ userAuthenticated });
        } catch (error) {
            console.error("Error during verification:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
};

export { UserController };