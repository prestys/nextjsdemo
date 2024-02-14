import dotenv from "dotenv";
dotenv.config();

import { connect as mongooseConnect } from "./models/database";
import express, { Express } from "express";
import cors from "cors";
import { router } from "./routes";
const app = express();

app.use(express.json())
app.use(cors());
app.use(router)
mongooseConnect();

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.listen(3000, () => console.log("Server is running!"));