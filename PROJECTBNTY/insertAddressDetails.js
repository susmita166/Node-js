const sqlConfig = require("./Bntyy_sql_configuration");
const express = require('express');
const app = express();
app.use(express.json());

//here we import the validateConditions function and use this here
const validation = require('./validation');



app.post('/insertAddress', async (req, resp) => {
    const { email, adharNumber } = req.body;
    const requestData = req.body;

    try {
        //here we import the validator function and use this here
        await validation(requestData);
    } catch (error) {
        const dataShow = {};
        error.forEach((err) => {
            dataShow[err.type] = err.message;
        });
    
        resp.status(400).json({ error: dataShow });
      }
});

app.listen(5000);







//This is the example of promise
// app.post('/insertAddress',(req,resp)   =>{
//     const {email} = req.body;
//     console.log(email);
//     const email_id = email;

//     emailValidation(email_id)
//     .then(successMessage => {
//         resp.json({message: 'Email address is valid',successMessage});
//     })
//     .catch(error => {
//         resp.status(400).json({ error: error.message });
//     });
    
// });


// function emailValidation(getEmail){
//     return new Promise((resolve, reject) =>{
//         const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//         if (emailRegex.test(getEmail)) {
//             resolve(true);
//         } else {
//             reject(new Error('Email address is not valid.'));
//         }
//     });
// }
