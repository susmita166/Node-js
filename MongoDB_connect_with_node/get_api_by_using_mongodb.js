const conection_mongoDB= require("./mongodb_config");

const express = require('express');
const app = express();

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

const createCollection = new conection_mongoDB.model("Employees", createSchema);

//To access this we have to use  http://localhost:5000/getdetails

app.get('/getdetails', async (req, res) => {
    try {
      const documents = await createCollection.find();
      res.json(documents);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching documents' });
    }
  });



app.listen(5000);

