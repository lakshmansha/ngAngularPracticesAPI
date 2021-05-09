const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParcser = require("body-parser");
const restrictOrigin = require("./middlewares/restrictOrigin");
const LoggerRoute = require('./routes/logger.route');

const app = express();

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log("Database connection Success!");
    })
    .catch((err) => {
        console.error("Mongo Connection Error", err);
    });


const PORT = process.env.PORT || 5000;

// app.use(restrictOrigin);
app.use(express.json());

app.post("/ping", (req, res) => {
    return res.send({
        status: "Server is up and running",
    });
});

// Set Routes

LoggerRoute.SetRoutes(app);


app.listen(PORT, () => {
    console.log("Server started listening on port : ", PORT);
});

