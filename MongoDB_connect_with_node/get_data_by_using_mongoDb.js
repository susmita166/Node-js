const express = require('express');
const app = express();
const mongoose = require("mongoose");
const mongoDB = "mongodb://127.0.0.1:27017/school";

const connectToMongo = async () => {
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(mongoDB);
        console.log("Connected to Mongo Successfully!");
    } catch (error) {
        console.log(error);
    }
};
connectToMongo();

app.listen(5000, () =>{
    console.log("server is running on port : 5000");
})
