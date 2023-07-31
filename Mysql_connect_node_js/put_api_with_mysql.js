const express = require('express');
const con = require("./mysql_configuration");
const app = express();



// If you want to update data through postman ---

app.use(express.json()); //This line use for convert the data into json

app.put("/:id",(req,resp)=>{
    const data = [req.body.block_name,req.params.id];
    console.log(data);
    con.query("UPDATE block SET block_name = ? WHERE id = ?", data, (error, result, fields)=>{
        if (error)  error;
        else {
            resp.send(result);
        }
    });
});

app.listen(5000);


