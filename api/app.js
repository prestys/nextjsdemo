const express = require('express');
const app = express();
const mongoose = require ("mongoose");

require("dotenv").config();

mongoose(
    process.env.MONGODB_URL
    {
        useNew
    }
)

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
