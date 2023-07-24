const express = require('express');
const app = express();


// To access this we have to use  http://localhost:5000/ port
app.get('',(req, res)=>{
    res.send("Hello,this is a home page");
});

// To access this we have to use  http://localhost:5000/about port
app.get('/about',(req, res)=>{
    res.send("Hello,this is a about page");
});


// To access this we have to use  http://localhost:5000/check_request/?name=Susmita port
app.get('/check_request',(req, res)=>{
    console.log("Welcome to our page",req.query.name);
    var name  = req.query.name;
    console.log(name);
    res.send("Welcome to our page "+ name);
});



app.listen(5000);