const mysql= require("mysql");

const con= mysql.createConnection({
  host:"127.0.0.1",
  port:3307,
  user:"root",
  password:"",
  database:"bntyy"
});

con.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.warn("sql connection is ready");
    }
});

module.exports = con;
