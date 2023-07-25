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

// To access this we have to use  // To access this we have to use  http://localhost:5000/check_request/?name=Susmita port port
app.get('/html_view',(req, res)=>{
    // console.log("Welcome to our page",req.query.name);
    var name  = req.query.name;
    // console.log(name);
    res.send(`  <input type="text" placeholder="Enter User Name" value="${name}" />
    <button>Click Me</button>
    <br>
    <br>
    <a href="/">Go to the Home Page</a> 
    <br>
    <br>
    <a href="/about">Go to the About Page Page</a>`);
});



app.listen(5000);