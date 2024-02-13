import * as dotenv from "dotenv";
dotenv.config();

import { connect as mongooseConnect } from "./models/database"
import express, { Express } from "express";
const app = express();

app.listen(3000, () => console.log("Server is running!"))

mongooseConnect();

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});