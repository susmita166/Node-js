const express = require('express');
const con = require("./mysql_configuration");
const app = express();

// app.post("/",(req,resp)=>{
//     const data = {block_name:"Phuljhari", district_id:3};
//     con.query("INSERT INTO block SET ?", data, (error, result, fields)=>{
//         if (error) throw error;
//         else {
//             resp.send(result);
//         }
//     });
// });




// If you want to insert data through postman ---

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
