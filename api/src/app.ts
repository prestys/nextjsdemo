import dotenv from "dotenv";
dotenv.config();

import { connect as mongooseConnect } from "./models/database";
import express, {Express, Request, Response} from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import { router } from "./routes";
import {verifyToken} from "./middleware/TokenVerifier";
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(verifyToken);
app.use(cors());
app.use(router);
mongooseConnect();

app.get('/login', (req: Request, res: Response) => {
    if (req.cookies.user) {
        res.send(`Welcome, ${(req.cookies.user as any).username}!`);
        console.log(res);
    } else {
        res.send('Please sign in.');
    }
    res.send('Hello, Express!');
});

app.listen(3000, () => console.log("Server is running!"));