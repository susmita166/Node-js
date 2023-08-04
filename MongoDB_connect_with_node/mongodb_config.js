// const express = require('express');
// // const app = express();
// const mongoose = require("mongoose");
// const mongoDB = "mongodb://127.0.0.1:27017/Employee";


// const connectToMongo = async () => {
//     try {
//         mongoose.set("strictQuery", false);
//         mongoose.connect(mongoDB);
//         console.log("Connected to Mongo Successfully!");
//     } catch (error) {
//         console.log(error);
//     }
// };
// connectToMongo();


// // app.listen(5000, () =>{
// //     console.log("server is running on port : 5000");
// // })
// module.exports = connectToMongo;



const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/Employees", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));


module.exports = mongoose;

