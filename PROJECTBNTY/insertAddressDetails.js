const sqlConfig = require("./Bntyy_sql_configuration");
const express = require('express');
const app = express();
app.use(express.json());

// app.post('/insertAddress',(req,resp)   =>{
//     const {email} = req.body;
//     console.log(email);
//     const email_id = email;
//     isValidEmail(email_id, isValid =>{
//         if (isValid) {
//             console.log('Email address is valid.');
//         } else {
//             resp.json({message: 'Email address is not valid.Please insert proper email address'});
//         }
//     });
// });


// function isValidEmail(getEmail, callback) 
// {
//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     callback(emailRegex.test(getEmail));
// }




app.post('/insertAddress',(req,resp)   =>{
    const {email} = req.body;
    console.log(email);
    const email_id = email;

    emailValidation(email_id)
    .then(successMessage => {
        resp.json({message: 'Email address is valid',successMessage});
    })
    .catch(error => {
        resp.status(400).json({ error: error.message });
    });
    
});


function emailValidation(getEmail){
    return new Promise((resolve, reject) =>{
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (emailRegex.test(getEmail)) {
            resolve(true);
        } else {
            reject(new Error('Email address is not valid.'));
        }
    });
}





































app.listen(5000);