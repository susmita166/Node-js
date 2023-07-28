const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname,'../public');


// This is a age filter Example
const reqFilter = (req, resp, next) => {
    console.log("hello");
    if(!req.query.age){
        resp.send(`<h2>Please provide your age</h2>`);
    } 
    else if(req.query.age < 18){
        resp.send(`<h2>Sorry, Your age is below 18 you can access Our site</h2>`);
    }
    else{
        next();
    }
}

//In this process, middleware applicable for all the routes
app.use(reqFilter);

// To access this we have to use  http://localhost:5000/about
app.get('/about',(req, res)=>{
    res.send(`<h2>Hello,this is a about page</h2>`);
});

app.get('/Home',(req, res)=>{
    res.send(`<h2>Hello,this is a Home page</h2>`);
});




// //Except '/about' if you want to access other url it will show page not found.because here we write except /about if you get any url pass on to  page_not_found.html
// app.get('*',(_,resp) =>{
//     resp.send(`<h1 style="color:red;">OOps,Page not Found</h1>`);
// });

app.listen(5000);

