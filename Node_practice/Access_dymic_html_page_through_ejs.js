const express = require('express');
const app = express();
app.set('view engine','ejs');

const path = require('path');
const publicPath = path.join(__dirname,'../Views');


// It is use to  create dynamic web page

// To access this we have to use  http://localhost:5000/profile
app.get('/profile',(_,resp)=>{
    const user={
        name:'Susmita Nayak',
        email:'Nayaksusmita305@gmail.com',
        country:'USA',
        skills:['php','js','node js','java','c++']
    }
    resp.render('profile',{user})
});

app.listen(5000);