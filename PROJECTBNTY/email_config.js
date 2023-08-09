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

module.exports = transporter;