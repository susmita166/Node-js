const sqlConfig = require("./Bntyy_sql_configuration");
const express = require('express');
const app = express();
app.use(express.json());


app.post("/setPassword",(req,resp)=>{
        const {Password, confirmPassword} = req.body;
        getEmail = "nayaksusmita671@gmail.com"; //This emaiil is change accordingly to the email which is used for send otp 
        isExist(getEmail, function(count) {
            if(count == 1){
                if(Password == confirmPassword){
                    const data = [Password, getEmail];
                    sqlConfig.query("UPDATE userotp SET Password = ? WHERE Email = ?", data, (error, result, fields)=>{
                        if (error)  error;
                        else {
                            resp.json({message: 'congratulations! Your Password is update sucessfully'});
                        }
                    });
                }
                if(Password != confirmPassword){
                    resp.json({message: 'Sorry! Your Password and Confirm Password is not matched'});
                }
            }
        });
});


function isExist(getEmail, callback) 
{
      const query = 'SELECT COUNT(*)  AS emailCount FROM userotp WHERE Email = ?';
      sqlConfig.query(query, [getEmail], function(err, results) {
        if (err) throw err;
        const count = results[0].emailCount;
        callback(count);
      });
}

app.listen(5000);