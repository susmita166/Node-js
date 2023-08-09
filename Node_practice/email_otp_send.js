const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: 'nsusmita166@gmail.com',
      pass: 'cyweivjqdhtekdpy'
    }
});
//var transporter = nodemailer.createTransport(smtpConfig);
transporter.verify((error, success) => {
    if (error) {
      console.error('Transporter verification failed:', error);
    } else {
      console.log('Transporter is ready to send emails:', success);
    }
  });

// var transporter_config = nodemailer.createTransport(transporter);

// Generate a random OTP
// const otp = Math.floor(1000 + Math.random() * 9000);

// console.log(otp);

// const mailOptions = {
//     from: 'acrerisefeedback@gmail.com',
//     to: 'susmitanayak305@gmail.com', // Replace with the recipient's email address
//     subject: 'Your OTP Code',
//     text: `Your OTP code is: ${otp}`
// };


// transporter_config.sendMail(mailOptions, (error, info) => {
//     if(error){
//         console.error('Error sending OTP email:', error);
//     }
//     else{
//         console.log('OTP email sent:', info.response);
//     }
// })