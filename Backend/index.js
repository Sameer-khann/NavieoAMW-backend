const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(
    "mongodb+srv://NavieoAMW:kcOZ9NCR7msoUT4G@cluster0.jv9uspn.mongodb.net/?retryWrites=true&w=majority"
)
    .then(
        () => {
            console.log("MongoDB Connected");
        }
    )
    .catch(
        () => {
            console.log("MongoDB Connection Failed");
        }
    )

const app = express()

app.get(
    "/",
    (req, res) => {
        res.send("Hello")
    }
)

app.listen(
    5000,
    () => console.log('listening on backend port')
)