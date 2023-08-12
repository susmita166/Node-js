const sqlConfig = require("./Bntyy_sql_configuration");
const express = require('express');
const app = express();
app.use(express.json());

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



app.post('/insertAddress',async (req,resp)   =>{
    //const {email, adharNumber} = req.body;
    const requestData = req.body;
    //console.log(email);
   // const email_id = email;


    try{
        // await emailValidation(email);
        // await adharValidation(adharNumber);
        await validateConditions(requestData);
    }
    catch (error){
        resp.status(400).json({ error: error.message });
    }
    
    
});

async function validateConditions(data) {
    try {
        await emailValidation(data.email);
    } catch (error) {
        validationErrors.push(error.message);
    }

    try {
        await adharValidation(data.adharNumber);
    } catch (error) {
        validationErrors.push(error.message);
    }
}




// async function emailValidation(getEmail) {
//     return new Promise((resolve, reject) =>{
//         const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//         if (emailRegex.test(getEmail)) {
//             resolve(true);
//         } else {
//             reject(new Error('Email address is not valid.'));
//         }
//     });
// }


// async function adharValidation(adharNumber) {
//     return new Promise((resolve, reject) =>{
//         const adharRegex = /^\d{12}$/;
//         if (adharRegex.test(adharNumber)) {
//             resolve(true);
//         } else {
//             reject(new Error('Invalid Aadhar number.'));
//         }
//     });
// }







































app.listen(5000);