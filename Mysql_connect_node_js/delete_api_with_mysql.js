const express = require('express');
const con = require("./mysql_configuration");
const app = express();



// If you want to delete data through postman ---


app.use(express.json()); //This line use for convert the data into json
app.delete("/delete_record/:id",(req,resp)=>{
    
    const data = [req.params.id];
    console.log(data);
    con.query("DELETE FROM block WHERE id = ?", data, (error, result, fields)=>{
        if (error)  error;
        else {
            resp.send(result);
        }
    });
});

app.listen(5000);


