const sqlConfig = require("./Bntyy_sql_configuration");
const email_config = require("./email_config");
const express = require('express');
const app = express();
app.use(express.json());

function generateOTP(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let otp = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      otp += chars.charAt(randomIndex);
    }
    return otp;
}

app.post("/",(req,resp)=>{
        const data = req.body;
        const otp = generateOTP(8); // Generate an OTP with 8 characters

        const mailOptions = {
            from: 'nsusmita166@gmail.com',
            to: data.email, // Replace with the recipient's email address
            subject: 'Your OTP Code',
            text: `Your OTP code is: ${otp}`
        };
        const getEmail = data.email;
        isExist(getEmail, function(count) {
            if(count > 0){
                resp.json({message: 'Email is already exist' });
            }
            else{
                email_config.sendMail(mailOptions, (error, res) => {
                    if(error){
                        console.error('Error sending OTP email:', error);
                    }
                    else
                    {
                        let query = `INSERT INTO userotp (Email, Otp, currentTime, expiredTime) VALUES (?, ?, ?, ?);`;
                        let Otp = otp;
                        let Email = data.email;
                        const currentDate = new Date();
                        console.log(currentDate);
                        const newDateTime = new Date(currentDate.getTime() + 15 * 60 * 1000); // Adding 15 minutes in milliseconds
                        sqlConfig.query(query, [Email, Otp, currentDate, newDateTime], (error, results) => {
                            if (error)  resp.json({ success: true, message: 'Failed to send Otp to this Email' });
                            else {
                                console.log('Data inserted:', results);
                                resp.json({ success: true, message: 'Data added successfully and otp has been send to your email id, please check' });
                            }
                        });
                    }
                })
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




