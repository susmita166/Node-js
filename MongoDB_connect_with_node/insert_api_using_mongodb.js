const conection_mongoDB= require("./mongodb_config");

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const createSchema = new conection_mongoDB.Schema({
    name:{
        type : String,
        required :true
    },
    Role : String,
    Phone_number : String,
    Location : String,
    date: {
        type : Date,
        default : Date.now
    }
})

// Parse incoming JSON data
app.use(bodyParser.json());

const createCollection = new conection_mongoDB.model("employees", createSchema);

//To access this we have to use  http://localhost:5000/getdetails

app.post('/', async (req, res) => {
    const data = new createCollection({
        name:req.body.name,
        Role:req.body.Role,
        Phone_number:req.body.Phone_number,
        Location:req.body.Location,
    })

    const val = await data.save();
    res.json(val);
});


  


app.listen(5000);

