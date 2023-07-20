// To create a server in Node js


var http_data = require("http");

const server = http_data.createServer((req,response)=>{
    response.write("Hello I am Susmita  Nayak");
    response.end();
});

const PORT = process.env.PORT || 8000;
const HOST = "localhost";

server.listen(PORT, HOST, () => {
    // console.log("Server Running at http://localhost:8000/")
});