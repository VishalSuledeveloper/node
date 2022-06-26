let http= require('http');
let port=8000;
let server= http.createServer((req,res)=>{
    res.write('<h1>This is HTTP Server</h1>');
    res.end;
})

server.listen(port);