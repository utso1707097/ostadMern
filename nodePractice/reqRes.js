var http = require('http');

var server = http.createServer(function(req,res){
    if(req.url=='/'){
        res.writeHead(200,{'content-Type':'text/html'});
        res.write('<h1>This is home page</h1>');
        res.end();
    }
    else if(req.url=='/about'){
        res.writeHead(200,{'content-Type':'text/html'});
        res.write('<h1>This is about page</h1>');
        res.end();
    }
    else if(req.url=='/contact'){
        res.writeHead(200,{'content-Type':'text/html'});
        res.write('<h1>This is contact page</h1>');
        res.end();
    }

});
server.listen(5050);
console.log('server runs success');

//http client needed where browser not involved
//http client request to server and get response
//axios is a http client
//http client for testing:postman,fiddler
//http client: axios,fetch