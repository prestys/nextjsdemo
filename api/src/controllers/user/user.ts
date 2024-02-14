import { IUser, User } from "../../models/User";
import { Request, Response } from "express";
import { hashPassword } from "../../util/PasswordHelper"

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
    }
};

export { UserController };