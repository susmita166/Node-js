const express = require('express');
const con = require("./mysql_configuration");
const app = express();
app.use(express.json());

app.post("/",(req,resp)=>{
    const data = req.body;
    console.log(data);
    con.query("INSERT INTO block SET ?", data, (error, result, fields)=>{
        if (error)  error;
        else {
            resp.send(result);
        }
    });
});

app.listen(5000);
