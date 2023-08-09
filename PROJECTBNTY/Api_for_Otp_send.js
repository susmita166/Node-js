// const nodemailer = require('nodemailer');
const sqlConfig = require("./Bntyy_sql_configuration");
const email_config = require("./email_config");
const express = require('express');
const app = express();

function generateOTP(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let otp = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      otp += chars.charAt(randomIndex);
    }
    return otp;
}

app.use(express.json());
app.post("/",(req,resp)=>{
    const data = req.body;
    console.log(data);
    const otp = generateOTP(8); // Generate an OTP with 8 characters
    console.log('Generated OTP:', otp);

    const mailOptions = {
        from: 'nsusmita166@gmail.com',
        to: data.email, // Replace with the recipient's email address
        subject: 'Your OTP Code',
        text: `Your OTP code is: ${otp}`
    };

    email_config.sendMail(mailOptions, (error, res) => {
        if(error){
            console.error('Error sending OTP email:', error);
        }
        else{
            let query = `INSERT INTO userotp (Email, Otp) VALUES (?, ?);`;
            let Otp = otp;
            let Email = data.email;
            sqlConfig.query(query, [Email, Otp], (error, results) => {
                if (error)  error;
                else {
                    console.log('Data inserted:', results);
                    resp.json({ success: true, message: 'Data added successfully and otp has been send to your email id, please check' });
                }
            });
        }
    })

});

app.listen(5000);




