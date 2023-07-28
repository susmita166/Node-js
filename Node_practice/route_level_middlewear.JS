// const express = require('express');
// const app = express();
// const path = require('path');

// const publicPath = path.join(__dirname,'../public');


// // This is a age filter Example
// const reqFilter = (req, resp, next) => {
//     console.log("hello");
//     if(!req.query.age){
//         resp.send(`<h2>Please provide your age</h2>`);
//     } 
//     else if(req.query.age < 18){
//         resp.send(`<h2>Sorry, Your age is below 18 you can access Our site</h2>`);
//     }
//     else{
//         next();
//     }
// }

// //In route level middlewear, we have to choose the in which routes we apply middlewear

// // To access this we have to use  http://localhost:5000/about
// app.get('/about',(req, res)=>{
//     res.send(`<h2>Hello,this is a about page</h2>`);
// });

// app.get('/Home', reqFilter,(req, res)=>{
//     res.send(`<h2>Hello,this is a Home page</h2>`);
// });

//app.listen(5000);








//Ok, this is the one way to add route level middle wear.but in case if you are working with 50+routes. this will't be a good approach.so to overcome this issue we use below process---



const express = require('express');
const app = express();
const path = require('path');
const route = express.Router();

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
route.use(reqFilter);

// To access this we have to use  http://localhost:5000/about
app.get('/about',(req, res)=>{
    res.send(`<h2>Hello,this is a about page</h2>`);
});

app.get('/profile',(req, res)=>{
    res.send(`<h2>Hello,this is a profile page</h2>`);
});

app.get('/contact',(req, res)=>{
    res.send(`<h2>Hello,this is a contact page</h2>`);
});

//Now middleware apply in help routes and Home routes
route.get('/help',(req, res)=>{
    res.send(`<h2>Hello,this is a help page</h2>`);
});

route.get('/Home', (req, res)=>{
    res.send(`<h2>Hello,this is a Home page</h2>`);
});


app.use('/', route);



app.listen(5000);

