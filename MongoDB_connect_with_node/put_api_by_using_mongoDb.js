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

//To access this we have to use  http://localhost:5000/update/Software Engineer

app.put('/update/:role', async (req, res) => {
    const { role } = req.params;
    const { Role, Location } = req.body;
  
    try {
        // Update the document by its ID using findOneAndUpdate()
        const updatedData = await createCollection.findOneAndUpdate(
            { Role: role },
            { Role, Location },
            { new: true } // This option returns the updated document
        );
    
        if (!updatedData) {
            return res.status(404).json({ error: 'Data not found' });
        }
        else{
            res.json(updatedData);
        }
    } 
    catch (error) 
    {
        if (error.name === 'CastError') {
            // Handle CastError
            return res.status(400).json({ error: 'Invalid data type provided for one or more fields' });
        }
        res.status(500).json({ error: 'Error updating data' });
    }
});

app.listen(5000);



