const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname,'../public');
console.log(__dirname);
console.log(publicPath);


//Here Static use for load Static Content 
app.use(express.static(publicPath));

app.listen(5000);