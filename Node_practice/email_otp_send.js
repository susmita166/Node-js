const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'nsusmita166@gmail.com',
      pass: 'cyweivjqdhtekdpy'
    }
});

//This line is for verify tranpoter configuration is success or not
transporter.verify((error, success) => {
    if (error) {
      console.error('Transporter verification failed:', error);
    } else {
      console.log('Transporter is ready to send emails:', success);
    }
});


const otp = Math.floor(1000 + Math.random() * 9000);

console.log(otp);

const mailOptions = {
    from: 'nsusmita166@gmail.com',
    to: 'susmitanayak305@gmail.com', // Replace with the recipient's email address
    subject: 'Your OTP Code',
    text: `Your OTP code is: ${otp}`
};


transporter.sendMail(mailOptions, (error, info) => {
    if(error){
        console.error('Error sending OTP email:', error);
    }
    else{
        console.log('Otp send Successfully');
    }
})