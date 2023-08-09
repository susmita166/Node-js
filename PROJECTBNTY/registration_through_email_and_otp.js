const sqlConfig = require("./Bntyy_sql_configuration");
const express = require('express');
const app = express();
app.use(express.json());

app.post("/",(req,resp)=>{
    const { email, otp } = req.body;
    console.log(email);
    console.log(otp);

    

    

});

app.listen(5000);


