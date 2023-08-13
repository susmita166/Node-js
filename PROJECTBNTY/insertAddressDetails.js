//const sqlConfig = require("./Bntyy_sql_configuration");
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
