const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname,'../public');
console.log(__dirname);
console.log(publicPath);

app.use(express.static(publicPath));
// app.get('/check_request',(req, res)=>{
//     console.log("Welcome to our page",req.query.name);
//     var name  = req.query.name;
//     console.log(name);
//     res.send("Welcome to our page.............. "+ name);
// });
app.listen(5000);