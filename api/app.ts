import { connect as mongooseConnect } from "./models/database"
import express from "express";
import * as dotenv from "dotenv";
const app = express();

dotenv.config()

app.listen(3000, () => console.log("Server is running!"))

mongooseConnect();

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});