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


const bodyParser = require('body-parser');
app.use(bodyParser.json());

//To access this we have to use  http://localhost:5000/delete/64cddc30c907d4481c234acd

app.delete('/delete/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      // Find the document by its ID and remove it
      const deletedData = await createCollection.findByIdAndRemove(id);
  
      if (!deletedData) {
        return res.status(404).json({ error: 'Data not found' });
      }
  
      res.json(deletedData);
    } catch (error) {
      res.status(500).json({ error: 'Error deleting data' });
    }
  });

app.listen(5000);




