const http= require('http');
http.createServer((req,resp)=>{
resp.writeHead(500,{'Content-Type':'application\json'});
// const data=[
//     {name:'Susmita Nayak',mail:'susmitanayak305@gmail.com'},
//     {name:'Ankita Biswal',mail:'ankitabiswal123@gmail.com'},
//     {name:'Ritupurna pradhan',mail:'ritupurnapardhan9090.com'}
// ]

// OR
// If you want to Export the data from other File
const data = require('./data');

resp.write(JSON.stringify(data));
resp.end();
}).listen(5000);