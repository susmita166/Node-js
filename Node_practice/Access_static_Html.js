const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname,'../public');
console.log(__dirname);
console.log(publicPath);


//Here Static keyword use for load Static Content 
//To access this we have to use  http://localhost:5000/about.html
app.use(express.static(publicPath));

// To remove Extenstion anme from url we use below syntax---------------------


// To access this we have to use  http://localhost:5000/about
app.get('/about',(_,resp) =>{
    resp.sendFile(`${publicPath}/about.html`);
});

//Except '/about' if you want to access other url it will show page not found.because here we write except /about if you get any url pass on to  page_not_found.html
app.get('*',(_,resp) =>{
    resp.sendFile(`${publicPath}/page_not_found.html`);
});

app.listen(5000);