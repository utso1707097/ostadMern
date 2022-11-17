const { Console } = require('console');
var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req,res){
    if(req.url=="/"){
        var data = fs.readFileSync('home.html','utf8');
        res.end(data);
    }
    if(req.url=="/About"){
        var data = fs.readFileSync('about.html','utf8');
        res.end(data);
    }
    if(req.url=="/Services"){
        var data = fs.readFileSync('services.html','utf8');
        res.end(data);
    }
    if(req.url=="/Contact"){
        var data = fs.readFileSync('contact.html','utf8');
        res.end(data);
    }
    if(req.url=="/Terms"){
        var data = fs.readFileSync('terms.html','utf8');
        res.end(data);
    }
});
server.listen(5050);
console.log("Server runs successfully");