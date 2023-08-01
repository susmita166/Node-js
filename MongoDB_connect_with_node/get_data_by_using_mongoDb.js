const client = require("./mongodb_config");
const con = require("./mongodb_config");

// Database Name
const dbName = 'Employee'; 

async function getData(){
    let result = await client.connect();
    let db = result.db(dbName);
    let collection = db.collection('Employeess');
    let response = await collection.find({}).toArray();
    console.log(response);
}

getData();



