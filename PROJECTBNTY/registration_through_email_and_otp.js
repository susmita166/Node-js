const sqlConfig = require("./Bntyy_sql_configuration");
const express = require('express');
const app = express();
app.use(express.json());

app.post("/",(req,resp)=>{
    const { email, otp } = req.body;
    let query = `SELECT Otp,expiredTime,currentTime FROM userotp WHERE Email = ?;`;
        sqlConfig.query(query, [email], (error, results) => {
            if (results) 
            {
                console.log(results);

                const otpValue = results[0].Otp;
                const expiredTime = results[0].expiredTime;
                
                const currentTiming = new Date();
                if (currentTiming > expiredTime) {
                    resp.json({message: 'Sorry! Your Otp is Expired, Plase Register it again'});
                }
                else{
                    if(otpValue == otp){
                        resp.json({ success: true, message: 'Otp matched, Registration Sucessfully' });
                    }
                    else{
                        resp.json({message: 'Unable to matched the Otp, Registration Failed'});
                    }
                }
            }
        });
});

app.listen(5000);





