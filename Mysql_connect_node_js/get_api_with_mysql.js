const express = require('express');
const con = require("./mysql_configuration");
const app = express();

app.get("/",(req,resp)=>{
    con.query("select * from block where district_id = 3", (err, result)=>{
           if(err){
            resp.send("error");
           } else{
            resp.send(result);
           } 

    })
});

app.listen(5000);


