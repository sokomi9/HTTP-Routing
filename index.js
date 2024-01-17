const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res)=>{
   
   if(req.url === "/about"){
    res.writeHead(200, {"Content-type": "text/plain"});
    res.end("/About page");
   } else if(req.url === "/api"){
        res.writeHead(200, {"Content-type": "application/json"});
        res.end(JSON.stringify({
            firstName: "Abiud",
            secondName: "Shiundu"
        })); 
    } else if(req.url === "/home page"){
        res.writeHead(200, {"Content-type": "text/plain"});
        res.end("./Home page");
} else if(req.url === 404){
    res.writeHead(200, {"Content-type": "text/plain"});
    res.end("Page not found");
}
   });

server.listen(3000,()=>{
    console.log("Server running on port 3000");
})