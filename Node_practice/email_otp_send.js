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

//Otp generated 
function generateOTP(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let otp = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    otp += chars.charAt(randomIndex);
  }

  return otp;
}

const otp = generateOTP(8); // Generate an OTP with 8 characters
console.log('Generated OTP:', otp);

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