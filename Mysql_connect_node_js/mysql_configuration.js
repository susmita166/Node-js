const mysql= require("mysql");

const con= mysql.createConnection({
  host:"127.0.0.1",
  port:3307,
  user:"root",
  password:"",
  database:"pmaagy"
});
// console.log(connection);

con.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.warn("connect");
    }
});


// con.query("select * from block where district_id = 3", (err, result)=>{
//     console.warn("result",result);
// })

module.exports = con;
