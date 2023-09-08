const sqlConfig = require("./Bntyy_sql_configuration");
// const email_config = require("./email_config");
const express = require('express');
const app = express();
const multer = require('multer');

const storage = multer.memoryStorage(); // Store form-data in memory
const upload = multer({ storage: storage });

app.use(express.urlencoded({ extended: true }));

app.post("/registrationByOTP", upload.none(),(req,resp)=>{
    // const data = req.body;
    // console.log(data.email);
    const { email, otp } = req.body;
    let query = `SELECT Otp,expiredTime,currentTime FROM userotp WHERE Email = ?;`;
        sqlConfig.query(query, [email], (error, results) => {
            if (results) 
            {
                const otpValue = results[0].Otp;
                const expiredTime = results[0].expiredTime;
                
                const currentTiming = new Date();
                if (currentTiming > expiredTime) {
                    sqlConfig.query('DELETE FROM userotp WHERE Email = ?', [email], (error, results) => {
                        if(results){
                            resp.json({message: 'Sorry! Your Otp is Expired, Plase Register it again'});
                        }
                    });
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





